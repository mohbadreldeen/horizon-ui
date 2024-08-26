import Image from 'next/image'

export default function Example() {
    return (
        <div className="flex align-middle justify-center pt-[3.5em] pb-[3.5em]">
            <Image src="/Logo.svg" alt="Logo" width={181} height={26} />
        </div>
    )
}
