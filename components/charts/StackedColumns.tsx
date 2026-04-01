'use client'
import React from 'react'
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })
import data from '@/data/StackedColumns'
import options from '@/config/StackedColumns'
const LineChart = ({
    className,
}: Readonly<{
    className?: string
}>) => {
    return (
        <div className={className}>
            <Chart options={options as any} series={data} type="bar" height="200" />
        </div>
    )
}

export default LineChart
