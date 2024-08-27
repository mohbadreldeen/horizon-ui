import Card from '@/components/Card'
import React from 'react'
import BarsIcon from '@/public/icons/bars.svg'
const InfoCard = () => {
    return (
        <Card>
            <div className="flex flex-row items-center gap-5">
                <div className="grid place-content-center bg-colorBgPrimary rounded-full w-12 h-12 p-7">
                    <BarsIcon className="fill-colorPrimary" width="32px" height="32px" />
                </div>

                <div className="flex flex-col gap-1">
                    <div className="text-textSecondary ">Earnings</div>
                    <div className="text-textPrimary text-3xl font-bold">$350.4</div>
                    <div className="text-textSecondary ">Since Last Month</div>
                </div>
            </div>
        </Card>
    )
}

export default InfoCard
