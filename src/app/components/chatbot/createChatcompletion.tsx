"use server";

import { ChatCompletionMessage } from './chatInterface';

export default async function createChatCompletion(messages: ChatCompletionMessage[]) {
  const latestUserMessage = messages[messages.length - 1];

  const BASE_URL = process.env.API_URL || 'http://localhost:3001'; 

  const response = await fetch(`${BASE_URL}/openai`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt: latestUserMessage.content,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch response from Gemini backend');
  }

  const data = await response.json();

  return {
    choices: [
      {
        message: {
          role: 'assistant',
          content: data.result,
        },
      },
    ],
  };
}
