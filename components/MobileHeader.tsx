import React from 'react'

import HamburgerIcon from '@/public/icons/hamburger.svg'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import Logo from './Logo'
import Sperator from './Sperator'
import SidebarNav from './SidebarNav'
const MobileHeader = () => {
    return (
        <>
            <div className="bg-colorBgSecondary max-sm:block hidden">
                <div className="flex justify-between flex-row p-3">
                    <img src="/icons/LogoIcon.svg" alt="Logo" className="w-8 h-8" />
                    <Sheet>
                        <SheetTrigger>
                            <HamburgerIcon />
                        </SheetTrigger>
                        <SheetContent side="left" className="bg-colorBgSecondary">
                            <Logo context={`mobile`} />
                            <Sperator />
                            <SidebarNav context="mobile" />
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </>
    )
}

export default MobileHeader
