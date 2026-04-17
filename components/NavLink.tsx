import Link from 'next/link'

interface MyNavlinkProps {
    href: string;
    label: string;
}

export default function Navlink({ href, label }: MyNavlinkProps) {
    return (
        <Link className='p-2 rounded-lg text-base text-white hover:scale-110 hover:bg-gray-800' href={href}>{label}</Link>
    )
}