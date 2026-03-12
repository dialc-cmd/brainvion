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
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import AnimatedLogo from './AnimatedLogo';

// Community REQUIREMENT [Brainvion]: [Users need simple, mobile-first navigation across the 5 core pages with premium silicon-valley micro-interactions.]
// TECHNICAL IMPLEMENTATION: [Next/Link used for routing. Framer Motion used for the shared layout ID active link indicator and smooth mobile menu expansion.]
// QA/QC ADVISORY: [Ensure mobile layout doesn't overlap on very narrow viewports and animations do not cause horizontal scrolling.]

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Community', path: '/community' },
    { name: 'Learning Hub', path: '/learning' },
    { name: 'Student House', path: '/house' },
    { name: 'Agentic Labs', path: '/register' },
    { name: 'Contact', path: '/contact' },
];

const authItems = [
    { name: 'Sign In', path: '/login' },
];

export default function NavBar() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full bg-secondary/70 backdrop-blur-lg border-b border-gray-200/50 shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex-shrink-0 flex items-center"
                    >
                        <Link href="/" className="focus:outline-none focus:ring-2 focus:ring-accent rounded flex items-center border border-transparent hover:opacity-80 transition-opacity">
                            <AnimatedLogo />
                        </Link>
                    </motion.div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        {navItems.map((item, i) => {
                            const isActive = router.pathname === item.path;
                            return (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className="relative text-sm font-medium transition-colors hover:text-primary text-text/80 focus:outline-none focus:ring-2 focus:ring-accent rounded px-1 py-1 group"
                                >
                                    {isActive ? <span className="text-primary">{item.name}</span> : item.name}
                                    {isActive && (
                                        <motion.div
                                            layoutId="navbar-active-indicator"
                                            className="absolute bottom-[-4px] left-0 right-0 h-0.5 bg-primary rounded-full"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    <span className={cn(
                                        "absolute bottom-[-4px] left-0 right-0 h-0.5 bg-accent/50 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left",
                                        isActive && "hidden"
                                    )} />
                                </Link>
                            )
                        })}
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                href="/login"
                                className="text-sm font-semibold text-text/70 hover:text-primary border border-gray-200 hover:border-primary/30 px-5 py-2.5 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                            >
                                Sign In
                            </Link>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="/apply"
                                className="bg-primary hover:bg-primary/90 text-secondary px-6 py-2.5 rounded-lg text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-md hover:shadow-lg"
                            >
                                Apply Now
                            </Link>
                        </motion.div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-text hover:text-primary focus:outline-none p-2 rounded-md hover:bg-gray-100/50 transition-colors"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-b border-gray-200/50"
            >
                <div className="px-4 pt-2 pb-6 space-y-2">
                    {navItems.map((item) => {
                        const isActive = router.pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                href={item.path}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "block px-4 py-3 rounded-lg text-base font-medium transition-colors",
                                    isActive
                                        ? "bg-primary/5 text-primary border-l-4 border-primary"
                                        : "text-text/80 hover:bg-gray-50 hover:text-primary border-l-4 border-transparent"
                                )}
                            >
                                {item.name}
                            </Link>
                        )
                    })}
                    <Link
                        href="/apply"
                        onClick={() => setIsOpen(false)}
                        className="block w-full text-center mt-6 bg-primary text-secondary px-5 py-3.5 rounded-lg text-base font-semibold hover:bg-primary/90 shadow-sm active:scale-95 transition-all"
                    >
                        Apply via Google Form
                    </Link>
                </div>
            </motion.div>
        </nav>
    );
}
