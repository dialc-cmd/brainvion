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

import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import NavBar from '@/components/navbar/NavBar';
import Footer from '@/components/footer/Footer';

// Community REQUIREMENT [Brainvion]: [All pages must share consistent branding via sticky navigation and footer.]
// TECHNICAL IMPLEMENTATION: [Layout HOC pattern wrapping page content. Flex column ensures footer sticks to bottom. AnimatePresence added for page transitions.]
// QA/QC ADVISORY: [Ensure main child content expands to push footer down correctly.]

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const router = useRouter();

    return (
        <>
            <NavBar />
            <AnimatePresence mode="wait">
                <motion.main
                    key={router.asPath}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="flex-grow flex flex-col bg-secondary"
                >
                    {children}
                </motion.main>
            </AnimatePresence>
            <Footer />
        </>
    );
}
