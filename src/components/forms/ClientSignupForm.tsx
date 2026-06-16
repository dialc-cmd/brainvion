/**
 * @file ClientSignupForm.tsx
 * @project BrainVION Tech Community Platform - Lean Architecture Update
 * @copyright (c) 2026 BrainVION & Dial Chowdhury Emon (@dialc-cmd)
 * @license Proprietary - All Rights Reserved.
 */

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Lock, User, ArrowRight, Phone } from 'lucide-react';
import { useSignup } from '@/hooks/useSignup';

// 1. Context: Dumb UI component rendering the client/customer signup form.
// 2. Algorithm/Logic: Takes no props, consumes the useSignup hook for state and submission handlers.
// 3. Junior Engineer Guidance: Keep UI components stateless where possible. All business logic lives in useSignup.ts.

export function ClientSignupForm() {
    const { isLoading, error, handleSignup } = useSignup();

    return (
        <div className="bg-white shadow-xl sm:rounded-2xl border border-gray-100 relative overflow-hidden" style={{ padding: 'var(--spacing-phi-2)' }}>
            {/* Subtle gradient accent at top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />

            {error && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-3 bg-rose-50 border border-rose-200 rounded-lg text-sm text-rose-700"
                >
                    {error}
                </motion.div>
            )}

            <form className="space-y-5" onSubmit={handleSignup}>
                <div>
                    <label htmlFor="signup-name" className="block text-sm font-medium text-gray-700">
                        Full Name
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            id="signup-name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            required
                            placeholder="Your full name"
                            className="focus:ring-primary focus:border-primary block w-full pl-10 sm:text-sm border-gray-300 rounded-lg py-3 border bg-gray-50 hover:bg-white transition-colors"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700">
                        Email Address
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            id="signup-email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            placeholder="you@company.com"
                            className="focus:ring-primary focus:border-primary block w-full pl-10 sm:text-sm border-gray-300 rounded-lg py-3 border bg-gray-50 hover:bg-white transition-colors"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="signup-phone" className="block text-sm font-medium text-gray-700">
                        Phone Number
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Phone className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            id="signup-phone"
                            name="phone"
                            type="tel"
                            autoComplete="tel"
                            required
                            placeholder="+880 17XXXXXXXX"
                            className="focus:ring-primary focus:border-primary block w-full pl-10 sm:text-sm border-gray-300 rounded-lg py-3 border bg-gray-50 hover:bg-white transition-colors"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Lock className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            id="signup-password"
                            name="password"
                            type="password"
                            required
                            minLength={8}
                            placeholder="Minimum 8 characters"
                            className="focus:ring-primary focus:border-primary block w-full pl-10 sm:text-sm border-gray-300 rounded-lg py-3 border bg-gray-50 hover:bg-white transition-colors"
                        />
                    </div>
                </div>

                <div style={{ paddingTop: 'var(--spacing-phi-1)' }}>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all disabled:opacity-70 disabled:cursor-not-allowed group"
                    >
                        {isLoading ? (
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                            <>
                                Create Account
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
                    </button>
                </div>
            </form>

            <div className="mt-6 text-center">
                <p className="text-xs text-text/40">
                    Looking to contribute as a developer, writer, or ambassador?{' '}
                    <Link href="/community" className="text-accent hover:text-accent/80 font-medium transition-colors">
                        Join the Community
                    </Link>
                </p>
            </div>
        </div>
    );
}
