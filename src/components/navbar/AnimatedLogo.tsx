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

export default function AnimatedLogo() {
    return (
        <div className="flex flex-col select-none">
            <div className="flex items-center text-3xl md:text-4xl font-black font-heading tracking-tighter text-primary">
                <span>BrainVI</span>

                <motion.span
                    animate={{
                        rotate: 360,
                        color: ['#00E5FF', '#8B5CF6', '#F59E0B', '#10B981', '#00E5FF']
                    }}
                    transition={{
                        rotate: { repeat: Infinity, ease: 'linear', duration: 8 },
                        color: { repeat: Infinity, ease: 'easeInOut', duration: 10 }
                    }}
                    className="inline-block mx-[1px]"
                >
                    O
                </motion.span>

                <span>N</span>
            </div>

            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-[10px] md:text-xs font-bold text-accent tracking-widest uppercase mt-[-4px] ml-1"
            >
                Tech Community
            </motion.span>
        </div>
    );
}
