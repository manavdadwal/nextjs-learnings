import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center">
              <Image 
                src="/images/SSA-Logo03 1.png" 
                alt="SSA Logo" 
                width={60} 
                height={40}
                className="object-contain"
              />
            </a>
          </Link>
          
          {/* Desktop Navigation - Hidden on hero, shown on scroll */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Navigation links would go here if needed */}
          </div>
          
          {/* Register Button */}
          <Link href="#register">
            <a className="hidden md:inline-flex px-6 py-2.5 bg-transparent border border-white text-white rounded font-body text-sm hover:bg-white hover:text-gray-900 transition-all duration-300">
              Register Now
            </a>
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-white hover:text-ssa-lime"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white/95 backdrop-blur-sm rounded-lg">
            <div className="flex flex-col space-y-4 px-4">
              <Link href="#about"><a className="text-gray-800 hover:text-ssa-lime">About Us</a></Link>
              <Link href="#programs"><a className="text-gray-800 hover:text-ssa-lime">Programs</a></Link>
              <Link href="#facilities"><a className="text-gray-800 hover:text-ssa-lime">Facilities</a></Link>
              <Link href="#contact"><a className="text-gray-800 hover:text-ssa-lime">Contact</a></Link>
              <Link href="#register">
                <a className="inline-flex justify-center px-6 py-2.5 bg-ssa-lime text-white rounded font-body text-sm">
                  Register Now
                </a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
