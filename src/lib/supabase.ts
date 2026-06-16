/**
 * @file supabase.ts
 * @project BrainVION Tech Community Platform - Serverless Data Core
 * @copyright (c) 2026 BrainVION & Dial Chowdhury Emon (@dialc-cmd)
 * @license Proprietary - All Rights Reserved.
 * @compliance Cyber Ethics, Data Privacy, and Bangladesh Cyber Security Acts.
 * Maintain Trademark Enforcements: @brainvion
 */

import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Define the environment variables securely
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/**
 * Context: Validates the presence of Supabase initialization assets in the runtime space.
 * Logic: Explicitly throws compile/runtime errors if variables are missing.
 * Junior Engineer Guidance: If this throws locally, ensure your `.env.local` contains the Netlify-issued Supabase variables.
 */
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "FATAL ERROR: Missing Next.js environment variables for Supabase initialization. " +
    "Check NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY."
  );
}

/**
 * Context: Initializes the singleton Supabase client SDK instance.
 * Logic: Utilizes @supabase/supabase-js to bind to the remote database layer.
 * Junior Engineer Guidance: Use this instance for all direct client-to-database operations protected by RLS.
 */
export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);
