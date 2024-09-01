import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, ChartNoAxesColumn, Ellipsis } from 'lucide-react'
import ValueIndex from '@/components/ValueIndex'
import LineChart from '@/components/charts/LineChart'

const TotalSpend = () => {
    return (
        <Card className="bg-secondary-background border-0 rounded-2xl h-full place-content-between flex flex-col">
            <CardHeader className="flex flex-row justify-between p-5">
                <Button className="btn">
                    <Calendar className="mr-2 h-4 w-4" />
                    Login with Email
                </Button>
                <Button className="btn">
                    <ChartNoAxesColumn className="text-link-foreground h-5 w-5 stroke-2" />
                </Button>
            </CardHeader>
            <CardContent className="flex items-center max-lg:flex-col">
                <div className="basis-[150px] flex flex-col gap-2">
                    <div className="text-3xl font-bold">$37.5K</div>
                    <div className="flex gap-2">
                        <span className="text-secondary-foreground">Total Spend</span>
                        <ValueIndex direction="up" value="30%" />
                    </div>
                </div>
                <LineChart className="flex-grow w-full" />
            </CardContent>
        </Card>
    )
}

export default TotalSpend
