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

    // FEATURE B: i18n Readiness Draft
    // Only apply to root to demonstrate capabilities
    if (pathname === '/') {
        const acceptLanguage = request.headers.get('accept-language') || '';
        const isBengali = acceptLanguage.includes('bn');

        // Setup cookie/header for downstream components to detect locality
        const response = NextResponse.next();
        response.headers.set('x-user-locale', isBengali ? 'bn' : 'en');
        return response;
    }

    return NextResponse.next();
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
