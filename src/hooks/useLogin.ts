/**
 * @file useLogin.ts
 * @project BrainVION Tech Community Platform - Lean Architecture Update
 * @copyright (c) 2026 BrainVION & Dial Chowdhury Emon (@dialc-cmd)
 * @license Proprietary - All Rights Reserved.
 */

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

// 1. Context: Custom hook to manage login state and API logic.
// 2. Algorithm/Logic: Manages loading/error states and calls supabase.auth.signInWithPassword.
// 3. Junior Engineer Guidance: Successful logins currently route to /dashboard/user. Role-based routing can be added later using Supabase JWT claims.
import { supabase } from '@/lib/supabase';

export function useLogin() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        
        const form = e.target as HTMLFormElement;
        const email = (form.elements.namedItem('email') as HTMLInputElement).value;
        const password = (form.elements.namedItem('password') as HTMLInputElement).value;

        try {
            const { error: authError } = await supabase.auth.signInWithPassword({
                email,
                password
            });

            if (authError) {
                setError(authError.message || 'Invalid login credentials.');
                setIsLoading(false);
                return;
            }

            // Auth Success
            window.dispatchEvent(new Event('auth-change'));
            
            // For now, route to user dashboard. Complex role routing can be added via Supabase user metadata.
            router.push('/dashboard/user');
        } catch (err) {
            setError('Network error. Please check your connection.');
            setIsLoading(false);
        }
    };

    return {
        isLoading,
        error,
        handleLogin
    };
}
