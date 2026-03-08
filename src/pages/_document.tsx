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

import { Html, Head, Main, NextScript } from 'next/document';

// Community REQUIREMENT [Brainvion]: [All pages must use Inter and Poppins fonts as defined in the rules.]
// TECHNICAL IMPLEMENTATION: [Injecting Google Fonts via the fundamental _document wrapper so they are render-blocking before paint to prevent layout shifts.]
// QA/QC ADVISORY: [Check Lighthouse scores to ensure font loading does not penalize performance.]

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700;800&display=swap"
                    rel="stylesheet"
                />
                <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
            </Head>
            <body className="antialiased selection:bg-accent selection:text-primary">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
