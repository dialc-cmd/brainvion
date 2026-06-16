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
import { useState, useEffect } from 'react';
import { Menu, X, User, LogOut, LayoutDashboard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import AnimatedLogo from './AnimatedLogo';
import Cookies from 'js-cookie';

// Community REQUIREMENT [Brainvion]: [Users need simple, mobile-first navigation across the 5 core pages with premium silicon-valley micro-interactions. Includes auth state.]
// TECHNICAL IMPLEMENTATION: [Next/Link used for routing. Framer Motion used for the shared layout ID active link indicator and smooth mobile menu expansion. Client-side cookie check for mock auth state.]
// QA/QC ADVISORY: [Ensure mobile layout doesn't overlap on very narrow viewports and animations do not cause horizontal scrolling.]

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Community', path: '/community' },
    { name: 'Services', path: '/services' },
    { name: 'Learning Hub', path: '/learning' },
    { name: 'Store', path: '/store' },
    { name: 'Contact', path: '/contact' },
];

export default function NavBar() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [userRole, setUserRole] = useState<string | null>(null);

    // Mock authentication check
    useEffect(() => {
        const checkAuth = () => {
            const role = Cookies.get('brainvion_role');
            setUserRole(role || null);
        };
        checkAuth();
        // Listen for custom event if we want cross-tab sync in MVP, or just rely on router changes
        window.addEventListener('auth-change', checkAuth);
        return () => window.removeEventListener('auth-change', checkAuth);
    }, [router.pathname]); // Re-check on navigation

    const handleSignOut = () => {
        Cookies.remove('brainvion_role');
        setUserRole(null);
        window.dispatchEvent(new Event('auth-change'));
        router.push('/');
    };

    const dashboardLink = userRole === 'contributor' ? '/dashboard/community' : '/dashboard/user';

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
                    <div className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8">
                        {navItems.map((item) => {
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

                        {/* Auth / Profile Area */}
                        <div className="flex items-center space-x-4 pl-4 border-l border-gray-200">
                            {userRole ? (
                                <div className="relative">
                                    <button 
                                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                                        className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                                    >
                                        <User className="w-5 h-5" />
                                    </button>

                                    <AnimatePresence>
                                        {isProfileOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute right-0 mt-2 w-48 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden origin-top-right"
                                            >
                                                <div className="py-1">
                                                    <Link 
                                                        href={dashboardLink}
                                                        onClick={() => setIsProfileOpen(false)}
                                                        className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                                                    >
                                                        <LayoutDashboard className="w-4 h-4 mr-3" />
                                                        Dashboard
                                                    </Link>
                                                    <button
                                                        onClick={() => {
                                                            setIsProfileOpen(false);
                                                            handleSignOut();
                                                        }}
                                                        className="flex w-full items-center px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors text-left"
                                                    >
                                                        <LogOut className="w-4 h-4 mr-3" />
                                                        Sign Out
                                                    </button>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <>
                                    <Link href="/login" className="text-sm font-semibold text-text hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded px-2 py-1">
                                        Sign In
                                    </Link>
                                    <Link href="/signup" className="bg-primary hover:bg-primary/90 text-secondary px-5 py-2 rounded-lg text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-sm hover:shadow-md">
                                        Sign Up
                                    </Link>
                                </>
                            )}
                        </div>
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
                    
                    <div className="pt-4 border-t border-gray-100 mt-2">
                        {userRole ? (
                            <>
                                <Link
                                    href={dashboardLink}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-4 py-3 rounded-lg text-base font-medium text-text/80 hover:bg-gray-50 hover:text-primary border-l-4 border-transparent transition-colors"
                                >
                                    Dashboard
                                </Link>
                                <button
                                    onClick={() => {
                                        setIsOpen(false);
                                        handleSignOut();
                                    }}
                                    className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-red-600 hover:bg-red-50 border-l-4 border-transparent transition-colors"
                                >
                                    Sign Out
                                </button>
                            </>
                        ) : (
                            <div className="flex flex-col space-y-3 mt-4">
                                <Link
                                    href="/login"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-center bg-gray-100 text-primary px-5 py-3 rounded-lg text-base font-semibold hover:bg-gray-200 transition-all"
                                >
                                    Sign In
                                </Link>
                                <Link
                                    href="/signup"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-center bg-primary text-secondary px-5 py-3 rounded-lg text-base font-semibold hover:bg-primary/90 shadow-sm active:scale-95 transition-all"
                                >
                                    Sign Up
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        </nav>
    );
}
