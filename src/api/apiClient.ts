/**
 * @file apiClient.ts
 * @project BrainVION Tech Community Platform - Lean Architecture Update
 * @copyright (c) 2026 BrainVION & Dial Chowdhury Emon (@dialc-cmd)
 * @license Proprietary - All Rights Reserved.
 */

// [Why this exists]: Centralized placeholder for the future backend API client (e.g., Axios or Fetch wrappers).
// [Algorithm/Logic]: Exposes basic fetch utility methods configured with the base API URL and standard headers.
// [Junior Engineer Guidance]: When integrating Supabase or Express, replace these stubs with actual implementations. Do not embed fetch logic inside components.

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api/v1';

export const apiClient = {
    async get(endpoint: string) {
        // Placeholder for GET request logic
        console.log(`[API GET]: ${API_BASE_URL}${endpoint}`);
        return null;
    },

    async post<T = unknown>(endpoint: string, data: Record<string, unknown> | T) {
        // Placeholder for POST request logic
        console.log(`[API POST]: ${API_BASE_URL}${endpoint}`, data);
        return null;
    }
};
