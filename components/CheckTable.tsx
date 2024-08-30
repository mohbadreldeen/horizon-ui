import { CheckData, columns } from '@/components/PaymentsTable/Columns'
import { DataTable } from '@/components/PaymentsTable/DataTable'
import checkTableData from '@/data/CheckDataTable'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Ellipsis } from 'lucide-react'
import { Button } from '@/components/ui/button'
const CheckTable = () => {
    return (
        <Card className="bg-colorBgSecondary border-0 rounded-2xl">
            <CardHeader className="flex flex-row justify-between p-5">
                <CardTitle>Check Table</CardTitle>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button className="btn">
                            <Ellipsis className="text-colorPrimary h-5 w-5 stroke-2" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-colorBgSecondary border-0">
                        <DropdownMenuItem className="text-textSecondary-100 cursor-pointer">Option 1</DropdownMenuItem>
                        <DropdownMenuItem className="text-textSecondary-100 cursor-pointer">Option 1</DropdownMenuItem>
                        <DropdownMenuItem className="text-textSecondary-100 cursor-pointer">Option 1</DropdownMenuItem>
                        <DropdownMenuItem className="text-textSecondary-100 cursor-pointer">Option 1</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </CardHeader>
            <CardContent className="flex items-center">
                <DataTable columns={columns} data={checkTableData} />
            </CardContent>
        </Card>
    )
}

export default CheckTable
