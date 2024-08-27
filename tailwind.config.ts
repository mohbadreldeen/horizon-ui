import type { Config } from 'tailwindcss'

const config: Config = {
    content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        colors: {
            transparent: 'transparent',
            white: 'var(--color-white)',
            colorBgPrimary: 'var(--color-bg-primary)',
            colorBgSecondary: 'var(--color-bg-secondary)',
            colorPrimary: 'var(--color-primary)',
            textSecondary: 'var(--color-text-secondary)',
            textPrimary: 'var(--color-text-primary)',
            decoration: 'var(--color-decoration)',
        },
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
}
export default config
