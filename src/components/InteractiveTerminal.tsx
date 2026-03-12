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
import { Terminal } from 'lucide-react';

const terminalText = [
    "const student = new Engineer('Dhaka');",
    "await student.learn('React', 'Next.js');",
    "student.joinCommunity('BrainVION');",
    "// Success: Career trajectory optimized."
];

export default function InteractiveTerminal() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-lg mx-auto bg-[#0d1117] rounded-xl overflow-hidden shadow-2xl border border-gray-800"
        >
            {/* Terminal Header */}
            <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-gray-800">
                <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="mx-auto flex items-center text-xs text-gray-400 font-mono gap-2">
                    <Terminal className="w-3 h-3" />
                    brainvion-init.js
                </div>
            </div>

            {/* Terminal Body */}
            <div className="p-5 font-mono text-sm sm:text-base text-left bg-transparent">
                {terminalText.map((line, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 + (index * 0.4) }}
                        className={index === 3 ? "text-green-400 mt-2" : "text-gray-300"}
                    >
                        {index === 3 ? line : (
                            <>
                                <span className="text-pink-400 select-none mr-2">{'>'}</span>
                                <span dangerouslySetInnerHTML={{
                                    __html: line
                                        .replace(/const|await|new/g, '<span class="text-blue-400">$&</span>')
                                        .replace(/'[^']*'/g, '<span class="text-[#a5d6ff]">$&</span>')
                                        .replace(/\(/g, '<span class="text-yellow-200">(</span>')
                                        .replace(/\)/g, '<span class="text-yellow-200">)</span>')
                                }} />
                            </>
                        )}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
