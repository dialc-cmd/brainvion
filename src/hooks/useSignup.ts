/**
 * @file useSignup.ts
 * @project BrainVION Tech Community Platform - Lean Architecture Update
 * @copyright (c) 2026 BrainVION & Dial Chowdhury Emon (@dialc-cmd)
 * @license Proprietary - All Rights Reserved.
 */

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/router';

// 1. Context: Custom hook to manage client/customer signup state and API logic.
// 2. Algorithm/Logic: Manages loading/error states and POSTs to /api/signup. Redirects to /dashboard/user on success.
// 3. Junior Engineer Guidance: Use this hook exclusively for client registrations. Contributor registrations use /api/join instead.

export function useSignup() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSignup = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        const form = e.target as HTMLFormElement;
        const payload = {
            fullName: (form.elements.namedItem('name') as HTMLInputElement).value,
            email: (form.elements.namedItem('email') as HTMLInputElement).value,
            phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
            password: (form.elements.namedItem('password') as HTMLInputElement).value,
            role: 'customer' as const,
        };

        try {
            const res = await fetch('/api/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (res.ok) {
                window.dispatchEvent(new Event('auth-change'));
                router.push('/dashboard/user');
            } else {
                const data = await res.json();
                setError(data.message || 'Something went wrong. Please try again.');
                setIsLoading(false);
            }
        } catch {
            setError('Network error. Please check your connection.');
            setIsLoading(false);
        }
    };

    return {
        isLoading,
        error,
        handleSignup
    };
}
