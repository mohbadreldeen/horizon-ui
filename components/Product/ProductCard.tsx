import React from 'react'
// import Data from './Data'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ProductProps } from './Types'
import { motion } from 'framer-motion'
const ProductCard = ({ product }: { product: ProductProps }) => {
    return (
        <motion.div layout animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }}>
            <Card className="bg-secondary-background border-0 rounded-2xl">
                <CardContent className="flex items-center justify-center h-full">
                    <div>
                        <img className="rounded-2xl my-5" src={product.image} alt={product.name} />
                        <div className="">
                            <h3 className='mb-0'>{product.name}</h3>
                            <span className="text-secondary-foreground">{product.author}</span>

                            <div className="flex justify-between items-center mt-5">
                                <span className="text-link-foreground font-bold text-md">Current Bid: {product.currentBid ? `${product.currentBid} ETH` : '0 ETH'} </span>

                                <Button className="rounded-full px-7">Place Bid</Button>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}

export default ProductCard
