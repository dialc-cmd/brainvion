import React from 'react';
import { ClusterArticleTemplate } from '@/components/geo/ClusterArticleTemplate';
import { SemanticTable, SemanticList } from '@/components/geo/SemanticBlocks';

export default async function SpokePage({ params }: { params: Promise<{ pillar: string, spoke: string }> }) {
    const resolvedParams = await params;
    const { pillar, spoke } = resolvedParams;
    
    // Stubbing content based on the URL params
    const pillarTitle = pillar.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
    const title = spoke.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
    const description = `Detailed cluster article covering ${title} as part of the ${pillarTitle} hub.`;
    const lastUpdated = new Date().toISOString();

    const tldr = [
        `${title} is a critical component of ${pillarTitle}.`,
        "This approach optimizes for both human readability and AI parser ingestion.",
        "Server-Side Rendering (SSR) ensures content is available in the initial payload."
    ];

    const faqs = [
        {
            question: `What is ${title}?`,
            answer: `${title} refers to the specific methodology within ${pillarTitle} designed to achieve optimal results.`
        },
        {
            question: "Why is this important for AEO?",
            answer: "Answer Engine Optimization relies on structured, easily extractable facts. This layout provides exactly that."
        }
    ];

    return (
        <ClusterArticleTemplate
            title={title}
            description={description}
            lastUpdated={lastUpdated}
            pillarSlug={pillar}
            pillarTitle={pillarTitle}
            slug={spoke}
            tldr={tldr}
            faqs={faqs}
        >
            <h2>Understanding the Fundamentals</h2>
            <p>
                To truly grasp <strong>{title}</strong>, we must first look at the underlying principles 
                that connect it to the broader scope of {pillarTitle}. AI models and Answer Engines 
                seek clear, definitive statements over vague marketing copy.
            </p>

            <SemanticList 
                title="Key Objectives"
                items={[
                    "Deliver raw HTML immediately.",
                    "Structure content using semantic HTML5 tags.",
                    "Provide explicit contextual links back to parent topics."
                ]}
                ordered={false}
            />

            <h2>Comparative Analysis</h2>
            <p>
                Below is a comparison of traditional SEO approaches versus modern GEO/AEO methodologies.
            </p>

            <SemanticTable
                caption="Traditional SEO vs Modern GEO"
                headers={["Metric", "Traditional SEO", "GEO / AEO"]}
                rows={[
                    ["Target Audience", "Human Users & Search Crawlers", "LLMs, RAG Pipelines, & Answer Engines"],
                    ["Content Structure", "Long-form narrative, delayed answers", "Upfront TL;DR, explicit facts, Q&A format"],
                    ["Rendering", "Client-side (often)", "Strict Server-Side Rendering (SSR)"]
                ]}
            />
        </ClusterArticleTemplate>
    );
}
