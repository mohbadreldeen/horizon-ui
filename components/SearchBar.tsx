'use client'
import React, { useState } from 'react'
import BellIcon from '@/public/icons/bell.svg'

import SearchIcon from '@/public/icons/search.svg'
import InfoIcon from '@/public/icons/info.svg'
import ToggleTheme from './ToggleTheme'
import Image from 'next/image'

const SearchBar = () => {
    const [focus, setFocus] = useState(false)

    const inputClasses = `p-2 transition-width duration-300 bg-transparent outline-none ${focus ? 'w-[300px]' : 'w-[150px]'}`

    return (
        <div className="flex bg-colorBgSecondary rounded-full p-2 h-[50px] items-center gap-4">
            <div className="bg-colorBgPrimary flex rounded-full px-2 items-center">
                <SearchIcon className="stroke-textPrimary bg-transparent" />
                <input type="text" placeholder="Search" className={inputClasses} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} />
            </div>
            <BellIcon className="stroke-textSecondary hover:stroke-textPrimary cursor-pointer " />
            <ToggleTheme />
            <InfoIcon className="hover:fill-textPrimary fill-textSecondary cursor-pointer" />
            <Image src="/avatar.jpg" alt="Profile" width={40} height={40} className="rounded-full" />
        </div>
    )
}

export default SearchBar
