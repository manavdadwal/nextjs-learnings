import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const navLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/coaches', label: 'Coaches' },
    { href: '/news', label: 'News' },
    { href: '/matches', label: 'Matches' },
    { href: '/events', label: 'Events' },
    { href: '/faqs', label: 'FAQs' },
    { href: '/programs', label: 'Programs' },
    { href: '/amenities', label: 'Amenities' },
    { href: '/blogs', label: 'Blogs' },
  ]

  return (
    <footer className="relative">
      {/* Green Gradient Top Bar */}
      <div className="footer-gradient h-1" />

      {/* Main Footer Content */}
      <div className="bg-white py-10 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 mb-10 pb-8 border-b border-gray-200">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                <a className="text-gray-700 text-sm hover:text-[#B4D335] transition-colors duration-300">
                  {link.label}
                </a>
              </Link>
            ))}
          </div>

          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Logo */}
            <div>
              <div className="mb-3">
                <Image
                  src="/images/SSA-Logo 1.png"
                  alt="SSA Logo"
                  width={70}
                  height={45}
                />
              </div>
              <p className="text-[10px] text-gray-400 tracking-wider">ADOPT NURTURE DELIVER</p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-[#B4D335] font-semibold text-sm mb-4">Signature Slam Academy</h4>
              <address className="not-italic text-gray-600 text-sm space-y-3">
                <p>30 Wills Hill Road, Lovedale, NSW</p>
                <p className="flex items-center gap-2">
                  <Image src="/images/fluent_call-20-regular.svg" alt="Phone" width={16} height={16} />
                  <span>+91 5642589752</span>
                </p>
                <p className="flex items-center gap-2">
                  <Image src="/images/iconamoon_email-thin.svg" alt="Email" width={16} height={16} />
                  <span>info@ssagroup.com</span>
                </p>
              </address>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-[#B4D335] font-semibold text-sm mb-4">Connect with us</h4>
              <div className="flex gap-3">
                {/* Facebook */}
                <a href="#" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#B4D335] transition-all duration-300">
                  <Image src="/images/facebook.png" alt="Facebook" width={16} height={16} />
                </a>
                {/* X/Twitter */}
                <a href="#" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#B4D335] transition-all duration-300">
                  <Image src="/images/ri_twitter-x-fill.png" alt="Twitter" width={16} height={16} />
                </a>
                {/* Instagram */}
                <a href="#" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#B4D335] transition-all duration-300">
                  <Image src="/images/iconoir_instagram.png" alt="Instagram" width={16} height={16} />
                </a>
                {/* YouTube */}
                <a href="#" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#B4D335] transition-all duration-300">
                  <Image src="/images/iconoir_youtube.png" alt="YouTube" width={16} height={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative py-4 px-6 overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/Rectangle 36.png"
          alt=""
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-white gap-3">
          <Link href="/terms">
            <a className="hover:text-[#B4D335]">Terms And Condition</a>
          </Link>
          <p>© 2023 All Rights Reserved www.signatureslampacademy.com</p>
          <Link href="/privacy">
            <a className="hover:text-[#B4D335]">Privacy Policy</a>
          </Link>
        </div>
      </div>
    </footer>
  )
}
