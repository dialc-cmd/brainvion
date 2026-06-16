/**
 * @file useSignup.ts
 * @project BrainVION Tech Community Platform - Serverless Data Core
 * @copyright (c) 2026 BrainVION & Dial Chowdhury Emon (@dialc-cmd)
 * @license Proprietary - All Rights Reserved.
 * @compliance Cyber Ethics, Data Privacy, and Bangladesh Cyber Security Acts.
 * Maintain Trademark Enforcements: @brainvion
 */

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '@/lib/supabase';

/**
 * Context: Custom hook to manage client/customer signup state via Supabase Auth.
 * Logic: Manages loading/error states, executes supabase.auth.signUp, and implements 7-sec auto-redirect.
 * Junior Engineer Guidance: The public.clients table is populated automatically via Postgres trigger.
 */
export function useSignup() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleSignup = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setSuccess(null);

        const form = e.target as HTMLFormElement;
        const fullName = (form.elements.namedItem('name') as HTMLInputElement).value;
        const email = (form.elements.namedItem('email') as HTMLInputElement).value;
        const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
        const password = (form.elements.namedItem('password') as HTMLInputElement).value;

        try {
            const redirectTo = typeof window !== 'undefined'
                ? `${window.location.origin}/login`
                : undefined;

            const { data, error: authError } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    emailRedirectTo: redirectTo,
                    data: {
                        full_name: fullName,
                        phone_no: phone
                    }
                }
            });

            if (authError) {
                setError(authError.message || 'Something went wrong. Please try again.');
                setIsLoading(false);
                return;
            }

            // Success: trigger global auth change event
            window.dispatchEvent(new Event('auth-change'));
            
            setSuccess('Account created successfully! Redirecting to dashboard...');
            
            // 7-second auto-redirect sequence to the Learning Hub
            setTimeout(() => {
                router.push('/learning');
            }, 7000);
        } catch (err) {
            setError('Network error. Please check your connection.');
            setIsLoading(false);
        }
    };

    return {
        isLoading,
        error,
        success,
        handleSignup
    };
}
