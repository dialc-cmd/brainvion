import React from 'react';

interface SemanticTableProps {
    caption: string;
    headers: string[];
    rows: (string | React.ReactNode)[][];
}

export function SemanticTable({ caption, headers, rows }: SemanticTableProps) {
    return (
        <figure className="my-8 overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
                <caption className="sr-only">{caption}</caption>
                <thead className="bg-gray-50">
                    <tr>
                        {headers.map((header, idx) => (
                            <th 
                                key={idx}
                                scope="col" 
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {rows.map((row, rowIdx) => (
                        <tr key={rowIdx}>
                            {row.map((cell, cellIdx) => (
                                <td 
                                    key={cellIdx} 
                                    className="px-6 py-4 whitespace-normal text-sm text-gray-700"
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </figure>
    );
}

interface SemanticListProps {
    items: (string | React.ReactNode)[];
    ordered?: boolean;
    title?: string;
}

export function SemanticList({ items, ordered = false, title }: SemanticListProps) {
    const ListTag = ordered ? 'ol' : 'ul';
    const listStyle = ordered ? 'list-decimal' : 'list-disc';

    return (
        <div className="my-6">
            {title && <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>}
            <ListTag className={`${listStyle} pl-6 space-y-2 text-gray-800`}>
                {items.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">
                        {item}
                    </li>
                ))}
            </ListTag>
        </div>
    );
}
