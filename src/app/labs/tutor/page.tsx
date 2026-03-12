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

'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, ArrowLeft, Loader2, Sparkles } from 'lucide-react';
import Link from 'next/link';

// FEATURE: Agentic Tutoring Layer (Learning Hub Upgrade)
// Converts static blog posts into a persistent conversational tutor.

interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
}

export default function AgenticTutor() {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 'init',
            role: 'assistant',
            content: "Hello! I am your BrainVION Agentic Study Partner. I've indexed the entire Learning Hub curriculum. What topic are we tackling today?"
        }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMsg: Message = { id: Date.now().toString(), role: 'user', content: input };
        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setIsLoading(true);

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: [...messages, userMsg] })
            });
            const data = await res.json();

            if (data.content) {
                setMessages(prev => [...prev, {
                    id: data.id,
                    role: 'assistant',
                    content: data.content
                }]);
            }
        } catch (error) {
            console.error("Agent disconnected");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-screen bg-neutral-950 font-sans text-neutral-200">
            {/* Header */}
            <header className="flex-none p-4 md:p-6 border-b border-neutral-800 bg-neutral-900/50 backdrop-blur-md flex items-center justify-between sticky top-0 z-10">
                <div className="flex items-center space-x-4">
                    <Link href="/dashboard" className="p-2 hover:bg-neutral-800 rounded-full transition-colors text-neutral-400 hover:text-white">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div className="flex items-center space-x-3">
                        <div className="relative">
                            <div className="absolute -inset-1 bg-purple-500 rounded-full blur opacity-30 animate-pulse" />
                            <div className="relative bg-neutral-900 p-2 rounded-full border border-purple-500/50">
                                <Bot className="w-5 h-5 text-purple-400" />
                            </div>
                        </div>
                        <div>
                            <h1 className="font-heading font-bold text-lg text-white leading-tight">LangGraph Study Agent</h1>
                            <p className="text-xs text-emerald-400 font-mono flex items-center">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2 animate-pulse" />
                                Synchronized
                            </p>
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex items-center space-x-2 px-3 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-xs font-semibold tracking-wide">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Dialogue-Driven Curriculum
                </div>
            </header>

            {/* Chat Area */}
            <main className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6 scroll-smooth">
                <div className="max-w-3xl mx-auto space-y-6">
                    <AnimatePresence initial={false}>
                        {messages.map((m) => (
                            <motion.div
                                key={m.id}
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div className={`flex max-w-[85%] md:max-w-[75%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                                    <div className={`flex-shrink-0 mt-1 ${m.role === 'user' ? 'ml-3' : 'mr-3'}`}>
                                        {m.role === 'user' ? (
                                            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                                                <User className="w-4 h-4 text-white" />
                                            </div>
                                        ) : (
                                            <div className="w-8 h-8 rounded-full bg-purple-600/20 border border-purple-500/50 flex items-center justify-center">
                                                <Bot className="w-4 h-4 text-purple-400" />
                                            </div>
                                        )}
                                    </div>
                                    <div
                                        className={`px-5 py-3.5 rounded-2xl text-sm md:text-base leading-relaxed whitespace-pre-wrap shadow-sm
                                            ${m.role === 'user'
                                                ? 'bg-blue-600 text-white rounded-tr-sm'
                                                : 'bg-neutral-900 border border-neutral-800 text-neutral-200 rounded-tl-sm'
                                            }`}
                                    >
                                        {m.content}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {isLoading && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex justify-start"
                        >
                            <div className="flex flex-row max-w-[85%]">
                                <div className="flex-shrink-0 mt-1 mr-3">
                                    <div className="w-8 h-8 rounded-full bg-purple-600/20 border border-purple-500/50 flex items-center justify-center">
                                        <Loader2 className="w-4 h-4 text-purple-400 animate-spin" />
                                    </div>
                                </div>
                                <div className="px-5 py-3.5 rounded-2xl bg-neutral-900 border border-neutral-800 rounded-tl-sm flex items-center space-x-2">
                                    <div className="w-2 h-2 rounded-full bg-neutral-600 animate-bounce" style={{ animationDelay: '0ms' }} />
                                    <div className="w-2 h-2 rounded-full bg-neutral-600 animate-bounce" style={{ animationDelay: '150ms' }} />
                                    <div className="w-2 h-2 rounded-full bg-neutral-600 animate-bounce" style={{ animationDelay: '300ms' }} />
                                </div>
                            </div>
                        </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
            </main>

            {/* Input Area */}
            <footer className="flex-none p-4 md:p-6 bg-transparent">
                <div className="max-w-3xl mx-auto">
                    <form
                        onSubmit={handleSubmit}
                        className="relative flex items-center p-1 bg-neutral-900 border border-neutral-700 rounded-full focus-within:border-purple-500 focus-within:ring-1 focus-within:ring-purple-500 transition-all shadow-lg"
                    >
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask the Agent to summarize a guide..."
                            className="w-full bg-transparent px-5 py-3 text-neutral-200 placeholder-neutral-500 focus:outline-none text-sm md:text-base"
                            disabled={isLoading}
                        />
                        <button
                            type="submit"
                            disabled={isLoading || !input.trim()}
                            className="absolute right-2 p-2.5 bg-purple-600 hover:bg-purple-500 disabled:bg-neutral-800 disabled:text-neutral-500 text-white rounded-full transition-colors flex-shrink-0 disabled:cursor-not-allowed"
                        >
                            <Send className="w-4 h-4 ml-0.5" />
                        </button>
                    </form>
                    <p className="text-center text-xs text-neutral-600 mt-3 font-mono">
                        Powered by LangGraph & Vercel AI SDK. Agent responses may not be exact.
                    </p>
                </div>
            </footer>
        </div>
    );
}
