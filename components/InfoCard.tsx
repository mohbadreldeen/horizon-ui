import Card from '@/components/Card'
import React from 'react'

const InfoCard = ({
    header,
    content,
    footer,
    icon,
}: Readonly<{
    header: string
    content: string
    icon?: React.ReactNode
    footer?: React.ReactNode
}>) => {
    return (
        <Card>
            <div className="flex flex-row items-center gap-5">
                {icon && (
                    <div className="grid place-content-center bg-colorBgPrimary rounded-full w-12 h-12 p-7">
                        {icon}
                        {/* <BarsIcon className="fill-colorPrimary" width="32px" height="32px" /> */}
                    </div>
                )}
                <div className="flex flex-col gap-1">
                    <div className="text-textSecondary-100 ">{header}</div>
                    <div className="text-textPrimary text-3xl font-bold">{content}</div>
                    {footer && <div className="text-textSecondary-100 ">{footer}</div>}
                </div>
            </div>
        </Card>
    )
}

export default InfoCard
