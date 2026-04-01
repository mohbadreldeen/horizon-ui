'use client'
import React from 'react'
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })
import data from '@/data/PieChartData'
import options from '@/config/PieChartConfig'
const PieChart = ({
    className,
}: Readonly<{
    className?: string
}>) => {
    return (
        <div className={`pie-charts ${className}`}>
            <Chart options={options as any} series={data} type="pie" height="500" />
        </div>
    )
}

export default PieChart
