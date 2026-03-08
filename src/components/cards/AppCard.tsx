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

import { ReactNode } from 'react';

// Community REQUIREMENT [Brainvion]: [Highlight key tech/student topics with minimal, clean card aesthetics inspired by Stripe/Linear.]
// TECHNICAL IMPLEMENTATION: [Reusable functional component taking title, description, and optional icon for rapid prototyping and consistent UI mapping.]
// QA/QC ADVISORY: [Ensure padding and grid flow perfectly at lower viewpoints to avoid cramping.]

interface AppCardProps {
    title: string;
    description: string;
    icon?: ReactNode;
    className?: string;
}

export default function AppCard({ title, description, icon, className = '' }: AppCardProps) {
    return (
        <div className={`bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow p-6 flex flex-col h-full ${className}`}>
            {icon && (
                <div className="h-12 w-12 rounded-lg bg-primary/5 text-primary flex items-center justify-center mb-4">
                    {icon}
                </div>
            )}
            <h3 className="text-xl font-bold font-heading text-primary mb-2">
                {title}
            </h3>
            <p className="text-text/80 text-base leading-relaxed flex-grow">
                {description}
            </p>
        </div>
    );
}
