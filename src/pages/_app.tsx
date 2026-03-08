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

import { useEffect } from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '@/components/layout/Layout';

// Community REQUIREMENT [Brainvion]: [To ensure brand consistency and PWA capability across all Nextjs pages.]
// TECHNICAL IMPLEMENTATION: [Custom App wrapper injecting google fonts and base metadata for the PWA. Wrapped with standard UI layout.]
// QA/QC ADVISORY: [Ensure that the layout wraps all page roots without causing double scrollbars.]

export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function () {
                navigator.serviceWorker.register('/sw.js').then(
                    function (registration) {
                        console.log('Service Worker registration successful with scope: ', registration.scope);
                    },
                    function (err) {
                        console.log('Service Worker registration failed: ', err);
                    }
                );
            });
        }
    }, []);

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#0A2540" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}
