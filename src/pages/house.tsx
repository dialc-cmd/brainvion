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
import { MapPin, Wifi, Zap, UsersRound, Coffee, Shield } from 'lucide-react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

// Community REQUIREMENT [Brainvion]: [A high-conversion landing page specifically for filling seats at the physical Student House. Needs to feel incredibly premium, like a tech incubator.]
// TECHNICAL IMPLEMENTATION: [Framer Motion stagger animations applied to lists. Sticky apply CTA created.]
// QA/QC ADVISORY: [Ensure the fixed bottom CTA on mobile doesn't overlap crucial text. Verify icon alignments.]

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const mapCardAnimation: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function StudentHouse() {
    return (
        <>
            <Head>
                <title>Student House | BrainVION</title>
                <meta name="description" content="Premium student accommodation focused on tech learning and networking in Shukrabad, Dhaka." />
            </Head>

            {/* Premium Hero */}
            <section className="bg-primary text-secondary py-20 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,229,255,0.1)_0,transparent_50%)] pointer-events-none" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent font-semibold text-sm mb-6 border border-accent/30 tracking-wide uppercase">
                            Now Accepting Applications
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 tracking-tight">
                            The Incubator for Your <span className="text-accent">Future</span>
                        </h1>
                        <p className="text-lg md:text-xl text-secondary/80 max-w-2xl mx-auto leading-relaxed">
                            More than just a flat. The BrainVION Student House in Shukrabad is a focused living space for tech learners, interns, and ambitious university students.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Core Facilities Grid */}
            <section className="py-20 md:py-28 bg-secondary border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                    >
                        {[
                            { icon: <Zap className="w-6 h-6" />, title: "Uninterrupted Power", desc: "Constant electricity to keep your dev servers and study sessions running smoothly." },
                            { icon: <Wifi className="w-6 h-6" />, title: "High-Speed Fiber", desc: "Premium internet connectivity designed for remote interns and heavy code pushes." },
                            { icon: <Coffee className="w-6 h-6" />, title: "Filtered Water & Meals", desc: "Safe, clean drinking water and structured meal arrangements." },
                            { icon: <Shield className="w-6 h-6" />, title: "Secure Environment", desc: "Safe building and neighborhood, giving peace of mind to focus on growth." },
                            { icon: <MapPin className="w-6 h-6" />, title: "Prime Location", desc: "Located in Shukrabad, walking distance to major Dhanmondi universities and hubs." },
                            { icon: <UsersRound className="w-6 h-6" />, title: "Like-minded Peers", desc: "Live with other ambitious students. Network, build projects, and study together." }
                        ].map((facility, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)" }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-150 transition-all group"
                            >
                                <div className="w-14 h-14 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {facility.icon}
                                </div>
                                <h3 className="text-2xl font-bold font-heading text-primary mb-3">{facility.title}</h3>
                                <p className="text-text/80 leading-relaxed text-lg">{facility.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Location & Details */}
            <section className="py-20 md:py-28 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-primary mb-6">
                                The Shukrabad Hub
                            </h2>
                            <p className="text-text/80 text-lg leading-relaxed mb-8">
                                Shukrabad is the strategic center for students in Dhaka. By living here, you eliminate brutal commute times, giving you back hours every day to code, study, or rest.
                            </p>

                            <ul className="space-y-6">
                                {[
                                    { text: "Walking distance to Dhanmondi campus zones", highlight: "5-10 mins" },
                                    { text: "Central access to tech meetups and workspaces", highlight: "Easy commute" },
                                    { text: "Surrounded by affordable student amenities", highlight: "Cost effective" }
                                ].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        whileHover={{ x: 10 }}
                                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors"
                                    >
                                        <div className="mt-1 bg-accent/20 p-1.5 rounded-full flex-shrink-0">
                                            <div className="w-2.5 h-2.5 bg-accent rounded-full" />
                                        </div>
                                        <div>
                                            <p className="text-text font-medium">{item.text}</p>
                                            <span className="text-sm font-bold text-primary">{item.highlight}</span>
                                        </div>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Visual Map Placeholder Card */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={mapCardAnimation}
                            className="bg-secondary p-8 md:p-12 rounded-3xl border border-gray-200 shadow-xl relative overflow-hidden"
                        >
                            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply pointer-events-none" />
                            <div className="relative z-10 text-center">
                                <div className="w-24 h-24 bg-white shadow-lg text-primary rounded-full flex items-center justify-center mx-auto mb-8 relative">
                                    <MapPin className="w-10 h-10" />
                                    <div className="absolute inset-0 rounded-full border-4 border-accent animate-ping opacity-20" />
                                </div>
                                <h3 className="text-3xl font-bold font-heading text-primary mb-4">Location</h3>
                                <p className="text-text text-xl mb-2 font-medium">Shukrabad (Adjacent to Dhanmondi)</p>
                                <p className="text-text/60">Dhaka, Bangladesh</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Massive Apply CTA */}
            <section className="py-24 bg-primary text-center px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeUp}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
                        Ready to Join?
                    </h2>
                    <p className="text-xl text-secondary/80 mb-12">
                        Seats are highly limited and prioritize university students and active tech learners. Submit your application today.
                    </p>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                        <Link
                            href="/apply"
                            className="bg-accent text-primary px-12 py-5 rounded-xl font-bold text-lg shadow-[0_0_40px_-5px_rgba(0,229,255,0.4)] hover:shadow-[0_0_60px_0px_rgba(0,229,255,0.6)] transition-all flex items-center gap-3"
                        >
                            Apply Now
                            <span className="text-xl">&rarr;</span>
                        </Link>
                    </motion.div>
                </motion.div>
            </section>
        </>
    );
}
