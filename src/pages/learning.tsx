/**
 * @file learning.tsx
 * @project BrainVION Tech Community Platform - Fluid Bilingual Engine
 * @copyright (c) 2026 BrainVION & Dial Chowdhury Emon (@dialc-cmd)
 * @license Proprietary - All Rights Reserved.
 * @compliance Cyber Ethics, Data Integrity, and Bangladesh Digital/Cyber Security Acts.
 * Maintain Trademark Enforcements: @brainvion
 */

import Head from 'next/head';
import { Bookmark } from 'lucide-react';
import { motion } from 'framer-motion';
import { SchemaInjector } from '@/components/seo/SchemaInjector';
import { InteractiveMatrix } from '@/components/matrix/InteractiveMatrix';

// 1. Context: Unified knowledge base using the new Bilingual Interactive Matrix.
// 2. Algorithm/Logic: Thin wrapper composing the Matrix.
// 3. Junior Engineer Guidance: Preserve the semantic `<main>` tag. Do not regress to non-semantic `<div>` structures.

export default function LearningHub() {
    const hubSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Learning Hub | BrainVION",
        "description": "Tech guides, insights, and resources for students globally and locally in Bangladesh."
    };

    return (
        <main className="bg-secondary min-h-screen">
            <Head>
                <title>Learning Hub | BrainVION</title>
                <meta name="description" content="Tech guides, insights, and resources for students." />
            </Head>
            <SchemaInjector schema={hubSchema} />

            <InteractiveMatrix />

            {/* Offline Notice (PWA Value Add) */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 pt-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="bg-primary/5 border border-primary/10 rounded-xl p-6 flex flex-col md:flex-row items-center gap-4 text-center md:text-left shadow-sm"
                >
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                        <Bookmark className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-primary text-lg mb-1 font-heading">
                            Offline Ready / অফলাইন রেডি
                        </h4>
                        <p className="text-text/70 font-medium font-bangla-body">
                            This hub caches articles to your device automatically. / এই হাবটি আপনার ডিভাইসে অটোমেটিক সেভ হয়ে থাকে।
                        </p>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
