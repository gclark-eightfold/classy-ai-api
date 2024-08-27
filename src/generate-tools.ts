/* eslint-disable @typescript-eslint/no-explicit-any */
// import { type JSONSchema, dereferenceSync } from "@trojs/openapi-dereference";

import fs from "fs";
import path from "path";
import apiSpec from "./apiv2-public.json";

interface OpenAPISpec {
  paths: Record<string, Record<string, any>>;
}

const server = apiSpec.servers[0]?.url ?? "";

function replaceRefsAndClean(spec: any, fullSpec: any): any {
  if (typeof spec !== "object" || spec === null) return spec;

  if (spec.$ref) {
    const refPath = spec.$ref.replace(/^#\//, "").split("/");
    let resolved = fullSpec;
    for (const part of refPath) {
      resolved = resolved[part];
      if (!resolved) break;
    }
    return resolved ? replaceRefsAndClean(resolved, fullSpec) : null;
  }

  if (Array.isArray(spec)) {
    return spec.map((item) => replaceRefsAndClean(item, fullSpec));
  }

  const newSpec: any = {};
  for (const key in spec) {
    // Skip "example" properties
    if (key === "example") continue;
    if (key === "nullable") {
      if (spec[key] === true) {
        // Handle "nullable: true" by modifying the type field to include "null"
        if (newSpec["type"]) {
          if (Array.isArray(newSpec["type"])) {
            newSpec["type"].push("null");
          } else {
            newSpec["type"] = ["null", newSpec["type"]];
          }
        }
      }
      // Skip "nullable: false" since it's irrelevant in JSONSchema7
      continue;
    }
    newSpec[key] = replaceRefsAndClean(spec[key], fullSpec);
  }

  return newSpec;
}

function openapiToTools(openapiSpec: OpenAPISpec): string {
  const tools: string[] = [];

  for (const path in openapiSpec.paths) {
    const methods = openapiSpec.paths[path];

    for (const method in methods) {
      const specWithRef = methods[method];

      // 1. Resolve JSON references
      const spec = replaceRefsAndClean(specWithRef, openapiSpec);

      // 2. Extract a name for the function
      const functionName = spec.operationId;

      // 3. Extract a description and parameters
      let desc = spec.description || spec.summary || "";

      // Handle multi-line descriptions, escaping quotes, backticks, and single quotes
      desc = desc
        .replace(/\\/g, "\\\\") // escape backslashes
        .replace(/`/g, "\\`") // escape backticks
        .replace(/'/g, "\\'") // escape single quotes
        .replace(/"/g, '\\"') // escape double quotes
        .replace(/\n/g, "\\n"); // convert newlines to \n

      const schemaProps: { [key: string]: any } = {};
      const reqBody = spec.requestBody?.content?.["application/json"]?.schema;
      if (reqBody) {
        schemaProps["requestBody"] = reqBody;
      }

      const params = spec.parameters || [];
      if (params.length > 0) {
        params.forEach((param: any) => {
          if (param.schema) {
            schemaProps[param.name] = param.schema;
          }
        });
      }

      // const schemaType =
      //   Object.keys(schemaProps).length > 0
      //     ? JSON.stringify(schemaProps)
      //     : "Record<string, never>";

      // Generate fetch API call inside the execute function
      const urlParams = params
        .filter((param: any) => param.in === "query")
        .map(
          (param: any) =>
            `${param.name}=\${encodeURIComponent(args.${param.name})}`,
        )
        .join("&");

      const pathParams = path.replace(
        /{(\w+)}/g,
        (_, paramName) => `\${args.${paramName}}`,
      );

      const fetchBody = reqBody
        ? `body: JSON.stringify(args.requestBody),`
        : "";

      const toolDefinition = `
        ${functionName}: tool({
          description: "${desc}",
          parameters: jsonSchema<any>({ type: "object", properties: ${JSON.stringify(schemaProps)}}),
          execute: async (args) => {
            const url = \`${server}${pathParams}${urlParams ? `?${urlParams}` : ""}\`;
            const response = await fetch(url, {
                method: '${method.toUpperCase()}',
                headers: {
                    'Content-Type': 'application/json',
                    // Add other headers as necessary (e.g., Authorization)
                },
                ${fetchBody}
            });
            return response.json();
          }
        })`;

      // const debugToolDefinition = `
      //   ${functionName}: tool({
      //     description: "${desc}",
      //     parameters: jsonSchema<any>({ type: "object", properties: ${JSON.stringify(schemaProps)}}),
      //     execute: async (args) => {
      //       const url = \`${server}${pathParams}${urlParams ? `?${urlParams}` : ""}\`;
      //       return {
      //         url,
      //         method: '${method.toUpperCase()}',
      //         headers: {
      //           'Content-Type': 'application/json',
      //           // Add other headers as necessary (e.g., Authorization)
      //         },
      //         ${fetchBody}
      //       };
      //     }
      //   })`;
      tools.push(toolDefinition);
    }
  }

  return [
    `import { jsonSchema, tool } from "ai";`,
    `export const tools = { ${tools.join(",")} }`,
  ].join("\n\n");
}

const tools = openapiToTools(apiSpec);
fs.writeFileSync(
  path.join(import.meta.dirname, "../generated/tools.ts"),
  tools,
);
