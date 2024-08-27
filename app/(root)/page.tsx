import PageHeader from '@/components/PageHeader'
import Sidebar from '@/components/Sidebar'
import React from 'react'
import InfoCard from '@/components/InfoCard'
import BarsIcon from '@/public/icons/bars.svg'
import DollarIcon from '@/public/icons/dollar.svg'
import ValueIndex from '@/components/ValueIndex'
import { type ClassValue } from 'clsx'
function Home() {
    return (
        <div className="p-6 pt-10">
            <PageHeader />
            <div className="flex gap-5 pt-8 flex-wrap">
                <InfoCard header="Earnings" content="$350.4" icon={<BarsIcon className="fill-colorPrimary" width="32px" height="32px" />} />
                <InfoCard header="Spend this month" content="$642.39" icon={<DollarIcon className="fill-colorPrimary" width="32px" height="32px" />} />
                <InfoCard header="Sales" content="$574.34" footer={<ValueIndex direction="up" value="30%" label="Since last month" />} />
                <InfoCard header="Your balance" content="$3642.39" />
                <InfoCard header="Total Projects" content="2965" />
            </div>
        </div>
    )
}
export default Home
