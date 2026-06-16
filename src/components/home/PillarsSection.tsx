/**
 * @file PillarsSection.tsx
 * @project BrainVION Tech Community Platform - Lean Architecture Update
 * @copyright (c) 2026 BrainVION & Dial Chowdhury Emon (@dialc-cmd)
 * @license Proprietary - All Rights Reserved.
 */

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { BookOpen, Users, TrendingUp, Briefcase } from 'lucide-react';
import { PillarCard } from '@/components/cards/PillarCard';

const BRAINVION_PILLARS = [
    {
        icon: BookOpen,
        title: "Tech Learning",
        description: "Master the latest technologies through peer-led sessions and hands-on projects.",
        stat: "12+",
        statLabel: "Learning tracks available",
        detail: "From Python to cloud deployment, our structured tracks guide you step by step — whether you're a complete beginner or levelling up.",
        color: "bg-accent/10 text-primary",
    },
    {
        icon: Users,
        title: "Student Collaboration",
        description: "Work together with university students and interns on real-world problems.",
        stat: "200+",
        statLabel: "Active community members",
        detail: "Weekly study circles, project teams, and peer review sessions ensure you never learn alone.",
        color: "bg-primary/5 text-primary",
    },
    {
        icon: TrendingUp,
        title: "Career Growth",
        description: "Prepare for the future of work, whether it's remote roles or local internships.",
        stat: "85%",
        statLabel: "Members placed within 6 months",
        detail: "Mock interviews, CV workshops, and a curated job board tailored to Dhaka's growing tech ecosystem.",
        color: "bg-emerald-50 text-primary",
    },
    {
        icon: Briefcase,
        title: "Real Opportunities",
        description: "Connect with alumni, startups, and mentors who can help launch your career.",
        stat: "40+",
        statLabel: "Partner companies & startups",
        detail: "Our alumni network spans local agencies and global remote teams — your next opportunity is a connection away.",
        color: "bg-purple-50 text-primary",
    },
];

const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function PillarsSection() {
    const [activePillar, setActivePillar] = useState<number | null>(null);

    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeIn}
                    className="text-center mb-16 md:mb-20"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-primary">
                        What is BrainVION?
                    </h2>
                    <p className="mt-6 text-text/70 max-w-2xl mx-auto text-lg leading-relaxed">
                        We are building a robust ecosystem to empower students across Dhaka with the tools, space, and network they need to succeed in the modern tech economy.
                    </p>
                    <p className="mt-3 text-sm text-text/40 font-medium">Click any card to learn more →</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {BRAINVION_PILLARS.map((pillar, i) => (
                        <PillarCard
                            key={pillar.title}
                            pillar={pillar}
                            isActive={activePillar === i}
                            onClick={() => setActivePillar(activePillar === i ? null : i)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
