import React, { ReactElement } from 'react'

const Card = ({
    className,
    children,
}: Readonly<{
    className?: string
    children: React.ReactNode
}>) => {
    return <div className={`bg-colorBgSecondary p-5 rounded-2xl basis-80 place-items-center ${className}`}>{children}</div>
}

export default Card
