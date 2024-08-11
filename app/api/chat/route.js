import { NextResponse } from 'next/server'; // Import NextResponse from Next.js for handling responses
import OpenAI from 'openai'; // Import OpenAI library for interacting with the OpenAI API
import { db } from '../../firebase'; // Import Firestore database
import { collection, addDoc } from 'firebase/firestore'; // Import Firestore functions

// System prompt for the AI, providing guidelines on how to respond to users
const systemPrompt = "Customer Support Assistant";

// POST function to handle incoming requests
export async function POST(req) {
  const openai = new OpenAI(); // Create a new instance of the OpenAI client
  const data = await req.json(); // Parse the JSON body of the incoming request

  // Create a chat completion request to the OpenAI API
  const completion = await openai.chat.completions.create({
    messages: [{ role: 'system', content: systemPrompt }, ...data], // Include the system prompt and user messages
    model: 'gpt-4o', // Specify the model to use
    stream: true, // Enable streaming responses
  });

  // Create a ReadableStream to handle the streaming response
  const stream = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder(); // Create a TextEncoder to convert strings to Uint8Array
      let assistantResponseContent = ''; // Initialize content to hold assistant's response
      try {
        // Iterate over the streamed chunks of the response
        for await (const chunk of completion) {
          const content = chunk.choices[0]?.delta?.content; // Extract the content from the chunk
          if (content) {
            const text = encoder.encode(content); // Encode the content to Uint8Array
            controller.enqueue(text); // Enqueue the encoded text to the stream
            assistantResponseContent += content; // Collect the content for Firestore
          }
        }
      } catch (err) {
        controller.error(err); // Handle any errors that occur during streaming
      } finally {
        controller.close(); // Close the stream when done

        // Save the assistant's response to Firestore
        await addDoc(collection(db, 'messages'), {
          role: 'assistant',
          content: assistantResponseContent, // Store the actual response content
          createdAt: new Date(),
        });
      }
    },
  });

  return new NextResponse(stream); // Return the stream as the response
}
