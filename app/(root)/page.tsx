import PageHeader from '@/components/PageHeader'
import Sidebar from '@/components/Sidebar'
import React from 'react'
import InfoCard from '@/components/InfoCard'
import BarsIcon from '@/public/icons/bars.svg'
import DollarIcon from '@/public/icons/dollar.svg'
import ValueIndex from '@/components/ValueIndex'

import LineChart from '@/components/charts/LineChart'
import StackedColumns from '@/components/charts/StackedColumns'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, ChartNoAxesColumn } from 'lucide-react'

import { Button } from '@/components/ui/button'

import { CheckData, columns } from '@/components/PaymentsTable/Columns'
import { DataTable } from '@/components/PaymentsTable/DataTable'

async function getData(): Promise<CheckData[]> {
    // Fetch data from your API here.
    return [
        {
            id: '728ed52f',
            name: 'Horizon UI PRO',
            progress: 17.5,
            quantity: 2.456,
            date: '2021-09-01',
        },
        {
            id: '9a8b7c6d',
            name: 'React App',
            progress: 45.2,
            quantity: 1.234,
            date: '2021-09-05',
        },
        {
            id: '3e4f5g6h',
            name: 'Vue App',
            progress: 62.8,
            quantity: 2.345,
            date: '2021-09-08',
        },
        {
            id: '7i8j9k0l',
            name: 'Angular App',
            progress: 81.4,
            quantity: 3.456,
            date: '2021-09-12',
        },
        {
            id: 'm1n2o3p4',
            name: 'Next.js App',
            progress: 95.7,
            quantity: 4.567,
            date: '2021-09-18',
        },
        {
            id: 'q5r6s7t8',
            name: 'Svelte App',
            progress: 100,
            quantity: 5.678,
            date: '2021-09-22',
        },
    ]
}

async function Home() {
    const data = await getData()
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
            <div className="flex flex-row gap-5 pt-8 w-full">
                <Card className="w-1/2 bg-colorBgSecondary border-0 rounded-2xl">
                    <CardHeader className="flex flex-row justify-between p-5">
                        <Button className="btn">
                            <Calendar className="mr-2 h-4 w-4" />
                            Login with Email
                        </Button>
                        <Button className="btn">
                            <ChartNoAxesColumn className="text-colorPrimary h-5 w-5 stroke-2" />
                        </Button>
                    </CardHeader>
                    <CardContent className="flex items-center">
                        <div className="basis-[150px] flex flex-col gap-2">
                            <div className="text-3xl font-bold">$37.5K</div>
                            <div className="flex gap-2">
                                <span>Total Spend</span>
                                <ValueIndex direction="up" value="30%" />
                            </div>
                        </div>

                        <LineChart className="flex-grow" />
                    </CardContent>
                </Card>

                <Card className="w-1/2 bg-colorBgSecondary border-0 rounded-2xl">
                    <CardHeader className="flex flex-row justify-between p-5">
                        <CardTitle>Weekly Revenue</CardTitle>
                        <Button className="btn">
                            <ChartNoAxesColumn className="text-colorPrimary h-5 w-5 stroke-2" />
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <StackedColumns />
                    </CardContent>
                </Card>
            </div>
            <div className="flex flex-row gap-5 pt-8 w-full">
                <Card className="w-1/2 bg-colorBgSecondary border-0 rounded-2xl">
                    <CardHeader className="flex flex-row justify-between p-5">
                        <CardTitle>Check Table</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center">
                        <DataTable columns={columns} data={data} />
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
export default Home
