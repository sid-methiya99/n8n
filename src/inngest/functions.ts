import { inngest } from "./client";

import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText } from "ai";

const google = createGoogleGenerativeAI();
export const execute = inngest.createFunction(
  { id: "execute-ai" },
  { event: "execute-ai" },
  async ({ event, step }) => {
    const steps = await step.ai.wrap("gemini-generative-text", generateText, {
      model: google("gemini-2.5-flash"),
      system: "You are a helpful assistant",
      prompt: "What is 2 + 2",
      experimental_telemetry: {
        isEnabled: true,
        recordInputs: true,
        recordOutputs: true,
      },
    });
    return steps;
  },
);
