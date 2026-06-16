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

// [Why this exists]: We need standard numbers for all margins/paddings across the project to maintain consistency and premium feel.
// [Algorithm/Logic]: All sizes are derived from a base spacing utility (16px) multiplied by Golden Ratio (1.618) implementations.
// [Junior Engineer Guidance]: UI testers should ensure all spacing and layout scales adhere to these exported constants instead of magic numbers inline.

export const PHI = 1.618;

// Layout spacing based on a 16px (1rem) base and precise PHI (1.618) multiplications for visual hierarchy
export const SPACING = {
    xs: '0.5rem',      // 8px
    sm: '1rem',        // 16px
    md: '1.618rem',    // ~25.888px (16 * 1.618)
    lg: '2.618rem',    // ~41.887px (25.888 * 1.618)
    xl: '4.236rem',    // ~67.773px (41.887 * 1.618)
    xxl: '6.854rem',   // ~109.656px (67.773 * 1.618)
};

export const TYPOGRAPHY = {
    h1: 'text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight',
    h2: 'text-3xl md:text-4xl font-bold tracking-tight',
    h3: 'text-2xl md:text-3xl font-semibold',
    body: 'text-base md:text-lg leading-relaxed',
    small: 'text-sm leading-normal',
};

export const BANGLA_TYPOGRAPHY = {
    h1: 'font-bangla-heading text-4xl md:text-5xl lg:text-7xl font-bold leading-tight',
    h2: 'font-bangla-heading text-3xl md:text-4xl font-bold leading-tight',
    h3: 'font-bangla-heading text-2xl md:text-3xl font-semibold',
    body: 'font-bangla-body text-base md:text-lg leading-relaxed',
    small: 'font-bangla-body text-sm leading-normal',
};

// Application standard links
export const LINKS = {
    form: 'https://docs.google.com/forms/d/e/1FAIpQLScX...', // Placeholder
    whatsapp: 'https://wa.me/something',
    facebook: 'https://facebook.com/brainvion',
    email: 'mailto:hello@brainvion.com',
};
