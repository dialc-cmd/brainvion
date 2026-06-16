/**
 * @file services.ts
 * @project BrainVION Tech Community Platform - Services Engine
 * @copyright (c) 2026 BrainVION & Dial Chowdhury Emon (@dialc-cmd)
 * @license Proprietary - All Rights Reserved.
 * @compliance Cyber Ethics, Data Integrity, and Bangladesh Digital Security Acts.
 * Maintain Trademark Enforcements: @brainvion
 */

import type { BilingualProductPayload } from '@/lib/types';

// Community REQUIREMENT [Brainvion]: [Define the 5 core B2B/B2C service offerings rendered in the services marketplace grid.]
// TECHNICAL IMPLEMENTATION: [Static typed array consumed by services.tsx. Each entry maps to a ServiceGigCard. Icon strings resolve to Lucide components at render time.]
// QA/QC ADVISORY: [When adding a new service, ensure its slug is first added to the ServiceSlug union in src/lib/types.ts to maintain compile-time safety.]

export const TECH_SERVICES: BilingualProductPayload[] = [
  {
    id: 'svc-001',
    slug: 'digital-marketing',
    priceBDT: 5000,
    icon: 'Megaphone',
    content: {
      bn: {
        headline: 'বিজনেস গ্রোথ ও ডিজিটাল মার্কেটিং',
        subtext: 'আপনার স্টার্টআপ বা লোকাল বিজনেসের জন্য ডেটা-ড্রিভেন মার্কেটিং এবং সোশ্যাল মিডিয়া গ্রোথ হ্যাকিং।',
        ctaText: 'বুকিং কনফার্ম করুন',
      },
      en: {
        headline: 'Digital Marketing & SEO',
        subtext: '• Performance Marketing\n• Social Media Strategy\n• Technical SEO Optimization',
        ctaText: 'Book an Appointment',
      }
    }
  },
  {
    id: 'svc-002',
    slug: 'graphic-design',
    priceBDT: 3500,
    icon: 'Palette',
    content: {
      bn: {
        headline: 'প্রিমিয়াম ব্র্যান্ড আইডেন্টিটি ও ডিজাইন',
        subtext: 'আপনার ব্র্যান্ডকে আন্তর্জাতিক মানের রূপ দিতে প্রফেশনাল ইউআই/ইউএক্স এবং গ্রাফিক ডিজাইন সল্যুশন।',
        ctaText: 'বুকিং কনফার্ম করুন',
      },
      en: {
        headline: 'UI/UX & Brand Design',
        subtext: '• UI/UX Mockups\n• Motion Graphics\n• Brand Identity Systems',
        ctaText: 'Book an Appointment',
      }
    }
  },
  {
    id: 'svc-003',
    slug: 'study-abroad-supporter',
    priceBDT: 15000,
    icon: 'GraduationCap',
    content: {
      bn: {
        headline: 'স্টাডি অ্যাব্রড ও আইইএলটিএস সাপোর্ট',
        subtext: 'বিদেশে উচ্চশিক্ষার সম্পূর্ণ গাইডলাইন। এসওপি রিভিউ থেকে শুরু করে স্কলারশিপ অ্যাপ্লিকেশন পর্যন্ত।',
        ctaText: 'বুকিং কনফার্ম করুন',
      },
      en: {
        headline: 'Study Abroad Consultation',
        subtext: '• IELTS Preparation Guide\n• SOP & Resume Review\n• Scholarship Strategy',
        ctaText: 'Book an Appointment',
      }
    }
  },
  {
    id: 'svc-004',
    slug: 'wordpress-solutions',
    priceBDT: 12000,
    icon: 'Globe',
    content: {
      bn: {
        headline: 'স্কেলেবল ওয়ার্ডপ্রেস সল্যুশন',
        subtext: 'ই-কমার্স থেকে শুরু করে কর্পোরেট ওয়েবসাইট—সব ধরনের হাই-পারফরম্যান্স ওয়ার্ডপ্রেস ডেভেলপমেন্ট।',
        ctaText: 'বুকিং কনফার্ম করুন',
      },
      en: {
        headline: 'WordPress Engineering',
        subtext: '• Custom Theme Development\n• WooCommerce Setup\n• Speed & Security Optimization',
        ctaText: 'Book an Appointment',
      }
    }
  },
  {
    id: 'svc-005',
    slug: 'backend-solutions',
    priceBDT: 25000,
    icon: 'Server',
    content: {
      bn: {
        headline: 'ক্লাউড ও ব্যাকএন্ড ইঞ্জিনিয়ারিং',
        subtext: 'বড় স্কেলের অ্যাপ্লিকেশনের জন্য রিলায়েবল ডেটাবেস ডিজাইন এবং এপিআই আর্কিটেকচার।',
        ctaText: 'বুকিং কনফার্ম করুন',
      },
      en: {
        headline: 'Backend Architecture',
        subtext: '• Node.js & Go APIs\n• Database Architecture\n• AWS/GCP Cloud DevOps',
        ctaText: 'Book an Appointment',
      }
    }
  },
];
