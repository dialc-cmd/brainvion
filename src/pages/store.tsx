/**
 * @file store.tsx
 * @project BrainVION Tech Community Platform - Bilingual Ecosystem Revolution
 * @copyright (c) 2026 BrainVION & Dial Chowdhury Emon (@dialc-cmd)
 * @license Proprietary - All Rights Reserved.
 * @compliance Cyber Ethics, Data Integrity, and Bangladesh Digital/Cyber Security Acts.
 * Maintain Trademark Enforcements: @brainvion
 */

// 1. Context: Premium e-book and digital assets store, now updated for the bilingual local market.
// 2. Algorithm/Logic: Uses `EbookCarousel` but injects localized copy and SEO contexts to capture Bangladeshi queries.
// 3. Junior Engineer Guidance: When adding pricing to products, ensure they reflect standard BDT formatting for local users.

import Head from 'next/head';
import StorefrontGrid from '@/components/StorefrontGrid';

export default function StorePage() {
    return (
        <>
            <Head>
                <title>Premium Store | BrainVION</title>
                <meta name="description" content="Premium E-books, tech resources, and exclusive digital assets for developers. ডেভেলপার এবং স্টুডেন্টদের জন্য প্রিমিয়াম রিসোর্স।" />
            </Head>
            <main className="min-h-screen bg-neutral-950 pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold font-bangla-heading text-white mb-6">
                        ডিজিটাল <span className="text-purple-400">রিসোর্স হাব</span>
                    </h1>
                    <p className="text-xl text-neutral-400 font-bangla-body max-w-2xl mx-auto">
                        স্কিল ডেভেলপমেন্টের জন্য আমাদের কিউরেটেড প্রিমিয়াম ই-বুক এবং টেক গাইডলাইন।
                    </p>
                </div>
                <StorefrontGrid />
            </main>
        </>
    );
}
