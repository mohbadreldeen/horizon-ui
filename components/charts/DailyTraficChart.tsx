'use client'
import React from 'react'
import Chart from 'react-apexcharts'
import data from '@/data/DailyTraficData'
import options from '@/config/StackedColumns'
const LineChart = ({
    className,
}: Readonly<{
    className?: string
}>) => {
    return (
        <div className={className}>
            <Chart options={options} series={data} type="bar" height="300" />
        </div>
    )
}

export default LineChart
