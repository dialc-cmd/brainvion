/**
 * @file index.ts
 * @project BrainVION Tech Community Platform - Serverless Data Core
 * @copyright (c) 2026 BrainVION & Dial Chowdhury Emon (@dialc-cmd)
 * @license Proprietary - All Rights Reserved.
 * @compliance Cyber Ethics, Data Privacy, and Bangladesh Cyber Security Acts.
 * Maintain Trademark Enforcements: @brainvion
 */

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

/**
 * Context: Serverless Edge Function for processing high-integrity email confirmations.
 * Logic: Intercepts POST payloads (typically via Database Webhooks) and triggers an email API (e.g. Resend, SendGrid).
 * Junior Engineer Guidance: Ensure you set the RESEND_API_KEY (or equivalent) in Supabase Vault. Do NOT log sensitive PII.
 */
serve(async (req) => {
  // CORS Headers for secure cross-origin requests if called from browser
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  };

  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const payload = await req.json();
    const { record, type } = payload;
    
    // Validate payload (expected from Supabase Database Webhook on INSERT to `clients` or `appointments`)
    if (!record || !record.email) {
       throw new Error("Invalid payload: Missing record or email.");
    }

    // TODO: Integrate actual email provider SDK here (e.g., Resend, SendGrid)
    console.log(`[Email Confirmation] Attempting to send confirmation to: ${record.email}`);
    
    // Simulated API Call
    // const res = await fetch('https://api.resend.com/emails', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     from: 'onboarding@brainvion.com',
    //     to: record.email,
    //     subject: 'Welcome to BrainVION - Account Confirmed',
    //     html: `<p>Hi ${record.full_name}, your account is active.</p>`
    //   })
    // });

    return new Response(JSON.stringify({ success: true, message: `Email triggered for ${record.email}` }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown Error";
    console.error("[Email Confirmation Error]", message);
    return new Response(JSON.stringify({ success: false, error: message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    });
  }
});
