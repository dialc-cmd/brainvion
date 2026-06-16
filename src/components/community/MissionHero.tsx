/**
 * @file MissionHero.tsx
 * @project BrainVION Tech Community Platform - Sovereign Hero Upgrade
 * @copyright (c) 2026 BrainVION & Dial Chowdhury Emon (@dialc-cmd)
 * @license Proprietary - All Rights Reserved.
 * @compliance Cyber Ethics, Data Integrity, and Bangladesh Digital/Cyber Security Acts.
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

// 1. Context: Split-layout Community Hero injecting an interactive auto-slider and sovereign motto.
// 2. Algorithm/Logic: Framer Motion AnimatePresence handles the crossfade of images. useEffect drives a 5s auto-play interval.
// 3. Junior Engineer Guidance: We use next/image with 'fill' and objectFit 'cover' inside a relative container to prevent CLS (Cumulative Layout Shift).

const fadeIn: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const SLIDER_IMAGES = [
    { src: '/images/community/slider-1.png', alt: 'Dhaka Tech Hub' },
    { src: '/images/community/slider-2.png', alt: 'Sovereign Code Structure' },
    { src: '/images/community/slider-3.png', alt: 'Senior Architect Deep Focus' }
];

const AUTOPLAY_INTERVAL = 5000;

interface MissionHeroProps {
    onJoinClick: () => void;
}

export function MissionHero({ onJoinClick }: MissionHeroProps) {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-play logic
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % SLIDER_IMAGES.length);
        }, AUTOPLAY_INTERVAL);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="bg-secondary text-primary py-16 lg:py-24 border-b border-gray-100 relative overflow-hidden">
            {/* Subtle Gradient Background */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    
                    {/* Left Column: Copywriting & CTA */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                        }}
                        className="text-center lg:text-left"
                    >
                        <motion.span variants={fadeIn} className="inline-block text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-4 py-1.5 rounded-full font-bold tracking-widest uppercase mb-6 text-xs md:text-sm shadow-sm border border-[var(--color-accent)]/20">
                            Our Sovereign Mission
                        </motion.span>
                        
                        <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-bangla-heading mb-6 tracking-tight leading-tight">
                            আমরা কেবল কোড লিখি না, আমরা <span className="text-[var(--color-bangla-accent)]">সার্বভৌম সিস্টেম</span> তৈরি করি।
                        </motion.h1>
                        
                        <motion.p variants={fadeIn} className="text-lg md:text-xl text-text/70 leading-relaxed font-medium font-heading mb-10 max-w-2xl mx-auto lg:mx-0">
                            We don't just write code. We build sovereign systems. 
                            Beyond borders, global impact — the platform for local talent to conquer the world.
                        </motion.p>
                        
                        <motion.div variants={fadeIn}>
                            <button 
                                onClick={onJoinClick} 
                                className="btn-glow phi-padding-btn bg-primary text-secondary font-bold font-heading rounded-xl hover:bg-primary/90 transition-all inline-flex items-center justify-center gap-3 text-lg w-full sm:w-auto"
                            >
                                Join Community
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Interactive Vibe Slider */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                        className="relative w-full aspect-square md:aspect-video lg:aspect-square max-w-lg mx-auto lg:max-w-none rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={SLIDER_IMAGES[currentSlide].src}
                                    alt={SLIDER_IMAGES[currentSlide].alt}
                                    fill
                                    className="object-cover"
                                    priority={currentSlide === 0}
                                />
                                {/* Cinematic Dark Overlay for Text Readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            </motion.div>
                        </AnimatePresence>

                        {/* Slider Controls (Dots) */}
                        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
                            {SLIDER_IMAGES.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                                        currentSlide === index 
                                        ? 'bg-[var(--color-accent)] w-8 shadow-[0_0_10px_rgba(0,229,255,0.8)]' 
                                        : 'bg-white/50 hover:bg-white'
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </motion.div>
                    
                </div>
            </div>
        </section>
    );
}
