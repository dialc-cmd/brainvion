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
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { LINKS } from '@/lib/constants';

// Community REQUIREMENT [Brainvion]: [Users need simple, mobile-first navigation across the 5 core pages.]
// TECHNICAL IMPLEMENTATION: [Next/Link used for client-side routing. Responsive tailwind classes handle the mobile menu toggle.]
// QA/QC ADVISORY: [Ensure the mobile menu toggles correctly and the active state is visually distinct.]

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Community', path: '/community' },
    { name: 'Learning Hub', path: '/learning' },
    { name: 'Student House', path: '/house' },
    { name: 'Contact', path: '/contact' },
];

export default function NavBar() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full bg-secondary/80 backdrop-blur-md border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="focus:outline-none focus:ring-2 focus:ring-accent rounded flex items-center border border-transparent">
                            <img src="/logo/logo.png" alt="BrainVION Logo" className="h-8 md:h-10 w-auto object-contain drop-shadow-sm" />
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`text-sm font-medium transition-colors hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded p-1 ${router.pathname === item.path ? 'text-primary border-b-2 border-primary' : 'text-text'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/apply"
                            className="bg-primary hover:bg-primary/90 text-secondary px-5 py-2.5 rounded-md text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-sm"
                        >
                            Apply
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-text hover:text-primary focus:outline-none p-2"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden bg-secondary border-b border-gray-200">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${router.pathname === item.path
                                    ? 'bg-primary/10 text-primary'
                                    : 'text-text hover:bg-gray-100 hover:text-primary'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/apply"
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-center mt-4 bg-primary text-secondary px-5 py-3 rounded-md text-base font-semibold hover:bg-primary/90"
                        >
                            Apply via Google Form
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
