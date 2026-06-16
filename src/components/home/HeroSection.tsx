/**
 * @file HeroSection.tsx
 * @project BrainVION Tech Community Platform - Lean Architecture Update
 * @copyright (c) 2026 BrainVION & Dial Chowdhury Emon (@dialc-cmd)
 * @license Proprietary - All Rights Reserved.
 */

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import AnimatedLogo from '@/components/navbar/AnimatedLogo';

const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export function HeroSection() {
    return (
        <section className="relative bg-secondary overflow-hidden py-24 lg:py-32 xl:py-40 flex items-center min-h-[85vh] bilingual-bridge">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-accent/20 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-primary/10 blur-[80px] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                    <motion.h1 variants={fadeIn} className="flex justify-center mb-6 scale-125 md:scale-150 transform origin-center">
                        <AnimatedLogo />
                    </motion.h1>
                    
                    <motion.div variants={fadeIn} className="mt-12 md:mt-16 max-w-4xl mx-auto">
                        <h2 className="font-bangla-heading text-4xl md:text-5xl lg:text-6xl text-primary font-bold leading-tight mb-6 tracking-tight">
                            স্কিল ডেভেলপমেন্ট এবং <span className="text-accent bg-primary px-4 py-1 rounded-xl inline-block mt-2">রিমোট জব</span> — সবকিছুর শুরু BrainVION থেকে
                        </h2>
                        <p className="font-bangla-body text-lg md:text-xl lg:text-2xl text-text/80 leading-relaxed max-w-3xl mx-auto mb-10">
                            বাংলাদেশের সবচেয়ে প্র্যাকটিক্যাল Tech Community। শুধুমাত্র টিউটোরিয়াল নয়, রিয়েল প্রজেক্ট, স্কিল ডেভেলপমেন্ট এবং গ্লোবাল ক্যারিয়ার গাইডেন্সের জন্য আমাদের এই ইনিশিয়েটিভ।
                        </p>
                    </motion.div>

                    <motion.div variants={fadeIn} className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-8">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                            <Link href="/community" className="block w-full sm:w-auto px-8 py-4 border border-primary text-secondary bg-primary hover:bg-primary/90 font-bangla-heading font-bold text-lg rounded-xl transition-all shadow-lg hover:shadow-xl focus:ring-2 focus:ring-primary focus:ring-offset-2">
                                কমিউনিটিতে যুক্ত হোন
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                            <Link href="/learning" className="block w-full sm:w-auto px-8 py-4 border border-primary/20 text-primary bg-white/50 backdrop-blur-sm hover:bg-white/80 font-bangla-heading font-bold text-lg rounded-xl transition-all shadow-sm hover:shadow-md focus:ring-2 focus:ring-primary focus:ring-offset-2">
                                রিসোর্স এক্সপ্লোর করুন
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
