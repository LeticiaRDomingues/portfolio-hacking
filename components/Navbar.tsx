import Link from 'next/link'
import Navlink from "./NavLink";

export default function Navbar() {
    return(
        <header className='bg-black'>
            <div className='flex justify-between items-center pl-10 p-6 mx-auto'>
                <div>
                    <Link className='text-white text-2xl font-bold' href="/">LetzLab404</Link>
                </div>
                
                <div className='pr-15'>
                    <Navlink href="/projects" label="Projects" />
                    <Navlink href="/about" label="About" />
                    <Navlink href="/contact" label="Contact" />
                </div>
            </div>
        </header>
    )
}