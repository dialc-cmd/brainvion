/**
 * =============================================================================
 * BrainVion - PROPRIETARY SOURCE CODE
 * © 2026 Brainvion. All Rights Reserved.
 * LEAD ARCHITECT: Dial Chowdhury Emon (@dialc.official)
 * =============================================================================
 */

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Play, RefreshCw, Code2, TerminalSquare, Copy, Check } from 'lucide-react';
import Link from 'next/link';
import Editor from '@monaco-editor/react';

const DEFAULT_CODE = `// BrainVION Web IDE — JavaScript Sandbox
// Click "Run Code" to see your output below.

// Example: Student Performance Calculator
function calculateGPA(grades) {
    const total = grades.reduce((sum, g) => sum + g, 0);
    return (total / grades.length).toFixed(2);
}

const myGrades = [85, 92, 78, 95, 88];
const gpa = calculateGPA(myGrades);
console.log("📊 Your GPA:", gpa);

// Example: Fibonacci for algorithm practice
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

for (let i = 0; i <= 8; i++) {
    console.log(\`fib(\${i}) = \${fibonacci(i)}\`);
}
`;

const SNIPPET_TEMPLATES = [
    { name: "Array Methods", code: `// Useful Array methods\nconst students = ['Rahim', 'Karim', 'Sara'];\n\nconst upper = students.map(s => s.toUpperCase());\nconsole.log('Uppercased:', upper);\n\nconst filtered = students.filter(s => s.length > 4);\nconsole.log('Long names:', filtered);\n\nconsole.log('Includes Sara:', students.includes('Sara'));` },
    { name: "async/await", code: `// Simulating async data fetch\nasync function fetchUser(id) {\n    return new Promise(resolve => {\n        setTimeout(() => resolve({ id, name: 'Student #' + id }), 300);\n    });\n}\n\n(async () => {\n    const user = await fetchUser(42);\n    console.log('Fetched:', JSON.stringify(user));\n})();` },
    { name: "Object & Classes", code: `class Student {\n    constructor(name, score) {\n        this.name = name;\n        this.score = score;\n    }\n    grade() {\n        if (this.score >= 90) return 'A';\n        if (this.score >= 75) return 'B';\n        return 'C';\n    }\n}\n\nconst s = new Student('Emon', 94);\nconsole.log(s.name, '→ Grade:', s.grade());` },
];

export default function WebIDE() {
    const [code, setCode] = useState(DEFAULT_CODE);
    const [output, setOutput] = useState<{ text: string; isError: boolean }[]>([]);
    const [isRunning, setIsRunning] = useState(false);
    const [copied, setCopied] = useState(false);

    const runCode = () => {
        setIsRunning(true);
        setOutput([]);
        const logs: { text: string; isError: boolean }[] = [];
        const originalLog = console.log;
        const originalError = console.error;

        console.log = (...args) => {
            logs.push({ text: args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' '), isError: false });
        };
        console.error = (...args) => {
            logs.push({ text: args.map(String).join(' '), isError: true });
        };

        try {
            // eslint-disable-next-line no-eval
            eval(code);
            if (!logs.length) logs.push({ text: '✓ Executed with no output.', isError: false });
        } catch (err: any) {
            logs.push({ text: `RuntimeError: ${err.message}`, isError: true });
        } finally {
            console.log = originalLog;
            console.error = originalError;
            setOutput(logs);
            setIsRunning(false);
        }
    };

    const copyCode = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex flex-col h-screen bg-[#1e1e1e] font-sans">
            {/* Toolbar */}
            <header className="flex-none h-14 flex items-center justify-between px-4 border-b border-[#3c3c3c] bg-[#252526]">
                <div className="flex items-center gap-3">
                    <Link href="/dashboard" className="p-2 hover:bg-[#3c3c3c] rounded-md transition-colors text-neutral-400">
                        <ArrowLeft className="w-4 h-4" />
                    </Link>
                    <Code2 className="w-5 h-5 text-sky-400" />
                    <span className="text-white font-semibold text-sm">BrainVION Web IDE</span>
                    <span className="text-neutral-500 text-xs font-mono">script.js</span>
                </div>

                {/* Snippet Templates */}
                <div className="hidden md:flex items-center gap-2">
                    {SNIPPET_TEMPLATES.map(s => (
                        <button key={s.name} onClick={() => { setCode(s.code); setOutput([]); }}
                            className="px-3 py-1.5 text-xs font-medium bg-[#3c3c3c] hover:bg-[#505050] text-neutral-300 rounded-md transition-colors">
                            {s.name}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-2">
                    <button onClick={copyCode} className="p-2 hover:bg-[#3c3c3c] rounded-md text-neutral-400 transition-colors">
                        {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <button onClick={() => { setCode(DEFAULT_CODE); setOutput([]); }} className="px-3 py-1.5 text-xs font-medium text-neutral-400 hover:bg-[#3c3c3c] rounded-md transition-colors flex items-center gap-1">
                        <RefreshCw className="w-3 h-3" /> Reset
                    </button>
                    <button onClick={runCode} disabled={isRunning} className="px-4 py-1.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 disabled:opacity-60 rounded-md transition-all flex items-center gap-1.5 shadow-lg shadow-emerald-900/20">
                        <Play className="w-3.5 h-3.5" /> {isRunning ? 'Running...' : 'Run Code'}
                    </button>
                </div>
            </header>

            {/* Main Split Layout */}
            <main className="flex-1 flex overflow-hidden">
                {/* Editor */}
                <div className="flex-1 min-w-0">
                    <Editor
                        height="100%"
                        defaultLanguage="javascript"
                        theme="vs-dark"
                        value={code}
                        onChange={(v) => v !== undefined && setCode(v)}
                        options={{
                            minimap: { enabled: false },
                            fontSize: 14,
                            fontFamily: "'JetBrains Mono', 'Cascadia Code', monospace",
                            padding: { top: 20 },
                            smoothScrolling: true,
                            cursorBlinking: 'smooth',
                            lineNumbers: 'on',
                            wordWrap: 'on',
                            suggestOnTriggerCharacters: true,
                        }}
                    />
                </div>

                {/* Output Panel */}
                <div className="w-[380px] lg:w-[450px] flex flex-col border-l border-[#3c3c3c] bg-[#1e1e1e] shrink-0 hidden md:flex">
                    <div className="h-10 bg-[#252526] border-b border-[#3c3c3c] flex items-center px-4 gap-2">
                        <TerminalSquare className="w-4 h-4 text-neutral-400" />
                        <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Console Output</span>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 font-mono text-sm space-y-1">
                        {output.length === 0 ? (
                            <p className="text-neutral-600 italic text-xs">Awaiting execution...</p>
                        ) : (
                            output.map((line, i) => (
                                <motion.div key={i} initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }}
                                    className={`flex items-start gap-2 ${line.isError ? 'text-rose-400' : 'text-emerald-400'}`}>
                                    <span className="text-neutral-600 shrink-0 mt-0.5">{line.isError ? '!' : '>'}</span>
                                    <span className="whitespace-pre-wrap break-all">{line.text}</span>
                                </motion.div>
                            ))
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
