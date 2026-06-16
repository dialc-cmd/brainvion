/**
 * @file ServiceGigCard.tsx
 * @project BrainVION Tech Community Platform - Fluid Bilingual Engine
 * @copyright (c) 2026 BrainVION & Dial Chowdhury Emon (@dialc-cmd)
 * @license Proprietary - All Rights Reserved.
 * @compliance Cyber Ethics, Data Integrity, and Bangladesh Digital/Cyber Security Acts.
 * Maintain Trademark Enforcements: @brainvion
 */

'use client';

import { MouseEvent } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import {
    Megaphone,
    Palette,
    GraduationCap,
    Globe,
    Server,
    type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { BilingualProductPayload, ServiceSlug } from '@/lib/types';

// 1. Context: Bilingual Product Card adapting to local business users with international design standards.
// 2. Algorithm/Logic: Consumes `BilingualProductPayload`. Applies `.phi-padding-card` dynamically and targets `.font-bangla-heading` for correct line-height weighting.
// 3. Junior Engineer Guidance: Do NOT hardcode text styles inline; the globals.css handles the Golden Ratio scaling for Bangla characters.

const ICON_MAP: Record<string, LucideIcon> = {
    Megaphone,
    Palette,
    GraduationCap,
    Globe,
    Server,
};

interface ServiceGigCardProps {
    service: BilingualProductPayload;
    onBookAppointment: (slug: ServiceSlug) => void;
    delay?: number;
}

export default function ServiceGigCard({
    service,
    onBookAppointment,
    delay = 0,
}: ServiceGigCardProps) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const IconComponent = ICON_MAP[service.icon] ?? Server;

    function handleMouseMove({
        currentTarget,
        clientX,
        clientY,
    }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay, ease: 'easeOut' }}
            whileHover={{ y: -6, scale: 1.02 }}
            className={cn(
                'group relative bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full overflow-hidden phi-padding-card',
                'transition-all duration-300 hover:shadow-2xl hover:border-transparent w-full'
            )}
        >
            {/* Radial glow */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            600px circle at ${mouseX}px ${mouseY}px,
                            rgba(0, 229, 255, 0.12),
                            transparent 80%
                        )
                    `,
                }}
            />

            <div className="relative z-10 flex flex-col h-full">
                {/* Header / Icon */}
                <div className="flex justify-between items-start mb-6">
                    <div className="h-14 w-14 rounded-xl bg-primary/5 text-primary flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-accent/10 group-hover:text-accent">
                        <IconComponent className="w-7 h-7" />
                    </div>
                    <div className="text-right">
                        <span className="inline-block bg-[var(--color-bangla-accent)]/10 text-[var(--color-bangla-accent)] font-bold text-sm px-3 py-1 rounded-full mb-1 font-heading">
                            ৳{service.priceBDT.toLocaleString('en-IN')}
                        </span>
                    </div>
                </div>

                {/* Bangla Value Proposition (Local Tone) */}
                <h3 className="text-2xl font-bold font-bangla-heading text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                    {service.content.bn.headline}
                </h3>
                <p className="text-text/70 text-lg font-bangla-body leading-relaxed mb-6">
                    {service.content.bn.subtext}
                </p>

                {/* English Technical Deliverables (Global Standard) */}
                <div className="flex-grow">
                    <div className="bg-secondary/50 rounded-xl p-4 mb-8 border border-gray-100">
                        <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Deliverables</h4>
                        <ul className="text-sm text-text/60 font-body space-y-2 whitespace-pre-line">
                            {service.content.en.subtext}
                        </ul>
                    </div>
                </div>

                {/* CTA Button */}
                <button
                    id={`book-appointment-${service.slug}`}
                    onClick={() => onBookAppointment(service.slug)}
                    className={cn(
                        'w-full py-4 rounded-xl font-bold text-sm tracking-wide font-bangla-heading',
                        'bg-primary text-secondary',
                        'hover:bg-accent hover:text-primary',
                        'active:scale-[0.97]',
                        'transition-all duration-300',
                        'focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2',
                        'shadow-sm hover:shadow-lg'
                    )}
                >
                    {service.content.bn.ctaText}
                </button>
            </div>
        </motion.div>
    );
}
