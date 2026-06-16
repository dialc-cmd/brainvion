/**
 * @file ProfileTab.tsx
 * @project BrainVION Tech Community Platform - Lean Architecture Update
 * @copyright (c) 2026 BrainVION & Dial Chowdhury Emon (@dialc-cmd)
 * @license Proprietary - All Rights Reserved.
 */

import { motion } from 'framer-motion';

// 1. Context: Displays user profile data in the dashboard.
// 2. Algorithm/Logic: Framer motion wraps simple presentation logic.
// 3. Junior Engineer Guidance: Keep props strongly typed.

interface UserData {
    id: string;
    name: string;
    email: string;
    phone: string;
    discord?: string;
    skills: string;
    education: string;
    createdAt: string;
}

export function ProfileTab({ currentUser }: { currentUser: UserData }) {
    return (
        <motion.section key="profile" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            <h1 className="text-3xl font-bold font-heading mb-6">Welcome back, {currentUser.name.split(' ')[0]}!</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <article className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-primary mb-4">Contact Info</h3>
                    <p className="text-neutral-400 mb-2">Email: <span className="text-white">{currentUser.email}</span></p>
                    <p className="text-neutral-400 mb-2">Phone: <span className="text-white">{currentUser.phone}</span></p>
                    <p className="text-neutral-400 mb-2">Discord: <span className="text-white">{currentUser.discord || 'Not provided'}</span></p>
                </article>
                <article className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-primary mb-4">Professional</h3>
                    <p className="text-neutral-400 mb-2">Skills: <span className="text-white">{currentUser.skills}</span></p>
                    <p className="text-neutral-400 mb-2">Education: <span className="text-white">{currentUser.education}</span></p>
                </article>
            </div>
        </motion.section>
    );
}
