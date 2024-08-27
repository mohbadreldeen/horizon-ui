'use client'
import React, { useState } from 'react'
import BellIcon from '@/public/icons/bell.svg'

import SearchIcon from '@/public/icons/search.svg'
import InfoIcon from '@/public/icons/info.svg'
import ToggleTheme from './ToggleTheme'
import Image from 'next/image'

const SearchBar = () => {
    const [focus, setFocus] = useState(false)

    const inputClasses = `p-2 transition-width duration-300 bg-transparent outline-none ${focus ? 'w-[300px]' : 'w-[150px]'} max-lg:w-full max-lg:grow-1`

    return (
        <div className="flex bg-colorBgSecondary rounded-full p-2 h-[50px] items-center gap-3 max-lg:flex-grow-1 max-lg:w-full">
            <div className="bg-colorBgPrimary flex rounded-full px-2 items-center max-lg:flex-1 max-lg:w-full">
                <SearchIcon width="24" height="24" className="stroke-textPrimary bg-transparent" />
                <input type="text" placeholder="Search" className={inputClasses} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} />
            </div>
            <BellIcon className="fill-textSecondary hover:fill-textPrimary cursor-pointer " width="20" height="20" viewBox="0 0 24 24" />
            <ToggleTheme />
            <InfoIcon className="hover:fill-textPrimary fill-textSecondary cursor-pointer" width="20" height="20" viewBox="0 0 24 24" />
            <Image src="/avatar.jpg" alt="Profile" width={40} height={40} className="rounded-full" />
        </div>
    )
}

export default SearchBar
