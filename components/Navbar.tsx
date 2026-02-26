'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-gray-900'
  }

  return (
    <nav className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-gray-800">
            Moje Portfolio
          </Link>
          
          <div className="space-x-8">
            <Link href="/" className={isActive('/')}>
              Projekty
            </Link>
            <Link href="/about" className={isActive('/about')}>
              O mnie
            </Link>
            <Link href="/contact" className={isActive('/contact')}>
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}