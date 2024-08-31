'use client'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'
import { DividerHorizontalIcon, CheckIcon } from '@radix-ui/react-icons'

import { cn } from '@/lib/utils'

const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>>(({ className, ...props }, ref) => {
    console.log('props', props)
    return (
        <CheckboxPrimitive.Root
            ref={ref}
            className={cn(
                'grid place-content-center peer h-6 w-6 shrink-0 rounded-md border-2 data-[state=checked]:border-transparent font-bold border-textSecondary-100 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-colorPrimary data-[state=checked]:text-white',
                className
            )}
            {...props}
        >
            <CheckboxPrimitive.Indicator className={cn('grid place-content-center ')}>
                {props.checked !== 'indeterminate' && <CheckIcon className="h-5 w-5" />}
                {props.checked === 'indeterminate' && <DividerHorizontalIcon className="h-5 w-5" />}
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    )
})
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
