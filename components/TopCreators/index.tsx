import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { DataTable } from '@/components/PaymentsTable/DataTable'
import { columns } from './Columns'
import topCreatorsData from './Data'
import { creatorProps } from './Types'

const TopCreators = () => {
    return (
        <Card className="bg-secondary-background border-0 rounded-2xl">
            <CardHeader className="flex flex-row justify-between p-5">
                <CardTitle>Top Creators</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center">
                <DataTable<creatorProps, string> columns={columns} data={topCreatorsData} />
            </CardContent>
        </Card>
    )
}

export default TopCreators
