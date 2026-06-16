/**
 * @file LocalServicesSection.tsx
 * @project BrainVION Tech Community Platform - Lean Architecture Update
 * @copyright (c) 2026 BrainVION & Dial Chowdhury Emon (@dialc-cmd)
 * @license Proprietary - All Rights Reserved.
 */

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function LocalServicesSection() {
    return (
        <section className="py-20 bg-white border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                 <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeIn}
                >
                    <h3 className="font-bangla-heading text-2xl md:text-3xl text-primary font-bold mb-4">
                        শিক্ষার্থীদের জন্য আমাদের বিশেষ <span className="text-[var(--color-bangla-accent)]">Micro-Services</span>
                    </h3>
                    <p className="font-bangla-body text-text/70 text-lg max-w-2xl mx-auto mb-8">
                        পোর্টফোলিও বিল্ডিং, স্টাডি অ্যাব্রড গাইডেন্স এবং ফ্রিল্যান্সিং সাপোর্টের জন্য আমাদের এক্সপার্ট প্যানেল সবসময় আপনার পাশে আছে।
                    </p>
                    <Link href="/services" className="inline-flex items-center text-primary font-bold font-bangla-heading hover:text-[var(--color-bangla-accent)] transition-colors group">
                        সব সার্ভিস দেখুন <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
