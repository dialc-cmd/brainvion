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
import { Network, MessageSquare, Lightbulb, UsersRound } from 'lucide-react';

// Community REQUIREMENT [Brainvion]: [Explain the community vision regarding peer learning and tech discussions.]
// TECHNICAL IMPLEMENTATION: [Static page describing core values using AppCard grid for consistency.]
// QA/QC ADVISORY: [Ensure icons match the thematic content accurately and text is readable.]

export default function Community() {
    return (
        <>
            <Head>
                <title>Community | BrainVION</title>
                <meta name="description" content="What BrainVION is building: peer learning, tech discussions, and project collaboration." />
            </Head>

            <div className="bg-white py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">
                        Our Community Vision
                    </h1>
                    <p className="text-lg text-text/70 max-w-3xl mx-auto leading-relaxed">
                        BrainVION is more than spaces and learning resources. We are actively building an engaged network of ambitious students who understand that the future of work requires collaboration, continuous tech education, and networking.
                    </p>
                </div>
            </div>

            <div className="bg-secondary py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        <AppCard
                            title="Peer Learning"
                            description="Learn faster by teaching and being taught. Our community emphasizes knowledge sharing across domains, from IELTS preparation to advanced React patterns."
                            icon={<UsersRound className="w-6 h-6" />}
                            className="bg-white"
                        />
                        <AppCard
                            title="Tech Discussions"
                            description="Stay updated with the latest in AI, web development, and cloud computing through structured online and offline group discussions."
                            icon={<MessageSquare className="w-6 h-6" />}
                            className="bg-white"
                        />
                        <AppCard
                            title="Project Collaboration"
                            description="Find co-founders or project partners. Build your portfolio by contributing to real-world applications within the BrainVION network."
                            icon={<Lightbulb className="w-6 h-6" />}
                            className="bg-white"
                        />
                        <AppCard
                            title="Networking"
                            description="Connect with interns, university seniors, and industry professionals. Your network is your net worth."
                            icon={<Network className="w-6 h-6" />}
                            className="bg-white"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
