import { Button } from '@/components/ui/button'

const Marketplace = () => {
    return (
        <div className="p-6 pt-10">
            <div className="grid grid-cols-3 gap-5">
                <div className="col-span-3 md:col-span-2">
                    <div className=" p-10 rounded-2xl bg-primary lg:bg-[url('/hero.png')] bg-cover bg-center bg-no-repeat">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div>
                                <h1 className="text-white text-4xl">Discover, collect, and sell extraordinary NFTs</h1>
                                <p className="text-white">Enter in this creative world. Discover now the latest NFTs or start creating your own!</p>
                                <div className="flex gap-6 my-5">
                                    <Button className="btn">Discover now</Button>
                                    <Button className="btn">Watch video</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    Grid Content
                </div>
                <div className="">Sidebar</div>
            </div>
        </div>
    )
}

export default Marketplace
