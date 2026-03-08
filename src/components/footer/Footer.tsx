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

import Link from 'next/link';
import { LINKS } from '@/lib/constants';
import { Facebook, MessageCircle, Mail } from 'lucide-react';

// Community REQUIREMENT [Brainvion]: [A footer summarizing the community and linking to social/apply actions.]
// TECHNICAL IMPLEMENTATION: [Standard semantic footer setup utilizing Tailwind flex grids.]
// QA/QC ADVISORY: [Verify link accessibility and visual contrast against the dark minimal background.]

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-primary text-secondary py-12 border-t border-primary/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Brand & Vision */}
                    <div className="space-y-4">
                        <div className="bg-white/95 p-2 rounded-lg inline-block w-fit">
                            <img src="/logo/logo.png" alt="BrainVION Logo" className="h-8 md:h-10 w-auto object-contain drop-shadow-sm" />
                        </div>
                        <p className="text-sm text-secondary/80 max-w-xs leading-relaxed">
                            A student tech community connecting learners, university students, and future remote workers.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4 text-white">Platform</h4>
                        <ul className="space-y-2 text-sm text-secondary/80">
                            <li>
                                <Link href="/community" className="hover:text-accent transition-colors">
                                    Community Vision
                                </Link>
                            </li>
                            <li>
                                <Link href="/learning" className="hover:text-accent transition-colors">
                                    Learning Hub
                                </Link>
                            </li>
                            <li>
                                <Link href="/house" className="hover:text-accent transition-colors">
                                    Student House
                                </Link>
                            </li>
                            <li>
                                <Link href="/apply" className="hover:text-accent transition-colors">
                                    Apply for Seat
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4 text-white">Connect</h4>
                        <div className="flex space-x-4 mb-4">
                            <a href={LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-secondary/80 hover:text-accent transition-colors" aria-label="Facebook">
                                <Facebook className="h-6 w-6" />
                            </a>
                            <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="text-secondary/80 hover:text-accent transition-colors" aria-label="WhatsApp">
                                <MessageCircle className="h-6 w-6" />
                            </a>
                            <a href={LINKS.email} className="text-secondary/80 hover:text-accent transition-colors" aria-label="Email">
                                <Mail className="h-6 w-6" />
                            </a>
                        </div>
                        <p className="text-sm text-secondary/80">
                            Shukrabad, Near Dhanmondi<br />
                            Dhaka, Bangladesh
                        </p>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-secondary/10 flex flex-col md:flex-row justify-between items-center text-xs text-secondary/60">
                    <p>© {year} BrainVion. All Rights Reserved.</p>
                    <p className="mt-2 md:mt-0">Built by @dialc.official</p>
                </div>
            </div>
        </footer>
    );
}
