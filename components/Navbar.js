import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
  const router = useRouter()
  
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ]
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center space-x-2 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-orange-400 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <span className="font-display font-bold text-white text-lg">K</span>
              </div>
              <span className="font-display text-xl font-semibold text-white">
                KWM<span className="text-orange-400">.</span>
              </span>
            </a>
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className={`relative font-body text-sm tracking-wide transition-colors duration-300 ${
                  router.pathname === link.href 
                    ? 'text-orange-400' 
                    : 'text-gray-300 hover:text-white'
                }`}>
                  {link.label}
                  {router.pathname === link.href && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-orange-400 rounded-full" />
                  )}
                </a>
              </Link>
            ))}
          </div>
          
          {/* CTA Button */}
          <Link href="/contact">
            <a className="hidden md:inline-flex px-5 py-2.5 bg-gradient-to-r from-purple-600 to-orange-500 rounded-full font-body font-semibold text-sm text-white hover:shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-0.5 transition-all duration-300">
              Get Started
            </a>
          </Link>
          
          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-gray-300 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

