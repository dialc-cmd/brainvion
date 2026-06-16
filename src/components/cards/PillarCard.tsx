/**
 * @file PillarCard.tsx
 * @project BrainVION Tech Community Platform - Lean Architecture Update
 * @copyright (c) 2026 BrainVION & Dial Chowdhury Emon (@dialc-cmd)
 * @license Proprietary - All Rights Reserved.
 */

import { motion, AnimatePresence } from 'framer-motion';

// 1. Context: Interactive card mapping logic for the core pillars of the platform.
// 2. Algorithm/Logic: Framer Motion conditionally expands detailed analytics/stats upon active click.
// 3. Junior Engineer Guidance: Avoid hardcoding Tailwind height properties. Rely on Framer Motion's `height: "auto"` for fluid layout shifts.

export interface PillarData {
    icon: React.ElementType;
    title: string;
    description: string;
    stat: string;
    statLabel: string;
    detail: string;
    color: string;
}

export function PillarCard({ pillar, isActive, onClick }: {
    pillar: PillarData;
    isActive: boolean;
    onClick: () => void;
}) {
    const Icon = pillar.icon;
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={onClick}
            className={`relative group cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden
                ${isActive
                    ? 'border-primary/30 shadow-xl'
                    : 'border-gray-100 hover:border-primary/20 shadow-sm hover:shadow-lg'
                }
            `}
        >
            {/* Card Front */}
            <div className={`p-6 md:p-8 transition-all duration-300 ${isActive ? 'bg-primary text-secondary' : 'bg-white'}`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 ${isActive ? 'bg-white/20' : pillar.color}`}>
                    <Icon className={`w-6 h-6 ${isActive ? 'text-secondary' : ''}`} />
                </div>
                <h3 className={`font-heading font-bold text-xl mb-2 transition-colors ${isActive ? 'text-secondary' : 'text-primary'}`}>
                    {pillar.title}
                </h3>
                <p className={`text-sm leading-relaxed transition-colors ${isActive ? 'text-secondary/80' : 'text-text/60'}`}>
                    {pillar.description}
                </p>

                {/* Expanded Detail */}
                <AnimatePresence>
                    {isActive && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                        >
                            <div className="mt-5 pt-5 border-t border-white/20">
                                <div className="flex items-baseline gap-2 mb-3">
                                    <span className="text-3xl font-extrabold text-accent font-heading">{pillar.stat}</span>
                                    <span className="text-secondary/70 text-sm">{pillar.statLabel}</span>
                                </div>
                                <p className="text-secondary/80 text-sm leading-relaxed">{pillar.detail}</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className={`mt-4 text-xs font-semibold flex items-center gap-1 transition-colors ${isActive ? 'text-accent' : 'text-primary/40 group-hover:text-primary/60'}`}>
                    {isActive ? 'Click to collapse ↑' : 'Click to explore →'}
                </div>
            </div>
        </motion.article>
    );
}
