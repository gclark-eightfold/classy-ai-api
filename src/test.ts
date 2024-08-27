import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

import { tools } from "../dist/tools";

const MAX_TOOLS = 128;

const trimmedTools = Object.fromEntries(
  Object.entries(tools).slice(0, MAX_TOOLS),
);

async function main() {
  const result = await generateText({
    model: openai("gpt-4o-2024-08-06"),
    tools: trimmedTools,
    toolChoice: "required",
    prompt: "I want to retrieve the last 48hrs of donations to campaign 227362",
    maxToolRoundtrips: 0, // increase this if hitting the apis
  });

  console.log(result.toolResults);
}

main().catch(console.error);
