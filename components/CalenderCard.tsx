'use client'
import React from 'react'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const CalenderCard = () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return (
        <Card className="bg-secondary-background border-0 rounded-2xl">
            <CardContent className="flex items-center justify-center h-full">
                <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border-0  " />
            </CardContent>
        </Card>
    )
}

export default CalenderCard
