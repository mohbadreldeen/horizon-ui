import React from 'react'
import { historyItemProps } from './Types'
import { getTimeAgo } from '@/lib/utils'

import EthereumIcon from '@/public/icons/ethereum.svg'
const HistoryItem = ({ item }: { item: historyItemProps }) => {
    const imageUrl = item.image
    return (
        <div className="flex gap-5 py-5 items-center place-content-between">
            <div className="flex items-center gap-5">
                <div className={`w-[64px] h-[64px] bg-cover rounded-xl`} style={{ backgroundImage: `url(${imageUrl})` }}></div>
                <div className="flex flex-col gap">
                    <span className="font-bold text-lg ">{item.name}</span>
                    <span className="text-secondary-foreground">{item.author}</span>
                </div>
            </div>
            <div className="font-bold text-lg flex gap-3">
                <EthereumIcon width="16" className="fill-primary-foreground" /> {item.price}
            </div>
            <div className="text-secondary-foreground">{getTimeAgo(item.timeStamp)}</div>
        </div>
    )
}
export default HistoryItem
