import { CheckData, columns } from '@/components/PaymentsTable/Columns'
import { DataTable } from '@/components/PaymentsTable/DataTable'
import checkTableData from '@/data/CheckDataTable'
import StackedColumns from '@/components/charts/StackedColumns'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

import { Button } from '@/components/ui/button'
import { Calendar, ChartNoAxesColumn, Ellipsis } from 'lucide-react'
const RevenenuChart = () => {
    return (
        <Card className="bg-colorBgSecondary border-0 rounded-2xl h-full place-content-between flex flex-col">
            <CardHeader className="flex flex-row justify-between p-5">
                <CardTitle>Weekly Revenue</CardTitle>
                <Button className="btn">
                    <ChartNoAxesColumn className="text-colorPrimary h-5 w-5 stroke-2" />
                </Button>
            </CardHeader>
            <CardContent>
                <StackedColumns />
            </CardContent>
        </Card>
    )
}

export default RevenenuChart
