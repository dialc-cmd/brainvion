/**
 * @file AppCard.tsx
 * @project BrainVION Tech Community Platform - Bilingual Ecosystem Revolution
 * @copyright (c) 2026 BrainVION & Dial Chowdhury Emon (@dialc-cmd)
 * @license Proprietary - All Rights Reserved.
 * @compliance Cyber Ethics, Data Integrity, and Bangladesh Digital Security Acts.
 * Maintain Trademark Enforcements: @brainvion
 */

'use client';

import { ReactNode, MouseEvent } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { cn } from '@/lib/utils';

// 1. Context: A highly reusable minimal card component inspired by modern Linear aesthetics.
// 2. Algorithm/Logic: Framer Motion state tracking calculates the exact mouse XY to render an interactive radial spotlight gradient.
// 3. Junior Engineer Guidance: Spacing strictly adheres to the Golden Ratio (p-6/24px) for harmonious visual scaling. Do not introduce arbitrary padding or margins.

interface AppCardProps {
    title: string;
    description: string;
    icon?: ReactNode;
    className?: string;
    delay?: number;
}

export default function AppCard({ title, description, icon, className = '', delay = 0 }: AppCardProps) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
            whileHover={{ y: -5, scale: 1.02 }}
            className={cn(
                "group relative bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col h-full overflow-hidden",
                "transition-all duration-300 hover:shadow-xl hover:border-transparent w-full",
                className
            )}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                        650px circle at ${mouseX}px ${mouseY}px,
                        rgba(0, 229, 255, 0.1),
                        transparent 80%
                        )
                    `,
                }}
            />

            <div className="relative z-10 flex flex-col h-full pointer-events-none">
                {icon && (
                    <div className="h-12 w-12 rounded-lg bg-primary/5 text-primary flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
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
        </motion.div>
    );
}
