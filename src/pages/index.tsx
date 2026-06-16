/**
 * @file index.tsx
 * @project BrainVION Tech Community Platform - Lean Architecture Update
 * @copyright (c) 2026 BrainVION & Dial Chowdhury Emon (@dialc-cmd)
 * @license Proprietary - All Rights Reserved.
 */

'use client';

import Head from 'next/head';
import StorefrontGrid from '@/components/StorefrontGrid';
import { SchemaInjector } from '@/components/seo/SchemaInjector';
import { HeroSection } from '@/components/home/HeroSection';
import { LocalServicesSection } from '@/components/home/LocalServicesSection';
import { PillarsSection } from '@/components/home/PillarsSection';
import { AudienceSection } from '@/components/home/AudienceSection';
import { LearningHubSection } from '@/components/home/LearningHubSection';

// 1. Context: Public-facing Landing Page establishing the BrainVION narrative.
// 2. Algorithm/Logic: Acts as a thin wrapper rendering distinct organism components.
// 3. Junior Engineer Guidance: The root of this component must be a `<main>` tag. Do not disrupt the SEO JSON-LD injection block.

export default function Home() {
    const orgSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "BrainVION",
        "url": "https://brainvion.com",
        "logo": "https://brainvion.com/logo/logo.png",
        "description": "A student tech community connecting learners, university students, and future remote workers in Bangladesh."
    };

    return (
        <main>
            <Head>
                <title>BrainVION | A Student Tech Community</title>
                <meta name="description" content="A friendly place where students learn technology, build skills, and grow together." />
            </Head>
            <SchemaInjector schema={orgSchema} />

            <HeroSection />
            <LocalServicesSection />
            <PillarsSection />
            <AudienceSection />
            <StorefrontGrid />
            <LearningHubSection />
        </main>
    );
}
