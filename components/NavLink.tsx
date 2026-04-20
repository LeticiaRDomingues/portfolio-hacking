import Link from 'next/link'

interface MyNavlinkProps {
    href: string
    label: string
}

export default function Navlink({ href, label }: MyNavlinkProps) {
    return (
        <Link
            href={href}
            className="
        inline-flex items-center justify-center
        px-3 py-2
        rounded-lg
        text-base text-white
        transition-all duration-200
        hover:scale-105 hover:bg-gray-800
      "
        >
            {label}
        </Link>
    )
}