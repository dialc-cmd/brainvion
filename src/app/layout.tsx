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

import { Inter, Poppins } from "next/font/google";
import "@/styles/globals.css";

// Load fonts via Next.js Font Optimization to maintain <1s load times
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
    weight: ['400', '600', '700', '900'],
    subsets: ["latin"],
    variable: "--font-poppins"
});

export const metadata = {
    title: "BrainVION Interactive Labs",
    description: "Welcome to the BrainVION Global Network. Experience Agentic Tutoring and Immersive Labs.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        // Apply font variables to html root for App Router
        <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
            <head>
                {/* Prevent the existing Pages router globals from conflicting if needed, 
                    but we import globals.css above for Tailwind v4 processing */}
            </head>
            <body className="bg-secondary text-text antialiased font-sans">
                {/* 
                 * Note: NavBar and Footer from the Pages router are NOT injected here 
                 * by default to keep the App Router (Labs/Spatial UI) completely distinct
                 * and lightweight as an "App-like" experience.
                 */}
                {children}
            </body>
        </html>
    );
}
