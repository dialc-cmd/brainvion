/**
 * =============================================================================
 * BrainVion - PROPRIETARY SOURCE CODE
 * © 2026 Brainvion. All Rights Reserved.
 * LEAD ARCHITECT: Dial Chowdhury Emon (@dialc.official)
 * =============================================================================
 */

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { BrainCircuit, ArrowRight, UserPlus, FileImage, ShieldCheck } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '', email: '', whatsapp: '', age: '',
        qualification: '', semester: '', intro: '',
        password: '', confirmPassword: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();
        setStep(2);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match'); return;
        }
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            router.push('/dashboard/profile');
        }, 1500);
    };

    const showSemester = formData.qualification.includes('Ongoing') || formData.qualification.includes('Diploma');

    return (
        <div className="min-h-screen bg-[#050505] flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10 text-center">
                <Link href="/" className="inline-flex justify-center mb-6 focus:outline-none rounded-full ring-2 ring-transparent focus:ring-purple-500">
                    <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl">
                        <BrainCircuit className="w-10 h-10 text-purple-500" />
                    </div>
                </Link>
                <h2 className="text-3xl font-extrabold text-white font-heading tracking-tight">Join Agentic Labs</h2>
                <p className="mt-2 text-sm text-neutral-400">Enter the BrainVION global student network.</p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl relative z-10">
                <div className="bg-neutral-900/60 backdrop-blur-xl py-8 px-4 shadow-[0_0_50px_rgba(0,0,0,0.5)] sm:rounded-2xl sm:px-10 border border-neutral-800">

                    {/* Progress Bar */}
                    <div className="mb-8 flex items-center justify-between relative">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 w-full bg-neutral-800 -z-10" />
                        <div
                            className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 bg-purple-500 transition-all duration-500 -z-10"
                            style={{ width: step === 1 ? '50%' : '100%' }}
                        />
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${step >= 1 ? 'bg-purple-500 text-white shadow-[0_0_15px_purple]' : 'bg-neutral-800 text-neutral-400'}`}>1</div>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${step >= 2 ? 'bg-purple-500 text-white shadow-[0_0_15px_purple]' : 'bg-neutral-800 text-neutral-400'}`}>2</div>
                    </div>

                    <form onSubmit={step === 1 ? handleNext : handleSubmit} className="space-y-6">
                        <AnimatePresence mode="wait">
                            {/* ── Step 1: Identity ── */}
                            {step === 1 && (
                                <motion.div key="step1" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-5">
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-300">Full Name</label>
                                        <div className="mt-1">
                                            <input name="fullName" type="text" required value={formData.fullName} onChange={handleChange} className="appearance-none block w-full px-4 py-3 border border-neutral-700 rounded-xl shadow-sm placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm bg-neutral-800/50 text-white transition-all" placeholder="Ada Lovelace" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-neutral-300">Email address</label>
                                            <div className="mt-1">
                                                <input name="email" type="email" required value={formData.email} onChange={handleChange} className="appearance-none block w-full px-4 py-3 border border-neutral-700 rounded-xl shadow-sm placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm bg-neutral-800/50 text-white" placeholder="ada@student.com" />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-neutral-300">Age</label>
                                            <div className="mt-1">
                                                <input name="age" type="number" required min="13" max="99" value={formData.age} onChange={handleChange} className="appearance-none block w-full px-4 py-3 border border-neutral-700 rounded-xl shadow-sm placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm bg-neutral-800/50 text-white" placeholder="21" />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-300">WhatsApp Number</label>
                                        <div className="mt-1 flex rounded-xl shadow-sm">
                                            <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-neutral-700 bg-neutral-800/80 text-neutral-400 sm:text-sm font-mono">+880</span>
                                            <input name="whatsapp" type="tel" required value={formData.whatsapp} onChange={handleChange} className="flex-1 min-w-0 block w-full px-4 py-3 border border-neutral-700 rounded-none rounded-r-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm bg-neutral-800/50 text-white" placeholder="17XXXXXXXX" />
                                        </div>
                                        <p className="mt-1 text-xs text-neutral-500 flex items-center"><ShieldCheck className="w-3 h-3 mr-1 text-emerald-500" /> Used for community lab updates only.</p>
                                    </div>

                                    <button type="submit" className="w-full flex justify-center items-center py-3.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-purple-600 hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-900 focus:ring-purple-500 transition-all active:scale-[0.98]">
                                        Continue Setup <ArrowRight className="ml-2 w-4 h-4" />
                                    </button>
                                </motion.div>
                            )}

                            {/* ── Step 2: Profile Setup ── */}
                            {step === 2 && (
                                <motion.div key="step2" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-5">

                                    {/* Avatar Upload */}
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-300 mb-2">Profile Photo</label>
                                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-700 border-dashed rounded-xl hover:border-purple-500/50 transition-colors bg-neutral-800/20">
                                            <div className="space-y-1 text-center">
                                                <FileImage className="mx-auto h-12 w-12 text-neutral-500" />
                                                <div className="flex text-sm text-neutral-400 justify-center">
                                                    <label htmlFor="file-upload" className="relative cursor-pointer bg-neutral-900 rounded-md font-medium text-purple-400 hover:text-purple-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-purple-500 px-2 py-0.5">
                                                        <span>Upload a photo</span>
                                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" accept="image/*" />
                                                    </label>
                                                </div>
                                                <p className="text-xs text-neutral-500">PNG, JPG up to 5MB</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Last Educational Qualification */}
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-300 mb-1">Last Educational Qualification <span className="text-rose-500">*</span></label>
                                        <select name="qualification" required value={formData.qualification} onChange={handleChange} className="appearance-none block w-full px-4 py-3 border border-neutral-700 rounded-xl bg-neutral-800/50 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm">
                                            <option value="" disabled>Select your qualification</option>
                                            <option>Secondary School Certificate (SSC)</option>
                                            <option>Higher Secondary Certificate (HSC)</option>
                                            <option>Diploma in Engineering</option>
                                            <option>Bachelor&apos;s Degree (Ongoing)</option>
                                            <option>Bachelor&apos;s Degree (Completed)</option>
                                            <option>Master&apos;s Degree (Ongoing)</option>
                                            <option>Master&apos;s Degree (Completed)</option>
                                            <option>Other</option>
                                        </select>
                                    </div>

                                    {/* Semester — only for ongoing or diploma */}
                                    {showSemester && (
                                        <div>
                                            <label className="block text-sm font-medium text-neutral-300 mb-1">Current Semester / Year <span className="text-rose-500">*</span></label>
                                            <input name="semester" type="text" required value={formData.semester} onChange={handleChange} className="appearance-none block w-full px-4 py-3 border border-neutral-700 rounded-xl bg-neutral-800/50 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-500 sm:text-sm" placeholder="e.g. 5th Semester, 3rd Year" />
                                        </div>
                                    )}

                                    {/* Who are you? */}
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-300 mb-1">
                                            Who are you? <span className="text-neutral-500 text-xs font-normal">(Short intro)</span>
                                        </label>
                                        <textarea name="intro" rows={3} value={formData.intro} onChange={handleChange} className="appearance-none block w-full px-4 py-3 border border-neutral-700 rounded-xl bg-neutral-800/50 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-500 sm:text-sm resize-none" placeholder="e.g. I'm a 2nd year CSE student passionate about AI and open source..." />
                                    </div>

                                    {/* Password */}
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-300">Secure Password</label>
                                        <div className="mt-1">
                                            <input name="password" type="password" required value={formData.password} onChange={handleChange} className="appearance-none block w-full px-4 py-3 border border-neutral-700 rounded-xl shadow-sm placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm bg-neutral-800/50 text-white" placeholder="••••••••" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-300">Confirm Password</label>
                                        <div className="mt-1">
                                            <input name="confirmPassword" type="password" required value={formData.confirmPassword} onChange={handleChange} className="appearance-none block w-full px-4 py-3 border border-neutral-700 rounded-xl shadow-sm placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm bg-neutral-800/50 text-white" placeholder="••••••••" />
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <button type="button" onClick={() => setStep(1)} className="flex-1 flex justify-center items-center py-3.5 px-4 border border-neutral-700 rounded-xl shadow-sm text-sm font-bold text-neutral-300 bg-neutral-800 hover:bg-neutral-700 transition-all">
                                            Back
                                        </button>
                                        <button disabled={isLoading} type="submit" className="flex-[2] flex justify-center items-center py-3.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-neutral-900 bg-emerald-400 hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-900 focus:ring-emerald-500 transition-all disabled:opacity-50">
                                            {isLoading ? 'Creating Identity...' : <><UserPlus className="w-4 h-4 mr-2" /> Complete Registration</>}
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </form>

                    <div className="mt-6 border-t border-neutral-800 pt-6 text-center">
                        <p className="text-sm text-neutral-400">
                            Already a member? <Link href="/login" className="font-medium text-purple-400 hover:text-purple-300">Sign in</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
