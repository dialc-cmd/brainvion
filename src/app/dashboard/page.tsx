/**
 * =============================================================================
 * BrainVion - PROPRIETARY SOURCE CODE
 * © 2026 Brainvion. All Rights Reserved.
 * LEAD ARCHITECT: Dial Chowdhury Emon (@dialc.official)
 * =============================================================================
 */

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, BrainCircuit, Globe2, Bot, Code2, TrendingUp, UserCircle } from 'lucide-react';
import React, { useState } from 'react';

export default function SpatialDashboard() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        setMousePosition({
            x: (e.clientX - centerX) / 35,
            y: (centerY - e.clientY) / 35,
        });
    };

    const tools = [
        { href: '/labs/studybuddy', icon: Bot, label: 'StudyBuddy', desc: 'Your personal AI mentor for study schedules, IELTS prep, and motivation.', color: 'text-sky-400', border: 'border-sky-500/20 hover:border-sky-500/50', glow: 'from-sky-500/10', zOffset: 40 },
        { href: '/labs/analytics', icon: TrendingUp, label: 'Predictive Analytics', desc: 'Skill projection, IELTS trajectory, and tech job market insights.', color: 'text-amber-400', border: 'border-amber-500/20 hover:border-amber-500/50', glow: 'from-amber-500/10', zOffset: 30 },
        { href: '/labs/ide', icon: Code2, label: 'Web IDE', desc: 'Write, run, and test JavaScript snippets directly in your browser.', color: 'text-emerald-400', border: 'border-emerald-500/20 hover:border-emerald-500/50', glow: 'from-emerald-500/10', zOffset: 30 },
        { href: '/labs/tutor', icon: BrainCircuit, label: 'Agentic Tutor', desc: 'A persistent AI tutor that adapts its teaching to your curriculum.', color: 'text-purple-400', border: 'border-purple-500/20 hover:border-purple-500/50', glow: 'from-purple-500/10', zOffset: 50 },
        { href: '/house', icon: Globe2, label: 'Physical Base', desc: 'Shukrabad Student House — your local hub in Dhanmondi, Dhaka.', color: 'text-cyan-400', border: 'border-cyan-500/20 hover:border-cyan-500/50', glow: 'from-cyan-500/10', zOffset: 20 },
        { href: '/dashboard/profile', icon: UserCircle, label: 'Identity Hub', desc: 'Manage your profile, publish posts, and grow your community reputation.', color: 'text-rose-400', border: 'border-rose-500/20 hover:border-rose-500/50', glow: 'from-rose-500/10', zOffset: 25 },
    ];

    return (
        <div
            className="min-h-screen bg-[#050505] text-neutral-100 font-sans overflow-x-hidden"
            onMouseMove={handleMouseMove}
        >
            {/* Background Grid */}
            <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

            {/* Top Nav */}
            <div className="relative z-50 w-full flex justify-between items-center p-6 lg:p-10">
                <Link href="/" className="group flex items-center space-x-2 text-neutral-400 hover:text-white transition-colors">
                    <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                    <span className="font-medium tracking-wide text-sm">Exit Lab</span>
                </Link>
                <div className="flex items-center gap-4">
                    <div className="flex items-center space-x-3 bg-neutral-900/60 backdrop-blur-xl border border-neutral-800 px-4 py-2 rounded-full">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10B981]" />
                        <span className="text-xs uppercase tracking-[0.2em] text-neutral-300 font-bold">All Systems Active</span>
                    </div>
                    <Link href="/dashboard/profile" className="p-2 bg-neutral-900/60 backdrop-blur-xl border border-neutral-800 rounded-full hover:border-neutral-600 transition-colors">
                        <UserCircle className="w-5 h-5 text-neutral-300" />
                    </Link>
                </div>
            </div>

            {/* Central Cockpit */}
            <div className="relative z-10 flex flex-col items-center px-6 pb-16" style={{ perspective: '2000px' }}>
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-5xl md:text-7xl font-bold font-heading bg-clip-text text-transparent bg-gradient-to-br from-white via-neutral-200 to-neutral-600 tracking-tighter">
                        BrainVION Lab
                    </h1>
                    <p className="mt-3 text-emerald-400 font-mono text-sm tracking-[0.3em] uppercase opacity-80">
                        Agentic Command Center
                    </p>
                </motion.div>

                {/* Tool Grid */}
                <motion.div
                    animate={{
                        rotateX: mousePosition.y,
                        rotateY: mousePosition.x,
                    }}
                    transition={{ type: 'spring', stiffness: 70, damping: 20, mass: 2 }}
                    style={{ transformStyle: 'preserve-3d' }}
                    className="w-full max-w-6xl"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" style={{ transformStyle: 'preserve-3d' }}>
                        {tools.map((tool, i) => (
                            <motion.div
                                key={tool.href}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08, duration: 0.4 }}
                                style={{ transform: `translateZ(${tool.zOffset}px)` }}
                            >
                                <Link href={tool.href} className={`group flex flex-col h-full bg-neutral-900/60 backdrop-blur-2xl border ${tool.border} p-7 rounded-2xl transition-all duration-400 hover:bg-neutral-800/80 relative overflow-hidden`}>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${tool.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                    <div className="relative z-10 flex items-start justify-between mb-5">
                                        <tool.icon className={`w-9 h-9 ${tool.color} group-hover:scale-110 transition-transform duration-500`} />
                                    </div>
                                    <div className="relative z-10 flex-1">
                                        <h2 className="text-lg font-semibold text-white mb-2 group-hover:text-white/90">{tool.label}</h2>
                                        <p className="text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-300">{tool.desc}</p>
                                    </div>
                                    <div className="relative z-10 mt-6 flex items-center text-xs font-medium text-neutral-500 group-hover:text-neutral-300 transition-colors">
                                        Open Tool
                                        <ArrowLeft className="w-3.5 h-3.5 ml-1.5 rotate-180 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Floor Glow */}
            <div className="fixed bottom-[-20%] left-1/2 -translate-x-1/2 w-[80%] h-[400px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
        </div>
    );
}
