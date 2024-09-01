import { CheckData, columns } from '@/components/PaymentsTable/Columns'
import { DataTable } from '@/components/PaymentsTable/DataTable'
import checkTableData from '@/data/CheckTableData'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Ellipsis } from 'lucide-react'
import { Button } from '@/components/ui/button'
const CheckTable = () => {
    return (
        <Card className="bg-secondary-background border-0 rounded-2xl">
            <CardHeader className="flex flex-row justify-between p-5">
                <CardTitle>Check Table</CardTitle>
                <DropdownMenu>
                    <DropdownMenuTrigger className="bg-primary-background hover:bg-primary-background-100 p-2 rounded-md ">
                        <Ellipsis className="text-link-foreground h-5 w-5 stroke-2" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-secondary-background border-0">
                        <DropdownMenuItem className="text-secondary-foreground-100 cursor-pointer">Option 1</DropdownMenuItem>
                        <DropdownMenuItem className="text-secondary-foreground-100 cursor-pointer">Option 1</DropdownMenuItem>
                        <DropdownMenuItem className="text-secondary-foreground-100 cursor-pointer">Option 1</DropdownMenuItem>
                        <DropdownMenuItem className="text-secondary-foreground-100 cursor-pointer">Option 1</DropdownMenuItem>
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
