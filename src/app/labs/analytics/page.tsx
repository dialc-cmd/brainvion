/**
 * =============================================================================
 * BrainVion - PROPRIETARY SOURCE CODE
 * © 2026 Brainvion. All Rights Reserved.
 * LEAD ARCHITECT: Dial Chowdhury Emon (@dialc.official)
 * =============================================================================
 */

'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
    AreaChart, Area, LineChart, Line, BarChart, Bar,
    XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import { ArrowLeft, TrendingUp, Users, BookOpen, Award, Sliders } from 'lucide-react';
import Link from 'next/link';

/** Predictive Analysis Dashboard — fully client-side, zero backend costs.
 *  Uses deterministic algorithm based on user inputs to simulate ML predictions.
 */

function generateStudyProjection(hoursPerDay: number, consistency: number) {
    return Array.from({ length: 12 }, (_, i) => {
        const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i];
        const growth = hoursPerDay * consistency * 0.08;
        const base = 40 + i * growth * 4;
        return {
            month,
            skill: Math.min(100, Math.round(base + Math.sin(i * 0.5) * 3)),
            predicted: Math.min(100, Math.round(base + growth * 3 + i * 1.2)),
        };
    });
}

function generateIELTSProjection(currentBand: number, studyHours: number) {
    return Array.from({ length: 8 }, (_, i) => {
        const week = `Wk ${i + 1}`;
        const gain = studyHours * 0.012;
        const score = Math.min(9, currentBand + gain * (i + 1) * 0.7);
        return { week, band: +score.toFixed(1) };
    });
}

function generateJobMarket() {
    return [
        { role: 'Frontend Dev', demand: 85, salary: 72 },
        { role: 'ML Engineer', demand: 92, salary: 95 },
        { role: 'Fullstack Dev', demand: 78, salary: 68 },
        { role: 'DevOps', demand: 70, salary: 80 },
        { role: 'UI/UX', demand: 65, salary: 60 },
    ];
}

const StatCard = ({ icon: Icon, label, value, sub, color }: any) => (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 flex flex-col gap-2">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}>
            <Icon className="w-5 h-5 text-white" />
        </div>
        <p className="text-neutral-400 text-xs font-medium">{label}</p>
        <p className="text-2xl font-bold text-white font-heading">{value}</p>
        <p className="text-xs text-neutral-500">{sub}</p>
    </div>
);

export default function PredictiveAnalytics() {
    const [studyHours, setStudyHours] = useState(4);
    const [consistency, setConsistency] = useState(7);
    const [currentBand, setCurrentBand] = useState(6.0);

    const projection = useMemo(() => generateStudyProjection(studyHours, consistency), [studyHours, consistency]);
    const ieltsData = useMemo(() => generateIELTSProjection(currentBand, studyHours), [currentBand, studyHours]);
    const jobData = useMemo(() => generateJobMarket(), []);
    const predictedBand = useMemo(() => {
        const last = ieltsData[ieltsData.length - 1];
        return Math.min(9, last.band).toFixed(1);
    }, [ieltsData]);

    return (
        <div className="min-h-screen bg-[#050505] text-neutral-200 font-sans">
            {/* Header */}
            <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-900/60 backdrop-blur-md px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/dashboard" className="p-2 hover:bg-neutral-800 rounded-full transition-colors text-neutral-400">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-amber-400" />
                        <h1 className="font-heading font-bold text-white text-lg">Predictive Analytics</h1>
                    </div>
                </div>
                <span className="hidden md:inline text-xs font-mono text-neutral-500 border border-neutral-800 px-3 py-1 rounded-full">
                    Interactive Analytics
                </span>
            </header>

            <main className="max-w-7xl mx-auto px-4 py-8 space-y-8">

                {/* Input Controls */}
                <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
                    <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                        <Sliders className="w-5 h-5 text-amber-400" /> Configure Your Study Profile
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-neutral-400 mb-3">
                                Study Hours/Day: <span className="text-amber-400 font-bold">{studyHours}h</span>
                            </label>
                            <input type="range" min={1} max={12} value={studyHours} onChange={e => setStudyHours(+e.target.value)}
                                className="w-full accent-amber-500 h-2 bg-neutral-800 rounded-full cursor-pointer" />
                            <div className="flex justify-between text-xs text-neutral-600 mt-1"><span>1h</span><span>12h</span></div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-neutral-400 mb-3">
                                Consistency (1-10): <span className="text-emerald-400 font-bold">{consistency}/10</span>
                            </label>
                            <input type="range" min={1} max={10} value={consistency} onChange={e => setConsistency(+e.target.value)}
                                className="w-full accent-emerald-500 h-2 bg-neutral-800 rounded-full cursor-pointer" />
                            <div className="flex justify-between text-xs text-neutral-600 mt-1"><span>Low</span><span>High</span></div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-neutral-400 mb-3">
                                Current IELTS Band: <span className="text-purple-400 font-bold">{currentBand.toFixed(1)}</span>
                            </label>
                            <input type="range" min={4} max={8} step={0.5} value={currentBand} onChange={e => setCurrentBand(+e.target.value)}
                                className="w-full accent-purple-500 h-2 bg-neutral-800 rounded-full cursor-pointer" />
                            <div className="flex justify-between text-xs text-neutral-600 mt-1"><span>4.0</span><span>8.0</span></div>
                        </div>
                    </div>
                </div>

                {/* Stat Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <StatCard icon={TrendingUp} label="Predicted Skill Score (1yr)" value={`${projection[11].predicted}%`} sub="Based on current inputs" color="bg-amber-500" />
                    <StatCard icon={Award} label="Predicted IELTS Band (8wk)" value={predictedBand} sub="With consistent study" color="bg-purple-600" />
                    <StatCard icon={Users} label="BrainVION Cohort Avg" value="74%" sub="Skill growth in 12mo" color="bg-sky-600" />
                    <StatCard icon={BookOpen} label="Recommended Hrs/Day" value={studyHours < 3 ? "Increase!" : studyHours >= 6 ? "Optimal" : "Good"} sub={`${studyHours}h/day currently set`} color="bg-emerald-600" />
                </div>

                {/* Skill Projection Chart */}
                <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
                    <h3 className="text-white font-bold mb-6">12-Month Skill Progression</h3>
                    <ResponsiveContainer width="100%" height={280}>
                        <AreaChart data={projection} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                            <defs>
                                <linearGradient id="skillGrad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#F59E0B" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="predGrad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#262626" />
                            <XAxis dataKey="month" stroke="#525252" tick={{ fill: '#737373', fontSize: 12 }} />
                            <YAxis domain={[0, 100]} stroke="#525252" tick={{ fill: '#737373', fontSize: 12 }} tickFormatter={v => `${v}%`} />
                            <Tooltip contentStyle={{ backgroundColor: '#171717', border: '1px solid #404040', borderRadius: 12, color: '#e5e5e5' }} />
                            <Legend iconType="circle" iconSize={8} />
                            <Area type="monotone" dataKey="skill" name="Current Path" stroke="#F59E0B" fill="url(#skillGrad)" strokeWidth={2} dot={false} />
                            <Area type="monotone" dataKey="predicted" name="Predicted (with inputs)" stroke="#10B981" fill="url(#predGrad)" strokeWidth={2} dot={false} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* IELTS Band Trajectory */}
                    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
                        <h3 className="text-white font-bold mb-6">IELTS Band Trajectory (8 weeks)</h3>
                        <ResponsiveContainer width="100%" height={220}>
                            <LineChart data={ieltsData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#262626" />
                                <XAxis dataKey="week" stroke="#525252" tick={{ fill: '#737373', fontSize: 12 }} />
                                <YAxis domain={[4, 9]} stroke="#525252" tick={{ fill: '#737373', fontSize: 12 }} />
                                <Tooltip contentStyle={{ backgroundColor: '#171717', border: '1px solid #404040', borderRadius: 12, color: '#e5e5e5' }} />
                                <Line type="monotone" dataKey="band" stroke="#A855F7" strokeWidth={3} dot={{ fill: '#A855F7', r: 4 }} name="Band Score" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Job Market Demand */}
                    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
                        <h3 className="text-white font-bold mb-6">Tech Roles · Market Demand Index</h3>
                        <ResponsiveContainer width="100%" height={220}>
                            <BarChart data={jobData} layout="vertical" margin={{ left: 20 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#262626" horizontal={false} />
                                <XAxis type="number" domain={[0, 100]} stroke="#525252" tick={{ fill: '#737373', fontSize: 12 }} tickFormatter={v => `${v}%`} />
                                <YAxis dataKey="role" type="category" stroke="#525252" tick={{ fill: '#d4d4d4', fontSize: 12 }} width={90} />
                                <Tooltip contentStyle={{ backgroundColor: '#171717', border: '1px solid #404040', borderRadius: 12, color: '#e5e5e5' }} />
                                <Bar dataKey="demand" name="Demand" fill="#06B6D4" radius={[0, 6, 6, 0]} />
                                <Bar dataKey="salary" name="Avg Salary Index" fill="#8B5CF6" radius={[0, 6, 6, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </main>
        </div>
    );
}
