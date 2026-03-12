/**
 * =============================================================================
 * BrainVion - PROPRIETARY SOURCE CODE
 * © 2026 Brainvion. All Rights Reserved.
 * LEAD ARCHITECT: Dial Chowdhury Emon (@dialc.official)
 * =============================================================================
 */

'use client';

import Head from 'next/head';
import Link from 'next/link';
import AppCard from '@/components/cards/AppCard';
import AnimatedLogo from '@/components/navbar/AnimatedLogo';
import InteractiveTerminal from '@/components/InteractiveTerminal';
import TechMarquee from '@/components/TechMarquee';
import EbookCarousel from '@/components/EbooksCarousel';
import { BookOpen, Users, TrendingUp, Briefcase, Sparkles, GraduationCap, Award, Globe, Terminal } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useState } from 'react';

const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const BRAINVION_PILLARS = [
    {
        icon: BookOpen,
        title: "Tech Learning",
        description: "Master the latest technologies through peer-led sessions and hands-on projects.",
        stat: "12+",
        statLabel: "Learning tracks available",
        detail: "From Python to cloud deployment, our structured tracks guide you step by step — whether you're a complete beginner or levelling up.",
        color: "bg-accent/10 text-primary",
    },
    {
        icon: Users,
        title: "Student Collaboration",
        description: "Work together with university students and interns on real-world problems.",
        stat: "200+",
        statLabel: "Active community members",
        detail: "Weekly study circles, project teams, and peer review sessions ensure you never learn alone.",
        color: "bg-primary/5 text-primary",
    },
    {
        icon: TrendingUp,
        title: "Career Growth",
        description: "Prepare for the future of work, whether it's remote roles or local internships.",
        stat: "85%",
        statLabel: "Members placed within 6 months",
        detail: "Mock interviews, CV workshops, and a curated job board tailored to Dhaka's growing tech ecosystem.",
        color: "bg-emerald-50 text-primary",
    },
    {
        icon: Briefcase,
        title: "Real Opportunities",
        description: "Connect with alumni, startups, and mentors who can help launch your career.",
        stat: "40+",
        statLabel: "Partner companies & startups",
        detail: "Our alumni network spans local agencies and global remote teams — your next opportunity is a connection away.",
        color: "bg-purple-50 text-primary",
    },
];

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
        tags: ['Roadmaps', 'Open Source', 'Hackathons', 'Web IDE'],
    },
    'IELTS Candidates': {
        icon: Award,
        emoji: '📝',
        description: "Preparing for IELTS while keeping up with your tech journey? Use our StudyBuddy AI for daily practice, join IELTS cohorts, and track your band trajectory.",
        tags: ['Band Predictor', 'Writing Practice', 'Study Cohorts', 'Mock Tests'],
    },
};

const ARTICLES = [
    { title: "Best Laptop for Students", description: "A comprehensive guide to picking the right machine for coding, design, and daily college tasks.", category: "AI & Tech", readTime: "5 min", href: "/learning" },
    { title: "AI Tools for Study", description: "How to leverage AI to learn faster, summarize better, and boost your university grades.", category: "AI & Tech", readTime: "7 min", href: "/learning" },
    { title: "Programming Beginner Guide", description: "Where to start your coding journey in 2026. Languages, roadmaps, and free resources.", category: "Career", readTime: "10 min", href: "/learning" },
    { title: "IELTS Band 7+ Strategy", description: "Proven tactics from high scorers: time management, writing templates, and daily practice routines.", category: "IELTS", readTime: "8 min", href: "/learning" },
    { title: "Remote Jobs for Bangladeshi Devs", description: "How to land international remote jobs from Dhaka — platforms, portfolios, and salary negotiation.", category: "Career", readTime: "6 min", href: "/learning" },
    { title: "GitHub Profile That Gets You Hired", description: "Turn your GitHub into a professional portfolio that impresses recruiters and hiring managers.", category: "Career", readTime: "4 min", href: "/learning" },
];

const ARTICLE_TABS = ['All', 'AI & Tech', 'Career', 'IELTS'];

// ─── Sub-components ───────────────────────────────────────────────────────────

function PillarCard({ pillar, isActive, onClick }: {
    pillar: typeof BRAINVION_PILLARS[0];
    isActive: boolean;
    onClick: () => void;
}) {
    const Icon = pillar.icon;
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={onClick}
            className={`relative group cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden
                ${isActive
                    ? 'border-primary/30 shadow-xl'
                    : 'border-gray-100 hover:border-primary/20 shadow-sm hover:shadow-lg'
                }
            `}
        >
            {/* Card Front */}
            <div className={`p-6 md:p-8 transition-all duration-300 ${isActive ? 'bg-primary text-secondary' : 'bg-white'}`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 ${isActive ? 'bg-white/20' : pillar.color}`}>
                    <Icon className={`w-6 h-6 ${isActive ? 'text-secondary' : ''}`} />
                </div>
                <h3 className={`font-heading font-bold text-xl mb-2 transition-colors ${isActive ? 'text-secondary' : 'text-primary'}`}>
                    {pillar.title}
                </h3>
                <p className={`text-sm leading-relaxed transition-colors ${isActive ? 'text-secondary/80' : 'text-text/60'}`}>
                    {pillar.description}
                </p>

                {/* Expanded Detail */}
                <AnimatePresence>
                    {isActive && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                        >
                            <div className="mt-5 pt-5 border-t border-white/20">
                                <div className="flex items-baseline gap-2 mb-3">
                                    <span className="text-3xl font-extrabold text-accent font-heading">{pillar.stat}</span>
                                    <span className="text-secondary/70 text-sm">{pillar.statLabel}</span>
                                </div>
                                <p className="text-secondary/80 text-sm leading-relaxed">{pillar.detail}</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className={`mt-4 text-xs font-semibold flex items-center gap-1 transition-colors ${isActive ? 'text-accent' : 'text-primary/40 group-hover:text-primary/60'}`}>
                    {isActive ? 'Click to collapse ↑' : 'Click to explore →'}
                </div>
            </div>
        </motion.div>
    );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Home() {
    const [activePillar, setActivePillar] = useState<number | null>(null);
    const [activeAudience, setActiveAudience] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState('All');

    const filteredArticles = activeTab === 'All'
        ? ARTICLES
        : ARTICLES.filter(a => a.category === activeTab);

    return (
        <>
            <Head>
                <title>BrainVION | A Student Tech Community</title>
                <meta name="description" content="A friendly place where students learn technology, build skills, and grow together." />
            </Head>

            {/* ── Premium Hero ── */}
            <section className="relative bg-secondary overflow-hidden py-24 lg:py-32 xl:py-40 flex items-center min-h-[85vh]">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-accent/20 blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-primary/10 blur-[80px] pointer-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                        <motion.h1 variants={fadeIn} className="flex justify-center mb-6 scale-125 md:scale-150 transform origin-center">
                            <AnimatedLogo />
                        </motion.h1>
                        <motion.p variants={fadeIn} className="mt-8 md:mt-12 max-w-2xl mx-auto text-lg md:text-xl xl:text-2xl text-text/70 leading-relaxed mb-10 md:mb-12">
                            A friendly place where students learn technology, build skills, and grow together in Dhaka.
                        </motion.p>

                        <motion.div variants={fadeIn} className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                                <Link href="/community" className="block w-full sm:w-auto px-8 py-4 border border-primary/20 text-primary bg-white/50 backdrop-blur-sm hover:bg-white/80 font-semibold rounded-xl transition-all shadow-sm hover:shadow-md focus:ring-2 focus:ring-primary focus:ring-offset-2">
                                    Join Community
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                                <Link href="/house" className="block w-full sm:w-auto px-8 py-4 bg-primary text-secondary hover:bg-primary/90 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all focus:ring-2 focus:ring-primary focus:ring-offset-2">
                                    Find a Seat
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                                <Link href="/register" className="block w-full sm:w-auto px-8 py-4 bg-purple-600 text-white hover:bg-purple-500 font-semibold rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 flex items-center justify-center gap-2">
                                    <Sparkles className="w-4 h-4 ml-[-4px]" />
                                    Enter Lab
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ── What is BrainVION? — Interactive Pillar Cards ── */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeIn}
                        className="text-center mb-16 md:mb-20"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-primary">
                            What is BrainVION?
                        </h2>
                        <p className="mt-6 text-text/70 max-w-2xl mx-auto text-lg leading-relaxed">
                            We are building a robust ecosystem to empower students across Dhaka with the tools, space, and network they need to succeed in the modern tech economy.
                        </p>
                        <p className="mt-3 text-sm text-text/40 font-medium">Click any card to learn more →</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {BRAINVION_PILLARS.map((pillar, i) => (
                            <PillarCard
                                key={pillar.title}
                                pillar={pillar}
                                isActive={activePillar === i}
                                onClick={() => setActivePillar(activePillar === i ? null : i)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Who is this for? — Clickable Audience Cards ── */}
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
                    <div className="flex flex-wrap justify-center gap-3 md:gap-5 mb-10">
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
                    </div>

                    {/* Detail Panel */}
                    <AnimatePresence mode="wait">
                        {activeAudience && AUDIENCE_MAP[activeAudience] && (
                            <motion.div
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
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </section>

            {/* ── E-Book Commerce Block ── */}
            <EbookCarousel />

            {/* ── Learning Hub — Tabbed & Filtered ── */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4"
                    >
                        <div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-primary">
                                Learning Hub
                            </h2>
                            <p className="mt-4 text-text/70 text-lg">Insights, guides, and tech resources.</p>
                        </div>
                        <Link href="/learning" className="hidden md:inline-flex items-center text-primary font-semibold hover:text-accent transition-colors group">
                            View all articles
                            <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                        </Link>
                    </motion.div>

                    {/* Filter Tabs */}
                    <div className="flex gap-2 mb-10 overflow-x-auto pb-1 scrollbar-hide">
                        {ARTICLE_TABS.map(tab => (
                            <motion.button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.96 }}
                                className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                                    ${activeTab === tab
                                        ? 'bg-primary text-secondary shadow-md'
                                        : 'bg-secondary text-primary hover:bg-secondary/80 border border-primary/10'
                                    }
                                `}
                            >
                                {tab}
                            </motion.button>
                        ))}
                    </div>

                    {/* Article Grid */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.25 }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
                        >
                            {filteredArticles.map((article, i) => (
                                <motion.div
                                    key={article.title}
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.07 }}
                                    className="group bg-secondary/20 border border-transparent hover:border-accent/30 rounded-2xl p-6 transition-all hover:shadow-lg cursor-pointer"
                                    onClick={() => window.location.href = article.href}
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/10">
                                            {article.category}
                                        </span>
                                        <span className="text-xs text-text/40 font-medium">{article.readTime} read</span>
                                    </div>
                                    <h3 className="font-heading font-bold text-lg text-primary mb-2 group-hover:text-accent transition-colors">
                                        {article.title}
                                    </h3>
                                    <p className="text-text/60 text-sm leading-relaxed">{article.description}</p>
                                    <div className="mt-5 flex items-center text-primary text-sm font-semibold gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        Read article <span className="transition-transform group-hover:translate-x-1 inline-block">→</span>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {filteredArticles.length === 0 && (
                        <div className="text-center py-16 text-text/40">
                            <p className="text-lg font-medium">No articles in this category yet.</p>
                            <p className="text-sm mt-1">Check back soon — new content is added weekly.</p>
                        </div>
                    )}

                    <div className="mt-10 text-center md:hidden">
                        <Link href="/learning" className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors group">
                            View all articles
                            <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── Student House CTA ── */}
            <section className="relative py-32 bg-primary text-secondary overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={staggerContainer}
                    >
                        <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 text-white tracking-tight">
                            BrainVION Student House
                        </motion.h2>
                        <motion.p variants={fadeIn} className="text-lg md:text-xl lg:text-2xl text-secondary/80 mb-12 leading-relaxed max-w-2xl mx-auto">
                            Located in Shukrabad near Dhanmondi, our student house offers a quiet, student-friendly environment designed for focused learning and living.
                        </motion.p>
                        <motion.div variants={fadeIn}>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                                <Link href="/house" className="px-10 py-5 bg-accent text-primary font-bold rounded-xl shadow-[0_0_40px_-10px_rgba(0,229,255,0.4)] hover:shadow-[0_0_60px_-10px_rgba(0,229,255,0.6)] transition-all flex items-center justify-center gap-3 text-lg">
                                    Apply for a Seat
                                    <span className="text-xl">→</span>
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block mt-4 sm:mt-0 sm:ml-4">
                                <Link href="/register" className="px-10 py-5 bg-transparent border-2 border-purple-500 text-white font-bold rounded-xl hover:bg-purple-500/20 transition-all flex items-center justify-center gap-3 text-lg backdrop-blur-sm shadow-[0_0_20px_-10px_rgba(168,85,247,0.4)]">
                                    <Sparkles className="w-5 h-5 text-purple-400" />
                                    Command Center
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
