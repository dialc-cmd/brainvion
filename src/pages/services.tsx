/**
 * @file services.tsx
 * @project BrainVION Tech Community Platform - Services Engine
 * @copyright (c) 2026 BrainVION & Dial Chowdhury Emon (@dialc-cmd)
 * @license Proprietary - All Rights Reserved.
 * @compliance Cyber Ethics, Data Integrity, and Bangladesh Digital Security Acts.
 * Maintain Trademark Enforcements: @brainvion
 */

'use client';

import { useState, useCallback } from 'react';
import Head from 'next/head';
import { motion, Variants } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import ServiceGigCard from '@/components/cards/ServiceGigCard';
import dynamic from 'next/dynamic';
import { TECH_SERVICES } from '@/data/services';

// Dynamically import the heavy AppointmentModal to save memory and reduce initial JS bundle
const AppointmentModal = dynamic(() => import('@/components/modals/AppointmentModal'), {
    ssr: false, // Don't render on server to save memory
});
import type { ServiceSlug } from '@/lib/types';

// Community REQUIREMENT [Brainvion]: [A premium 5-grid services marketplace that drives B2B/B2C lead capture through contextual appointment booking.]
// TECHNICAL IMPLEMENTATION: [Parent page manages isModalOpen + activeServiceSelection state. Grid uses CSS grid with responsive breakpoints. ServiceGigCards forward their slug to the modal via callback.]
// QA/QC ADVISORY: [Ensure grid gracefully collapses on mobile (1-col) and tablet (2-col). Verify modal receives the correct activeService slug on every card click.]

const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function ServicesPage() {
    // Context: Track which service the user wants to book, and whether the modal is visible.
    // Algorithm: `activeServiceSelection` is set by the ServiceGigCard callback and injected into the modal's <select>. `isModalOpen` gates the modal's AnimatePresence.
    // Junior Engineer Guidance: Both states live here (not in the modal) because the parent orchestrates the data flow from card → modal. Never move these into the modal component.
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeServiceSelection, setActiveServiceSelection] = useState<ServiceSlug | null>(null);

    const handleBookAppointment = useCallback((slug: ServiceSlug) => {
        setActiveServiceSelection(slug);
        setIsModalOpen(true);
    }, []);

    const handleCloseModal = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    return (
        <>
            <Head>
                <title>Services | BrainVION</title>
                <meta
                    name="description"
                    content="BrainVION's professional services. Digital marketing, web architecture, and study abroad support. বাংলাদেশের স্টার্টআপ ও স্টুডেন্টদের জন্য গ্লোবাল মানের সার্ভিস।"
                />
            </Head>

            {/* ── Hero Section ── */}
            <section className="relative bg-white overflow-hidden py-20 lg:py-28">
                {/* Decorative gradients */}
                <div className="absolute top-0 right-0 -mr-24 -mt-24 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 rounded-full bg-primary/5 blur-[80px] pointer-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="text-center md:text-left max-w-4xl"
                    >
                        <motion.div variants={fadeIn} className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-bold mb-6 font-heading">
                            <Sparkles className="w-4 h-4" />
                            গ্লোবাল সার্ভিস, লোকাল ইম্প্যাক্ট
                        </motion.div>

                        <motion.h1
                            variants={fadeIn}
                            className="text-4xl md:text-5xl lg:text-7xl font-bold font-bangla-heading text-primary mb-6 tracking-tight leading-tight"
                        >
                            আপনার বিজনেসের জন্য <br className="hidden md:block"/>
                            <span className="text-[var(--color-bangla-accent)]">স্কেলেবল সল্যুশন</span>
                        </motion.h1>

                        <motion.p
                            variants={fadeIn}
                            className="text-lg md:text-2xl text-text/70 font-bangla-body leading-relaxed max-w-3xl"
                        >
                            ব্র্যান্ড স্ট্র্যাটেজি থেকে শুরু করে প্রোডাকশন-গ্রেড ব্যাকএন্ড আর্কিটেকচার — আমাদের এক্সপার্ট টিম সাউথ এশিয়ান স্টার্টআপ এবং এন্টারপ্রাইজগুলোর জন্য তৈরি করে রিলায়েবল টেক সল্যুশন।
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* ── Services Grid ── */}
            <section className="py-20 lg:py-28 bg-secondary/50 border-y border-gray-100/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                    >
                        {TECH_SERVICES.map((service, index) => (
                            <motion.div key={service.id} variants={fadeIn}>
                                <ServiceGigCard
                                    service={service}
                                    onBookAppointment={handleBookAppointment}
                                    delay={index * 0.08}
                                />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Bottom CTA hint */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-center mt-14 text-text/40 text-sm font-medium"
                    >
                        Click <span className="text-primary font-semibold">"Book an Appointment"</span> on any card to get started →
                    </motion.p>
                </div>
            </section>

            {/* ── Appointment Modal ── */}
            <AppointmentModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                activeService={activeServiceSelection}
            />
        </>
    );
}
