/**
 * @file GlobalStandards.tsx
 * @project BrainVION Tech Community Platform - Lean Architecture Update
 * @copyright (c) 2026 BrainVION & Dial Chowdhury Emon (@dialc-cmd)
 * @license Proprietary - All Rights Reserved.
 */

import { motion, Variants } from 'framer-motion';
import { Network, Code, Lightbulb, Target, Globe } from 'lucide-react';
import AppCard from '@/components/cards/AppCard';

const fadeIn: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

export function GlobalStandards() {
    return (
        <section className="py-24 bg-white relative bilingual-bridge">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.header
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeIn}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/5 text-primary mb-6">
                        <Globe className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary mb-6">
                        Global Tech Standards
                    </h2>
                    <p className="text-xl text-text/70 max-w-2xl mx-auto">
                        The foundation on which we host meetups, build projects, and run our network.
                    </p>
                </motion.header>

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
    );
}
