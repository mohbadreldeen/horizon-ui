'use client'
import React from 'react'
import Chart from 'react-apexcharts'
import data from '@/data/LineCharts'
import options from '@/config/LineChart'
const LineChart = ({
    className,
}: Readonly<{
    className?: string
}>) => {
    return (
        <div className={className}>
            <Chart options={options} series={data} type="line" />
        </div>
    )
}

export default LineChart
