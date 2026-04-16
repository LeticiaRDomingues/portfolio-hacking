import Link from 'next/link'

interface MyNavlinkProps{
    href: string;
    label: string;
}

export default function Navlink({ href, label}: MyNavlinkProps){
    return(          
         <Link className='text-lg text-white hover:text-sky-200 hover:bg-blue-950 p-8 pt-3 pb-3 rounded-lg' href={href}>{label}</Link>
    )
}