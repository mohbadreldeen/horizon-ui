import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import PieChart from '@/components/charts/PieChart'
import { Button } from '@/components/ui/button'
import { Calendar, ChartNoAxesColumn, Ellipsis } from 'lucide-react'
const PieChartCard = () => {
    return (
        <Card className="bg-colorBgSecondary border-0 rounded-2xl h-full place-content-between flex flex-col">
            <CardHeader className="flex flex-row justify-between p-5">
                <CardTitle>Your Pie Chart</CardTitle>
                <Button className="btn">
                    <ChartNoAxesColumn className="text-colorPrimary h-5 w-5 stroke-2" />
                </Button>
            </CardHeader>
            <CardContent className="flex items-center justify-center max-lg:flex-col">
                <PieChart />
            </CardContent>
        </Card>
    )
}

export default PieChartCard
