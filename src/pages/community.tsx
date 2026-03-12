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
import { Network, Code, Lightbulb, Target } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

// Community REQUIREMENT [Brainvion]: [Clearly communicate the values and vision of the student community, utilizing high-quality grid aesthetics.]
// TECHNICAL IMPLEMENTATION: [Mapped AppCard layout augmented with Framer Motion `whileInView` for progressive section loading.]
// QA/QC ADVISORY: [Ensure that the massive header text sizes scale down elegantly on smaller viewports.]

const fadeIn: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

export default function Community() {
    return (
        <>
            <Head>
                <title>Community Vision | BrainVION</title>
                <meta name="description" content="Discover the core vision and values behind the BrainVION student technology community in Dhaka." />
            </Head>

            {/* Vision Hero Segment */}
            <section className="bg-secondary text-primary py-24 lg:py-32 border-b border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                        }}
                    >
                        <motion.span variants={fadeIn} className="block text-accent font-bold tracking-widest uppercase mb-4 text-sm">
                            Our Mission
                        </motion.span>
                        <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading mb-8 tracking-tight">
                            Building Dhaka's Next Gen Tech Ecosystem
                        </motion.h1>
                        <motion.p variants={fadeIn} className="text-lg md:text-2xl text-text/80 leading-relaxed max-w-3xl mx-auto font-medium">
                            We aren't just another club. BrainVION is a structured network
                            dedicated to transitioning university students into highly capable,
                            internationally-standard engineers and remote workers.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Core Pillars */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeIn}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary mb-6">
                            The Four Pillars
                        </h2>
                        <p className="text-xl text-text/70 max-w-2xl mx-auto">
                            The foundation on which we host meetups, build projects, and run our Student House.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        <AppCard
                            delay={0.1}
                            title="Peer-to-Peer Learning"
                            description="Traditional university curriculums often lag behind industry reality. We fill the gap by learning directly from interns and junior devs who are currently in the trenches."
                            icon={<Network className="w-8 h-8" />}
                            className="bg-secondary/30"
                        />
                        <AppCard
                            delay={0.2}
                            title="Project-Based Focus"
                            description="Tutorial hell is real. We emphasize building actual, deployable products (like this platform) to build portfolios that stand out to Silicon Valley recruiters."
                            icon={<Code className="w-8 h-8" />}
                            className="bg-secondary/30"
                        />
                        <AppCard
                            delay={0.3}
                            title="Idea Incubation"
                            description="Have a startup idea? Bounce it off developers, designers, and business students in our network to find co-founders and early feedback."
                            icon={<Lightbulb className="w-8 h-8" />}
                            className="bg-secondary/30"
                        />
                        <AppCard
                            delay={0.4}
                            title="Outcome Oriented"
                            description="Whether the goal is a 7.5 on the IELTS to study abroad, or landing a remote Frontend internship, every meetup and resource is geared towards tangible results."
                            icon={<Target className="w-8 h-8" />}
                            className="bg-secondary/30"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
