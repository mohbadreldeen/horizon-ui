import type { Config } from 'tailwindcss'

const config: Config = {
    content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        colors: {
            transparent: 'transparent',
            'accent-primary': {
                DEFAULT: 'var(--color-accent-primary)',
                100: 'var(--color-accent-primary-100)',
                200: 'var(--color-accent-primary-200)',
            },
            'primary-foreground': 'var(--color-primary-foreground)',
            'secondary-foreground': {
                DEFAULT: 'var(--color-secondary-foreground)',
                100: 'var(--color-secondary-foreground-100)',
                200: 'var(--color-secondary-foreground-200)',
            },
            'primary-background': {
                DEFAULT: 'var(--color-primary-background)',
                100: 'var(--color-primary-background-100)',
            },
            'secondary-background': 'var(--color-secondary-background)',
            destructive: {
                DEFAULT: 'var(--color-destructive)',
                100: 'var(--color-destructive-100)',
                200: 'var(--color-destructive-200)',
            },
            'destructive-foreground': 'var(--color-destructive-foreground)',

            'link-foreground': 'var(--color-link-foreground)',
            decoration: 'var(--color-decoration)',
            white: 'var(--color-white)',
            green: 'var(--color-green)',
            red: 'var(--color-red)',
            yellow: 'var(--color-yellow)',
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
