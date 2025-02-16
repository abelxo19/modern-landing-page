'use client'

import Link from 'next/link'
import Image from 'next/image'
import ShinyButton from '@/app/components/shiny_button'

export default function Header() {
  

  return (
    <header className="fixed w-full z-30  bg-white shadow-md  bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/"><Image src='/logo_lp.png' alt='Logo' width={50} height={50} /></Link>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-600 hover:text-slate-900">Home</Link>
            <Link href="#features" className="text-gray-600 hover:text-slate-900">Features</Link>
            <Link href="#pricing" className="text-gray-600 hover:text-slate-900">Pricing</Link>
            <Link href="#contact" className="text-gray-600 hover:text-slate-900">Contact</Link>
          </nav>
          <ShinyButton text="Get Started"></ShinyButton>
        </div>
      </div>
    </header>
  )
}

