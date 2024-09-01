import React from 'react'

import HamburgerIcon from '@/public/icons/hamburger.svg'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import Logo from './Logo'
import Sperator from './Sperator'
import SidebarNav from './SidebarNav'
import { Landmark } from 'lucide-react'
const MobileHeader = () => {
    return (
        <>
            <div className="bg-secondary-background max-sm:block hidden">
                <div className="flex justify-between flex-row p-3">
                    {/* <img src="/icons/LogoIcon.svg" alt="Logo" className="w-8 h-8" /> */}
                    <Landmark />
                    <Sheet>
                        <SheetTrigger>
                            <HamburgerIcon />
                        </SheetTrigger>
                        <SheetContent side="left" className="bg-secondary-background">
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
