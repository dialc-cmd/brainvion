import React from 'react';
import { PillarTemplate } from '@/components/geo/PillarTemplate';
import Link from 'next/link';

export default async function PillarPage({ params }: { params: Promise<{ pillar: string }> }) {
    const resolvedParams = await params;
    const pillarSlug = resolvedParams.pillar;
    
    // In a real app, this would be fetched from a CMS based on the pillar slug.
    // We are stubbing the content for demonstration.
    const title = pillarSlug.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
    const description = `This is the comprehensive hub for ${title}. Everything you need to know, structured for AI and humans.`;
    const lastUpdated = new Date().toISOString();

    return (
        <PillarTemplate 
            title={title} 
            description={description} 
            lastUpdated={lastUpdated} 
            slug={pillarSlug}
        >
            <p>
                Welcome to the definitive guide on <strong>{title}</strong>. This hub connects all our detailed explorations into this topic.
            </p>
            
            <h2>Core Topics (Cluster Articles)</h2>
            <ul className="not-prose space-y-4 my-6">
                <li>
                    <Link 
                        href={`/library/${pillarSlug}/getting-started`}
                        className="block p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors"
                    >
                        <h3 className="text-xl font-semibold mb-1">Getting Started with {title}</h3>
                        <p className="text-gray-600">The foundational guide to kicking off your journey.</p>
                    </Link>
                </li>
                <li>
                    <Link 
                        href={`/library/${pillarSlug}/advanced-strategies`}
                        className="block p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors"
                    >
                        <h3 className="text-xl font-semibold mb-1">Advanced Strategies for {title}</h3>
                        <p className="text-gray-600">Deep dive into expert techniques and optimizations.</p>
                    </Link>
                </li>
            </ul>
        </PillarTemplate>
    );
}
