export interface ChatCompletionMessage {
    role: "user" | "system" | "assistant"; // like in your messages array
    content: string;
  }
  