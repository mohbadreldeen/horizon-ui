'use client'
import React, { useEffect } from 'react'
import { useThemeContext } from '@/app/provider'
import MoonIcon from '@/public/icons/moon.svg'
const ToggleTheme = () => {
    const { theme, toggleTheme } = useThemeContext()
    useEffect(() => {
        document.body.classList.remove('theme-light', 'theme-dark')
        document.body.classList.add(`theme-${theme}`)
    }, [theme])

    return (
        <button onClick={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')}>
            <MoonIcon className="fill-textSecondary hover:fill-textPrimary" />
        </button>
    )
}

export default ToggleTheme
