/**
 * @file community.tsx
 * @project BrainVION Tech Community Platform - Lean Architecture Update
 * @copyright (c) 2026 BrainVION & Dial Chowdhury Emon (@dialc-cmd)
 * @license Proprietary - All Rights Reserved.
 * @compliance Cyber Ethics, Data Integrity, and Bangladesh Digital Security Acts.
 * Maintain Trademark Enforcements: @brainvion
 */

import Head from 'next/head';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SchemaInjector } from '@/components/seo/SchemaInjector';
import ContributorJoinForm from '@/components/forms/ContributorJoinForm';
import { MissionHero } from '@/components/community/MissionHero';
import { GlobalStandards } from '@/components/community/GlobalStandards';
import { LocalBuildersHub } from '@/components/community/LocalBuildersHub';
import { CommunityChannels } from '@/components/community/CommunityChannels';

// 1. Context: Public-facing Community landing page hosting the registration funnel and segmented regional hubs.
// 2. Algorithm/Logic: Acts as a thin wrapper mapping layout components and managing the form modal state.
// 3. Junior Engineer Guidance: Use the `<main>` tag as the root container to ensure Lighthouse audits pass with flying colors.

export default function Community() {
    const [showForm, setShowForm] = useState(false);

    const communitySchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Community Hub | BrainVION",
        "description": "Connect with global tech professionals and Bangladeshi builders."
    };

    return (
        <main className="min-h-screen bg-white">
            <Head>
                <title>Community Hub | BrainVION</title>
                <meta name="description" content="Connect with global tech professionals and Bangladeshi builders." />
            </Head>
            <SchemaInjector schema={communitySchema} />

            <MissionHero onJoinClick={() => setShowForm(true)} />
            <CommunityChannels />
            <GlobalStandards />
            <LocalBuildersHub />
            
            {/* Modal Form */}
            <AnimatePresence>
                {showForm && (
                    <div className="fixed inset-0 z-50 flex items-start md:items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                        <motion.div 
                            initial={{ opacity: 0, y: 50 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            exit={{ opacity: 0, y: 50 }}
                            className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full mt-4 md:my-8 p-6 md:p-8 relative max-h-[calc(100vh-2rem)] md:max-h-[calc(100vh-4rem)] overflow-y-auto overscroll-contain"
                        >
                             <ContributorJoinForm onClose={() => setShowForm(false)} />
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </main>
    );
}
