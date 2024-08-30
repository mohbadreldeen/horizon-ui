import type { Config } from 'tailwindcss'

const config: Config = {
    content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        colors: {
            transparent: 'transparent',
            white: 'var(--color-white)',
            colorBgPrimary: {
                DEFAULT: 'var(--color-bg-primary)',
                100: 'var(--color-bg-primary-100)',
            },
            colorBgSecondary: 'var(--color-bg-secondary)',
            colorPrimary: {
                DEFAULT: 'var(--color-primary)',
                100: 'var(--color-primary-100)',
            },

            textSecondary: {
                DEFAULT: 'var(--color-text-secondary-100)',
                100: 'var(--color-text-secondary-100)',
                200: 'var(--color-text-secondary-200)',
            },

            textPrimary: 'var(--color-text-primary)',
            decoration: 'var(--color-decoration)',
            green: 'var(--color-green)',
            red: 'var(--color-red)',
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
