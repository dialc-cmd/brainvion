/**
 * @file HubTab.tsx
 * @project BrainVION Tech Community Platform - Lean Architecture Update
 * @copyright (c) 2026 BrainVION & Dial Chowdhury Emon (@dialc-cmd)
 * @license Proprietary - All Rights Reserved.
 */

import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

export function HubTab() {
    return (
        <motion.section key="hub" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            <h1 className="text-3xl font-bold font-heading mb-6">Learning Hub Contributions</h1>
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 text-center max-w-2xl mx-auto mt-12">
                <BookOpen className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-3">Submit a Resource</h3>
                <p className="text-neutral-400 mb-8">Got a cool GitHub repo, article, or video? Contribute to the official BrainVION Learning Hub.</p>
                <button className="px-8 py-3 bg-primary text-secondary font-bold rounded-xl shadow-lg hover:bg-primary/90 transition-all">
                    Submit Resource (Coming Soon)
                </button>
            </div>
        </motion.section>
    );
}
