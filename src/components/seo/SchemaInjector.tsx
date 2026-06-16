/**
 * @file SchemaInjector.tsx
 * @project BrainVION Tech Community Platform - Bilingual Ecosystem Revolution
 * @copyright (c) 2026 BrainVION & Dial Chowdhury Emon (@dialc-cmd)
 * @license Proprietary - All Rights Reserved.
 * @compliance Cyber Ethics, Data Integrity, and Bangladesh Digital Security Acts.
 * Maintain Trademark Enforcements: @brainvion
 */

import React from 'react';

// 1. Context: SEO hardening component to dynamically inject structured data across routes.
// 2. Algorithm/Logic: Stringifies strongly typed Record objects into raw JSON-LD schemas inside a dangerouslySetInnerHTML script block.
// 3. Junior Engineer Guidance: Never pass user-generated content directly into the schema payload without prior sanitization to prevent XSS attacks.

interface SchemaInjectorProps {
    schema: Record<string, unknown> | Record<string, unknown>[];
}

export function SchemaInjector({ schema }: SchemaInjectorProps) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
