import { ollama } from "ollama-ai-provider";
import { streamText, convertToCoreMessages } from "ai";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = await streamText({
      model: ollama("llama3.2"),
      messages: convertToCoreMessages(messages),
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.log(error);
  }
}
