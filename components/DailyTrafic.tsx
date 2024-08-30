import React from 'react'
import DailyTraficChart from '@/components/charts/DailyTraficChart'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import ValueIndex from './ValueIndex'
const DailyTrafic = () => {
    return (
        <Card className="bg-colorBgSecondary border-0 rounded-2xl h-full place-content-between flex flex-col">
            <CardHeader className="flex justify-between flex-row items-start">
                <div>
                    <CardTitle className="text-textSecondary-100 text-sm">Daily Trafic</CardTitle>
                    <div className="flex items-end gap-1">
                        <span className="text-4xl font-bold text-textPrimary">2.579</span>
                        <span className="text-textSecondary-100">Visitors</span>
                    </div>
                </div>

                <ValueIndex direction="down" value="2.45%" />
            </CardHeader>

            <DailyTraficChart />
        </Card>
    )
}

export default DailyTrafic
