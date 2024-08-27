import ArrowUp from '@/public/icons/small-arrow-up.svg'
import ArrowDown from '@/public/icons/small-arrow-down.svg'
const ValueIndex = ({
    direction,
    value,
    label,
}: Readonly<{
    direction: 'up' | 'down'
    value: string
    label?: string
}>) => {
    return (
        <div className="flex gap-1">
            <span className="flex flex-row gap-1">
                {direction === 'up' ? <ArrowUp className="fill-green" width="10px" /> : <ArrowDown className="fill-red" width="10px" />}
                <span className={direction === 'up' ? 'text-green' : 'text-red'}>{direction === 'up' ? `+${value}` : `-${value}`}</span>
            </span>
            {label && <span>{label}</span>}
        </div>
    )
}

export default ValueIndex
