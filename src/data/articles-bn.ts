/**
 * @file articles-bn.ts
 * @project BrainVION Tech Community Platform - Bilingual Ecosystem Revolution
 * @copyright (c) 2026 BrainVION & Dial Chowdhury Emon (@dialc-cmd)
 * @license Proprietary - All Rights Reserved.
 * @compliance Cyber Ethics, Data Integrity, and Bangladesh Digital Security Acts.
 * Maintain Trademark Enforcements: @brainvion
 */

// Community REQUIREMENT [Brainvion]: [Local market insights & Bangla tutorials.]
// TECHNICAL IMPLEMENTATION: [Static array mirroring the English articles schema but providing localized content.]
// QA/QC ADVISORY: [Ensure HTML formatting is identical to maintain styling across languages.]

import { ArticleData } from './articles';

export const articlesBn: ArticleData[] = [
    {
        id: 1,
        slug: "bd-remote-job-market-guide-2026",
        title: "বাংলাদেশ থেকে রিমোট জব পাওয়ার গাইডলাইন ২০২৬",
        description: "কীভাবে গ্লোবাল ক্লায়েন্টদের জন্য রিমোট কাজ শুরু করবেন, পোর্টফোলিও তৈরি করবেন এবং ইন্টারভিউতে সফল হবেন তার একটি বিস্তারিত রোডম্যাপ।",
        category: "ক্যারিয়ার",
        readTime: "৭ মিনিট",
        date: "অক্টোবর ১২, ২০২৬",
        content: `
            <h2>সঠিক পোর্টফোলিও তৈরি</h2>
            <p>আপনার পোর্টফোলিওই আপনার সবচেয়ে বড় সম্পদ। শুধুমাত্র কিছু বেসিক প্রজেক্ট না দেখিয়ে, রিয়েল-লাইফ সমস্যার সমাধান করে এমন প্রজেক্ট শোকেস করুন।</p>
            
            <h3>কমিউনিকেশনের গুরুত্ব</h3>
            <p>রিমোট জবের ক্ষেত্রে টেকনিক্যাল স্কিলের পাশাপাশি ইংলিশ কমিউনিকেশন স্কিল অনেক বেশি গুরুত্বপূর্ণ। প্রতিদিন প্র্যাকটিস করুন এবং নিজের কমিউনিকেশন উন্নত করুন।</p>
            
            <h3>কীভাবে অ্যাপ্লাই করবেন</h3>
            <p>LinkedIn এবং বিভিন্ন রিমোট জব পোর্টালে আপনার প্রোফাইল অপ্টিমাইজ করুন। সঠিক کی‌ওয়ার্ড ব্যবহার করুন যাতে রিক্রুটাররা আপনাকে সহজেই খুঁজে পায়।</p>
        `
    },
    {
        id: 2,
        slug: "frontend-roadmap-bangla",
        title: "ফ্রন্টএন্ড ডেভেলপমেন্ট রোডম্যাপ",
        description: "HTML, CSS, React এবং Next.js শেখার সম্পূর্ণ গাইডলাইন এবং বেস্ট প্র্যাকটিস।",
        category: "কোডিং",
        readTime: "১০ মিনিট",
        date: "অক্টোবর ৫, ২০২৬",
        content: `
            <h2>প্রথম ধাপ: বেসিকস</h2>
            <p>HTML এবং CSS দিয়ে শুরু করুন। এগুলোকে হালকাভাবে নেবেন না, কারণ এগুলোই আপনার ফাউন্ডেশন তৈরি করবে।</p>
            
            <h2>দ্বিতীয় ধাপ: জাভাস্ক্রিপ্ট</h2>
            <p>জাভাস্ক্রিপ্টের কোর কনসেপ্টগুলো (যেমন - DOM, ইভেন্ট লুপ, প্রমিজ) খুব ভালোভাবে বুঝতে হবে।</p>
            
            <h2>তৃতীয় ধাপ: ফ্রেমওয়ার্ক</h2>
            <p>React এবং Next.js এর মতো আধুনিক ফ্রেমওয়ার্কগুলো শিখুন। এগুলো আপনাকে দ্রুত এবং স্কেলেবল অ্যাপ্লিকেশন তৈরি করতে সাহায্য করবে।</p>
        `
    }
];

export const getArticleBySlugBn = (slug: string): ArticleData | undefined => {
    return articlesBn.find(a => a.slug === slug);
};
