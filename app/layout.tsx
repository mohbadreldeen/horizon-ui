'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

import { ThemeProvider, useThemeContext } from './provider'
import { useEffect } from 'react'
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const theme = useThemeContext()

    return (
        <html lang="en">
            <body className={`${inter.className} theme-${theme.theme}`}>
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    )
}
