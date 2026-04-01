'use client'
import React from 'react'
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })
import data from '@/data/LineCharts'
import options from '@/config/LineChart'
const LineChart = ({
    className,
}: Readonly<{
    className?: string
}>) => {
    return (
        <div className={className}>
            <Chart options={options as any} series={data} type="line" height="200" />
        </div>
    )
}

export default LineChart
