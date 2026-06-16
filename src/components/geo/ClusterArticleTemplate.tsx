import React from 'react';
import { SchemaInjector } from '../seo/SchemaInjector';
import { generateArticleSchema, generateFAQSchema } from '@/lib/seo/schemas';
import { ContextualLink } from './ContextualLink';

interface ClusterArticleTemplateProps {
    title: string;
    description: string;
    lastUpdated: string;
    pillarSlug: string;
    pillarTitle: string;
    slug: string;
    tldr: string[];
    faqs?: { question: string; answer: string }[];
    children: React.ReactNode;
}

export function ClusterArticleTemplate({
    title,
    description,
    lastUpdated,
    pillarSlug,
    pillarTitle,
    slug,
    tldr,
    faqs,
    children,
}: ClusterArticleTemplateProps) {
    const url = `https://brainvion.com/library/${pillarSlug}/${slug}`;
    
    return (
        <article className="max-w-4xl mx-auto px-4 py-8">
            <SchemaInjector 
                schema={generateArticleSchema(title, description, url, lastUpdated)} 
            />
            {faqs && faqs.length > 0 && (
                <SchemaInjector schema={generateFAQSchema(faqs)} />
            )}
            
            {/* Breadcrumb / Contextual Link back to Hub */}
            <nav className="mb-6 text-sm text-gray-500 font-medium">
                <ContextualLink 
                    href={`/library/${pillarSlug}`}
                    title={`Return to ${pillarTitle} overview`}
                    aria-label={`Return to ${pillarTitle} hub`}
                >
                    &larr; Back to {pillarTitle}
                </ContextualLink>
            </nav>

            <header className="mb-8">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                    {title}
                </h1>
                <p className="text-lg text-gray-600 mb-2">
                    {description}
                </p>
                <div className="text-sm text-gray-400">
                    Updated: <time dateTime={lastUpdated}>{new Date(lastUpdated).toLocaleDateString()}</time>
                </div>
            </header>

            {/* TL;DR / Quick Extraction Zone for RAG context windows */}
            <section className="bg-gray-50 border-l-4 border-primary p-6 mb-10 rounded-r-lg" aria-label="TL;DR Summary">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Summary (TL;DR)</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {tldr.map((point, idx) => (
                        <li key={idx}>{point}</li>
                    ))}
                </ul>
            </section>

            <div className="prose prose-lg max-w-none text-gray-800">
                {children}
            </div>

            {faqs && faqs.length > 0 && (
                <section className="mt-12 pt-8 border-t border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                    <dl className="space-y-6">
                        {faqs.map((faq, idx) => (
                            <div key={idx}>
                                <dt className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</dt>
                                <dd className="text-gray-700">{faq.answer}</dd>
                            </div>
                        ))}
                    </dl>
                </section>
            )}
        </article>
    );
}
