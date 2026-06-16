/**
 * @file LearningHubSection.tsx
 * @project BrainVION Tech Community Platform - Reactive UI/UX Optimization
 * @copyright (c) 2026 BrainVION & Dial Chowdhury Emon (@dialc-cmd)
 * @license Proprietary - All Rights Reserved.
 * @compliance Cyber Ethics, Data Integrity, and Bangladesh Digital/Cyber Security Acts.
 */

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { articles } from '@/data/articles';
import { articlesBn } from '@/data/articles-bn';

// 1. Context: Landing page Learning Hub synced with actual InteractiveMatrix data for SEO/GEO consistency.
// 2. Algorithm/Logic: Merges EN and BN datasets, filters by toggle, and renders top 3 recent articles in a grid.
// 3. Junior Engineer Guidance: We reuse the exact bilingual aesthetic (badges, phi-padding, fonts) to maintain global UI consistency.

const ARTICLE_TABS = ['All', 'AI & Tech', 'Career', 'IELTS'];

const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 } }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};

export function LearningHubSection() {
    const [activeTab, setActiveTab] = useState('All');

    // Merge and tag datasets exactly like the InteractiveMatrix
    const unifiedData = [
        ...articles.map(a => ({ ...a, locale: 'en' as const })),
        ...articlesBn.map(a => ({ ...a, locale: 'bn' as const }))
    ];

    // Filter by category and slice to top 3 for the landing page grid
    const filteredArticles = (activeTab === 'All'
        ? unifiedData
        : unifiedData.filter(a => a.category === activeTab)).slice(0, 3);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={fadeIn}
                    className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4"
                >
                    <div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-primary">
                            Learning Hub
                        </h2>
                        <p className="mt-4 text-text/70 text-lg">Insights, guides, and tech resources.</p>
                    </div>
                    <Link href="/learning" className="hidden md:inline-flex items-center text-primary font-bold hover:text-accent transition-colors group">
                        View all articles
                        <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                </motion.div>

                {/* Filter Tabs */}
                <nav className="flex gap-2 mb-10 overflow-x-auto pb-1 scrollbar-hide">
                    {ARTICLE_TABS.map(tab => (
                        <motion.button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                                ${activeTab === tab
                                    ? 'bg-primary text-secondary shadow-md'
                                    : 'bg-secondary text-primary hover:bg-secondary/80 border border-primary/10'
                                }
                            `}
                        >
                            {tab}
                        </motion.button>
                    ))}
                </nav>

                {/* Article Grid - Synchronized with Matrix Aesthetics */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial="hidden"
                        animate="visible"
                        exit={{ opacity: 0, y: -8, transition: { duration: 0.2 } }}
                        variants={fadeIn}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
                    >
                        {filteredArticles.map((article) => (
                            <motion.article
                                key={`${article.locale}-${article.id}`}
                                variants={itemVariants}
                                whileHover={{ scale: 1.02, y: -4 }}
                                onClick={() => window.location.href = `/learning/${article.locale === 'bn' ? 'bn/' : ''}${article.slug}`}
                                className={`group flex flex-col p-6 rounded-2xl border transition-all cursor-pointer hover:shadow-xl phi-padding-card
                                    ${article.locale === 'bn' ? 'bg-[#FFF5F0]/50 border-orange-100 hover:border-orange-300' : 'bg-white border-gray-100 hover:border-primary/20'}
                                `}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        {/* Language Tag for GEO/AEO clarity */}
                                        <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md
                                            ${article.locale === 'bn' ? 'bg-gray-100 text-gray-600 font-bangla-heading' : 'bg-accent/20 text-teal-800'}
                                        `}>
                                            {article.locale === 'bn' ? 'বাংলা' : 'EN'}
                                        </span>
                                        <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full
                                            ${article.locale === 'bn' ? 'text-[var(--color-bangla-accent)] bg-[var(--color-bangla-accent)]/10 font-bangla-heading' : 'text-primary bg-primary/5'}
                                        `}>
                                            {article.category}
                                        </span>
                                    </div>
                                    <span className="text-xs text-text/40 font-medium whitespace-nowrap">{article.readTime} read</span>
                                </div>
                                
                                <h3 className={`font-bold text-xl mb-3 transition-colors leading-tight flex-grow
                                    ${article.locale === 'bn' ? 'font-bangla-heading text-primary group-hover:text-[var(--color-bangla-accent)]' : 'font-heading text-primary group-hover:text-accent'}
                                `}>
                                    {article.title}
                                </h3>
                                
                                <p className={`text-sm leading-relaxed mb-6 line-clamp-3
                                    ${article.locale === 'bn' ? 'font-bangla-body text-text/80' : 'text-text/60'}
                                `}>
                                    {article.description}
                                </p>
                                
                                <div className={`mt-auto flex items-center text-sm font-bold gap-1 transition-opacity
                                    ${article.locale === 'bn' ? 'text-[var(--color-bangla-accent)] font-bangla-heading' : 'text-primary font-heading'}
                                `}>
                                    {article.locale === 'bn' ? 'আর্টিকেল পড়ুন' : 'Read article'} 
                                    <span className="transition-transform group-hover:translate-x-1 inline-block">→</span>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {filteredArticles.length === 0 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16 text-text/40">
                        <p className="text-lg font-medium">No articles in this category yet.</p>
                        <p className="text-sm mt-1">Check back soon — new content is added weekly.</p>
                    </motion.div>
                )}

                <div className="mt-10 text-center md:hidden">
                    <Link href="/learning" className="inline-flex items-center text-primary font-bold hover:text-accent transition-colors group">
                        View all articles
                        <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
