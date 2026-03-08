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
import { ExternalLink } from 'lucide-react';

// Community REQUIREMENT [Brainvion]: [A simple bridge page that directs users to the Google Form application for seats.]
// TECHNICAL IMPLEMENTATION: [Static page with a strong CTA button linking to exterior Google form.]
// QA/QC ADVISORY: [Ensure target="_blank" is used for the external form to prevent losing the PWA context.]

export default function Apply() {
    return (
        <>
            <Head>
                <title>Apply | BrainVION</title>
                <meta name="description" content="Apply to join the BrainVION student house or community." />
            </Head>

            <div className="flex-grow flex items-center justify-center py-20 px-4 sm:px-6">
                <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center space-y-8">

                    <div className="space-y-3">
                        <h1 className="text-3xl font-bold font-heading text-primary">Apply Now</h1>
                        <p className="text-text/70">
                            We manage all student house and community applications through a secure Google Form.
                        </p>
                    </div>

                    <div className="py-6 border-y border-gray-100">
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-text/50 mb-4">Requirements</h2>
                        <ul className="text-left text-sm text-text/80 space-y-2">
                            <li className="flex items-start"><span className="text-accent mr-2">✓</span> Currently enrolled university student or intern</li>
                            <li className="flex items-start"><span className="text-accent mr-2">✓</span> Commitment to a quiet learning environment</li>
                            <li className="flex items-start"><span className="text-accent mr-2">✓</span> Valid ID verification</li>
                        </ul>
                    </div>

                    <a
                        href={LINKS.form}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex justify-center items-center gap-2 px-6 py-4 bg-primary text-secondary font-bold rounded-lg hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all shadow-md group"
                    >
                        Apply via Google Form
                        <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <p className="text-xs text-text/40">
                        Clicking this button will open a new tab to Google Forms.
                    </p>
                </div>
            </div>
        </>
    );
}
