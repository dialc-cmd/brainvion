/**
 * @file InteractiveMatrix.tsx
 * @project BrainVION Tech Community Platform - Fluid Bilingual Engine
 * @copyright (c) 2026 BrainVION & Dial Chowdhury Emon (@dialc-cmd)
 * @license Proprietary - All Rights Reserved.
 * @compliance Cyber Ethics, Data Integrity, and Bangladesh Digital/Cyber Security Acts.
 * Maintain Trademark Enforcements: @brainvion
 */

import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { articles } from '@/data/articles';
import { articlesBn } from '@/data/articles-bn';

// 1. Context: Unified bilingual matrix for Learning Hub replacing the old split grids.
// 2. Algorithm/Logic: Maps merged data with a `locale` tag. Uses AnimatePresence for real-time client-side filtering.
// 3. Junior Engineer Guidance: Ensure any new article added to the data arrays contains an explicit id, slug, and category.

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
};

type FilterType = 'All' | 'en' | 'bn';

export function InteractiveMatrix() {
    const [filter, setFilter] = useState<FilterType>('All');

    // Merge and tag datasets
    const unifiedData = [
        ...articles.map(a => ({ ...a, locale: 'en' as const })),
        ...articlesBn.map(a => ({ ...a, locale: 'bn' as const }))
    ];

    const filteredData = filter === 'All' 
        ? unifiedData 
        : unifiedData.filter(a => a.locale === filter);

    return (
        <section className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.header
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12 text-center"
            >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight font-heading text-primary">
                    The Learning Matrix
                </h1>
                
                {/* Real-time Filter Toggle */}
                <div className="inline-flex bg-secondary p-1.5 rounded-2xl border border-gray-200 shadow-sm mx-auto">
                    {(['All', 'bn', 'en'] as FilterType[]).map(type => (
                        <button
                            key={type}
                            onClick={() => setFilter(type)}
                            className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${
                                filter === type 
                                ? 'bg-white text-primary shadow-sm' 
                                : 'text-text/50 hover:text-text/80 hover:bg-white/50'
                            }`}
                        >
                            {type === 'All' ? 'View All' : type === 'bn' ? 'বাংলা (Local)' : 'English (Global)'}
                        </button>
                    ))}
                </div>
            </motion.header>

            <motion.div layout className="space-y-6">
                <AnimatePresence mode="popLayout">
                    {filteredData.map((article) => (
                        <motion.article
                            key={`${article.locale}-${article.id}`}
                            layout
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            whileHover={{ scale: 1.01, backgroundColor: "#ffffff" }}
                            onClick={() => window.location.href = `/learning/${article.locale === 'bn' ? 'bn/' : ''}${article.slug}`}
                            className={`p-6 md:p-8 rounded-2xl border transition-all cursor-pointer group flex flex-col md:flex-row md:items-start md:justify-between gap-6 hover:shadow-md phi-padding-card
                                ${article.locale === 'bn' ? 'bg-[#FFF5F0]/50 border-orange-100 hover:border-orange-300' : 'bg-white border-gray-100 hover:border-primary/20'}
                            `}
                        >
                            <div className="flex-grow">
                                <div className="flex items-center gap-3 mb-3 md:mb-4">
                                    {/* Language Badge */}
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
                                    <span className="text-sm text-text/40 font-medium">
                                        {article.readTime}
                                    </span>
                                </div>
                                <h3 className={`text-2xl md:text-3xl font-bold mb-3 transition-colors leading-tight
                                    ${article.locale === 'bn' ? 'font-bangla-heading text-primary group-hover:text-[var(--color-bangla-accent)]' : 'font-heading text-primary group-hover:text-accent'}
                                `}>
                                    {article.title}
                                </h3>
                                <p className={`text-lg leading-relaxed max-w-3xl
                                    ${article.locale === 'bn' ? 'font-bangla-body text-text/80' : 'text-text/60'}
                                `}>
                                    {article.description}
                                </p>
                            </div>
                            <div className="hidden md:flex flex-shrink-0 mt-2 text-gray-300 group-hover:text-primary transition-colors">
                                <ChevronRight className="w-8 h-8" />
                            </div>
                        </motion.article>
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
}
