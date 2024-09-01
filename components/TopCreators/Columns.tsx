'use client'
import { ColumnDef } from '@tanstack/react-table'
import { Checkbox } from '@/components/ui/checkbox'
import { creatorProps } from './Types'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Progress } from '@/components/ui/progress'

export const columns: ColumnDef<creatorProps>[] = [
    {
        accessorKey: 'name',
        header: 'Name',
        cell: ({ row, getValue }) => {
            return (
                <div className="flex gap-2 items-center">
                    <Avatar>
                        <AvatarImage src={row.original.avatar} />
                        <AvatarFallback>Avatar</AvatarFallback>
                    </Avatar>
                    <span>{getValue() as string}</span>
                </div>
            )
        },
    },
    {
        accessorKey: 'artworks',
        header: 'Artworks',
        cell: ({ getValue }) => {
            return <span className="text-secondary-foreground-100">{getValue() as number}</span>
        },
    },
    {
        accessorKey: 'rate',
        header: 'Rating',
        cell: ({ row, cell, getValue }) => {
            return <Progress value={getValue() as number} />
        },
    },
]
