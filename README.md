<div align="center">
  <img src="public/logo/logo.png" alt="BrainVION Logo" width="200" />
  <h1>BrainVION</h1>
  <p><strong>A student tech community connecting learners, developers, and future innovators.</strong></p>
</div>

---

## 🚀 High-Signal Overview & Mission

BrainVION is a community-driven platform engineered specifically for university students, interns, tech learners, and IELTS candidates in Dhaka. This repository holds the **Tier 1 Production MVP** (Minimum Viable Product). We treat this "MVP" with zero-defect tolerance. The application's core objectives are:
1. Dominating student house seat acquisition with high-conversion funnels.
2. Establishing unshakable BrainVION brand credibility through flawless UX.
3. Deploying a zero-cost, hyper-responsive, offline-capable Learning Hub.

Every commit merged into `main` must reflect elite, Silicon Valley-level engineering rigor.

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

## 🏛️ Silicon Valley QA/QC Engineering Standards

To ensure architectural resilience and zero-defect deployments, all pull requests **MUST** pass strict quality gates. We operate on a **Shift-Left Quality** methodology: test early, assume failure, and build defensive UI.

1. **Proprietary Header:** Every logic file (`.ts`, `.tsx`) must start with the BrainVION proprietary copyright header. No exceptions.
2. **Rationale-First Contextualization (The 3-Line Context Rule):** 
   Do not explain *what* the code does. Explain *why* it exists and *how to break it*. Every core module must be documented:
   - `// Community REQUIREMENT [Brainvion]: [Business value / Why?]`
   - `// TECHNICAL IMPLEMENTATION: [Architecture / How?]`
   - `// QA/QC ADVISORY: [P1 Incident Prevention / What must be tested?]`
3. **Zero Magic Numbers (Strict Design Tokens):** All layouts, padding, and margins must utilize rigid variables from `src/lib/constants.ts` based on the Golden Ratio ($\Phi \approx 1.618$). Ad hoc pixel pushing is an immediate PR rejection.
4. **Continuous Verification (Client & Server):** The Dev server must start without a single warning. React hydration mismatches, unhandled promises, and console errors are treated as critical blockers.

### Generative Engine Optimization (GEO) & AEO Architecture

The BrainVION knowledge base is strictly architected for AI crawlers (LLMs, Answer Engines) and Retrieval-Augmented Generation (RAG) pipelines. All templates must follow these core principles:
- **Strict Server-Side Rendering (SSR):** Core textual content and headers must be present in the initial HTML payload. Do not use client-side hydration for content delivery.
- **Hub-and-Spoke Model:** Use `PillarTemplate` for top-level topics (Hubs) and `ClusterArticleTemplate` for detailed components (Spokes).
- **TL;DR Zones:** Every Spoke article must utilize the prominent TL;DR / Quick Extraction zone at the top of the body for immediate RAG context window consumption.
- **Semantic Components:** Use exported `SemanticTable` and `SemanticList` to construct non-disruptive, highly parseable data representations.
- **Automated Schemas:** JSON-LD schemas (WebSite, Organization, Article, FAQPage) are centrally managed in `src/lib/seo/schemas.ts` and injected dynamically.

## 📜 Intellectual Property

This repository and its foundational architecture are the exclusive intellectual property of **Brainvion** and Founder **Dial Chowdhury Emon** (@dialc.official, GitHub: dialc-cmd). 

Unauthorized copying, modification, or distribution is strictly prohibited outside of authorized community contributions.
