<div align="center">
  <img src="public/logo/logo.png" alt="BrainVION Logo" width="200" />
  <h1>BrainVION</h1>
  <p><strong>A student tech community connecting learners, developers, and future innovators.</strong></p>

  <p>
    <a href="https://github.com/dialc-cmd/brainvion/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-ISC-blue.svg" alt="License: ISC" /></a>
    <a href="https://github.com/dialc-cmd/brainvion/pulls"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome" /></a>
  </p>
</div>

---

## 🚀 High-Signal Overview & Mission

BrainVION is a community-driven platform engineered specifically for university students, interns, tech learners, and IELTS candidates in Dhaka. This repository holds the **Tier 1 Production MVP** (Minimum Viable Product). We treat this "MVP" with zero-defect tolerance. The application's core objectives are:
1. Dominating student house seat acquisition with high-conversion funnels.
2. Establishing unshakable BrainVION brand credibility through flawless UX.
3. Deploying a zero-cost, hyper-responsive, offline-capable Learning Hub.

Every commit merged into `main` must reflect elite, Silicon Valley-level engineering rigor.

## ✨ Features

- **AI-Powered Learning Hub:** Integrated with Langchain to provide intelligent learning assistance and Retrieval-Augmented Generation (RAG) capabilities.
- **Interactive Code Environment:** Embedded Monaco Editor allowing users to write and test code snippets directly within the platform.
- **Robust Backend & Database:** Utilizes Prisma ORM for seamless database interactions and Supabase for backend services and authentication.
- **Offline Capability:** Native Service Worker (`sw.js`) integration for full offline accessibility, ensuring learners can access materials anytime.
- **Responsive UI:** Built with Tailwind CSS utilizing golden ratio responsive spacing for a premium visual experience.

## 🛠 Technology Stack

This MVP enforces strict international engineering principles utilizing a modern, rapid-deployment stack:
- **Framework:** [Next.js](https://nextjs.org/) (React Framework)
- **Language:** 100% Strict [TypeScript](https://www.typescriptlang.org/) (No `any` allowed)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (Golden Ratio responsive spacing)
- **AI Integration:** [Langchain](https://js.langchain.com/docs/) & [OpenAI](https://openai.com/)
- **Code Editor:** [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- **Database ORM:** [Prisma](https://www.prisma.io/)
- **Backend as a Service:** [Supabase](https://supabase.com/)
- **PWA Integration:** Native Service Worker (`sw.js`) for full offline capability
- **Hosting / Deployment:** Vercel (Zero-cost tier)

## 📁 Project Structure

```
brainvion/
├── .agents/              # Agent instructions
├── docs/                 # Documentation
├── prisma/               # Prisma schema and database configuration
│   ├── dev.db            # SQLite database for local development
│   └── schema.prisma     # Prisma schema file
├── public/               # Static assets (images, logos, etc.)
├── src/                  # Source code for the Next.js application
│   ├── app/              # Next.js app directory
│   ├── components/       # Reusable React components
│   ├── data/             # Static data files
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions and shared libraries
│   ├── pages/            # Next.js pages directory (if applicable)
│   ├── styles/           # Global CSS and Tailwind styles
│   ├── middleware.ts     # Next.js middleware
│   └── README.md         # Source code specific readme
├── supabase/             # Supabase configuration and edge functions
│   ├── config.toml       # Supabase configuration file
│   ├── functions/        # Edge functions
│   └── migrations/       # Database migrations
├── .env.example          # Example environment variables
├── CONTRIBUTING.md       # Contribution guidelines
├── CODE_OF_CONDUCT.md    # Code of conduct
├── SECURITY.md           # Security policies
├── LICENSE               # License information
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation (this file)
```

## ⚙️ Local Development

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- npm

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/dialc-cmd/brainvion.git
   cd brainvion
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**
   Copy the `.env.example` file to `.env.local` and fill in the required values:
   ```bash
   cp .env.example .env.local
   ```
   *Note: Ensure you have the necessary API keys (OpenAI, Supabase, etc.) configured in your `.env.local` file.*

4. **Database Setup (Prisma):**
   Run the Prisma generate command to generate the Prisma Client:
   ```bash
   npx prisma generate
   ```
   Push the schema to your local database:
   ```bash
   npx prisma db push
   ```

5. **Run the development server:**
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

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

## 🤝 Contributing

We welcome contributions from university students, interns, and developers looking to build real-world engineering skills. Please read our [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our strict architectural guidelines and the process for submitting pull requests.

Please also adhere to our [CODE OF CONDUCT](./CODE_OF_CONDUCT.md) in all your interactions with the project.

For security-related issues, please refer to our [SECURITY.md](./SECURITY.md).

## 📜 Intellectual Property & License

This repository and its foundational architecture are the exclusive intellectual property of **Brainvion** and Founder **Dial Chowdhury Emon** (@dialc.official, GitHub: dialc-cmd). 

Unauthorized copying, modification, or distribution is strictly prohibited outside of authorized community contributions.

See the [LICENSE](./LICENSE) file for more details.
