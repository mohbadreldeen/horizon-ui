import Image from 'next/image'
import LogoIcon from '@/public/icons/LogoIcon.svg'
export default function Example() {
    return (
        <div className="flex align-middle justify-center pt-[3.5em] pb-[3.5em] max-xl:pt-5 max-xl:pb-5">
            <Image src="/icons/LogoIcon.svg" alt="Logo" width={30} height={26} />
            <Image className="max-xl:hidden ml-2 max-xl:ml-0" src="/Logo.svg" alt="Logo" width={181} height={26} />
        </div>
    )
}
