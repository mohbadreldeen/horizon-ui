import PageHeader from '@/components/PageHeader'
import Sidebar from '@/components/Sidebar'
import React from 'react'
import InfoCard from '@/components/InfoCard'
import BarsIcon from '@/public/icons/bars.svg'
import DollarIcon from '@/public/icons/dollar.svg'
import ValueIndex from '@/components/ValueIndex'

import CheckTableCard from '@/components/CheckTableCard'
import RevenenuChart from '@/components/RevenenuChart'
import TotalSpend from '@/components/TotalSpend'
import DailyTrafic from '@/components/DailyTrafic'

import PieChartCard from '@/components/PieChartCard'
import ComplexTableCard from '@/components/ComplexTable'
import TasksCard from '@/components/TasksCard'

async function Home() {
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
            <div className="flex flex-row gap-5 pt-8 w-full max-md:flex-wrap">
                <div className="w-1/2 max-md:w-full">
                    <TotalSpend />
                </div>
                <div className="w-1/2 max-md:w-full">
                    <RevenenuChart />
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
                <CheckTableCard />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <DailyTrafic />
                    <PieChartCard />
                </div>
                <div>
                    <ComplexTableCard />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <TasksCard />
                    <TasksCard />
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5"></div>
        </div>
    )
}
export default Home
