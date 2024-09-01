import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { historyItemProps } from './Types'
import data from './Data'
import HistoryItem from './HistoryItem'
const HistoryList = ({ className }: { className: string }) => {
    return (
        <Card className={`bg-secondary-background border-0 rounded-2xl h-full flex flex-col ${className}`}>
            <CardHeader className="flex flex-row justify-between p-5">
                <CardTitle>History</CardTitle>
                <Button className="btn text-primary">See All</Button>
            </CardHeader>
            <CardContent>
                {data.map((item: historyItemProps, index: number) => (
                    <HistoryItem key={index} item={item} />
                ))}
            </CardContent>
        </Card>
    )
}

export default HistoryList
