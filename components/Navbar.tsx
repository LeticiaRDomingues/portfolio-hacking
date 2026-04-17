import Link from 'next/link'
import Navlink from "./NavLink";

export default function Navbar() {
    return (
        <header className='fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10'>
            <div className='mx-auto flex items-center justify-between px-16 py-4'>
                <div>
                    <Link className='text-2xl font-bold tracking-tight text-white' href="/">LetzLab404</Link>
                </div>

                <div className='flex items-center gap-10'>
                    <Navlink href="/projects" label="Projects" />
                    <Navlink href="/challenges" label="Challenges" />
                    <Navlink href="/about" label="About" />
                    <Navlink href="/contact" label="Contact" />
                </div>
            </div>
        </header>
    )
}