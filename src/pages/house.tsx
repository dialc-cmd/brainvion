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
import { MapPin, Wifi, BookOpen, Coffee, UsersRound } from 'lucide-react';

// Community REQUIREMENT [Brainvion]: [A high-priority conversion page to fill available flat seats in Shukrabad.]
// TECHNICAL IMPLEMENTATION: [Vertical scrolling landing page focused on housing benefits. Heavy CTA presence.]
// QA/QC ADVISORY: [Ensure location details and apply buttons are highly prominent on mobile breakpoints.]

export default function StudentHouse() {
    return (
        <>
            <Head>
                <title>Student House | BrainVION</title>
                <meta name="description" content="Apply for a seat at the BrainVION Student House in Shukrabad, Dhaka." />
            </Head>

            {/* Hero */}
            <section className="bg-primary text-secondary py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 tracking-tight">
                        BrainVION <span className="text-accent text-glow">Student House</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-secondary/80 max-w-3xl mx-auto mb-10 leading-relaxed font-body">
                        A quiet, premium, and community-driven living space for ambitious students.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Link
                            href="/apply"
                            className="w-full sm:w-auto px-8 py-4 bg-accent text-primary font-bold rounded-lg shadow-lg hover:bg-accent/90 focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-transform hover:-translate-y-1"
                        >
                            Apply for a Seat Now
                        </Link>
                    </div>
                </div>
            </section>

            {/* Location & Details */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-secondary p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 mb-16">
                        <div className="flex items-center gap-4 mb-6 text-primary">
                            <MapPin className="w-8 h-8 text-accent" />
                            <h2 className="text-3xl font-bold font-heading">Prime Location</h2>
                        </div>
                        <p className="text-lg text-text/80 leading-relaxed">
                            Located strategically in <strong>Shukrabad (near Dhanmondi)</strong>, offering easy access to major universities, tech hubs, and daily necessities. The perfect balance between connectivity and peace.
                        </p>
                    </div>

                    <h2 className="text-3xl font-bold font-heading text-center text-primary mb-12">
                        Why live with us?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex gap-4">
                            <div className="mt-1 bg-primary/10 p-3 rounded-full h-12 w-12 flex-shrink-0 flex items-center justify-center text-primary">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-primary mb-2">Student Friendly</h3>
                                <p className="text-text/70">A culture built specifically for learners. No distractions, just an environment that respects study hours and focus.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="mt-1 bg-primary/10 p-3 rounded-full h-12 w-12 flex-shrink-0 flex items-center justify-center text-primary">
                                <Wifi className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-primary mb-2">High-Speed Connectivity</h3>
                                <p className="text-text/70">Reliable, fast internet access essential for online classes, downloading resources, or remote work.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="mt-1 bg-primary/10 p-3 rounded-full h-12 w-12 flex-shrink-0 flex items-center justify-center text-primary">
                                <Coffee className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-primary mb-2">Quiet Environment</h3>
                                <p className="text-text/70">Carefully curated housemates ensure a quiet living space where you can actually hear yourself think (and code).</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="mt-1 bg-primary/10 p-3 rounded-full h-12 w-12 flex-shrink-0 flex items-center justify-center text-primary">
                                <UsersRound className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-primary mb-2">Exclusive Network</h3>
                                <p className="text-text/70">Live with peers who share your ambition. House members get first access to BrainVION community events.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-20 bg-secondary border-t border-gray-200 text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold font-heading text-primary mb-6">Ready to move in?</h2>
                    <p className="text-text/70 mb-8">Seats are highly limited and fill up fast. Use the form below to submit your application.</p>
                    <Link
                        href="/apply"
                        className="inline-block px-10 py-4 bg-primary text-secondary font-bold rounded-lg shadow-md hover:bg-primary/90 transition-colors"
                    >
                        Go to Application Form
                    </Link>
                </div>
            </section>
        </>
    );
}
