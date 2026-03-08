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
import Link from 'next/link';
import AppCard from '@/components/cards/AppCard';
import { BookOpen, Users, TrendingUp, Briefcase } from 'lucide-react';

// Community REQUIREMENT [Brainvion]: [A high-conversion landing page explaining the vision and pushing immediate seat filling/community join.]
// TECHNICAL IMPLEMENTATION: [Static page using SSG. Linear/Stripe inspired minimal layout with distinct semantic sections.]
// QA/QC ADVISORY: [Verify hero height and mobile padding to ensure visual balance on small screens.]

export default function Home() {
    return (
        <>
            <Head>
                <title>BrainVION | A Student Tech Community</title>
                <meta name="description" content="A friendly place where students learn technology, build skills, and grow together." />
            </Head>

            {/* Hero Section */}
            <section className="relative bg-secondary overflow-hidden py-24 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-primary tracking-tight mb-6">
                        BrainVION
                        <span className="block text-2xl md:text-3xl lg:text-4xl text-text/80 mt-4 font-body font-medium">
                            A Student Tech Community
                        </span>
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-text/70 leading-relaxed mb-10">
                        A friendly place where students learn technology, build skills, and grow together.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Link
                            href="/community"
                            className="w-full sm:w-auto px-8 py-3.5 border border-primary text-primary bg-transparent hover:bg-primary/5 font-semibold rounded-lg transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        >
                            Join Community
                        </Link>
                        <Link
                            href="/house"
                            className="w-full sm:w-auto px-8 py-3.5 bg-primary text-secondary hover:bg-primary/90 font-semibold rounded-lg shadow-sm transition-all focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        >
                            Find a Seat
                        </Link>
                    </div>
                </div>
            </section>

            {/* What is BrainVION */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary">
                            What is BrainVION?
                        </h2>
                        <p className="mt-4 text-text/70 max-w-2xl mx-auto">
                            We are building a robust ecosystem to empower students across Dhaka with the tools, space, and network they need to succeed in the modern tech economy.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <AppCard
                            title="Tech Learning"
                            description="Master the latest technologies through peer-led sessions and hands-on projects."
                            icon={<BookOpen className="w-6 h-6" />}
                        />
                        <AppCard
                            title="Student Collaboration"
                            description="Work together with university students and interns on real-world problems."
                            icon={<Users className="w-6 h-6" />}
                        />
                        <AppCard
                            title="Career Growth"
                            description="Prepare for the future of work, whether it's remote roles or local internships."
                            icon={<TrendingUp className="w-6 h-6" />}
                        />
                        <AppCard
                            title="Real Opportunities"
                            description="Connect with alumni, startups, and mentors who can help launch your career."
                            icon={<Briefcase className="w-6 h-6" />}
                        />
                    </div>
                </div>
            </section>

            {/* Our Community */}
            <section className="py-20 bg-secondary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-12">
                        Who is this for?
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        {['University Students', 'Interns', 'Tech Learners', 'IELTS Candidates'].map((audience) => (
                            <div key={audience} className="bg-white px-6 py-3 rounded-full shadow-sm text-primary font-medium text-lg border border-primary/10">
                                {audience}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Learning Hub Preview */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary">
                                Learning Hub
                            </h2>
                            <p className="mt-2 text-text/70">Insights, guides, and tech resources.</p>
                        </div>
                        <Link href="/learning" className="hidden md:inline-flex text-primary font-semibold hover:text-accent transition-colors">
                            View all articles &rarr;
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <AppCard
                            title="Best Laptop for Students"
                            description="A comprehensive guide to picking the right machine for coding, design, and daily college tasks."
                        />
                        <AppCard
                            title="AI Tools for Study"
                            description="How to leverage AI to learn faster, summarize better, and boost your university grades."
                        />
                        <AppCard
                            title="Programming Beginner Guide"
                            description="Where to start your coding journey in 2026. Languages, roadmaps, and free resources."
                        />
                    </div>
                    <div className="mt-8 text-center md:hidden">
                        <Link href="/learning" className="inline-flex text-primary font-semibold hover:text-accent transition-colors">
                            View all articles &rarr;
                        </Link>
                    </div>
                </div>
            </section>

            {/* Student House CTA */}
            <section className="py-20 bg-primary text-secondary">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                        BrainVION Student House
                    </h2>
                    <p className="text-lg md:text-xl text-secondary/80 mb-10 leading-relaxed">
                        Located in Shukrabad near Dhanmondi, our student house offers a quiet, student-friendly environment designed for focused learning and living.
                    </p>
                    <Link
                        href="/house"
                        className="inline-block px-8 py-4 bg-accent text-primary font-bold rounded-lg shadow-lg hover:bg-accent/90 focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-all"
                    >
                        Apply for a Seat
                    </Link>
                </div>
            </section>
        </>
    );
}
