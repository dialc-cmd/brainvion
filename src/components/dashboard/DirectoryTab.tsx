/**
 * @file DirectoryTab.tsx
 * @project BrainVION Tech Community Platform - Lean Architecture Update
 * @copyright (c) 2026 BrainVION & Dial Chowdhury Emon (@dialc-cmd)
 * @license Proprietary - All Rights Reserved.
 */

import { motion } from 'framer-motion';

// 1. Context: Displays a directory of all registered members.
// 2. Algorithm/Logic: Maps `allUsers` prop to table rows.
// 3. Junior Engineer Guidance: Ensure `overflow-x-auto` wrapper remains to prevent mobile layout breaks.

interface UserData {
    id: string;
    name: string;
    email: string;
    phone: string;
    discord?: string;
    skills: string;
    education: string;
    createdAt: string;
}

export function DirectoryTab({ allUsers }: { allUsers: UserData[] }) {
    return (
        <motion.section key="directory" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            <h1 className="text-3xl font-bold font-heading mb-6">BrainVION Members</h1>
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-neutral-800 text-neutral-400 text-sm">
                                <th className="p-4 font-medium border-b border-neutral-700">Name</th>
                                <th className="p-4 font-medium border-b border-neutral-700">Skills</th>
                                <th className="p-4 font-medium border-b border-neutral-700">Joined</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allUsers.map((u: UserData) => (
                                <tr key={u.id} className="border-b border-neutral-800 hover:bg-neutral-800/50 transition-colors">
                                    <td className="p-4">
                                        <div className="font-semibold text-white">{u.name}</div>
                                        <div className="text-xs text-neutral-500">{u.education}</div>
                                    </td>
                                    <td className="p-4 text-sm text-neutral-300 max-w-[200px] truncate" title={u.skills}>{u.skills}</td>
                                    <td className="p-4 text-sm text-neutral-500">{new Date(u.createdAt).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </motion.section>
    );
}
