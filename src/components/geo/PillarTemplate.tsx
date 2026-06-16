import React from 'react';
import { SchemaInjector } from '../seo/SchemaInjector';
import { generateArticleSchema } from '@/lib/seo/schemas';

interface PillarTemplateProps {
    title: string;
    description: string;
    lastUpdated: string;
    children: React.ReactNode;
    slug: string;
}

export function PillarTemplate({ title, description, lastUpdated, children, slug }: PillarTemplateProps) {
    const url = `https://brainvion.com/library/${slug}`;

    return (
        <article className="max-w-4xl mx-auto px-4 py-8">
            <SchemaInjector 
                schema={generateArticleSchema(title, description, url, lastUpdated)} 
            />
            
            <header className="mb-10 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                    {title}
                </h1>
                <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
                    {description}
                </p>
                <div className="text-sm text-gray-500">
                    Last Updated: <time dateTime={lastUpdated}>{new Date(lastUpdated).toLocaleDateString()}</time>
                </div>
            </header>

            <div className="prose prose-lg max-w-none text-gray-800">
                {children}
            </div>
        </article>
    );
}
