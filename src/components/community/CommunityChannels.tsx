/**
 * @file CommunityChannels.tsx
 * @project BrainVION Tech Community Platform - Fluid Bilingual Engine
 * @copyright (c) 2026 BrainVION & Dial Chowdhury Emon (@dialc-cmd)
 * @license Proprietary - All Rights Reserved.
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Hash, Globe, Users } from 'lucide-react';

// 1. Context: Interactive channel toggle to unify local and global community members without isolation.
// 2. Algorithm/Logic: Uses state to toggle view contexts. Uses Framer Motion for smooth tab transitions.
// 3. Junior Engineer Guidance: Ensure any new channel added here maps to the Discord role integration.

type Channel = 'local' | 'global';

export function CommunityChannels() {
    const [activeChannel, setActiveChannel] = useState<Channel>('local');

    return (
        <section className="py-16 bg-white border-b border-gray-100">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
                    <button
                        onClick={() => setActiveChannel('local')}
                        className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold transition-all ${
                            activeChannel === 'local'
                                ? 'bg-[var(--color-bangla-accent)]/10 text-[var(--color-bangla-accent)] shadow-sm border border-[var(--color-bangla-accent)]/20'
                                : 'bg-gray-50 text-gray-400 hover:bg-gray-100'
                        }`}
                    >
                        <Hash className="w-5 h-5" />
                        <span className="font-bangla-heading text-lg">#local-builders</span>
                    </button>
                    <button
                        onClick={() => setActiveChannel('global')}
                        className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold transition-all ${
                            activeChannel === 'global'
                                ? 'bg-primary/10 text-primary shadow-sm border border-primary/20'
                                : 'bg-gray-50 text-gray-400 hover:bg-gray-100'
                        }`}
                    >
                        <Globe className="w-5 h-5" />
                        <span className="font-heading text-lg">#global-network</span>
                    </button>
                </div>

                <div className="bg-secondary/50 rounded-3xl p-8 md:p-12 border border-gray-100">
                    <AnimatePresence mode="wait">
                        {activeChannel === 'local' ? (
                            <motion.div
                                key="local"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="text-center max-w-2xl mx-auto"
                            >
                                <Users className="w-16 h-16 text-[var(--color-bangla-accent)] mx-auto mb-6 opacity-80" />
                                <h3 className="text-3xl font-bold font-bangla-heading text-primary mb-4">
                                    দেশের সেরা ডেভেলপারদের সাথে কানেক্ট করুন
                                </h3>
                                <p className="text-lg text-text/70 font-bangla-body leading-relaxed mb-8">
                                    লোকাল প্রজেক্টে কলাবোরেশন, স্টার্টআপ আইডিয়া শেয়ারিং, এবং সিনিয়র মেন্টরদের থেকে সরাসরি গাইডেন্স পাওয়ার জন্য ডেডিকেটেড চ্যানেল।
                                </p>
                                <div className="inline-flex items-center gap-2 text-[var(--color-bangla-accent)] font-bold bg-white px-6 py-3 rounded-xl shadow-sm border border-orange-50">
                                    <MessageSquare className="w-5 h-5" />
                                    Join Discord: Local
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="global"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="text-center max-w-2xl mx-auto"
                            >
                                <Globe className="w-16 h-16 text-primary mx-auto mb-6 opacity-80" />
                                <h3 className="text-3xl font-bold font-heading text-primary mb-4">
                                    Expand Your Global Reach
                                </h3>
                                <p className="text-lg text-text/70 leading-relaxed mb-8">
                                    Connect with international students, remote workers, and open-source contributors. Practice English communication and build a borderless network.
                                </p>
                                <div className="inline-flex items-center gap-2 text-primary font-bold bg-white px-6 py-3 rounded-xl shadow-sm border border-gray-50">
                                    <MessageSquare className="w-5 h-5" />
                                    Join Discord: Global
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
