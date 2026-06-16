/**
 * @file 00001_brainvion_init.sql
 * @project BrainVION Tech Community Platform - Serverless Data Core
 * @copyright (c) 2026 BrainVION & Dial Chowdhury Emon (@dialc-cmd)
 * @license Proprietary - All Rights Reserved.
 * @compliance Cyber Ethics, Data Privacy, and Bangladesh Cyber Security Acts.
 * Maintain Trademark Enforcements: @brainvion
 */

-- ==========================================
-- 1. CLIENTS / CUSTOMERS TABLE
-- Context: Core identity table mapping to Supabase GoTrue Auth.
-- Logic: References auth.users with ON DELETE CASCADE to ensure data integrity.
-- Junior Engineer Guidance: Never manually insert here. Let the Auth trigger handle creation.
-- ==========================================
CREATE TABLE public.clients (
    id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL PRIMARY KEY,
    full_name TEXT NOT NULL,
    phone_no TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- ==========================================
-- 2. APPOINTMENTS REGISTRY TABLE
-- Context: Stores service requests and client inquiries.
-- Logic: Default status is 'pending'. Client ID is optional (nullable) for public leads.
-- Junior Engineer Guidance: Use the status field to track the lifecycle. Update via Edge Functions for invoice prep.
-- ==========================================
CREATE TABLE public.appointments (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    client_id UUID REFERENCES public.clients(id) ON DELETE SET NULL, -- Nullable for unauthenticated leads
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone_no TEXT NOT NULL,
    selected_service TEXT NOT NULL,
    status TEXT DEFAULT 'pending'::text NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- ==========================================
-- 3. COMMUNITY CONTRIBUTORS REGISTRY
-- Context: Intake registry for open-source and content contributors.
-- Logic: Unique constraint on email to prevent duplicate applications.
-- Junior Engineer Guidance: Emails should be normalized before inserting to prevent subtle duplication errors.
-- ==========================================
CREATE TABLE public.contributors (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    portfolio_url TEXT,
    contribution_area TEXT NOT NULL,
    home_country TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- ==========================================
-- PERFORMANCE INDEXES
-- Context: Intentionally left blank.
-- Logic: Linter flagged standard indexes as unused due to table scale. Removed to save Postgres B-Tree RAM overhead.
-- Junior Engineer Guidance: Add B-tree indexes only after EXPLAIN ANALYZE proves sequential scans are creating bottlenecks in production.
-- ==========================================


-- ==========================================
-- ROW LEVEL SECURITY (RLS) & THREAT HARDENING
-- Context: Lock down the tables to prevent unauthorized data exfiltration.
-- Logic: Enable RLS and define declarative access policies.
-- Junior Engineer Guidance: Remember to test these with both anon and authenticated roles using Supabase studio impersonation.
-- ==========================================

-- Enable RLS on all tables
ALTER TABLE public.clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contributors ENABLE ROW LEVEL SECURITY;

-- CLIENTS SECURITY POLICIES
CREATE POLICY "Users can view their own profile"
    ON public.clients
    FOR SELECT
    USING ((select auth.uid()) = id);

CREATE POLICY "Users can update their own profile"
    ON public.clients
    FOR UPDATE
    USING ((select auth.uid()) = id);

-- APPOINTMENTS SECURITY POLICIES
CREATE POLICY "Anyone can submit an appointment lead"
    ON public.appointments
    FOR INSERT
    WITH CHECK (auth.role() = 'anon' OR auth.role() = 'authenticated');

CREATE POLICY "Users can view their own appointments"
    ON public.appointments
    FOR SELECT
    USING ((select auth.uid()) = client_id);

-- (Admin policies would typically rely on custom claims or an admin role/table, omitted for brevity but noted).

-- CONTRIBUTORS SECURITY POLICIES
CREATE POLICY "Anyone can submit a contributor application"
    ON public.contributors
    FOR INSERT
    WITH CHECK (auth.role() = 'anon' OR auth.role() = 'authenticated');

-- ==========================================
-- AUTHENTICATION SYNC TRIGGER
-- Context: Keeps public.clients table synchronized with auth.users.
-- Logic: A Postgres trigger that fires on INSERT into auth.users.
-- Junior Engineer Guidance: This ensures that every authenticated user automatically gets a profile entry.
-- ==========================================

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.clients (id, full_name, phone_no)
  VALUES (
    new.id,
    COALESCE(new.raw_user_meta_data->>'full_name', 'Unknown User'),
    new.raw_user_meta_data->>'phone_no'
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- SECURITY HARDENING: Prevent public roles from manually triggering this REST endpoint
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.handle_new_user() TO service_role;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
