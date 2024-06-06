'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

import { navLinks } from '../constants'

const Navbar = () => {
    const pathname = usePathname();
  return (
    <header className="mb-20">
        <nav className="font-regular flex items-center gap-4">
            {
                navLinks.map(link => (
                    <Link key={link.name} href={link.path} className={`${link.path === pathname ? "font-semibold" : ""}`}>
                        {link.name}
                    </Link>
                ))
            }
        </nav>
    </header>
  )
}

export default Navbar