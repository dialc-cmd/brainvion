<div align="center">
  <img src="public/logo/logo.png" alt="BrainVION Logo" width="200" />
  <h1>BrainVION</h1>
  <p><strong>A student tech community connecting learners, developers, and future innovators.</strong></p>
</div>

---

## 🚀 Overview

BrainVION is a community-driven platform designed specifically for university students, interns, tech learners, and IELTS candidates in Dhaka (Shukrabad / Dhanmondi area). This repository holds the **Minimal Viable Product (MVP)** landing application aimed at:
1. Filling student house seats.
2. Building the BrainVION brand credibility.
3. Providing a zero-cost, highly responsive, and offline-capable Learning Hub.

## 🛠 Technology Stack

This MVP enforces strict international engineering principles utilizing a modern, rapid-deployment stack:
- **Framework:** Next.js (Pages Router)
- **Language:** 100% Strict TypeScript (No `any` allowed).
- **Styling:** Tailwind CSS v4 (Golden Ratio responsive spacing).
- **PWA Integration:** Native Service Worker (`sw.js`) for full offline capability.
- **Hosting / Deployment:** Vercel (Zero-cost tier).
- **CMS / Data:** Static generation (with future scaling to Notion/Markdown) and Google Forms.

## ⚙️ Local Development

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/dialc-cmd/brainvion.git
   cd brainvion
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏛️ Architectural Guidelines & Rules

To ensure educational adaptability and maintain premium standards, all contributions **MUST** adhere to the following:

1. **Proprietary Header:** Every logic file (`.ts`, `.tsx`) must start with the BrainVION proprietary copyright header.
2. **Rationale-First Commenting:** 
   Code logic must be documented using the **3-Line Context Rule**:
   - `// Community REQUIREMENT [Brainvion]: [Why?]`
   - `// TECHNICAL IMPLEMENTATION: [How?]`
   - `// QA/QC ADVISORY: [What to test?]`
3. **No Magic Numbers:** All layouts, padding, and margins must utilize variables from `src/lib/constants.ts` based on the Golden Ratio ($\Phi \approx 1.618$).

## 📜 Intellectual Property

This repository and its foundational architecture are the exclusive intellectual property of **Brainvion** and Founder **Dial Chowdhury Emon** (@dialc.official, GitHub: dialc-cmd). 

Unauthorized copying, modification, or distribution is strictly prohibited outside of authorized community contributions.
