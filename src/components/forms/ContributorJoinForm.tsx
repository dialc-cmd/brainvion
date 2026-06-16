/**
 * @file ContributorJoinForm.tsx
 * @project BrainVION Tech Community Platform - Onboarding & Auth Engine
 * @copyright (c) 2026 BrainVION & Dial Chowdhury Emon (@dialc-cmd)
 * @license Proprietary - All Rights Reserved.
 * @compliance Cyber Ethics, Data Integrity, and Bangladesh Digital Security Acts.
 * Maintain Trademark Enforcements: @brainvion
 */

import { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Upload, ChevronDown } from 'lucide-react';
import { COUNTRIES } from '@/data/countries';
import Cookies from 'js-cookie';

// 1. Context: Reusable input field component for the contributor registration form.
// 2. Algorithm/Logic: Standard HTML5 controlled input with required validation markers.
// 3. Junior Engineer Guidance: Ensure the `name` prop explicitly matches the Prisma schema keys to prevent silent payload drops.
function Field({ label, name, type = 'text', placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
    return (
        <div>
            <label className="block text-sm font-medium text-text mb-1">
                {label} {required && <span className="text-rose-500">*</span>}
            </label>
            <input type={type} name={name} required={required} placeholder={placeholder} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary text-text placeholder-text/40 transition-all" />
        </div>
    );
}

// 1. Context: This form exists exclusively for builders (developers, writers, student ambassadors) joining the BrainVION ecosystem via the /community page. Clients/customers use /signup instead.
// 2. Algorithm/Logic: Collects contributor-specific data including contributionArea and optional portfolioUrl. Inserts directly to Supabase via RLS.
// 3. Junior Engineer Guidance: Successful contributor submissions route to /dashboard/community. Never route contributors to /dashboard/user — that is the client transactional dashboard.
import { supabase } from '@/lib/supabase';

export default function ContributorJoinForm({ onClose }: { onClose: () => void }) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData(e.currentTarget);
        
        try {
            const { error } = await supabase.from('contributors').insert({
                full_name: formData.get('name') as string,
                email: formData.get('email') as string,
                portfolio_url: formData.get('portfolioUrl') as string || null,
                contribution_area: formData.get('contributionArea') as string,
                home_country: formData.get('homeCountry') as string
            });

            if (!error) {
                Cookies.set('brainvion_role', 'contributor', { expires: 7 });
                window.dispatchEvent(new Event('auth-change'));
                router.push('/dashboard/community');
            } else {
                alert(`Error: ${error.message || 'Something went wrong. Email may already be in use.'}`);
                setIsLoading(false);
            }
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    };

    return (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}>
            <div className="flex items-center gap-3 mb-8">
                <button onClick={onClose} className="p-2 hover:bg-neutral-100 rounded-full transition-colors text-neutral-500">
                    <ArrowLeft className="w-5 h-5" />
                </button>
                <div>
                    <h2 className="text-2xl font-bold font-heading text-primary">Join as a Contributor</h2>
                    <p className="text-text/60 text-sm">For developers, writers, and student ambassadors</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Full Name" name="name" placeholder="Ada Lovelace" required />
                    <Field label="Email Address" name="email" type="email" placeholder="ada@student.com" required />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Phone Number" name="phone" type="tel" placeholder="+880 17XXXXXXXX" required />
                    <div>
                        <label className="block text-sm font-medium text-text mb-1">Home Country / Nationality <span className="text-rose-500">*</span></label>
                        <div className="relative">
                            <select name="homeCountry" required defaultValue="BD" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white text-text appearance-none">
                                {COUNTRIES.map((country) => (
                                    <option key={country.code} value={country.code}>
                                        {country.flag} {country.name}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
                        </div>
                    </div>
                </div>

                {/* Contribution Area — NEW decoupled field */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-text mb-1">Contribution Area <span className="text-rose-500">*</span></label>
                        <div className="relative">
                            <select name="contributionArea" required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white text-text appearance-none">
                                <option value="">Select your role</option>
                                <option value="developer">Developer</option>
                                <option value="writer">Writer / Content Creator</option>
                                <option value="student_ambassador">Student Ambassador</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
                        </div>
                    </div>
                    <Field label="Portfolio URL" name="portfolioUrl" type="url" placeholder="https://your-portfolio.com" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="GitHub Profile" name="github" placeholder="github.com/username" />
                    <Field label="LinkedIn Profile" name="linkedin" placeholder="linkedin.com/in/username" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Discord Username" name="discord" placeholder="username#0000" />
                    <div>
                        <label className="block text-sm font-medium text-text mb-1">Education <span className="text-rose-500">*</span></label>
                        <div className="relative">
                            <select name="education" required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white text-text appearance-none">
                                <option value="">Select qualification</option>
                                <option>Secondary School Certificate (SSC)</option>
                                <option>Higher Secondary Certificate (HSC)</option>
                                <option>Bachelor&apos;s Degree (Ongoing)</option>
                                <option>Bachelor&apos;s Degree (Completed)</option>
                                <option>Master&apos;s Degree (Ongoing)</option>
                                <option>Master&apos;s Degree (Completed)</option>
                                <option>Other</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
                        </div>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-text mb-1">Your skills <span className="text-rose-500">*</span></label>
                    <input type="text" name="skills" required placeholder="e.g. Python, JavaScript, UI Design, Project Management..." className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary text-text placeholder-text/40" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-text mb-1">What is your goal for the future? <span className="text-rose-500">*</span></label>
                    <textarea name="goal" required rows={3} placeholder="Tell us about your professional or personal goals..." className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary text-text placeholder-text/40 resize-none" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-text mb-1">How can you contribute to BrainVION? <span className="text-rose-500">*</span></label>
                    <textarea name="contribution" required rows={3} placeholder="Share ideas, mentoring others, organizing events, building projects..." className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary text-text placeholder-text/40 resize-none" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-text mb-1">How did you hear about us? <span className="text-rose-500">*</span></label>
                    <div className="relative">
                        <select name="source" required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white text-text appearance-none">
                            <option value="">Select one</option>
                            <option>Facebook</option>
                            <option>Instagram</option>
                            <option>LinkedIn</option>
                            <option>A friend or colleague</option>
                            <option>University / College</option>
                            <option>Google Search</option>
                            <option>Other</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-text mb-2">Upload CV / Resume</label>
                    <div className="border-2 border-dashed border-gray-200 hover:border-primary/40 rounded-xl p-6 text-center transition-colors bg-gray-50 cursor-pointer group">
                        <Upload className="w-8 h-8 text-gray-300 group-hover:text-primary/50 mx-auto mb-2 transition-colors" />
                        <p className="text-sm text-text/60">PDF, DOC up to 10MB</p>
                        <input type="file" accept=".pdf,.doc,.docx" className="hidden" />
                    </div>
                </div>

                <button type="submit" disabled={isLoading} className="w-full flex justify-center items-center py-4 border-transparent rounded-2xl bg-primary text-secondary font-bold text-base hover:bg-primary/90 shadow-lg transition-all disabled:opacity-50 active:scale-[0.99]">
                    {isLoading ? 'Submitting your application...' : <><span>Submit Application</span><ArrowRight className="ml-2 w-5 h-5" /></>}
                </button>
                <p className="text-center text-xs text-text/40">Our team will review your application and contact you soon.</p>
            </form>
        </motion.div>
    );
}
