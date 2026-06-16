/**
 * @file AudienceSection.tsx
 * @project BrainVION Tech Community Platform - Lean Architecture Update
 * @copyright (c) 2026 BrainVION & Dial Chowdhury Emon (@dialc-cmd)
 * @license Proprietary - All Rights Reserved.
 */

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { GraduationCap, Terminal, Globe, Award } from 'lucide-react';

const AUDIENCE_MAP: Record<string, { icon: React.ElementType; emoji: string; description: string; tags: string[] }> = {
    'University Students': {
        icon: GraduationCap,
        emoji: '🎓',
        description: "Whether you're in your first semester or final year, BrainVION gives you a community, a study space, and a career springboard all in one place.",
        tags: ['Study Groups', 'Peer Mentoring', 'Student Housing', 'Project Teams'],
    },
    'Interns': {
        icon: Terminal,
        emoji: '💼',
        description: "Navigating your first internship? Connect with fellow interns, share experiences, and access resources that help you turn your internship into a full-time offer.",
        tags: ['Interview Prep', 'Code Reviews', 'Portfolio Building', 'Networking'],
    },
    'Tech Learners': {
        icon: Globe,
        emoji: '🌐',
        description: "Self-taught developers and bootcamp graduates find their community here. Follow curated roadmaps, join study groups, and get real feedback on your projects.",
        tags: ['Roadmaps', 'Open Source', 'Hackathons', 'Project Showcase'],
    },
    'IELTS Candidates': {
        icon: Award,
        emoji: '📝',
        description: "Preparing for IELTS while keeping up with your tech journey? Join dedicated IELTS cohorts for daily practice, access curated study materials, and track your band trajectory with peers.",
        tags: ['Writing Practice', 'Study Cohorts', 'Mock Tests', 'Score Tracking'],
    },
};

const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function AudienceSection() {
    const [activeAudience, setActiveAudience] = useState<string | null>(null);

    return (
        <section className="py-24 bg-secondary/50 border-y border-gray-100/50">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            >
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
                    Who is this for?
                </h2>
                <p className="text-text/50 text-sm mb-12 font-medium">Select your profile to see what BrainVION offers you.</p>

                {/* Audience Selector Pills */}
                <nav className="flex flex-wrap justify-center gap-3 md:gap-5 mb-10">
                    {Object.entries(AUDIENCE_MAP).map(([audience, data], i) => {
                        const isActive = activeAudience === audience;
                        return (
                            <motion.button
                                key={audience}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.4 }}
                                whileHover={{ y: isActive ? 0 : -4 }}
                                onClick={() => setActiveAudience(isActive ? null : audience)}
                                className={`px-6 py-3.5 rounded-2xl font-semibold text-base border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                                    ${isActive
                                        ? 'bg-primary text-secondary border-primary shadow-xl scale-105'
                                        : 'bg-white text-primary border-primary/10 shadow-sm hover:shadow-md'
                                    }
                                `}
                            >
                                <span className="mr-2">{data.emoji}</span>{audience}
                            </motion.button>
                        );
                    })}
                </nav>

                {/* Detail Panel */}
                <AnimatePresence mode="wait">
                    {activeAudience && AUDIENCE_MAP[activeAudience] && (
                        <motion.article
                            key={activeAudience}
                            initial={{ opacity: 0, y: 20, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.98 }}
                            transition={{ duration: 0.3 }}
                            className="max-w-2xl mx-auto bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-left"
                        >
                            {(() => {
                                const d = AUDIENCE_MAP[activeAudience];
                                return (
                                    <>
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <d.icon className="w-5 h-5 text-primary" />
                                            </div>
                                            <h3 className="font-heading font-bold text-xl text-primary">{activeAudience}</h3>
                                        </div>
                                        <p className="text-text/70 leading-relaxed mb-6">{d.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {d.tags.map(tag => (
                                                <span key={tag} className="px-3 py-1.5 bg-secondary text-primary text-sm font-semibold rounded-full border border-primary/10">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="mt-6 pt-5 border-t border-gray-100">
                                            <Link href="/apply" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors text-sm group">
                                                Apply as {activeAudience.split(' ')[0]}
                                                <span className="transition-transform group-hover:translate-x-1">→</span>
                                            </Link>
                                        </div>
                                    </>
                                );
                            })()}
                        </motion.article>
                    )}
                </AnimatePresence>
            </motion.div>
        </section>
    );
}
