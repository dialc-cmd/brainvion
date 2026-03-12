/**
 * =============================================================================
 * BrainVion - PROPRIETARY SOURCE CODE
 * -----------------------------------------------------------------------------
 * © 2026 Brainvion. All Rights Reserved.
 *
 * LEAD ARCHITECT: Dial Chowdhury Emon (@dialc.official)
 * STANDARD: International Students and Young Professional Engineering 
 * NOTICE: This software and its associated logic are the sole intellectual 
 * property of Brainvion. Unauthorized copying, modification, or 
 * distribution is strictly prohibited.
 *
 * =============================================================================
 */

import { NextResponse } from 'next/server';

// REQUIRED FEATURE: [Agentic Tutoring Layer]
// This API route simulates a LangGraph / AI backend processing a user's study query.
// In a full production implementation, this connects to `@langchain/langgraph` to maintain 
// a stateful graph of the student's learning progress.

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        // Extract the latest user message
        const lastMessage = messages[messages.length - 1]?.content || "";

        // Simulated Agentic Reasoning (Mock response for demonstration without OpenAI keys)
        let simulatedResponse = "";

        if (lastMessage.toLowerCase().includes("react") || lastMessage.toLowerCase().includes("next.js")) {
            simulatedResponse = "I see you're focusing on frontend architecture. Next.js 15 leverages React Server Components (RSCs) to drastically reduce client-side bundle size. Would you like me to generate 3 practice questions on Server vs Client components?";
        } else if (lastMessage.toLowerCase().includes("summarize")) {
            simulatedResponse = "Certainly! Here is the summary of the 'Best Laptop for Students' curriculum: \n\n1. Prioritize minimum 16GB RAM for local Docker/AI tasks.\n2. CPU core count matters more for compilation than raw clock speed.\n3. Ensure USB-C power delivery for mobility around the Shukrabad Student House.\n\nShould we move on to the Python beginner roadmap?";
        } else {
            simulatedResponse = "Welcome to your personal BrainVION Study Agent. I hold the complete knowledge base of our Learning Hub. Ask me to explain a concept, summarize a guide, or test your knowledge!";
        }

        // Return a mock streamable chunk format (as expected by ai/react useChat)
        return NextResponse.json({
            id: `msg-${Date.now()}`,
            role: "assistant",
            content: simulatedResponse,
            createdAt: new Date().toISOString()
        });

    } catch (e) {
        return NextResponse.json({ error: "Agent routing failure" }, { status: 500 });
    }
}
