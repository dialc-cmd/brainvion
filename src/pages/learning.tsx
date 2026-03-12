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

import Head from 'next/head';
import { ChevronRight, Bookmark } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

// Community REQUIREMENT [Brainvion]: [A hyper-clean, readable article index. Needs to look like Linear or Notion, highly professional, with fast staggered animations.]
// TECHNICAL IMPLEMENTATION: [Static array mapping. Framer Motion stagger for the article list. Focus on typography constraints.]
// QA/QC ADVISORY: [PWA must cache this page effectively for offline reading. Verify line heights for maximum legibility.]

const articles = [
    {
        id: 1,
        title: "The Ultimate Guide to Buying a Student Laptop in 2026",
        description: "Don't waste money on the wrong hardware. Detailed breakdown of processors, RAM requirements, and Mac vs PC for Bangladeshi university students pursuing tech.",
        category: "Hardware",
        readTime: "8 min read",
        date: "Oct 12, 2026"
    },
    {
        id: 2,
        title: "How to Actually Use AI for University Studies Without Cheating",
        description: "Learn to use Cursor, ChatGPT, and Notion AI as tutors and research assistants rather than just answer-generators to genuinely boost your skillset.",
        category: "Productivity",
        readTime: "5 min read",
        date: "Oct 05, 2026"
    },
    {
        id: 3,
        title: "Frontend Roadmap for Complete Beginners",
        description: "HTML, CSS, React, Next.js. The exact path, free resources, and timeframe needed to land a remote internship from Dhaka.",
        category: "Coding",
        readTime: "12 min read",
        date: "Sep 28, 2026"
    },
    {
        id: 4,
        title: "Surviving the IELTS: A Programmer's Approach to English",
        description: "Treating language learning like syntax. Systematizing writing structures and speaking drills to achieve a 7.5+ band score.",
        category: "Career",
        readTime: "6 min read",
        date: "Sep 20, 2026"
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function LearningHub() {
    return (
        <>
            <Head>
                <title>Learning Hub | BrainVION</title>
                <meta name="description" content="Tech guides, insights, and resources for students." />
            </Head>

            <div className="bg-secondary min-h-screen py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-16 border-b border-gray-200 pb-12"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-primary mb-6 tracking-tight">
                            Learning Hub
                        </h1>
                        <p className="text-xl md:text-2xl text-text/70 leading-relaxed max-w-2xl">
                            High-signal insights, technical roadmaps, and career advice curated for students.
                        </p>
                    </motion.div>

                    {/* Article List */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-6"
                    >
                        {articles.map((article) => (
                            <motion.article
                                key={article.id}
                                variants={itemVariants}
                                whileHover={{ scale: 1.01, backgroundColor: "#ffffff" }}
                                className="bg-white/60 p-6 md:p-8 rounded-2xl border border-gray-100 hover:border-gray-300 transition-all cursor-pointer group flex flex-col md:flex-row md:items-start md:justify-between gap-6"
                            >
                                <div className="flex-grow">
                                    <div className="flex items-center gap-3 mb-3 md:mb-4">
                                        <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full">
                                            {article.category}
                                        </span>
                                        <span className="text-sm text-text/50 font-medium">
                                            {article.date} • {article.readTime}
                                        </span>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold font-heading text-primary mb-3 group-hover:text-accent transition-colors">
                                        {article.title}
                                    </h2>
                                    <p className="text-text/70 text-lg leading-relaxed max-w-3xl">
                                        {article.description}
                                    </p>
                                </div>
                                <div className="hidden md:flex flex-shrink-0 mt-2 text-gray-300 group-hover:text-primary transition-colors">
                                    <ChevronRight className="w-8 h-8" />
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>

                    {/* Offline Notice (PWA Value Add) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="mt-16 bg-primary/5 border border-primary/10 rounded-xl p-6 flex flex-col md:flex-row items-center gap-4 text-center md:text-left shadow-sm"
                    >
                        <div className="bg-primary/10 p-3 rounded-full text-primary">
                            <Bookmark className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-primary text-lg mb-1">Offline Ready</h4>
                            <p className="text-text/70 font-medium">This hub automatically caches articles to your device. You can read them later even without an internet connection.</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </>
    );
}
