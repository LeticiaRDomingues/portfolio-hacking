import Link from 'next/link'

interface MyNavlinkProps{
    href: string;
    label: string;
}

export default function Navlink({ href, label}: MyNavlinkProps){
    return(          
         <Link className='p-3 text-lg text-white hover:scale-110 hover:bg-gray-800 rounded-lg' href={href}>{label}</Link>
    )
}