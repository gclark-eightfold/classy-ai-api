import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

import { tools } from "../generated/tools";

async function main() {
  const result = await generateText({
    model: openai("gpt-4o-2024-08-06"),
    tools,
    toolChoice: "required",
    prompt: "I want to retrieve the last 48hrs of donations to campaign 227362",
    maxToolRoundtrips: 0, // increase this if hitting the apis
  });

  console.log(result.toolResults);
}

main().catch(console.error);
