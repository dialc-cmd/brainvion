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
// 2. Algorithm/Logic: Manages loading/error states and currently simulates API latency. Maps email domain to explicit roles for mock routing.
// 3. Junior Engineer Guidance: Replace the setTimeout block with a real POST to apiClient.post('/auth/login') when integrating the backend.

export function useLogin() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleLogin = (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        
        // Mock API call latency
        setTimeout(() => {
            // 1. Context: Mock login uses email heuristics to determine the decoupled role for dashboard routing.
            // 2. Algorithm/Logic: 'student' in email → contributor role (community dashboard). All others → customer role (client dashboard).
            // 3. Junior Engineer Guidance: Replace this heuristic with real auth once the backend supports it. Contributors go to /dashboard/community, customers go to /dashboard/user.
            const email = (document.getElementById('email') as HTMLInputElement).value;
            const role = email.includes('student') ? 'contributor' : 'customer';
            
            Cookies.set('brainvion_role', role, { expires: 7 });
            window.dispatchEvent(new Event('auth-change'));
            router.push(role === 'contributor' ? '/dashboard/community' : '/dashboard/user');
        }, 800);
    };

    return {
        isLoading,
        error,
        handleLogin
    };
}
