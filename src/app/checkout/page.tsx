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

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CreditCard, Lock, ArrowRight, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
    const router = useRouter();
    const [isProcessing, setIsProcessing] = useState(false);

    const handlePayment = (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);
        // Simulate Payment Gateway (SSLCommerz/Stripe) processing
        setTimeout(() => {
            alert("Payment Successful! Digital Book added to your Identity Hub.");
            router.push('/dashboard/profile');
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-[#050505] text-neutral-200 font-sans flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-4xl mx-auto w-full">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-heading font-bold text-white mb-2">Secure Checkout</h1>
                    <p className="text-neutral-400">Complete your transaction to unlock full access.</p>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Order Summary (Mocked for Demo) */}
                    <div className="flex-1 bg-neutral-900 border border-neutral-800 p-8 rounded-3xl h-max">
                        <h2 className="text-xl font-bold text-white mb-6 border-b border-neutral-800 pb-4">Order Summary</h2>
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-16 h-20 bg-gradient-to-br from-emerald-600 to-green-900 rounded-lg flex items-center justify-center shrink-0">
                                <BookOpen className="w-6 h-6 text-white/50" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold">Premium E-Book Title</h3>
                                <p className="text-sm text-neutral-400">Digital PDF • Lifetime Access</p>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm text-neutral-400 border-b border-neutral-800 pb-6 mb-6">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>$29.99</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Tax</span>
                                <span>$0.00</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center text-xl font-bold text-white">
                            <span>Total</span>
                            <span className="text-emerald-400">$29.99</span>
                        </div>
                    </div>

                    {/* Payment Form */}
                    <div className="flex-[1.5] bg-neutral-900/60 backdrop-blur-xl border border-neutral-800 p-8 rounded-3xl shadow-2xl relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/5 to-transparent rounded-3xl pointer-events-none" />

                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-xl font-bold text-white flex items-center"><CreditCard className="w-5 h-5 mr-2 text-emerald-400" /> Payment Details</h2>
                            <div className="flex gap-2">
                                <div className="w-10 h-6 bg-neutral-800 rounded border border-neutral-700 flex items-center justify-center text-[10px] font-bold">VISA</div>
                                <div className="w-10 h-6 bg-neutral-800 rounded border border-neutral-700 flex items-center justify-center text-[10px] font-bold">BKASH</div>
                            </div>
                        </div>

                        <form onSubmit={handlePayment} className="space-y-5 relative z-10">
                            <div>
                                <label className="block text-sm font-medium text-neutral-400 mb-1">Cardholder Name</label>
                                <input type="text" required className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-white placeholder-neutral-600" placeholder="Ada Lovelace" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-neutral-400 mb-1">Card Number</label>
                                <div className="relative">
                                    <input type="text" required pattern="[0-9]{16}" maxLength={16} className="w-full pl-12 pr-4 py-3 bg-neutral-950 border border-neutral-800 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-white font-mono placeholder-neutral-600" placeholder="0000 0000 0000 0000" />
                                    <CreditCard className="w-5 h-5 text-neutral-500 absolute left-4 top-1/2 -translate-y-1/2" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-neutral-400 mb-1">Expiry (MM/YY)</label>
                                    <input type="text" required maxLength={5} className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-white font-mono placeholder-neutral-600" placeholder="12/26" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-neutral-400 mb-1">CVC</label>
                                    <input type="password" required maxLength={4} className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-white font-mono placeholder-neutral-600" placeholder="•••" />
                                </div>
                            </div>

                            <button
                                disabled={isProcessing}
                                type="submit"
                                className="w-full mt-6 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl flex items-center justify-center transition-colors disabled:opacity-50"
                            >
                                {isProcessing ? (
                                    <>Processing Transaction...</>
                                ) : (
                                    <>Pay $29.99 <ArrowRight className="w-5 h-5 ml-2" /></>
                                )}
                            </button>

                            <p className="mt-4 text-xs text-neutral-500 text-center flex items-center justify-center">
                                <Lock className="w-3 h-3 mr-1 text-neutral-400" /> Payments are secure and encrypted via SSL.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
