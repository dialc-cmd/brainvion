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

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, ChevronRight, ChevronLeft, ShoppingCart, Lock, Unlock, X, ExternalLink } from 'lucide-react';
import Link from 'next/link';

// E-Book Commerce Database Mock
const EBOOKS = [
    {
        id: 1,
        title: "Mastering Next.js 15 RSC",
        author: "Dial Chowdhury",
        price: "Free",
        pages: 150,
        coverColor: "from-blue-600 to-indigo-900",
        isPremium: false,
        summary: "The definitive guide to migrating legacy Pages router to the new App Router ecosystem with Server Components."
    },
    {
        id: 2,
        title: "Agentic Engineering Patterns",
        author: "BrainVION Labs",
        price: "$49.99",
        pages: 320,
        coverColor: "from-purple-600 to-fuchsia-900",
        isPremium: true,
        summary: "Build autonomous AI agents using LangGraph and Vercel AI SDK to automate your software startup."
    },
    {
        id: 3,
        title: "The IELTS Accelerator",
        author: "Dr. Ahmed",
        price: "Free",
        pages: 85,
        coverColor: "from-emerald-500 to-teal-900",
        isPremium: false,
        summary: "A focused band 8.0 vocabulary and speaking strategy guide tailored for South Asian students."
    },
    {
        id: 4,
        title: "Supabase & Postgres Mastery",
        author: "DB Architects",
        price: "$29.99",
        pages: 210,
        coverColor: "from-emerald-600 to-green-900",
        isPremium: true,
        summary: "Scale your backend from 0 to 1 million users using Row Level Security and Edge Functions."
    }
];

export default function EbookCarousel() {
    const [selectedBook, setSelectedBook] = useState<typeof EBOOKS[0] | null>(null);
    const [readingPage, setReadingPage] = useState(1);

    // In production, this would be `useSession()` from NextAuth
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const openReader = (book: typeof EBOOKS[0]) => {
        setSelectedBook(book);
        setReadingPage(1);
    };

    const closeReader = () => {
        setSelectedBook(null);
    };

    const handleNextPage = () => {
        // Free unregistered users max out at page 5
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
        <section className="py-24 bg-neutral-950 text-white relative overflow-hidden font-sans border-t border-neutral-900">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-full h-[500px] bg-purple-900/10 blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Digital Library & Store</h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto">Access premium tech guides and IELTS materials. Read the first 5 pages of any book instantly.</p>
                </div>

                {/* Horizontal Scrolling Carousel */}
                <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide py-4" style={{ scrollbarWidth: 'none' }}>
                    {EBOOKS.map((book) => (
                        <motion.div
                            key={book.id}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="snap-center shrink-0 w-[280px] sm:w-[320px] bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden cursor-pointer group shadow-xl"
                            onClick={() => openReader(book)}
                        >
                            {/* Book Cover */}
                            <div className={`h-[400px] w-full bg-gradient-to-br ${book.coverColor} p-6 flex flex-col justify-between relative`}>
                                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold border border-white/10 flex items-center">
                                    {book.isPremium ? <><Lock className="w-3 h-3 mr-1 text-yellow-400" /> Premium</> : <><Unlock className="w-3 h-3 mr-1 text-emerald-400" /> Free</>}
                                </div>
                                <div className="mt-auto">
                                    <h3 className="text-2xl font-bold font-heading leading-tight mb-2 drop-shadow-md">{book.title}</h3>
                                    <p className="text-white/70 text-sm font-medium">{book.author}</p>
                                </div>
                            </div>

                            {/* Book Footer Actions */}
                            <div className="p-5 flex items-center justify-between bg-neutral-900">
                                <div>
                                    <p className="text-xs text-neutral-500 mb-1">{book.pages} Pages</p>
                                    <p className={`font-bold ${book.isPremium ? 'text-yellow-400' : 'text-emerald-400'}`}>{book.price}</p>
                                </div>
                                <button className="p-3 bg-neutral-800 group-hover:bg-purple-600 rounded-full transition-colors">
                                    <ChevronRight className="w-5 h-5 text-white" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Interactive Reader Modal */}
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
                            className="w-full max-w-5xl h-[85vh] bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden relative"
                        >
                            <button onClick={closeReader} className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black text-white rounded-full transition-colors">
                                <X className="w-5 h-5" />
                            </button>

                            {/* Info Sidebar */}
                            <div className={`w-full md:w-1/3 bg-gradient-to-br ${selectedBook.coverColor} p-8 flex flex-col justify-between hidden md:flex`}>
                                <div>
                                    <div className="inline-block px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-xs font-bold border border-white/20 mb-6 flex items-center w-max">
                                        {selectedBook.isPremium ? <><Lock className="w-3 h-3 mr-1 text-yellow-400" /> {selectedBook.price}</> : <><Unlock className="w-3 h-3 mr-1 text-emerald-400" /> Free Tier</>}
                                    </div>
                                    <h2 className="text-4xl font-bold font-heading mb-2 leading-tight">{selectedBook.title}</h2>
                                    <p className="text-white/80 font-medium text-lg mb-8">by {selectedBook.author}</p>
                                    <p className="text-white/90 leading-relaxed text-sm">{selectedBook.summary}</p>
                                </div>

                                <div className="space-y-3">
                                    {selectedBook.isPremium && (
                                        <Link href="/checkout" className="w-full py-4 bg-white text-black font-bold rounded-xl flex items-center justify-center hover:bg-neutral-200 transition-colors">
                                            <ShoppingCart className="w-5 h-5 mr-2" /> Add to Cart — {selectedBook.price}
                                        </Link>
                                    )}
                                    {!isLoggedIn && (
                                        <Link href="/register" className="w-full py-4 bg-black/30 border border-white/20 text-white font-bold rounded-xl flex items-center justify-center hover:bg-black/50 transition-colors">
                                            Register for Full Access <ExternalLink className="w-4 h-4 ml-2" />
                                        </Link>
                                    )}
                                </div>
                            </div>

                            {/* Reading Area */}
                            <div className="flex-1 bg-[#fdfbf7] flex flex-col relative text-black">
                                {/* Reader Header */}
                                <div className="h-14 border-b border-neutral-200 flex items-center justify-between px-6 bg-white shrink-0">
                                    <h4 className="font-semibold text-neutral-800 truncate md:hidden">{selectedBook.title}</h4>
                                    <span className="md:hidden" /> {/* Spacer */}
                                    <div className="text-xs font-mono text-neutral-500 bg-neutral-100 px-3 py-1 rounded-md">
                                        Page {readingPage} of {selectedBook.pages}
                                    </div>
                                </div>

                                {/* Document Render (Simulated) */}
                                <div className="flex-1 overflow-y-auto p-8 md:p-12 prose prose-slate max-w-none">
                                    {readingPage === 1 && (
                                        <div className="text-center h-full flex flex-col justify-center items-center">
                                            <h1 className="text-4xl md:text-5xl font-heading text-neutral-900 mb-6">{selectedBook.title}</h1>
                                            <h3 className="text-xl text-neutral-600 mb-12">Authorized Digital Edition</h3>
                                            <div className="w-16 h-1 bg-neutral-300 rounded-full" />
                                        </div>
                                    )}
                                    {readingPage > 1 && (
                                        <div>
                                            <h2 className="text-2xl font-bold mb-4 font-heading">Chapter {Math.ceil(readingPage / 5)}: Foundations</h2>
                                            <p className="text-lg leading-loose text-neutral-700 font-serif">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                            </p>
                                            <p className="text-lg leading-loose text-neutral-700 font-serif mt-6">
                                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Paywall Overlay (Triggered on pg 5 for guests, or end of preview for premium) */}
                                {(!isLoggedIn && readingPage >= 5) && (
                                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#fdfbf7] via-[#fdfbf7]/90 to-transparent flex flex-col items-center justify-end pb-12 px-6">
                                        <div className="max-w-md bg-white border border-neutral-200 p-8 rounded-2xl shadow-2xl text-center flex flex-col items-center">
                                            <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mb-4">
                                                <Lock className="w-6 h-6" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-neutral-900 mb-2">Preview Reached</h3>
                                            <p className="text-neutral-600 mb-6 text-sm">You have read 5 pages as a guest. To read the rest of this {selectedBook.price === 'Free' ? 'free' : 'premium'} book, you must authenticate your identity.</p>

                                            {selectedBook.isPremium ? (
                                                <Link href="/checkout" className="w-full py-3.5 bg-neutral-900 hover:bg-black text-white font-bold rounded-xl mb-3 shadow-lg flex justify-center items-center">
                                                    <ShoppingCart className="w-4 h-4 mr-2" /> Purchase {selectedBook.price}
                                                </Link>
                                            ) : null}

                                            <Link href="/register" className="w-full py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl shadow-lg flex justify-center items-center transition-colors">
                                                Register Account (Free) <ExternalLink className="w-4 h-4 ml-2" />
                                            </Link>
                                        </div>
                                    </div>
                                )}

                                {/* Pagination Controls */}
                                <div className="h-20 border-t border-neutral-200 bg-neutral-50 flex items-center justify-between px-6 shrink-0 relative z-20">
                                    <button
                                        onClick={handlePrevPage}
                                        disabled={readingPage === 1}
                                        className="px-6 py-2.5 bg-white border border-neutral-200 rounded-xl hover:bg-neutral-100 disabled:opacity-50 transition-colors flex items-center font-medium"
                                    >
                                        <ChevronLeft className="w-4 h-4 mr-2" /> Previous
                                    </button>
                                    <button
                                        onClick={handleNextPage}
                                        disabled={(!isLoggedIn && readingPage >= 5)}
                                        className="px-6 py-2.5 bg-neutral-900 hover:bg-black text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center font-medium shadow-md"
                                    >
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
