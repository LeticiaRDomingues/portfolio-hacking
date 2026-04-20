'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navlink from './NavLink'

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-zinc-950/90 backdrop-blur-md">
            <div className="mx-auto max-w-8xl px-4 sm:px-6 md:px-10 lg:px-16">
                <div className="flex h-20 items-center justify-between">
                    <Link
                        href="/"
                        className="whitespace-nowrap text-2xl font-bold tracking-tight text-white"
                    >
                        LetzLab404
                    </Link>

                    {/* Desktop menu */}
                    <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                        <Navlink href="/projects" label="Projects" />
                        <Navlink href="/challenges" label="Challenges" />
                        <Navlink href="/about" label="About" />
                        <Navlink href="/contact" label="Contact" />
                    </nav>

                    {/* Mobile button */}
                    <button
                        type="button"
                        onClick={() => setOpen((prev) => !prev)}
                        className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-white transition-colors hover:bg-white/10"
                        aria-label={open ? 'Close menu' : 'Open menu'}
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                    >
                        <span className="text-2xl leading-none">{open ? '✕' : '☰'}</span>
                    </button>
                </div>
            </div>

            {/* Mobile dropdown */}
            {open && (
                <div
                    id="mobile-menu"
                    className="md:hidden border-t border-white/10 bg-zinc-950/95"
                >
                    <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
                        <div className="flex flex-col gap-2">
                            <Navlink href="/projects" label="Projects" />
                            <Navlink href="/challenges" label="Challenges" />
                            <Navlink href="/about" label="About" />
                            <Navlink href="/contact" label="Contact" />
                        </div>
                    </nav>
                </div>
            )}
        </header>
    )
}