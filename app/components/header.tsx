'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

export default function Header() {
  

  return (
    <header className="fixed w-full z-30  bg-white shadow-md  bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/"><Image src='/logo_lp.png' alt='Logo' width={50} height={50} /></Link>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-600 hover:text-[#232e44]">Home</Link>
            <Link href="#about" className="text-gray-600 hover:text-[#232e44]">About</Link>
            <Link href="#pricing" className="text-gray-600 hover:text-[#232e44]">Pricing</Link>
            <Link href="#contact" className="text-gray-600 hover:text-[#232e44]">Contact</Link>
          </nav>
          <Button className='bg-[#232e44]'>Get Started</Button>
        </div>
      </div>
    </header>
  )
}

