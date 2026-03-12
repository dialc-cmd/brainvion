/**
 * =============================================================================
 * BrainVion - PROPRIETARY SOURCE CODE
 * -----------------------------------------------------------------------------
 * © 2026 Brainvion. All Rights Reserved.
 *
 * LEAD ARCHITECT: Dial Chowdhury Emon (@dialc.official)
 * STANDARD: International Students and Young Professional Engineering 
 * NOTICE: This software and its associated logic are the sole intellectual 
 * property of Brainvion. Unauthorized copying, modification, or 
 * distribution is strictly prohibited.
 *
 * =============================================================================
 */

import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Community REQUIREMENT [Brainvion]: [Need a reliable way to merge Tailwind classes for highly interactive, reusable UI components.]
// TECHNICAL IMPLEMENTATION: [Combines clsx for conditional classes and tailwind-merge to predictably resolve Tailwind conflicts.]
// QA/QC ADVISORY: [Ensure custom utilities resolve correctly; check overriding behaviors on dynamic states like hover/focus.]

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
