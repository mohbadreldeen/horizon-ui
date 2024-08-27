import Image from 'next/image'
import LogoIcon from '@/public/icons/LogoIcon.svg'
export default function Logo({ context }: contextPros) {
    let logoClasses = 'ml-2 max-xl:ml-0'
    logoClasses += context === 'mobile' ? '' : ' max-xl:hidden'

    return (
        <div className="flex align-middle justify-center pt-[3.5em] pb-[3.5em] max-xl:pt-5 max-xl:pb-5">
            <Image src="/icons/LogoIcon.svg" alt="Logo" width={30} height={26} />
            <Image className={logoClasses} src="/Logo.svg" alt="Logo" width={181} height={26} />
        </div>
    )
}
