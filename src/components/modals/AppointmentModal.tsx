/**
 * @file AppointmentModal.tsx
 * @project BrainVION Tech Community Platform - Services Engine
 * @copyright (c) 2026 BrainVION & Dial Chowdhury Emon (@dialc-cmd)
 * @license Proprietary - All Rights Reserved.
 * @compliance Cyber Ethics, Data Integrity, and Bangladesh Digital Security Acts.
 * Maintain Trademark Enforcements: @brainvion
 */

'use client';

import { useState, useEffect, useCallback, FormEvent } from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { TECH_SERVICES } from '@/data/services';
import type { ServiceSlug, AppointmentPayload } from '@/lib/types';

// Community REQUIREMENT [Brainvion]: [High-conversion lead capture modal with real-time contextual service pre-selection from the clicked gig card.]
// TECHNICAL IMPLEMENTATION: [3-state machine (form → submitting → success). Pre-fills <select> via activeService prop. 7s useEffect timer auto-redirects to /learning on success. Cleanup prevents memory leaks.]
// QA/QC ADVISORY: [Ensure body scroll lock toggles correctly on open/close. Verify timeout cleanup fires on manual navigation. Test email regex on edge cases.]

/** Validation regex patterns */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[\d\s+\-()]{7,20}$/;

/** Auto-redirect delay in milliseconds after successful submission */
const REDIRECT_DELAY_MS = 7000;

interface AppointmentModalProps {
    isOpen: boolean;
    onClose: () => void;
    activeService: ServiceSlug | null;
}

interface FormErrors {
    fullName?: string;
    email?: string;
    phone?: string;
    selectedService?: string;
}

type ModalView = 'form' | 'submitting' | 'success';

export default function AppointmentModal({
    isOpen,
    onClose,
    activeService,
}: AppointmentModalProps) {
    const router = useRouter();

    // ── Form State ──────────────────────────────────────────────────────────
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [selectedService, setSelectedService] = useState<ServiceSlug | ''>('');
    const [errors, setErrors] = useState<FormErrors>({});
    const [view, setView] = useState<ModalView>('form');

    // Context: Sync the dropdown selection whenever a new service card is clicked.
    // Algorithm: On each open, if activeService changes, update the controlled <select> value.
    // Junior Engineer Guidance: This effect only runs when `activeService` changes, not on every render. It resets the form to a clean state for the new context.
    useEffect(() => {
        if (activeService) {
            setSelectedService(activeService);
        }
    }, [activeService]);

    // Context: Reset the entire modal state to pristine when the modal is closed.
    // Algorithm: When `isOpen` transitions to false, clear all form fields, errors, and reset view back to 'form'.
    // Junior Engineer Guidance: This prevents stale data from persisting if the user re-opens the modal for a different service.
    useEffect(() => {
        if (!isOpen) {
            setFullName('');
            setEmail('');
            setPhone('');
            setSelectedService('');
            setErrors({});
            setView('form');
        }
    }, [isOpen]);

    // Context: Lock body scroll when the modal is visible to prevent background page scrolling.
    // Algorithm: Toggle document.body overflow style. Cleanup restores scroll on unmount or close.
    // Junior Engineer Guidance: This is critical for mobile UX — without it, the page behind the modal scrolls freely.
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // Context: Auto-redirect to the Learning Hub after a successful appointment booking.
    // Algorithm: On success view, start a 7-second timeout that calls router.push('/learning'). The timeout reference is cleaned up if the component unmounts or the user navigates away manually.
    // Junior Engineer Guidance: To change the redirect delay, modify REDIRECT_DELAY_MS at the top of this file. To change the destination, update the path string in router.push(). Always keep clearTimeout in the cleanup to prevent memory leaks.
    useEffect(() => {
        if (view !== 'success') return;

        const timeoutId = setTimeout(() => {
            onClose();
            router.push('/learning');
        }, REDIRECT_DELAY_MS);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [view, router, onClose]);

    // ── Validation ──────────────────────────────────────────────────────────
    const validate = useCallback((): boolean => {
        const newErrors: FormErrors = {};

        if (!fullName.trim()) {
            newErrors.fullName = 'Full name is required.';
        }

        if (!email.trim()) {
            newErrors.email = 'Email is required.';
        } else if (!EMAIL_REGEX.test(email)) {
            newErrors.email = 'Please enter a valid email address.';
        }

        if (!phone.trim()) {
            newErrors.phone = 'Phone number is required.';
        } else if (!PHONE_REGEX.test(phone)) {
            newErrors.phone = 'Please enter a valid phone number.';
        }

        if (!selectedService) {
            newErrors.selectedService = 'Please select a service.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }, [fullName, email, phone, selectedService]);

    // ── Submission ──────────────────────────────────────────────────────────
    const handleSubmit = useCallback(
        (e: FormEvent) => {
            e.preventDefault();

            if (!validate()) return;

            setView('submitting');

            // Simulate network latency for realistic UX feedback.
            // When a backend is ready, replace this with an actual API call.
            const payload: AppointmentPayload = {
                fullName: fullName.trim(),
                email: email.trim(),
                phone: phone.trim(),
                selectedService: selectedService as ServiceSlug,
            };

            // eslint-disable-next-line no-console
            console.log('[BrainVION] Appointment payload:', payload);

            setTimeout(() => {
                setView('success');
            }, 800);
        },
        [validate, fullName, email, phone, selectedService]
    );

    // ── Render ──────────────────────────────────────────────────────────────
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    id="appointment-modal-backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) onClose();
                    }}
                >
                    {/* Frosted glass backdrop */}
                    <div className="absolute inset-0 bg-primary/60 backdrop-blur-md" />

                    {/* Modal panel */}
                    <motion.div
                        id="appointment-modal-panel"
                        initial={{ opacity: 0, y: 30, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.96 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className={cn(
                            'relative z-10 w-full max-w-lg',
                            'bg-white rounded-3xl shadow-2xl',
                            'overflow-hidden'
                        )}
                    >
                        {/* Close button */}
                        <button
                            id="appointment-modal-close"
                            onClick={onClose}
                            className="absolute top-5 right-5 z-20 p-2 rounded-xl text-text/40 hover:text-text hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
                            aria-label="Close appointment modal"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <AnimatePresence mode="wait">
                            {/* ── FORM VIEW ── */}
                            {view === 'form' && (
                                <motion.div
                                    key="form"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.25 }}
                                    className="p-8 md:p-10"
                                >
                                    {/* Header */}
                                    <div className="mb-8">
                                        <h2 className="text-2xl md:text-3xl font-bold font-heading text-primary mb-2">
                                            Book an Appointment
                                        </h2>
                                        <p className="text-text/60 text-base leading-relaxed">
                                            Fill in your details and we'll get back to you within 24 hours.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} noValidate className="space-y-5">
                                        {/* Full Name */}
                                        <div>
                                            <label
                                                htmlFor="appointment-fullname"
                                                className="block text-sm font-semibold text-text/80 mb-1.5"
                                            >
                                                Full Name
                                            </label>
                                            <input
                                                id="appointment-fullname"
                                                type="text"
                                                value={fullName}
                                                onChange={(e) => setFullName(e.target.value)}
                                                placeholder="Dial Chowdhury Emon"
                                                className={cn(
                                                    'w-full px-4 py-3 rounded-xl border bg-secondary/30 text-text placeholder:text-text/30',
                                                    'focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent',
                                                    'transition-all duration-200',
                                                    errors.fullName
                                                        ? 'border-red-400 focus:ring-red-400'
                                                        : 'border-gray-200 hover:border-gray-300'
                                                )}
                                            />
                                            {errors.fullName && (
                                                <p className="mt-1.5 text-sm text-red-500 font-medium">{errors.fullName}</p>
                                            )}
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label
                                                htmlFor="appointment-email"
                                                className="block text-sm font-semibold text-text/80 mb-1.5"
                                            >
                                                Email
                                            </label>
                                            <input
                                                id="appointment-email"
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="you@example.com"
                                                className={cn(
                                                    'w-full px-4 py-3 rounded-xl border bg-secondary/30 text-text placeholder:text-text/30',
                                                    'focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent',
                                                    'transition-all duration-200',
                                                    errors.email
                                                        ? 'border-red-400 focus:ring-red-400'
                                                        : 'border-gray-200 hover:border-gray-300'
                                                )}
                                            />
                                            {errors.email && (
                                                <p className="mt-1.5 text-sm text-red-500 font-medium">{errors.email}</p>
                                            )}
                                        </div>

                                        {/* Phone */}
                                        <div>
                                            <label
                                                htmlFor="appointment-phone"
                                                className="block text-sm font-semibold text-text/80 mb-1.5"
                                            >
                                                Phone No.
                                            </label>
                                            <input
                                                id="appointment-phone"
                                                type="tel"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                placeholder="+880 1700-000000"
                                                className={cn(
                                                    'w-full px-4 py-3 rounded-xl border bg-secondary/30 text-text placeholder:text-text/30',
                                                    'focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent',
                                                    'transition-all duration-200',
                                                    errors.phone
                                                        ? 'border-red-400 focus:ring-red-400'
                                                        : 'border-gray-200 hover:border-gray-300'
                                                )}
                                            />
                                            {errors.phone && (
                                                <p className="mt-1.5 text-sm text-red-500 font-medium">{errors.phone}</p>
                                            )}
                                        </div>

                                        {/* Service Selection — pre-filled from clicked card but user-editable */}
                                        <div>
                                            <label
                                                htmlFor="appointment-service"
                                                className="block text-sm font-semibold text-text/80 mb-1.5"
                                            >
                                                Service
                                            </label>
                                            <select
                                                id="appointment-service"
                                                value={selectedService}
                                                onChange={(e) =>
                                                    setSelectedService(e.target.value as ServiceSlug | '')
                                                }
                                                className={cn(
                                                    'w-full px-4 py-3 rounded-xl border bg-secondary/30 text-text appearance-none',
                                                    'focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent',
                                                    'transition-all duration-200 cursor-pointer',
                                                    errors.selectedService
                                                        ? 'border-red-400 focus:ring-red-400'
                                                        : 'border-gray-200 hover:border-gray-300',
                                                    !selectedService && 'text-text/30'
                                                )}
                                            >
                                                <option value="" disabled>
                                                    Select a service…
                                                </option>
                                                {TECH_SERVICES.map((svc) => (
                                                    <option key={svc.slug} value={svc.slug}>
                                                        {svc.content.en.headline} / {svc.content.bn.headline}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.selectedService && (
                                                <p className="mt-1.5 text-sm text-red-500 font-medium">
                                                    {errors.selectedService}
                                                </p>
                                            )}
                                        </div>

                                        {/* Submit */}
                                        <button
                                            id="appointment-submit"
                                            type="submit"
                                            className={cn(
                                                'w-full py-3.5 rounded-xl font-semibold text-base tracking-wide',
                                                'bg-primary text-secondary',
                                                'hover:bg-accent hover:text-primary',
                                                'active:scale-[0.97]',
                                                'transition-all duration-300',
                                                'focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2',
                                                'shadow-md hover:shadow-xl',
                                                'mt-3'
                                            )}
                                        >
                                            Submit Request
                                        </button>
                                    </form>
                                </motion.div>
                            )}

                            {/* ── SUBMITTING VIEW ── */}
                            {view === 'submitting' && (
                                <motion.div
                                    key="submitting"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="p-8 md:p-10 flex flex-col items-center justify-center min-h-[320px]"
                                >
                                    <Loader2 className="w-12 h-12 text-accent animate-spin mb-4" />
                                    <p className="text-text/60 font-medium text-lg">Processing your request…</p>
                                </motion.div>
                            )}

                            {/* ── SUCCESS VIEW ── */}
                            {view === 'success' && (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.35, ease: 'easeOut' }}
                                    className="p-8 md:p-10 flex flex-col items-center justify-center text-center min-h-[320px]"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 260,
                                            damping: 20,
                                            delay: 0.1,
                                        }}
                                        className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-6"
                                    >
                                        <CheckCircle2 className="w-10 h-10 text-accent" />
                                    </motion.div>

                                    <h3 className="text-2xl font-bold font-heading text-primary mb-3">
                                        Thank You!
                                    </h3>
                                    <p className="text-text/60 text-base leading-relaxed max-w-sm mb-6">
                                        Thank you for reaching out! We will review your request and get
                                        back to you soon.
                                    </p>

                                    {/* Redirect countdown indicator */}
                                    <div className="flex items-center gap-2 text-sm text-text/40">
                                        <motion.div
                                            className="w-2 h-2 rounded-full bg-accent"
                                            animate={{ opacity: [1, 0.3, 1] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        />
                                        Redirecting to Learning Hub…
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
