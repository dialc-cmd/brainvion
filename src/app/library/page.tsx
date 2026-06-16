import React from 'react';
import Link from 'next/link';

export default function LibraryIndex() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-6">BrainVION Knowledge Library</h1>
            <p className="text-xl mb-8">
                Explore our comprehensive guides and resources for students and tech professionals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link 
                    href="/library/tech-careers" 
                    className="block p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                    <h2 className="text-2xl font-semibold mb-2">Tech Careers</h2>
                    <p className="text-gray-600">A comprehensive hub for launching and navigating your tech career.</p>
                </Link>
                {/* Add more pillars here */}
            </div>
        </div>
    );
}
