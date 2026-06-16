/**
 * @file types.ts
 * @project BrainVION Tech Community Platform - Onboarding & Auth Engine
 * @copyright (c) 2026 BrainVION & Dial Chowdhury Emon (@dialc-cmd)
 * @license Proprietary - All Rights Reserved.
 * @compliance Cyber Ethics, Data Integrity, and Bangladesh Digital Security Acts.
 * Maintain Trademark Enforcements: @brainvion
 */

// Community REQUIREMENT [Brainvion]: [Central type definitions for the services marketplace to enforce strict type safety across the booking engine.]
// TECHNICAL IMPLEMENTATION: [Union literal type for slugs ensures compile-time validation. Interfaces define shape contracts for card rendering and form payloads.]
// QA/QC ADVISORY: [Adding a new service requires updating the ServiceSlug union AND adding a corresponding entry in src/data/services.ts.]

/**
 * Discriminated union of all available service identifiers.
 * Each slug maps 1:1 to a TechServiceGig entry in the services data file.
 */
export type ServiceSlug =
  | 'digital-marketing'
  | 'graphic-design'
  | 'study-abroad-supporter'
  | 'wordpress-solutions'
  | 'backend-solutions';

/**
 * Data shape for a single service gig card rendered in the services grid.
 */
export interface TechServiceGig {
  id: string;
  title: string;
  slug: ServiceSlug;
  description: string;
  icon: string; // Lucide-react icon name reference (e.g. 'Megaphone', 'Palette')
}

/**
 * Payload shape for the appointment booking form submission.
 * Validated client-side before dispatch.
 */
export interface AppointmentPayload {
  fullName: string;
  email: string;
  phone: string;
  selectedService: ServiceSlug;
}

/**
 * Payload for the Client/Customer Transactional Signup (/signup).
 * Role is implicitly 'customer' — the selection UI has been removed.
 */
export interface ClientRegistrationPayload {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  role: 'customer';
}

/**
 * Payload for the Community Contributor Form (/community).
 * Collects builder-specific data and routes to the Contributor Dashboard.
 */
export interface ContributorJoinPayload {
  fullName: string;
  email: string;
  phone: string;
  homeCountry: string;
  github?: string;
  linkedin?: string;
  discord?: string;
  education: string;
  skills: string;
  goal: string;
  contribution: string;
  source: string;
  portfolioUrl?: string;
  contributionArea: 'developer' | 'writer' | 'student_ambassador';
  role: 'contributor';
}

/**
 * Content localization targeting.
 */
export type LocaleMode = 'bn' | 'en';

export interface LocalizationContent {
  headline: string;
  subtext: string;
  ctaText: string;
}

export interface BilingualProductPayload {
  id: string;
  slug: ServiceSlug;
  priceBDT: number;
  icon: string;
  content: {
    en: LocalizationContent;
    bn: LocalizationContent;
  };
}

/**
 * Segments for the community hub.
 */
export type CommunityZone = 'international' | 'local-bd';
