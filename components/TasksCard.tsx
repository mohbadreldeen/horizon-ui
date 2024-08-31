'use client'
import React, { useState } from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Ellipsis } from 'lucide-react'

type taskProps = {
    id: string
    name: string
    checked: boolean
}
type tasksProps = {
    [key: string]: taskProps
}

const tasksData: tasksProps = {
    '12345fdqwes': {
        id: '12345fdqwes',
        name: 'Landing Page Design',
        checked: false,
    },
    '12345fdqwe': {
        id: '12345fdqwe',
        name: 'Dashboard Builder',
        checked: false,
    },
    '12345fdq': {
        id: '12345fdq',
        name: 'Mobile App Design',
        checked: false,
    },
    '12345fd': {
        id: '12345fd',
        name: 'Illustrations',
        checked: false,
    },
    '12345': {
        id: '12345',
        name: 'Promotional LP',
        checked: false,
    },
}
const TasksCard = () => {
    const [tasks, setTasks] = useState<tasksProps>(tasksData)
    const isSomeChecked = Object.values(tasks).some((task) => task.checked)
    return (
        <Card className="bg-colorBgSecondary border-0 rounded-2xl h-full place-content-between flex flex-col">
            <CardHeader className="flex flex-row justify-between p-5">
                <CardTitle className="flex gap-2 items-center">
                    <Checkbox
                        onCheckedChange={(value) => {
                            Object.values(tasks).map((task) => {
                                tasks[task.id].checked = !!value
                            })
                            setTasks({ ...tasks })
                        }}
                        checked={Object.values(tasks).every((task) => task.checked) || (isSomeChecked && 'indeterminate')}
                        aria-label="Select Task"
                    />
                    Tasks
                </CardTitle>
                <DropdownMenu>
                    <DropdownMenuTrigger className="bg-colorBgPrimary hover:bg-colorBgPrimary-100 p-2 rounded-md mt-0">
                        <Ellipsis className="text-colorPrimary h-5 w-5 stroke-2" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-colorBgSecondary border-0">
                        <DropdownMenuItem className="text-textSecondary-100 cursor-pointer">Option 1</DropdownMenuItem>
                        <DropdownMenuItem className="text-textSecondary-100 cursor-pointer">Option 1</DropdownMenuItem>
                        <DropdownMenuItem className="text-textSecondary-100 cursor-pointer">Option 1</DropdownMenuItem>
                        <DropdownMenuItem className="text-textSecondary-100 cursor-pointer">Option 1</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
                {Object.values(tasks).map((task) => (
                    <div key={task.id} className="flex gap-2 items-center">
                        <Checkbox
                            aria-label="Select Task"
                            onCheckedChange={() => {
                                tasks[task.id].checked = !task.checked
                                setTasks({ ...tasks })
                            }}
                            checked={task.checked}
                        />
                        {task.name}
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}

export default TasksCard
