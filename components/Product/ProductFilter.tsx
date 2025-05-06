'use client'
import { useState } from 'react'
import Data from './Data'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import ProductCard from './ProductCard'
import { motion, AnimatePresence } from 'framer-motion'

const ProductFilter = () => {
    const [filter, setFilter] = useState(0)
    return (
        <>
            <div className="flex fles-row justify-between items-center m-5">
                <h2>Trending NFTs</h2>
                <div className="flex gap-5">
                    <Button variant={filter === 0 ? `default` : `secondary`} className="rounded-full px-7" onClick={() => setFilter(0)}>
                        All
                    </Button>
                    <Button variant={filter === 1 ? `default` : `secondary`} className="rounded-full px-7" onClick={() => setFilter(1)}>
                        Music
                    </Button>
                    <Button variant={filter === 2 ? `default` : `secondary`} className="rounded-full px-7" onClick={() => setFilter(2)}>
                        Collectibles
                    </Button>
                    <Button variant={filter === 3 ? `default` : `secondary`} className="rounded-full px-7" onClick={() => setFilter(3)}>
                        Sports
                    </Button>
                </div>
            </div>
            <motion.div layout className="grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 gap-5">
                <AnimatePresence>
                    {Data.map((item, index) => {
                        if (filter === 0 || item.genera?.includes(filter)) return <ProductCard key={index} product={item} />
                    })}
                </AnimatePresence>
            </motion.div>
        </>
    )
}

export default ProductFilter
