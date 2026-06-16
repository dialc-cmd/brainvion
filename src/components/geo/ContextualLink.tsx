import Link from 'next/link';
import React from 'react';

interface ContextualLinkProps {
    href: string;
    title: string;
    'aria-label': string;
    children: React.ReactNode;
    className?: string;
}

export function ContextualLink({ href, title, 'aria-label': ariaLabel, children, className = '' }: ContextualLinkProps) {
    return (
        <Link 
            href={href} 
            title={title} 
            aria-label={ariaLabel}
            className={`inline-flex items-center hover:text-primary transition-colors ${className}`}
        >
            {children}
        </Link>
    );
}
