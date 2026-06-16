/**
 * @file StorefrontGrid.tsx
 * @project BrainVION Tech Community Platform - Reactive UI/UX Optimization
 * @copyright (c) 2026 BrainVION & Dial Chowdhury Emon (@dialc-cmd)
 * @license Proprietary - All Rights Reserved.
 * @compliance Cyber Ethics, Data Integrity, and Bangladesh Digital/Cyber Security Acts.
 * Maintain Trademark Enforcements: @brainvion
 */

import { useState, MouseEvent } from 'react';
import { motion, AnimatePresence, useMotionTemplate, useMotionValue, Variants } from 'framer-motion';
import { ChevronRight, ChevronLeft, ShoppingCart, Lock, Unlock, X, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

// 1. Context: High-density interactive grid for the storefront, optimized for local Bangladeshi conversions.
// 2. Algorithm: Framer Motion stagger for entry. CSS radial gradient tracks cursor (`handleMouseMove`). Flip/Accordion simulated via group-hover height transitions on mobile/desktop.
// 3. Junior Engineer Guidance: Transition durations are strictly kept under 300ms (`duration: 0.25`) to ensure the main thread stays lean and the UI remains snappy on lower-end devices.

const STORE_ITEMS = [
    {
        id: 1,
        title: "Mastering Next.js 15 RSC",
        author: "Dial Chowdhury",
        priceBDT: "Free",
        pages: 150,
        coverColor: "from-blue-600 to-indigo-900",
        isPremium: false,
        summary: "লিগ্যাসি রাউটার থেকে নতুন অ্যাপ রাউটারে শিফট করার সম্পূর্ণ গাইডলাইন।",
        deliverables: ["Server Components Deep-dive", "Caching Strategies", "Migration Path"]
    },
    {
        id: 2,
        title: "Advanced Engineering Patterns",
        author: "BrainVION",
        priceBDT: "৳ ৫,৯৯৯",
        pages: 320,
        coverColor: "from-purple-600 to-fuchsia-900",
        isPremium: true,
        summary: "ল্যাংগ্রাফ এবং ভার্সেল এআই এসডিকে ব্যবহার করে অটোনোমাস এআই এজেন্ট তৈরির প্রো-লেভেল ব্লুপ্রিন্ট।",
        deliverables: ["LangGraph Workflows", "Vercel AI SDK Integration", "Production Deployment"]
    },
    {
        id: 3,
        title: "The IELTS Accelerator",
        author: "Dr. Ahmed",
        priceBDT: "Free",
        pages: 85,
        coverColor: "from-emerald-500 to-teal-900",
        isPremium: false,
        summary: "ব্যান্ড ৮.০ টার্গেট করে সাউথ এশিয়ান স্টুডেন্টদের জন্য ফোকাসড ভোকাভুলারি ও স্পিকিং স্ট্র্যাটেজি।",
        deliverables: ["Band 8.0 Lexical Resource", "Mock Speaking Frameworks", "Time Management"]
    },
    {
        id: 4,
        title: "Supabase & Postgres Mastery",
        author: "DB Architects",
        priceBDT: "৳ ৩,৪৯৯",
        pages: 210,
        coverColor: "from-emerald-600 to-green-900",
        isPremium: true,
        summary: "জিরো থেকে ১ মিলিয়ন ইউজারের জন্য রো-লেভেল সিকিউরিটি এবং এজ ফাংশন দিয়ে স্কেলেবল ব্যাকএন্ড তৈরি।",
        deliverables: ["Row Level Security (RLS)", "Edge Functions", "Database Optimization"]
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } }
};

export default function StorefrontGrid() {
    const [selectedBook, setSelectedBook] = useState<typeof STORE_ITEMS[0] | null>(null);
    const [readingPage, setReadingPage] = useState(1);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock session

    const openReader = (book: typeof STORE_ITEMS[0]) => {
        setSelectedBook(book);
        setReadingPage(1);
    };

    const closeReader = () => {
        setSelectedBook(null);
    };

    const handleNextPage = () => {
        if (!isLoggedIn && readingPage >= 5) {
            alert("Paywall Reached! Please Register or Purchase to continue reading.");
            return;
        }
        setReadingPage(prev => Math.min(prev + 1, selectedBook?.pages || 1));
    };

    const handlePrevPage = () => {
        setReadingPage(prev => Math.max(prev - 1, 1));
    };

    return (
        <section className="pb-24 bg-neutral-950 text-white relative overflow-hidden font-sans">
            {/* Ambient Reactive Background - Soft Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-[var(--color-accent)]/5 blur-[200px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
                >
                    {STORE_ITEMS.map((book) => (
                        <StorefrontCard key={book.id} book={book} onOpen={() => openReader(book)} />
                    ))}
                </motion.div>
            </div>

            {/* Interactive Reader Modal (Unchanged Layout, Just added motion/glow classes) */}
            <AnimatePresence>
                {selectedBook && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 20 }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                            className="w-full max-w-5xl h-[85vh] bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden relative"
                        >
                            <button onClick={closeReader} className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black text-white rounded-full transition-colors">
                                <X className="w-5 h-5" />
                            </button>

                            {/* Info Sidebar */}
                            <div className={`w-full md:w-1/3 bg-gradient-to-br ${selectedBook.coverColor} p-8 flex flex-col justify-between hidden md:flex`}>
                                <div>
                                    <div className="inline-block px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-xs font-bold border border-white/20 mb-6 flex items-center w-max">
                                        {selectedBook.isPremium ? <><Lock className="w-3 h-3 mr-1 text-yellow-400" /> Premium Resource</> : <><Unlock className="w-3 h-3 mr-1 text-[var(--color-accent)]" /> Free Tier</>}
                                    </div>
                                    <h2 className="text-4xl font-bold font-heading mb-2 leading-tight">{selectedBook.title}</h2>
                                    <p className="text-white/80 font-medium text-lg mb-8">by {selectedBook.author}</p>
                                    <p className="text-white/90 leading-relaxed text-sm font-bangla-body">{selectedBook.summary}</p>
                                </div>

                                <div className="space-y-3">
                                    {selectedBook.isPremium ? (
                                        <Link href="/checkout" className="w-full py-4 bg-white text-black font-bold font-bangla-heading rounded-xl flex items-center justify-center hover:bg-neutral-200 transition-colors btn-glow phi-padding-btn">
                                            <ShoppingCart className="w-5 h-5 mr-2" /> Purchase {selectedBook.priceBDT}
                                        </Link>
                                    ) : (
                                        <button onClick={() => setReadingPage(2)} className="w-full py-4 bg-[var(--color-accent)] text-[var(--color-primary)] font-bold font-heading rounded-xl flex items-center justify-center hover:bg-[var(--color-accent)]/90 transition-colors btn-glow phi-padding-btn">
                                            <BookOpen className="w-5 h-5 mr-2" /> Start Reading
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Reading Area */}
                            <div className="flex-1 bg-[#fdfbf7] flex flex-col relative text-black">
                                <div className="h-14 border-b border-neutral-200 flex items-center justify-between px-6 bg-white shrink-0">
                                    <h4 className="font-semibold text-neutral-800 truncate md:hidden">{selectedBook.title}</h4>
                                    <span className="md:hidden" />
                                    <div className="text-xs font-mono text-neutral-500 bg-neutral-100 px-3 py-1 rounded-md">
                                        Page {readingPage} of {selectedBook.pages}
                                    </div>
                                </div>

                                <div className="flex-1 overflow-y-auto p-8 md:p-12 prose prose-slate max-w-none">
                                    {readingPage === 1 && (
                                        <div className="text-center h-full flex flex-col justify-center items-center">
                                            <h1 className="text-4xl md:text-5xl font-heading text-neutral-900 mb-6">{selectedBook.title}</h1>
                                            <h3 className="text-xl text-neutral-600 mb-12">Authorized Digital Edition</h3>
                                            <div className="w-16 h-1 bg-neutral-300 rounded-full" />
                                        </div>
                                    )}
                                    {readingPage > 1 && (
                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                                            <h2 className="text-2xl font-bold mb-4 font-heading">Chapter {Math.ceil(readingPage / 5)}: Foundations</h2>
                                            <p className="text-lg leading-loose text-neutral-700 font-serif">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </p>
                                        </motion.div>
                                    )}
                                </div>

                                {(!isLoggedIn && readingPage >= 5) && (
                                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#fdfbf7] via-[#fdfbf7]/90 to-transparent flex flex-col items-center justify-end pb-12 px-6">
                                        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="max-w-md bg-white border border-neutral-200 p-8 rounded-2xl shadow-2xl text-center flex flex-col items-center">
                                            <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mb-4">
                                                <Lock className="w-6 h-6" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-neutral-900 mb-2 font-heading">Preview Reached</h3>
                                            <p className="text-neutral-600 mb-6 text-sm">You have read 5 pages as a guest. To read the rest, please authenticate.</p>
                                            {selectedBook.isPremium && (
                                                <Link href="/checkout" className="w-full py-3.5 bg-neutral-900 hover:bg-black text-white font-bold rounded-xl mb-3 shadow-lg flex justify-center items-center phi-padding-btn">
                                                    <ShoppingCart className="w-4 h-4 mr-2" /> Purchase {selectedBook.priceBDT}
                                                </Link>
                                            )}
                                        </motion.div>
                                    </div>
                                )}

                                <div className="h-20 border-t border-neutral-200 bg-neutral-50 flex items-center justify-between px-6 shrink-0 relative z-20">
                                    <button onClick={handlePrevPage} disabled={readingPage === 1} className="px-6 py-2.5 bg-white border border-neutral-200 rounded-xl hover:bg-neutral-100 disabled:opacity-50 transition-colors flex items-center font-medium">
                                        <ChevronLeft className="w-4 h-4 mr-2" /> Previous
                                    </button>
                                    <button onClick={handleNextPage} disabled={(!isLoggedIn && readingPage >= 5)} className="px-6 py-2.5 bg-neutral-900 hover:bg-black text-white rounded-xl disabled:opacity-50 transition-colors flex items-center font-medium shadow-md">
                                        Next Page <ChevronRight className="w-4 h-4 ml-2" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

// Sub-component for individual cards
function StorefrontCard({ book, onOpen }: { book: typeof STORE_ITEMS[0], onOpen: () => void }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            variants={itemVariants}
            onMouseMove={handleMouseMove}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group relative bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-[0_0_40px_-10px_rgba(0,229,255,0.15)] transition-all duration-300 flex flex-col h-full"
            onClick={onOpen}
        >
            {/* Reactive Glow Map on Hover */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 z-20"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            400px circle at ${mouseX}px ${mouseY}px,
                            rgba(0, 229, 255, 0.1),
                            transparent 80%
                        )
                    `,
                }}
            />

            {/* Book Cover Top Half */}
            <div className={`h-48 w-full bg-gradient-to-br ${book.coverColor} p-6 flex flex-col justify-between relative z-10`}>
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold border border-white/10 flex items-center text-white">
                    {book.isPremium ? <Lock className="w-3 h-3 mr-1 text-yellow-400" /> : <Unlock className="w-3 h-3 mr-1 text-[var(--color-accent)]" />}
                    {book.isPremium ? 'Premium' : 'Free'}
                </div>
                <div className="mt-auto">
                    <h3 className="text-xl font-bold font-heading leading-tight mb-1 drop-shadow-md text-white">{book.title}</h3>
                    <p className="text-white/70 text-xs font-medium uppercase tracking-wider">{book.author}</p>
                </div>
            </div>

            {/* Store Card Content (Bottom Half) - Features Accordion Effect via Max-Height & Group Hover */}
            <div className="p-6 bg-neutral-900 flex flex-col flex-grow relative z-10">
                <p className="text-neutral-400 text-sm font-bangla-body leading-relaxed mb-4 flex-grow line-clamp-3">
                    {book.summary}
                </p>

                {/* Hover Reveal Details */}
                <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-[grid-template-rows,opacity] duration-300 ease-out mb-2">
                    <div className="overflow-hidden">
                        <ul className="text-xs text-neutral-500 space-y-1 pb-4">
                            {book.deliverables.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                    <span className="w-1 h-1 rounded-full bg-[var(--color-accent)]" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Footer Action */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-800">
                    <p className={`font-bold font-bangla-heading text-lg ${book.isPremium ? 'text-white' : 'text-[var(--color-accent)]'}`}>
                        {book.priceBDT}
                    </p>
                    <button className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-1 group-hover:text-[var(--color-accent)] transition-colors">
                        View Details <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
