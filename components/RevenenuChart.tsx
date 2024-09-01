import StackedColumns from '@/components/charts/StackedColumns'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

import { Button } from '@/components/ui/button'
import { Calendar, ChartNoAxesColumn, Ellipsis } from 'lucide-react'
const RevenenuChart = () => {
    return (
        <Card className="bg-secondary-background border-0 rounded-2xl h-full place-content-between flex flex-col">
            <CardHeader className="flex flex-row justify-between p-5">
                <CardTitle>Weekly Revenue</CardTitle>
                <Button className="btn">
                    <ChartNoAxesColumn className="text-link-foreground h-5 w-5 stroke-2" />
                </Button>
            </CardHeader>
            <CardContent>
                <StackedColumns />
            </CardContent>
        </Card>
    )
}

export default RevenenuChart
