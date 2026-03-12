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
import { Users, Home, ArrowLeft, ArrowRight, CheckCircle2, Upload, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type AppType = null | 'community' | 'seat';

// ─── Community Application Form ────────────────────────────────────────────
function CommunityForm({ onBack }: { onBack: () => void }) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            router.push('/register');
        }, 1000);
    };

    return (
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
            <div className="flex items-center gap-3 mb-8">
                <button onClick={onBack} className="p-2 hover:bg-neutral-100 rounded-full transition-colors text-neutral-500">
                    <ArrowLeft className="w-5 h-5" />
                </button>
                <div>
                    <h2 className="text-2xl font-bold font-heading text-primary">Join the Community</h2>
                    <p className="text-text/60 text-sm">Tell us about yourself and your goals</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Full Name" name="name" placeholder="Ada Lovelace" required />
                    <Field label="Email Address" name="email" type="email" placeholder="ada@student.com" required />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Phone Number" name="phone" type="tel" placeholder="+880 17XXXXXXXX" required />
                    <Field label="GitHub Profile" name="github" placeholder="github.com/username" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="LinkedIn Profile" name="linkedin" placeholder="linkedin.com/in/username" />
                    <Field label="Discord Username" name="discord" placeholder="username#0000" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-text mb-1">Last Educational Qualification <span className="text-rose-500">*</span></label>
                    <div className="relative">
                        <select name="education" required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white text-text appearance-none">
                            <option value="">Select your qualification</option>
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
                    <label className="block text-sm font-medium text-text mb-2">Profile Photo <span className="text-rose-500">*</span></label>
                    <div className="border-2 border-dashed border-gray-200 hover:border-primary/40 rounded-xl p-6 text-center transition-colors bg-gray-50 cursor-pointer group">
                        <Upload className="w-8 h-8 text-gray-300 group-hover:text-primary/50 mx-auto mb-2 transition-colors" />
                        <p className="text-sm text-text/60">Click to upload or drag & drop</p>
                        <p className="text-xs text-text/40 mt-1">PNG, JPG up to 5MB</p>
                        <input type="file" accept="image/*" className="hidden" required />
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
                    {isLoading ? 'Submitting your application...' : <><span>Continue to Create Account</span><ArrowRight className="ml-2 w-5 h-5" /></>}
                </button>
                <p className="text-center text-xs text-text/40">After submitting, you will be asked to create your BrainVION account.</p>
            </form>
        </motion.div>
    );
}

// ─── Find a Seat Form ─────────────────────────────────────────────────────
function FindSeatForm({ onBack }: { onBack: () => void }) {
    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => { setIsLoading(false); setSubmitted(true); }, 1200);
    };

    if (submitted) {
        return (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-emerald-200">
                    <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                </div>
                <h2 className="text-3xl font-bold font-heading text-primary mb-3">Request Received!</h2>
                <p className="text-text/60 max-w-sm mx-auto mb-8 leading-relaxed">
                    Thank you for your interest in our Shukrabad Student House. Our team will contact you via WhatsApp within <strong>24 hours</strong> to confirm your visit.
                </p>
                <div className="space-y-3">
                    <Link href="/house" className="block w-full py-3.5 bg-primary text-secondary font-bold rounded-2xl hover:bg-primary/90 transition-all text-center shadow-lg">
                        Explore Student House
                    </Link>
                    <Link href="/" className="block w-full py-3.5 border border-gray-200 text-text/60 font-semibold rounded-2xl hover:bg-gray-50 transition-all text-center">
                        Back to Home
                    </Link>
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
            <div className="flex items-center gap-3 mb-8">
                <button onClick={onBack} className="p-2 hover:bg-neutral-100 rounded-full transition-colors text-neutral-500">
                    <ArrowLeft className="w-5 h-5" />
                </button>
                <div>
                    <h2 className="text-2xl font-bold font-heading text-primary">Find a Seat</h2>
                    <p className="text-text/60 text-sm">Book your visit to the Shukrabad Student House</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
                <Field label="Full Name" name="name" placeholder="Your full name" required />

                <div className="grid grid-cols-2 gap-4">
                    <Field label="Age" name="age" type="number" placeholder="21" required />
                    <div>
                        <label className="block text-sm font-medium text-text mb-1">WhatsApp Number <span className="text-rose-500">*</span></label>
                        <div className="flex">
                            <span className="inline-flex items-center px-3 border border-r-0 border-gray-200 rounded-l-xl bg-gray-50 text-text/50 text-sm font-mono">+880</span>
                            <input type="tel" name="whatsapp" required placeholder="17XXXXXXXX" className="flex-1 px-4 py-3 border border-gray-200 rounded-r-xl focus:ring-2 focus:ring-primary/20 focus:border-primary text-text placeholder-text/40" />
                        </div>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-text mb-1">Who are you? <span className="text-text/40 text-xs">(Short intro)</span></label>
                    <textarea name="intro" rows={3} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary text-text placeholder-text/40 resize-none" placeholder="e.g. I'm a 3rd year engineering student looking for a quiet study environment near my campus..." />
                </div>

                <div>
                    <label className="block text-sm font-medium text-text mb-1">When would you like to visit? <span className="text-rose-500">*</span></label>
                    <input type="date" name="visitDate" required min={new Date().toISOString().split('T')[0]} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary text-text" />
                </div>

                <button type="submit" disabled={isLoading} className="w-full flex justify-center items-center py-4 border-transparent rounded-2xl bg-primary text-secondary font-bold text-base hover:bg-primary/90 shadow-lg transition-all disabled:opacity-50 active:scale-[0.99]">
                    {isLoading ? 'Submitting...' : <><span>Submit House Request</span><ArrowRight className="ml-2 w-5 h-5" /></>}
                </button>
            </form>
        </motion.div>
    );
}

// ─── Reusable Field ───────────────────────────────────────────────────────
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

// ─── Main Apply Page ──────────────────────────────────────────────────────
export default function ApplyPage() {
    const [appType, setAppType] = useState<AppType>(null);

    return (
        <div className="min-h-screen bg-secondary relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/15 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="relative z-10 py-16 px-4">
                <div className="max-w-2xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-10">
                        <Link href="/" className="inline-flex items-center gap-2 text-text/50 hover:text-text/80 text-sm mb-6 transition-colors">
                            <ArrowLeft className="w-4 h-4" /> Back to Home
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-3">Apply to BrainVION</h1>
                        <p className="text-text/60 text-lg">Choose how you would like to be part of our community.</p>
                    </div>

                    <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-10">
                        <AnimatePresence mode="wait">
                            {/* Step 0: Choose Application Type */}
                            {!appType && (
                                <motion.div
                                    key="selector"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                >
                                    <h2 className="text-xl font-bold text-primary mb-2 text-center">What brings you here?</h2>
                                    <p className="text-text/50 text-sm text-center mb-8">Select the option that best describes your interest.</p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        {/* Option 1 */}
                                        <button
                                            onClick={() => setAppType('community')}
                                            className="group flex flex-col items-start p-6 border-2 border-gray-100 hover:border-primary/40 rounded-2xl text-left transition-all hover:shadow-lg hover:bg-primary/5 cursor-pointer"
                                        >
                                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                                <Users className="w-6 h-6 text-primary" />
                                            </div>
                                            <h3 className="font-bold text-lg text-primary mb-2">Join the Community</h3>
                                            <p className="text-text/60 text-sm leading-relaxed">
                                                Become a member of BrainVION&apos;s global tech network. Access the Agentic Labs, tools, and events.
                                            </p>
                                            <span className="mt-4 inline-flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                                                Apply now <ArrowRight className="w-4 h-4" />
                                            </span>
                                        </button>

                                        {/* Option 2 */}
                                        <button
                                            onClick={() => setAppType('seat')}
                                            className="group flex flex-col items-start p-6 border-2 border-gray-100 hover:border-accent/50 rounded-2xl text-left transition-all hover:shadow-lg hover:bg-accent/5 cursor-pointer"
                                        >
                                            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                                                <Home className="w-6 h-6 text-primary" />
                                            </div>
                                            <h3 className="font-bold text-lg text-primary mb-2">Find a Seat</h3>
                                            <p className="text-text/60 text-sm leading-relaxed">
                                                Book a study seat or living space at our Shukrabad Student House in Dhanmondi, Dhaka.
                                            </p>
                                            <span className="mt-4 inline-flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                                                Book a visit <ArrowRight className="w-4 h-4" />
                                            </span>
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {appType === 'community' && <CommunityForm key="community" onBack={() => setAppType(null)} />}
                            {appType === 'seat' && <FindSeatForm key="seat" onBack={() => setAppType(null)} />}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
