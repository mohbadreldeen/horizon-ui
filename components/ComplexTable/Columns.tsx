'use client'
import { ColumnDef } from '@tanstack/react-table'
import { CircleX, CircleAlert, CircleCheck } from 'lucide-react'
import { Progress } from '@/components/ui/progress'

export type CheckData = {
    id: string
    quantity: number
    name: string
    progress: number
    date: string
}

export const columns: ColumnDef<CheckData>[] = [
    // {
    //     id: 'select',
    //     header: ({ table }) => (
    //         <Checkbox
    //             checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')}
    //             onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
    //             aria-label="Select all"
    //         />
    //     ),
    //     cell: ({ row }) => <Checkbox checked={row.getIsSelected()} onCheckedChange={(value) => row.toggleSelected(!!value)} aria-label="Select row" />,
    //     enableSorting: false,
    //     enableHiding: false,
    // },
    {
        accessorKey: 'name',
        header: 'Name',
    },
    {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row, cell, getValue }) => {
            const value = (getValue() as string).toLowerCase()

            switch (value) {
                case 'approved':
                    return (
                        <div className="flex gap-1">
                            <CircleCheck className="stroke-green" />
                            {getValue() as string}
                        </div>
                    )
                    break
                case 'denied':
                    return (
                        <div className="flex gap-1">
                            <CircleX className="stroke-red" />
                            {getValue() as string}
                        </div>
                    )
                    break
                case 'error':
                    return (
                        <div className="flex gap-1">
                            <CircleAlert className="stroke-yellow" />
                            {getValue() as string}
                        </div>
                    )
                    break

                default:
                    return <>{getValue()}</>
                    break
            }
        },
    },
    {
        accessorKey: 'date',
        header: 'Date',
    },
    {
        accessorKey: 'progress',
        header: 'Progress',
        cell: ({ row, cell, getValue }) => {
            return <Progress value={getValue() as number} />
        },
    },
]
