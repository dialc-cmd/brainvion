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
import { Mail, MessageCircle, MapPin, Facebook } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

// Community REQUIREMENT [Brainvion]: [Direct and immediate contact avenues. Since MVP has no backend, social redirects are heavily utilized.]
// TECHNICAL IMPLEMENTATION: [Framer Motion for card scale on hover. Specific brand colors utilized for massive CTA interactive buttons.]
// QA/QC ADVISORY: [Ensure `href` links correctly target blank pages where appropriate to avoid losing session state.]

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact | BrainVION</title>
                <meta name="description" content="Get in touch with the BrainVION community leaders." />
            </Head>

            <div className="bg-white min-h-[90vh] py-20 lg:py-32 relative overflow-hidden">
                {/* Visual Graphic */}
                <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-secondary/50 to-transparent pointer-events-none transform skew-x-12 translate-x-32" />

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                        }}
                        className="text-center md:text-left mb-16"
                    >
                        <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold font-heading text-primary mb-6">
                            Let's Connect.
                        </motion.h1>
                        <motion.p variants={fadeUp} className="text-xl md:text-2xl text-text/70 max-w-2xl leading-relaxed">
                            Have questions about the Student House, tech meetups, or community projects? Reach out directly.
                        </motion.p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {/* WhatsApp Card */}
                        <motion.a
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                            href="https://wa.me/8801700000000" // Replace with real 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white border-2 border-green-100 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:border-green-400 transition-all group flex items-start gap-6"
                        >
                            <div className="w-16 h-16 bg-green-50 text-green-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-green-500 group-hover:text-white transition-all">
                                <MessageCircle className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">WhatsApp</h3>
                                <p className="text-gray-500 text-lg">Fastest way to reach the community admins directly.</p>
                            </div>
                        </motion.a>

                        {/* Facebook Group Card */}
                        <motion.a
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                            href="https://facebook.com/groups/brainvion" // Replace with real
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white border-2 border-blue-100 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:border-blue-500 transition-all group flex items-start gap-6"
                        >
                            <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                <Facebook className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Facebook Group</h3>
                                <p className="text-gray-500 text-lg">Join discussions, see meetup photos, and participate in polls.</p>
                            </div>
                        </motion.a>

                        {/* Email Card */}
                        <motion.a
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                            href="mailto:brainvion.community@gmail.com"
                            className="bg-white border-2 border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:border-gray-800 transition-all group flex items-start gap-6"
                        >
                            <div className="w-16 h-16 bg-gray-50 text-gray-700 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                <Mail className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Email Us</h3>
                                <p className="text-gray-500 text-lg">brainvion.community@gmail.com</p>
                            </div>
                        </motion.a>

                        {/* Location Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                            className="bg-white border-2 border-accent/20 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:border-accent transition-all group flex items-start gap-6"
                        >
                            <div className="w-16 h-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                <MapPin className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Physical Hub</h3>
                                <p className="text-gray-500 text-lg">Shukrabad, Near Dhanmondi 32<br />Dhaka, Bangladesh</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}
