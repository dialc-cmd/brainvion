/**
 * =============================================================================
 * BrainVion - PROPRIETARY SOURCE CODE
 * © 2026 Brainvion. All Rights Reserved.
 * LEAD ARCHITECT: Dial Chowdhury Emon (@dialc.official)
 * =============================================================================
 */

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Bot, User, Send, Loader2, Sparkles, BookOpen, Clock, Target } from 'lucide-react';
import Link from 'next/link';

interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
}

// Smart response engine — persona: friendly mentor, zero costs, no API key needed
const STUDY_BUDDY_BRAIN: Record<string, string> = {
    "schedule": "📅 Great question! Here's a sample study schedule:\n\n• **Morning (6-8AM):** Deep work — coding, difficult concepts\n• **Afternoon (2-4PM):** Review & practice problems\n• **Evening (7-9PM):** Light reading, IELTS vocab\n\nWant me to customize this for your subjects?",
    "ielts": "🏆 For IELTS Band 8.0+, focus on:\n\n1. **Reading:** Skim, then deep-read. Time yourself.\n2. **Writing Task 2:** Use 4-paragraph structure: Intro → Point A → Point B → Conclusion\n3. **Speaking:** Record yourself and listen back daily!\n\nWhich section do you want to drill?",
    "python": "🐍 Python starter roadmap for BrainVION students:\n\n1. Variables, Lists, Dicts (Week 1)\n2. Functions & OOP (Week 2)\n3. File I/O + APIs (Week 3)\n4. Data structures (Week 4)\n\nHit me with a concept and I'll explain it!",
    "tired": "😌 Totally normal! Here's a quick reset plan:\n\n• Take a **10-minute walk** — no phone\n• Try the **Pomodoro method**: 25 min study → 5 min break\n• Drink some water 💧\n\nYou've got this! What topic are we tackling next?",
    "motivation": "🔥 Remember why you started! Every expert was once a beginner. At BrainVION, you're surrounded by peers who are climbing the same mountain.\n\nSet one tiny goal right now — even just opening your notes. Progress compounds!",
    "javascript": "⚡ JavaScript essentials to master:\n\n1. Closures & Scope\n2. async/await & Promises\n3. Array methods: `.map()`, `.filter()`, `.reduce()`\n4. DOM manipulation\n\nI can quiz you on any of these — just say which one!",
    "career": "💼 Tech career path for students:\n\n• Build **2-3 real projects** for your GitHub\n• Contribute to **open source** (great for Bangladeshi devs!)\n• Prepare for **remote interviews** (communication matters!)\n• Get your BrainVION **Micro-Credential badge** for verifiable skills\n\nWhat industry are you targeting?",
    "exam": "📝 Exam survival kit:\n\n1. **Spaced repetition** — review notes at 1, 3, 7 day intervals\n2. **Teach it** — explain concepts out loud\n3. **Practice papers** — under time pressure\n4. Sleep 8hrs the night before — seriously!\n\nTell me the subject and I'll generate practice questions!",
};

const FALLBACK = "I'm your dedicated BrainVION StudyBuddy! 🎓\n\nYou can ask me about:\n• **Study schedules** & productivity tips\n• **IELTS** band preparation\n• **Python, JavaScript** coding help\n• **Career** guidance for tech students\n• **Motivation** when you're feeling stuck\n\nWhat's on your mind?";

function getReply(msg: string): string {
    const lower = msg.toLowerCase();
    for (const [key, response] of Object.entries(STUDY_BUDDY_BRAIN)) {
        if (lower.includes(key)) return response;
    }
    return FALLBACK;
}

export default function StudyBuddy() {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 'init',
            role: 'assistant',
            content: "Hey there! 👋 I'm **Buddy**, your personal BrainVION study companion. I'm here to help with schedules, coding questions, IELTS prep, and keeping you motivated!\n\nWhat would you like to work on today?"
        }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMsg: Message = { id: Date.now().toString(), role: 'user', content: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsLoading(true);

        // Simulate a brief "thinking" delay for realism
        setTimeout(() => {
            const reply = getReply(userMsg.content);
            setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: 'assistant', content: reply }]);
            setIsLoading(false);
        }, 800);
    };

    const quickPrompts = ["Give me a study schedule", "IELTS tips", "I'm tired and unmotivated", "Python roadmap"];

    return (
        <div className="flex flex-col h-screen bg-neutral-950 font-sans text-neutral-200">
            {/* Header */}
            <header className="flex-none p-4 md:p-6 border-b border-neutral-800 bg-neutral-900/60 backdrop-blur-md flex items-center justify-between sticky top-0 z-10">
                <div className="flex items-center space-x-4">
                    <Link href="/dashboard" className="p-2 hover:bg-neutral-800 rounded-full transition-colors text-neutral-400">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div className="flex items-center space-x-3">
                        <div className="relative">
                            <div className="absolute -inset-1 bg-sky-500 rounded-full blur opacity-30 animate-pulse" />
                            <div className="relative bg-sky-500/20 p-2 rounded-full border border-sky-500/50">
                                <Bot className="w-5 h-5 text-sky-400" />
                            </div>
                        </div>
                        <div>
                            <h1 className="font-heading font-bold text-lg text-white">StudyBuddy</h1>
                            <p className="text-xs text-emerald-400 font-mono flex items-center">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2 animate-pulse" /> Online
                            </p>
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex items-center space-x-2 px-3 py-1.5 bg-sky-500/10 border border-sky-500/20 rounded-full text-sky-300 text-xs font-semibold">
                    <Sparkles className="w-3 h-3 mr-1" /> Your Study Companion
                </div>
            </header>

            {/* Stats Bar */}
            <div className="flex-none px-4 py-3 md:px-6 border-b border-neutral-900 bg-neutral-950 flex items-center gap-4 overflow-x-auto scrollbar-hide">
                {[
                    { icon: BookOpen, label: "Topics", value: "12 Available", color: "text-cyan-400" },
                    { icon: Clock, label: "Response", value: "< 1 sec", color: "text-emerald-400" },
                    { icon: Target, label: "Focus Mode", value: "Study Only", color: "text-purple-400" },
                ].map(stat => (
                    <div key={stat.label} className="flex items-center gap-2 shrink-0 px-4 py-2 bg-neutral-900 rounded-xl border border-neutral-800">
                        <stat.icon className={`w-4 h-4 ${stat.color}`} />
                        <span className="text-xs text-neutral-400">{stat.label}:</span>
                        <span className="text-xs font-bold text-white">{stat.value}</span>
                    </div>
                ))}
            </div>

            {/* Chat */}
            <main className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
                <div className="max-w-3xl mx-auto space-y-4">
                    {messages.map((m) => (
                        <motion.div
                            key={m.id}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div className={`flex max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'} gap-3`}>
                                <div className="flex-shrink-0 mt-1">
                                    {m.role === 'user' ? (
                                        <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
                                            <User className="w-4 h-4 text-white" />
                                        </div>
                                    ) : (
                                        <div className="w-8 h-8 rounded-full bg-sky-600/20 border border-sky-500/50 flex items-center justify-center">
                                            <Bot className="w-4 h-4 text-sky-400" />
                                        </div>
                                    )}
                                </div>
                                <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${m.role === 'user' ? 'bg-purple-600 text-white rounded-tr-sm' : 'bg-neutral-900 border border-neutral-800 text-neutral-200 rounded-tl-sm'}`}>
                                    {m.content}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    {isLoading && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                            <div className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-sky-600/20 border border-sky-500/50 flex items-center justify-center">
                                    <Loader2 className="w-4 h-4 text-sky-400 animate-spin" />
                                </div>
                                <div className="px-5 py-3 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center gap-1">
                                    {[0, 150, 300].map(d => (
                                        <div key={d} className="w-2 h-2 rounded-full bg-neutral-600 animate-bounce" style={{ animationDelay: `${d}ms` }} />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </main>

            {/* Quick Prompts */}
            <div className="flex-none px-4 pb-2 overflow-x-auto scrollbar-hide">
                <div className="max-w-3xl mx-auto flex gap-2 flex-nowrap">
                    {quickPrompts.map(p => (
                        <button key={p} onClick={() => setInput(p)} className="flex-none px-3 py-1.5 bg-neutral-900 border border-neutral-800 hover:border-sky-500/50 rounded-full text-xs text-neutral-400 hover:text-sky-300 transition-all whitespace-nowrap">
                            {p}
                        </button>
                    ))}
                </div>
            </div>

            {/* Input */}
            <footer className="flex-none p-4 md:p-5">
                <div className="max-w-3xl mx-auto">
                    <form onSubmit={handleSubmit} className="relative flex items-center p-1 bg-neutral-900 border border-neutral-700 rounded-full focus-within:border-sky-500 focus-within:ring-1 focus-within:ring-sky-500 transition-all">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask Buddy anything about studying..."
                            className="w-full bg-transparent px-5 py-3 text-neutral-200 placeholder-neutral-500 focus:outline-none text-sm"
                            disabled={isLoading}
                        />
                        <button type="submit" disabled={isLoading || !input.trim()} className="absolute right-2 p-2.5 bg-sky-600 hover:bg-sky-500 disabled:bg-neutral-800 disabled:text-neutral-500 text-white rounded-full transition-colors">
                            <Send className="w-4 h-4 ml-0.5" />
                        </button>
                    </form>
                </div>
            </footer>
        </div>
    );
}
