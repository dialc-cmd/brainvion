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
import NavBar from '@/components/navbar/NavBar';
import Footer from '@/components/footer/Footer';

// Community REQUIREMENT [Brainvion]: [All pages must share consistent branding via sticky navigation and footer.]
// TECHNICAL IMPLEMENTATION: [Layout HOC pattern wrapping page content. Flex column ensures footer sticks to bottom.]
// QA/QC ADVISORY: [Ensure main child content expands to push footer down correctly.]

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <NavBar />
            <main className="flex-grow flex flex-col bg-secondary">
                {children}
            </main>
            <Footer />
        </>
    );
}
