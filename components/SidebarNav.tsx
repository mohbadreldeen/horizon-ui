'use client'

import React from 'react'
import Link from 'next/link'
import { links } from './AppLinks'
import { usePathname } from 'next/navigation'

const SidebarNav = () => {
    const linkClasses = 'flex font-bold gap-3 font-size-16 pl-10'
    const linkClassesNormal = `${linkClasses} text-textSecondary`
    const linkClassesActive = `${linkClasses} text-textPrimary`

    const iconClasses = 'fill-textSecondary'
    const iconClassesActive = 'fill-textPrimary'

    const pathname = usePathname()

    return (
        <nav className="pt-10 flex flex-col gap-5 w-full">
            {links.map((item, index) => {
                const Icon = item.Icon
                const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                return (
                    <Link href={item.route} key={index} className={isActive ? linkClassesActive : linkClassesNormal}>
                        <Icon className={isActive ? iconClassesActive : iconClasses} />
                        {item.name}
                    </Link>
                )
            })}
        </nav>
    )
}

export default SidebarNav
