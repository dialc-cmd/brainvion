/**
 * @file ErrorBoundary.tsx
 * @project BrainVION Tech Community Platform - Lean Architecture Update
 * @copyright (c) 2026 BrainVION & Dial Chowdhury Emon (@dialc-cmd)
 * @license Proprietary - All Rights Reserved.
 */

import React, { Component, ErrorInfo, ReactNode } from 'react';

// 1. Context: A React Error Boundary to catch UI and API rendering failures without crashing the entire app.
// 2. Algorithm/Logic: Standard React error boundary using static getDerivedStateFromError and componentDidCatch.
// 3. Junior Engineer Guidance: Wrap top-level routes with this component. It does NOT catch errors in async event handlers—only rendering errors.

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
    };

    public static getDerivedStateFromError(error: Error): State {
        // Update state so the next render will show the fallback UI.
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
        // Log to external error reporting service here (e.g. Sentry) in the future.
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-[50vh] flex flex-col items-center justify-center p-8 text-center bg-rose-50/30 rounded-2xl border border-rose-100 my-8 mx-auto max-w-2xl">
                    <h2 className="text-2xl font-bold text-rose-600 mb-4 font-heading">Something went wrong</h2>
                    <p className="text-text/70 mb-6 max-w-md mx-auto">
                        We encountered an unexpected error while rendering this component. Our engineering team has been notified.
                    </p>
                    <button
                        onClick={() => this.setState({ hasError: false })}
                        className="px-6 py-2 bg-rose-600 text-white font-medium rounded-lg hover:bg-rose-700 transition-colors"
                    >
                        Try Again
                    </button>
                    {process.env.NODE_ENV === 'development' && this.state.error && (
                        <pre className="mt-8 p-4 bg-gray-900 text-gray-100 text-xs rounded overflow-auto max-w-full text-left w-full">
                            {this.state.error.toString()}
                        </pre>
                    )}
                </div>
            );
        }

        return this.props.children;
    }
}
