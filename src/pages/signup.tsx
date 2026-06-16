/**
 * @file signup.tsx
 * @project BrainVION Tech Community Platform - Lean Architecture Update
 * @copyright (c) 2026 BrainVION & Dial Chowdhury Emon (@dialc-cmd)
 * @license Proprietary - All Rights Reserved.
 * @compliance Cyber Ethics, Data Integrity, and Bangladesh Digital Security Acts.
 * Maintain Trademark Enforcements: @brainvion
 */

import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ClientSignupForm } from '@/components/forms/ClientSignupForm';

// 1. Context: Signup page wrapper delegating logic to the ClientSignupForm component.
// 2. Algorithm/Logic: Renders the layout and the form component.
// 3. Junior Engineer Guidance: Pages should be thin. Do not add state or API calls here.

export default function SignUp() {
    return (
        <>
            <Head>
                <title>Create Account | BrainVION</title>
                <meta name="description" content="Create your BrainVION client account to access the service dashboard, manage projects, and purchase solutions." />
            </Head>

            <div className="min-h-screen bg-secondary flex flex-col justify-center" style={{ paddingTop: 'var(--spacing-phi-3)', paddingBottom: 'var(--spacing-phi-3)' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="sm:mx-auto sm:w-full sm:max-w-md px-4"
                >
                    <h2 className="text-center text-3xl font-extrabold text-primary font-heading tracking-tight">
                        Create Your Account
                    </h2>
                    <p className="mt-2 text-center text-sm text-text/70">
                        Access the BrainVION dashboard to manage services and projects.
                    </p>
                    <p className="mt-1 text-center text-sm text-text/50">
                        Already have an account?{' '}
                        <Link href="/login" className="font-medium text-accent hover:text-accent/80 transition-colors">
                            Sign in here
                        </Link>
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="sm:mx-auto sm:w-full sm:max-w-md px-4"
                    style={{ marginTop: 'var(--spacing-phi-2)' }}
                >
                    <ClientSignupForm />
                </motion.div>
            </div>
        </>
    );
}
