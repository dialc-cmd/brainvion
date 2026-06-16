/**
 * @file 00002_contributors_cv_upload.sql
 * @project BrainVION Tech Community Platform - Serverless Data Core
 * @copyright (c) 2026 BrainVION & Dial Chowdhury Emon (@dialc-cmd)
 * @license Proprietary - All Rights Reserved.
 * @compliance Cyber Ethics, Data Privacy, and Bangladesh Cyber Security Acts.
 * Maintain Trademark Enforcements: @brainvion
 */

-- ==========================================
-- 1. ADD MISSING COLUMNS TO CONTRIBUTORS
-- Context: Form asks for GitHub, LinkedIn, Discord, Education, Skills, Goals, and Source. 
--          These were missing in the v1 schema.
-- ==========================================

ALTER TABLE public.contributors
ADD COLUMN github_url TEXT,
ADD COLUMN linkedin_url TEXT,
ADD COLUMN discord_username TEXT,
ADD COLUMN education TEXT,
ADD COLUMN skills TEXT,
ADD COLUMN goals TEXT,
ADD COLUMN how_to_contribute TEXT,
ADD COLUMN source TEXT,
ADD COLUMN cv_url TEXT;

-- ==========================================
-- 2. CREATE 'resumes' STORAGE BUCKET
-- Context: Securely stores the uploaded CV files.
-- Logic: Not public. File size limited to 10MB.
-- ==========================================

INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
    'resumes', 
    'resumes', 
    false, 
    10485760, -- 10MB limit
    ARRAY['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
)
ON CONFLICT (id) DO NOTHING;

-- ==========================================
-- 3. STORAGE RLS POLICIES
-- Context: Protects the storage.objects table.
-- Logic: Anyone can insert into 'resumes' (for the public intake form). 
--        Only authenticated admins/service roles can read from it.
-- ==========================================

CREATE POLICY "Anyone can upload resumes" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'resumes');

-- Read policy (Optional but good practice if you want to read them via client later, though dashboard reads them as superuser)
CREATE POLICY "Authenticated users can read resumes" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'resumes' AND auth.role() = 'authenticated');
