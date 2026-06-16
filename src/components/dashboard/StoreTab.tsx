/**
 * @file StoreTab.tsx
 * @project BrainVION Tech Community Platform - Lean Architecture Update
 * @copyright (c) 2026 BrainVION & Dial Chowdhury Emon (@dialc-cmd)
 * @license Proprietary - All Rights Reserved.
 */

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingBag, ExternalLink } from 'lucide-react';

export function StoreTab() {
    return (
        <motion.section key="store" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            <h1 className="text-3xl font-bold font-heading mb-6">Premium Store</h1>
            <div className="bg-gradient-to-br from-purple-900/50 to-neutral-900 border border-purple-500/30 rounded-2xl p-8 max-w-2xl mt-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 blur-[100px] pointer-events-none group-hover:bg-purple-500/40 transition-all duration-700" />
                <ShoppingBag className="w-12 h-12 text-purple-400 mb-6" />
                <h3 className="text-2xl font-bold mb-3 text-white">Access the Catalog</h3>
                <p className="text-neutral-300 mb-8 max-w-md">Purchase premium e-books, exclusive courses, and event tickets. Your purchases will be synced to this dashboard.</p>
                <Link href="/store" className="inline-flex items-center px-8 py-3 bg-purple-600 text-white font-bold rounded-xl shadow-lg hover:bg-purple-500 transition-all">
                    Browse Store <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
            </div>
        </motion.section>
    );
}
