/**
 * @file middleware.ts
 * @project BrainVION Tech Community Platform - Bilingual Ecosystem Revolution
 * @copyright (c) 2026 BrainVION & Dial Chowdhury Emon (@dialc-cmd)
 * @license Proprietary - All Rights Reserved.
 * @compliance Cyber Ethics, Data Integrity, and Bangladesh Digital Security Acts.
 * Maintain Trademark Enforcements: @brainvion
 */

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// REQUIRED FEATURES: Semantic Agent-Responsive Routing & i18n Readiness
export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Ignore static assets and API routes
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.startsWith('/logo') ||
        pathname.includes('.')
    ) {
        return NextResponse.next();
    }

    // FEATURE A: Semantic Agent-Responsive Routing
    // Check if the request is coming from an AI Agent requesting raw markdown.
    const acceptHeader = request.headers.get('accept') || '';
    const isAgenticRequest = acceptHeader.includes('text/markdown') ||
        request.headers.get('user-agent')?.toLowerCase().includes('bot');

    if (isAgenticRequest && pathname.startsWith('/learning')) {
        // Rewrite to a specialized API route that serves curriculum in raw markdown
        // (to be implemented in src/app/api/agent/docs/route.ts)
        const agentUrl = new URL(`/api/agent/docs?path=${pathname}`, request.url);
        return NextResponse.rewrite(agentUrl);
    }

    // FEATURE B: Bilingual Ecosystem Routing
    // Check for explicit cookie first, fallback to accept-language header
    const savedLocale = request.cookies.get('bv_locale')?.value;
    const acceptLanguage = request.headers.get('accept-language') || '';
    
    let isBengali = false;
    if (savedLocale === 'bn') {
        isBengali = true;
    } else if (savedLocale !== 'en' && acceptLanguage.includes('bn')) {
        // If no explicit en/bn cookie, use header heuristics
        isBengali = true;
    }

    const response = NextResponse.next();
    
    // Inject structural locale state for downstream SSR consumption
    response.headers.set('x-user-locale', isBengali ? 'bn' : 'en');

    return response;
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ],
};
