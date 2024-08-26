import React from 'react'
import Logo from './Logo'
import Sperator from './Sperator'
import SidebarNav from './SidebarNav'

const Sidebar = () => {
    return (
        <aside className=" bg-colorBgSecondary flex flex-col flex-shrink-0 basis-[300px]">
            <Logo />
            <Sperator />
            <SidebarNav />

            <div className="w-[80%] py-14 px-5 self-end  rounded-3xl m-8 bg-gradient-to-tl text-center text-white">
                <h3>Upgrade to PRO</h3>
                <p>to get access to all features! Connect with Venus World!</p>
            </div>
        </aside>
    )
}
export default Sidebar
