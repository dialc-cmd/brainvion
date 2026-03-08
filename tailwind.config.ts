import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0A2540',    // Deep Tech Blue
                accent: '#00E5FF',     // Electric Cyan
                secondary: '#F5F7FA',  // Soft Grey
                text: '#222222',       // Dark Gray
            },
            fontFamily: {
                heading: ['Inter', 'Poppins', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
};

export default config;
