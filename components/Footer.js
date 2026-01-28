import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative z-10 glass mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-orange-400 flex items-center justify-center">
                <span className="font-display font-bold text-white text-lg">K</span>
              </div>
              <span className="font-display text-xl font-semibold text-white">
                KWM<span className="text-orange-400">.</span>
              </span>
            </div>
            <p className="text-gray-400 font-body max-w-sm">
              Crafting digital experiences that inspire and innovate. 
              We transform ideas into reality.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}>
                    <a className="text-gray-400 hover:text-orange-400 font-body text-sm transition-colors duration-300">
                      {item}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 font-body text-sm">
              <li>hello@kwmstudio.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Design Street</li>
              <li>Creative City, CC 12345</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-700/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 font-body text-sm">
            © 2026 KWM Studio. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            {['Twitter', 'LinkedIn', 'Instagram'].map((social) => (
              <a 
                key={social}
                href="#" 
                className="text-gray-400 hover:text-orange-400 font-body text-sm transition-colors duration-300"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

