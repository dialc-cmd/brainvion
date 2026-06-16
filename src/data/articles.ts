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

// Community REQUIREMENT [Brainvion]: [Centralized data store for Learning Hub content to enable dynamic routing.]
// TECHNICAL IMPLEMENTATION: [Static export of article objects with slugs and full HTML/JSX body strings for rich rendering.]
// QA/QC ADVISORY: [Ensure slugs are URL-safe and unique. Verify HTML content is sanitized or safe before rendering.]

export interface ArticleData {
    id: number;
    slug: string;
    title: string;
    description: string;
    category: string;
    readTime: string;
    date: string;
    content: string; // HTML string for the body
}

export const articles: ArticleData[] = [
    {
        id: 1,
        slug: "ultimate-student-laptop-guide-2026",
        title: "The Ultimate Guide to Buying a Student Laptop in 2026",
        description: "Don't waste money on the wrong hardware. Detailed breakdown of processors, RAM requirements, and Mac vs PC for Bangladeshi university students pursuing tech.",
        category: "Hardware",
        readTime: "8 min read",
        date: "Oct 12, 2026",
        content: `
            <h2>The Silicon Valley Mindset for Hardware</h2>
            <p>Treat your laptop as a high-yield investment, not a sunk cost. In 2026, the baseline requirements for a computer science or tech-focused degree have shifted dramatically.</p>
            
            <h3>Processor Architecture</h3>
            <p>ARM-based architecture has achieved complete dominance in battery efficiency. If you are not purchasing an Apple M-series (M2 or M3) or the latest Snapdragon X Elite for Windows, you are severely compromising your mobility and compilation times.</p>
            
            <h3>RAM: The 16GB Baseline</h3>
            <p>Do not purchase an 8GB laptop. Full stop. Between running Docker containers, an IDE (like Cursor or VS Code), multiple Chrome tabs, and a local LLM instance, 8GB will throttle your productivity and cause swap-memory degradation.</p>
            
            <h3>Mac vs. PC for BD Students</h3>
            <p>While macOS remains the Unix-based standard for Silicon Valley web development, the reality of budget constraints in Dhaka often pushes students toward Windows. If you choose Windows, ensure WSL2 (Windows Subsystem for Linux) is your first installation.</p>
        `
    },
    {
        id: 2,
        slug: "using-ai-for-studies-without-cheating",
        title: "How to Actually Use AI for University Studies Without Cheating",
        description: "Learn to use Cursor, ChatGPT, and Notion AI as tutors and research assistants rather than just answer-generators to genuinely boost your skillset.",
        category: "Productivity",
        readTime: "5 min read",
        date: "Oct 05, 2026",
        content: `
            <h2>The Difference Between Augmentation and Plagiarism</h2>
            <p>A zero-defect engineer uses AI to accelerate comprehension, not to bypass it. If you are copy-pasting code into a final project without understanding the Big O notation of the generated algorithm, you are accumulating massive technical debt.</p>
            
            <h3>Using AI as a Socratic Tutor</h3>
            <p>Instead of asking "Write a Python script to reverse a linked list," prompt the LLM with: "I am trying to understand linked list reversal. Ask me guiding questions one by one so I can figure out the logic myself."</p>
            
            <h3>Debugging with Context</h3>
            <p>When you hit an error, do not just paste the stack trace. Paste the trace and ask: "Explain why this memory leak is occurring in the context of React's lifecycle." This builds your internal mental models.</p>
        `
    },
    {
        id: 3,
        slug: "frontend-roadmap-complete-beginners",
        title: "Frontend Roadmap for Complete Beginners",
        description: "HTML, CSS, React, Next.js. The exact path, free resources, and timeframe needed to land a remote internship from Dhaka.",
        category: "Coding",
        readTime: "12 min read",
        date: "Sep 28, 2026",
        content: `
            <h2>Phase 1: The Foundations (Zero-Defect HTML/CSS)</h2>
            <p>Do not jump to React. You must deeply understand the DOM tree, CSS specificity, and semantic HTML. Accessibility (a11y) is not an afterthought; it is a P1 requirement.</p>
            
            <h2>Phase 2: JavaScript Mechanics</h2>
            <p>Master the event loop, closures, promises, and the ` + "`this`" + ` keyword. You cannot debug a React hydration error if you don't understand how the JS engine executes asynchronous code.</p>
            
            <h2>Phase 3: React & Next.js</h2>
            <p>Learn React's component lifecycle and state management. Then, immediately transition to Next.js. Understand the difference between Client Components and Server Components (SSR/RSC) to optimize Time to First Byte (TTFB).</p>
        `
    },
    {
        id: 4,
        slug: "ielts-programmers-approach",
        title: "Surviving the IELTS: A Programmer's Approach to English",
        description: "Treating language learning like syntax. Systematizing writing structures and speaking drills to achieve a 7.5+ band score.",
        category: "Career",
        readTime: "6 min read",
        date: "Sep 20, 2026",
        content: `
            <h2>Language as Syntax</h2>
            <p>Stop viewing English as an abstract art. View it as a strongly-typed language with strict syntax rules and design patterns. An IELTS Task 2 essay is essentially a function that takes a prompt as input and returns a structured argument.</p>
            
            <h3>The Essay Framework (Design Pattern)</h3>
            <ul>
                <li><strong>Introduction:</strong> Initialize variables (paraphrase prompt) and define return type (thesis statement).</li>
                <li><strong>Body Paragraph 1:</strong> Primary logic block. State the assertion, provide execution (example), and return conclusion.</li>
                <li><strong>Body Paragraph 2:</strong> Secondary logic block or alternative condition (Counter-argument).</li>
                <li><strong>Conclusion:</strong> Final return statement summarizing the output.</li>
            </ul>
        `
    }
];

export const getArticleBySlug = (slug: string): ArticleData | undefined => {
    return articles.find(a => a.slug === slug);
};
