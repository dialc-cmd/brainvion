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

// Community REQUIREMENT [Brainvion]: [We need standard numbers for all margins/paddings across the project to maintain consistency and premium feel.]
// TECHNICAL IMPLEMENTATION: [All sizes are derived from a base spacing utility (4px) multiplied by Golden Ratio implementations where applicable, exported directly.]
// QA/QC ADVISORY: [UI testers should ensure all spacing and layout scales adhere to these exported constants instead of magic numbers inline.]

export const PHI = 1.618;

// Layout spacing based on an 8px base and PHI approximations for visual hierarchy
export const SPACING = {
    xs: '0.5rem',      // 8px
    sm: '1rem',        // 16px
    md: '1.5rem',      // 24px (approx 16 * 1.6)
    lg: '2.5rem',      // 40px (approx 24 * 1.6)
    xl: '4rem',        // 64px (approx 40 * 1.6)
    xxl: '6.5rem',     // 104px (approx 64 * 1.6)
};

export const TYPOGRAPHY = {
    h1: 'text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight',
    h2: 'text-3xl md:text-4xl font-bold tracking-tight',
    h3: 'text-2xl md:text-3xl font-semibold',
    body: 'text-base md:text-lg leading-relaxed',
    small: 'text-sm leading-normal',
};

// Application standard links
export const LINKS = {
    form: 'https://docs.google.com/forms/d/e/1FAIpQLScX...', // Placeholder
    whatsapp: 'https://wa.me/something',
    facebook: 'https://facebook.com/brainvion',
    email: 'mailto:hello@brainvion.com',
};
