/**
 * @file join.ts
 * @project BrainVION Tech Community Platform - Onboarding & Auth Engine
 * @copyright (c) 2026 BrainVION & Dial Chowdhury Emon (@dialc-cmd)
 * @license Proprietary - All Rights Reserved.
 * @compliance Cyber Ethics, Data Integrity, and Bangladesh Digital Security Acts.
 * Maintain Trademark Enforcements: @brainvion
 */

import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import { serialize } from 'cookie';

// 1. Context: This route exists exclusively for Community Contributor registrations via the /community page form. Clients/customers use /api/signup instead.
// 2. Algorithm/Logic: Validates the POST payload, assigns 'contributor' role with contributionArea metadata, creates a Prisma User record, and issues secure cookies for downstream dashboard routing.
// 3. Junior Engineer Guidance: Successful contributor registrations route to `/dashboard/community`. Never route contributors to `/dashboard/user` — that is the client transactional dashboard.

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const data = req.body;
        
        // Save to Database with explicit contributor role
        const user = await prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                phone: data.phone,
                role: 'contributor',
                contributionArea: data.contributionArea || null,
                portfolioUrl: data.portfolioUrl || null,
                github: data.github || null,
                linkedin: data.linkedin || null,
                discord: data.discord || null,
                education: data.education || null,
                skills: data.skills || null,
                goal: data.goal || null,
                contribution: data.contribution || null,
                source: data.source || null,
                homeCountry: data.homeCountry || 'BD',
            },
        });

        // Set httpOnly cookie for SSR auth validation
        const userIdCookie = serialize('user_id', user.id, {
            path: '/',
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 30, // 30 days
            sameSite: 'lax',
        });

        // Set role cookie for client-side routing
        const roleCookie = serialize('brainvion_role', 'contributor', {
            path: '/',
            httpOnly: false,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 30,
            sameSite: 'lax',
        });

        res.setHeader('Set-Cookie', [userIdCookie, roleCookie]);
        res.status(200).json({ success: true, user });
    } catch (error: unknown) {
        console.error('Error creating contributor:', error);
        
        const prismaError = error as { code?: string };
        if (prismaError?.code === 'P2002') {
            return res.status(400).json({ message: 'Email already exists.' });
        }
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
