'use client'

import React from 'react'
import Link from 'next/link'
import { links } from './AppLinks'
import { usePathname } from 'next/navigation'

const SidebarNav = ({ context }: contextPros) => {
    const linkClasses = 'flex items-center font-bold gap-3 font-size-16 pl-10 max-xl:pl-3 max-xl:pr-3'
    const linkClassesNormal = `${linkClasses} text-secondary-foreground`
    const linkClassesActive = `${linkClasses} text-primary-foreground`

    const iconClasses = 'fill-secondary-foreground'
    const iconClassesActive = 'fill-primary-foreground'

    const pathname = usePathname()

    return (
        <nav className="pt-10 flex flex-col gap-5 w-full">
            {links.map((item, index) => {
                const Icon = item.Icon
                const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                return (
                    <Link href={item.route} key={index} className={isActive ? linkClassesActive : linkClassesNormal}>
                        <Icon className={isActive ? iconClassesActive : iconClasses} />
                        <label className={context === 'mobile' ? '' : 'max-xl:hidden'}>{item.name}</label>
                    </Link>
                )
            })}
        </nav>
    )
}

export default SidebarNav
