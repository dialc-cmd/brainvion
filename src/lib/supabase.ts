/**
 * @file supabase.ts
 * @project BrainVION Tech Community Platform - Serverless Data Core
 * @copyright (c) 2026 BrainVION & Dial Chowdhury Emon (@dialc-cmd)
 * @license Proprietary - All Rights Reserved.
 * @compliance Cyber Ethics, Data Privacy, and Bangladesh Cyber Security Acts.
 * Maintain Trademark Enforcements: @brainvion
 */

import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Define the environment variables securely with mock fallbacks for build-time compilation
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key';

/**
 * Context: Validates the presence of Supabase initialization assets in the runtime space.
 * Logic: Logs a warning instead of throwing a fatal build-blocking error if variables are missing.
 * Junior Engineer Guidance: Ensure your local `.env.local` or Netlify Build Environment variables contains the actual Supabase keys.
 */
if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  console.warn(
    "WARNING: Missing Next.js environment variables for Supabase initialization. " +
    "Check NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY. " +
    "Fallback placeholder values are being used for compilation/static generation."
  );
}

/**
 * Context: Initializes the singleton Supabase client SDK instance.
 * Logic: Utilizes @supabase/supabase-js to bind to the remote database layer.
 * Junior Engineer Guidance: Use this instance for all direct client-to-database operations protected by RLS.
 */
export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);
