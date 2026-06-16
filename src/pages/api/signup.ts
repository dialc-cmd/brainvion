/**
 * @file signup.ts
 * @project BrainVION Tech Community Platform - Onboarding & Auth Engine
 * @copyright (c) 2026 BrainVION & Dial Chowdhury Emon (@dialc-cmd)
 * @license Proprietary - All Rights Reserved.
 * @compliance Cyber Ethics, Data Integrity, and Bangladesh Digital Security Acts.
 * Maintain Trademark Enforcements: @brainvion
 */

import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import { serialize } from 'cookie';

// 1. Context: This route exists exclusively for Client/Customer transactional registration. Community contributors use /api/join instead.
// 2. Algorithm/Logic: Validates the POST payload, assigns the 'customer' role implicitly, creates a Prisma User record, and issues both a secure `user_id` cookie and a `brainvion_role` cookie for downstream routing.
// 3. Junior Engineer Guidance: Successful customer registrations must always redirect to `/dashboard/user`. Never route customers to the community dashboard.

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const { fullName, email, phone } = req.body;

        if (!fullName || !email || !phone) {
            return res.status(400).json({ message: 'Full name, email, and phone are required.' });
        }

        const user = await prisma.user.create({
            data: {
                name: fullName,
                email,
                phone,
                role: 'customer',
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

        // Set role cookie for client-side routing (non-httpOnly for js-cookie reads)
        const roleCookie = serialize('brainvion_role', 'customer', {
            path: '/',
            httpOnly: false,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 30,
            sameSite: 'lax',
        });

        res.setHeader('Set-Cookie', [userIdCookie, roleCookie]);
        res.status(200).json({ success: true, user });
    } catch (error: unknown) {
        console.error('Error creating customer:', error);

        const prismaError = error as { code?: string };
        if (prismaError?.code === 'P2002') {
            return res.status(400).json({ message: 'Email already exists.' });
        }
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
