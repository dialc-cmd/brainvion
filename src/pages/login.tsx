/**
 * @file login.tsx
 * @project BrainVION Tech Community Platform - Lean Architecture Update
 * @copyright (c) 2026 BrainVION & Dial Chowdhury Emon (@dialc-cmd)
 * @license Proprietary - All Rights Reserved.
 * @compliance Cyber Ethics, Data Integrity, and Bangladesh Digital Security Acts.
 * Maintain Trademark Enforcements: @brainvion
 */

import Head from 'next/head';
import { motion } from 'framer-motion';
import { LoginForm } from '@/components/forms/LoginForm';

// 1. Context: Login page wrapper delegating all logic to the LoginForm component.
// 2. Algorithm/Logic: Renders the Auth page layout, animations, and the form component.
// 3. Junior Engineer Guidance: Pages should be thin. Do not add state or API calls here.

export default function Login() {
    return (
        <>
            <Head>
                <title>Sign In | BrainVION</title>
                <meta name="description" content="Sign in to your BrainVION account." />
            </Head>

            <div className="min-h-screen bg-secondary flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="sm:mx-auto sm:w-full sm:max-w-md"
                >
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-primary font-heading tracking-tight">
                        Sign in to your account
                    </h2>
                    <p className="mt-2 text-center text-sm text-text/70">
                        Access your dashboard, projects, and community resources.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
                >
                    <LoginForm />
                </motion.div>
            </div>
        </>
    );
}
