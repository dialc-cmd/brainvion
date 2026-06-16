/**
 * @file index.tsx
 * @project BrainVION Tech Community Platform - Lean Architecture Update
 * @copyright (c) 2026 BrainVION & Dial Chowdhury Emon (@dialc-cmd)
 * @license Proprietary - All Rights Reserved.
 * @compliance Cyber Ethics, Data Integrity, and Bangladesh Digital Security Acts.
 * Maintain Trademark Enforcements: @brainvion
 */

import Head from 'next/head';
import { GetServerSideProps } from 'next';
import prisma from '@/lib/prisma';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { User, LogOut, BookOpen, ShoppingBag, Users } from 'lucide-react';
import { ProfileTab } from '@/components/dashboard/ProfileTab';
import { DirectoryTab } from '@/components/dashboard/DirectoryTab';
import { HubTab } from '@/components/dashboard/HubTab';
import { StoreTab } from '@/components/dashboard/StoreTab';

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

interface DashboardProps {
    currentUser: UserData;
    allUsers: UserData[];
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const userId = context.req.cookies.user_id;

    if (!userId) {
        return { redirect: { destination: '/community', permanent: false } };
    }

    const currentUser = await prisma.user.findUnique({ where: { id: userId } });

    if (!currentUser) {
        context.res.setHeader('Set-Cookie', 'user_id=; Max-Age=0; path=/');
        return { redirect: { destination: '/community', permanent: false } };
    }

    const allUsers = await prisma.user.findMany({ orderBy: { createdAt: 'desc' } });

    return {
        props: {
            currentUser: JSON.parse(JSON.stringify(currentUser)),
            allUsers: JSON.parse(JSON.stringify(allUsers)),
        },
    };
};

export default function Dashboard({ currentUser, allUsers }: DashboardProps) {
    const [activeTab, setActiveTab] = useState<'profile' | 'directory' | 'hub' | 'store'>('profile');

    return (
        <div className="min-h-screen bg-neutral-950 text-white font-sans">
            <Head>
                <title>Member Dashboard | BrainVION</title>
            </Head>

            <div className="flex flex-col md:flex-row min-h-screen">
                <aside className="w-full md:w-64 bg-neutral-900 border-r border-neutral-800 p-6 flex flex-col shrink-0">
                    <h2 className="text-2xl font-bold font-heading text-primary mb-8">Command Center</h2>
                    
                    <nav className="flex flex-col gap-2 flex-1">
                        <button onClick={() => setActiveTab('profile')} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'profile' ? 'bg-primary/10 text-primary' : 'text-neutral-400 hover:bg-neutral-800 hover:text-white'}`}>
                            <User className="w-5 h-5" /> My Profile
                        </button>
                        <button onClick={() => setActiveTab('directory')} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'directory' ? 'bg-primary/10 text-primary' : 'text-neutral-400 hover:bg-neutral-800 hover:text-white'}`}>
                            <Users className="w-5 h-5" /> Member Directory
                        </button>
                        <button onClick={() => setActiveTab('hub')} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'hub' ? 'bg-primary/10 text-primary' : 'text-neutral-400 hover:bg-neutral-800 hover:text-white'}`}>
                            <BookOpen className="w-5 h-5" /> Learning Hub
                        </button>
                        <button onClick={() => setActiveTab('store')} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'store' ? 'bg-primary/10 text-primary' : 'text-neutral-400 hover:bg-neutral-800 hover:text-white'}`}>
                            <ShoppingBag className="w-5 h-5" /> Store Access
                        </button>
                    </nav>

                    <button onClick={() => { document.cookie = "user_id=; Max-Age=0; path=/"; window.location.href = "/" }} className="mt-auto flex items-center gap-3 px-4 py-3 rounded-xl text-rose-500 hover:bg-rose-500/10 transition-all">
                        <LogOut className="w-5 h-5" /> Sign Out
                    </button>
                </aside>

                <main className="flex-1 p-6 md:p-12 overflow-y-auto bg-neutral-950">
                    <AnimatePresence mode="wait">
                        {activeTab === 'profile' && <ProfileTab currentUser={currentUser} />}
                        {activeTab === 'directory' && <DirectoryTab allUsers={allUsers} />}
                        {activeTab === 'hub' && <HubTab />}
                        {activeTab === 'store' && <StoreTab />}
                    </AnimatePresence>
                </main>
            </div>
        </div>
    );
}
