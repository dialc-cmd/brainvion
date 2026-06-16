/**
 * @file LocalBuildersHub.tsx
 * @project BrainVION Tech Community Platform - Lean Architecture Update
 * @copyright (c) 2026 BrainVION & Dial Chowdhury Emon (@dialc-cmd)
 * @license Proprietary - All Rights Reserved.
 */

import { motion, Variants } from 'framer-motion';
import { Users } from 'lucide-react';

const fadeIn: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

export function LocalBuildersHub() {
    return (
        <section className="py-24 bg-[#FFF5F0] relative border-t border-gray-200/50">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl px-4 flex justify-center">
                <div className="h-px bg-gradient-to-r from-transparent via-[var(--color-bangla-accent)] to-transparent opacity-30 w-full" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.header
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeIn}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--color-bangla-accent)]/10 text-[var(--color-bangla-accent)] mb-6">
                        <Users className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold font-bangla-heading text-primary mb-6">
                        বাংলাদেশী বিল্ডার্স হাব
                    </h2>
                    <p className="text-xl text-text/80 max-w-2xl mx-auto font-bangla-body">
                        লোকাল ইকোসিস্টেমে যারা নতুন কিছু তৈরি করতে চান, তাদের জন্য একটি নিবেদিত প্ল্যাটফর্ম। 
                        স্টুডেন্ট লাইফ থেকেই প্রজেক্ট ভিত্তিক স্কিল ডেভেলপমেন্ট।
                    </p>
                </motion.header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.article variants={fadeIn} className="bg-white p-8 rounded-3xl shadow-sm border border-orange-100 hover:shadow-md transition-shadow">
                        <h3 className="font-bangla-heading text-2xl text-primary font-bold mb-4">রিয়েল-ওয়ার্ল্ড এক্সপেরিয়েন্স</h3>
                        <p className="font-bangla-body text-text/70 leading-relaxed">
                            শুধু বইয়ের পড়াশোনা নয়, লোকাল এবং গ্লোবাল ক্লায়েন্টদের রিয়েল-ওয়ার্ল্ড প্রজেক্টে কাজ করার মাধ্যমে অভিজ্ঞতা অর্জন করুন।
                        </p>
                    </motion.article>
                    <motion.article variants={fadeIn} className="bg-white p-8 rounded-3xl shadow-sm border border-orange-100 hover:shadow-md transition-shadow">
                        <h3 className="font-bangla-heading text-2xl text-primary font-bold mb-4">মুল ইকোসিস্টেম অ্যাক্সেস</h3>
                        <p className="font-bangla-body text-text/70 leading-relaxed">
                            মেন্টর, ইনভেস্টর এবং স্টার্টআপ ফাউন্ডারদের সাথে সরাসরি নেটওয়ার্কিং করার সুযোগ, যা আপনার ক্যারিয়ারকে এক ধাপ এগিয়ে নিবে।
                        </p>
                    </motion.article>
                    <motion.article variants={fadeIn} className="bg-white p-8 rounded-3xl shadow-sm border border-orange-100 hover:shadow-md transition-shadow">
                        <h3 className="font-bangla-heading text-2xl text-primary font-bold mb-4">ক্যারিয়ার বুটক্যাম্প</h3>
                        <p className="font-bangla-body text-text/70 leading-relaxed">
                            ফ্রন্টএন্ড, ব্যাকএন্ড থেকে শুরু করে ডিজিটাল মার্কেটিং—আমাদের স্পেশালাইজড বুটক্যাম্পগুলোতে জয়েন করে নিজেকে প্রস্তুত করুন।
                        </p>
                    </motion.article>
                </div>
            </div>
        </section>
    );
}
