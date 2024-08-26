'use client'
import { createContext, useContext, useState } from 'react'

const Context = createContext({
    theme: 'light',
    toggleTheme: (name: string) => {},
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState('light')
    return <Context.Provider value={{ theme, toggleTheme: setTheme }}>{children}</Context.Provider>
}

export function useThemeContext() {
    return useContext(Context)
}
