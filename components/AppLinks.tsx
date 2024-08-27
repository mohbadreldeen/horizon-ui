import HomeIcon from '@/public/icons/home.svg'
import ShoppingIcon from '@/public/icons/shoping.svg'
import LockIcon from '@/public/icons/lock.svg'
import MasonryIcon from '@/public/icons/masonry.svg'
import PsersonIcon from '@/public/icons/person.svg'
import BarsIcon from '@/public/icons/bars.svg'

type linkOptions = {
    name: string
    Icon: ({ className }: { className: string }) => React.ReactElement
    route: string
    links?: linkOptions[]
}

const links: linkOptions[] = [
    {
        name: 'Dashboard',
        Icon: ({ className }) => <HomeIcon className={className} width="24" height="24" />,
        route: '/',
    },
    {
        name: 'NFT Marketplace',
        Icon: ({ className }) => <ShoppingIcon className={className} width="24" height="24" />,
        route: '/marketplace',
    },
    {
        name: 'Tables',
        Icon: ({ className }) => <BarsIcon className={className} width="24" height="24" />,
        route: '/marketplace',
    },
    {
        name: 'Kanban',
        Icon: ({ className }) => <MasonryIcon className={className} width="24" height="24" />,
        route: '/kanban',
    },
    {
        name: 'Profile',
        Icon: ({ className }) => <PsersonIcon className={className} width="24" height="24" />,
        route: '/profile',
    },
    {
        name: 'Sign In',
        Icon: ({ className }) => <LockIcon className={className} width="24" height="24" />,
        route: '/singin',
    },
]

export { links }
