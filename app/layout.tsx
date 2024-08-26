'use client'
import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'] })

import { ThemeProvider, useThemeContext } from './provider'
import { useEffect } from 'react'
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const theme = useThemeContext()

    return (
        <html lang="en" className="h-full">
            <body className={`${dmSans.className} theme-${theme.theme} h-full`}>
                <div className="app min-h-full flex flex-row">
                    <ThemeProvider>{children}</ThemeProvider>
                </div>
            </body>
        </html>
    )
}
