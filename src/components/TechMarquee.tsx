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

import { motion } from 'framer-motion';

const techStack = [
    "Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Python",
    "Figma", "Framer Motion", "MongoDB", "PostgreSQL", "Git", "GitHub"
];

// Duplicate for seamless infinite loop
const combinedStack = [...techStack, ...techStack];

export default function TechMarquee() {
    return (
        <div className="relative w-full overflow-hidden bg-white py-10 border-y border-gray-100 flex items-center">
            {/* Gradient Fades for edges */}
            <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <motion.div
                className="flex whitespace-nowrap gap-8 md:gap-16 items-center px-4"
                animate={{ x: [0, -1000] }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 30,
                        ease: "linear",
                    },
                }}
            >
                {combinedStack.map((tech, i) => (
                    <span
                        key={i}
                        className="text-xl md:text-3xl font-bold font-heading text-text/10 uppercase tracking-widest pointer-events-none select-none transition-colors hover:text-accent/40"
                    >
                        {tech}
                    </span>
                ))}
            </motion.div>
        </div>
    );
}
