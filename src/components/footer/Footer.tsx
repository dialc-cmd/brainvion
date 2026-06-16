/**
 * @file Footer.tsx
 * @project BrainVION Tech Community Platform - Bilingual Ecosystem Revolution
 * @copyright (c) 2026 BrainVION & Dial Chowdhury Emon (@dialc-cmd)
 * @license Proprietary - All Rights Reserved.
 * @compliance Cyber Ethics, Data Integrity, and Bangladesh Digital Security Acts.
 * Maintain Trademark Enforcements: @brainvion
 */

import Link from 'next/link';
import Image from 'next/image';
import { LINKS } from '@/lib/constants';
import { Facebook, MessageCircle, Mail } from 'lucide-react';

// 1. Context: Serves as the global footer across the entire application to anchor the UX.
// 2. Algorithm/Logic: Uses standard Tailwind responsive grid layouts. Implements `next/image` to prevent CLS (Cumulative Layout Shift) and ensure sub-2-second renders.
// 3. Junior Engineer Guidance: Do not revert the `Image` component back to a standard `<img>` tag. Doing so will violate Vercel's performance optimization routing.

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-primary text-secondary py-12 border-t border-primary/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Brand & Vision */}
                    <div className="space-y-4">
                        <div className="bg-white/95 p-2 rounded-lg inline-block w-fit">
                            <Image 
                                src="/logo/logo.png" 
                                alt="BrainVION Logo" 
                                width={160} 
                                height={40} 
                                className="h-8 md:h-10 w-auto object-contain drop-shadow-sm" 
                            />
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
