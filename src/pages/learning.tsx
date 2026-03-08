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
import AppCard from '@/components/cards/AppCard';

// Community REQUIREMENT [Brainvion]: [A centralized blog/hub for student tech related SEO articles and future affiliate links.]
// TECHNICAL IMPLEMENTATION: [Static fallback rendering of articles. Next PWA should cache this page for offline reading natively.]
// QA/QC ADVISORY: [Verify offline support through the Service Worker once deployed.]

const articles = [
    {
        category: 'Student Gadgets',
        title: 'Best Laptop for Students',
        desc: 'A comprehensive guide to picking the right machine for coding, design, and daily college tasks without breaking the budget.',
        date: 'August 14, 2026',
    },
    {
        category: 'AI Tools',
        title: 'AI Tools for Study',
        desc: 'How to leverage AI models like ChatGPT and Claude to learn faster, summarize research papers, and boost university grades.',
        date: 'August 20, 2026',
    },
    {
        category: 'Programming',
        title: 'Programming Beginner Guide',
        desc: 'Where to start your coding journey in 2026. Required languages, roadmaps, and the best free courses available.',
        date: 'August 25, 2026',
    },
    {
        category: 'Study Productivity',
        title: 'The Pomodoro Technique for Devs',
        desc: 'Overcoming tutorial hell and studying consistently by managing your time and attention span.',
        date: 'September 2, 2026',
    },
];

export default function LearningHub() {
    return (
        <>
            <Head>
                <title>Learning Hub | BrainVION</title>
                <meta name="description" content="Articles, guides, and tech resources for university students and developers." />
            </Head>

            <div className="bg-secondary py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-4">
                            Learning Hub
                        </h1>
                        <p className="text-lg text-text/70 max-w-2xl mx-auto">
                            Insights, guides, and curated resources on technology, productivity, and the best gadgets for students.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {articles.map((article, idx) => (
                            <AppCard
                                key={idx}
                                title={article.title}
                                description={article.desc}
                                icon={
                                    <div className="text-xs font-semibold uppercase tracking-wider text-accent drop-shadow-sm">
                                        {article.category}
                                    </div>
                                }
                                className="hover:-translate-y-1 transition-transform duration-300"
                            />
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-text/50 text-sm">More articles coming soon. Stay tuned!</p>
                    </div>
                </div>
            </div>
        </>
    );
}
