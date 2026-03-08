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
import { LINKS } from '@/lib/constants';
import { Facebook, MessageCircle, Mail, MapPin } from 'lucide-react';

// Community REQUIREMENT [Brainvion]: [A dedicated contact page displaying social links and Whatsapp number clearly.]
// TECHNICAL IMPLEMENTATION: [Static layout mapping connection constants to interactive cards.]
// QA/QC ADVISORY: [Clickability of entire cards and hover states must guide user correctly to respective apps.]

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact Us | BrainVION</title>
                <meta name="description" content="Get in touch with the BrainVION team via WhatsApp, Facebook, or Email." />
            </Head>

            <div className="bg-secondary min-h-[calc(100vh-4rem)] py-16 sm:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-4">
                            Get in Touch
                        </h1>
                        <p className="text-lg text-text/70 max-w-2xl mx-auto">
                            Have questions about the community, looking for a seat in the student house, or want to partner with us? Reach out.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* WhatsApp */}
                        <a
                            href={LINKS.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-accent/40 transition-all text-left"
                        >
                            <div className="h-14 w-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
                                <MessageCircle className="w-7 h-7" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold font-heading text-primary group-hover:text-accent transition-colors">WhatsApp</h3>
                                <p className="text-text/60 mt-1">Fastest way to reach us</p>
                            </div>
                        </a>

                        {/* Facebook */}
                        <a
                            href={LINKS.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-300 transition-all text-left"
                        >
                            <div className="h-14 w-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
                                <Facebook className="w-7 h-7" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold font-heading text-primary group-hover:text-blue-600 transition-colors">Facebook Page</h3>
                                <p className="text-text/60 mt-1">Updates & Community</p>
                            </div>
                        </a>

                        {/* Email */}
                        <a
                            href={LINKS.email}
                            className="group flex items-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-300 transition-all text-left"
                        >
                            <div className="h-14 w-14 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
                                <Mail className="w-7 h-7" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold font-heading text-primary">Email Us</h3>
                                <p className="text-text/60 mt-1">For official queries</p>
                            </div>
                        </a>

                        {/* Location */}
                        <div className="flex items-center p-6 bg-primary text-secondary rounded-2xl shadow-sm text-left">
                            <div className="h-14 w-14 rounded-full bg-secondary/10 flex items-center justify-center mr-6">
                                <MapPin className="w-7 h-7 text-accent" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold font-heading text-white">Location</h3>
                                <p className="text-secondary/80 mt-1 text-sm">Shukrabad (Near Dhanmondi)<br />Dhaka, Bangladesh</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}
