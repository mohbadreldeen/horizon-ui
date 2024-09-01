import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import PieChart from '@/components/charts/PieChart'
import { Button } from '@/components/ui/button'
import { Calendar, ChartNoAxesColumn, Ellipsis } from 'lucide-react'
const PieChartCard = () => {
    return (
        <Card className="bg-secondary-background border-0 rounded-2xl h-full place-content-between flex flex-col">
            <CardHeader className="flex flex-row justify-between p-5">
                <CardTitle>Your Pie Chart</CardTitle>
                <Button className="bg-primary-background hover:bg-primary-background-100">
                    <ChartNoAxesColumn className="text-link-foreground h-5 w-5 stroke-2" />
                </Button>
            </CardHeader>
            <CardContent className="flex items-center justify-center max-lg:flex-col">
                <PieChart />
            </CardContent>
        </Card>
    )
}

export default PieChartCard
