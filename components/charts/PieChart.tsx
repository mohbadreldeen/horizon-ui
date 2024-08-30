'use client'
import React from 'react'
import Chart from 'react-apexcharts'
import data from '@/data/PieChartData'
import options from '@/config/PieChartConfig'
const PieChart = ({
    className,
}: Readonly<{
    className?: string
}>) => {
    return (
        <div className={`pie-charts ${className}`}>
            <Chart options={options} series={data} type="pie" height="500" />
        </div>
    )
}

export default PieChart
