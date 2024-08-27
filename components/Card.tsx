import React, { ReactElement } from 'react'

const Card = ({
    children,
}: Readonly<{
    children: React.ReactNode
}>) => {
    return <div className="bg-colorBgSecondary p-5 rounded-2xl basis-80 flex place-items-center">{children}</div>
}

export default Card
