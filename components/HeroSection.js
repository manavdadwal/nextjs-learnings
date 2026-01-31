import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/home-page.gif"
          alt="Tennis Courts at Sunset"
          layout="fill"
          objectFit="cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* White Header Bar */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-white/95 px-6 sm:px-8 md:px-12 py-4 sm:py-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <Image 
              src="/images/SSA-Logo03 1.png" 
              alt="SSA Logo" 
              width={50} 
              height={35}
              className="object-contain"
            />
          </div>
          
          {/* Register Button */}
          <Link href="#register">
            <a className="px-6 sm:px-8 py-2 sm:py-2.5 border-2 border-[#B4D335] text-[#B4D335] text-xs sm:text-sm rounded-full hover:bg-[#B4D335] hover:text-white transition-all duration-300 font-medium">
              Register Now
            </a>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">
        {/* Subtitle */}
        <p className="text-xs tracking-[0.25em] mb-4 font-light whitespace-nowrap">
          SSA HUNTER VALLEY
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-1 tracking-wide whitespace-nowrap" style={{ fontFamily: 'Matter, sans-serif' }}>
          GROW YOUR GAME WITH THE
        </h1>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10 underline decoration-[#B4D335] decoration-2 underline-offset-8 whitespace-nowrap" style={{ fontFamily: 'Matter, sans-serif' }}>
          PROFESSIONALS
        </h1>

        {/* Tagline with Background */}
        <div className="relative mb-10 flex items-center justify-center">
          {/* Background Image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/images/Rectangle 8.png"
              alt=""
              width={400}
              height={50}
              objectFit="contain"
            />
          </div>
          <div className="relative z-10 flex items-center justify-center gap-6 px-20 py-4 whitespace-nowrap">
            <span className="text-sm tracking-[0.2em] font-light">ADOPT</span>
            <span className="text-white text-xl">•</span>
            <span className="text-sm tracking-[0.2em] font-light">NURTURE</span>
            <span className="text-white text-xl">•</span>
            <span className="text-sm tracking-[0.2em] font-light">DELIVER</span>
          </div>
        </div>

        {/* Register Button */}
        <Link href="#register">
          <a className="px-8 sm:px-10 py-2.5 sm:py-3 border border-white/60 text-white text-xs sm:text-sm rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300">
            Register Now
          </a>
        </Link>

        {/* Scroll Arrow */}
        <div className="absolute bottom-10 sm:bottom-16 left-1/2 transform -translate-x-1/2">
          <svg width="16" height="24" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-5 sm:h-8">
            <path d="M10 0V28M10 28L1 19M10 28L19 19" stroke="#B4D335" strokeWidth="2"/>
          </svg>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="absolute right-0 top-[70%] md:top-[70%] transform -translate-y-1/2 z-20 hidden md:flex flex-col items-end">
        {/* Weather Label */}
        <div className="flex items-center mb-2 pr-0">
          <span className="text-white text-[8px] lg:text-[10px] tracking-[0.15em] flex items-center">
            <span className="text-[#B4D335] mr-1">&lt;&lt;</span>
            WEATHER
          </span>
          <div className="w-6 lg:w-8 h-[1px] bg-white ml-2"></div>
        </div>
        
        {/* Weather Widget */}
        <div className="min-w-[150px] lg:min-w-[180px]">
          <Image
            src="/images/Group 15.png"
            alt="Weather Widget"
            width={180}
            height={100}
            objectFit="contain"
          />
        </div>

        {/* Ongoing Matches Label */}
        <div className="flex items-center mt-6 lg:mt-8 pr-0">
          <span className="text-white text-[8px] lg:text-[10px] tracking-[0.15em] flex items-center">
            <span className="text-[#B4D335] mr-1">&lt;&lt;</span>
            ONGOING MATCHES
          </span>
          <div className="w-6 lg:w-8 h-[1px] bg-white ml-2"></div>
        </div>

        {/* Score Label */}
        <div className="flex items-center mt-6 lg:mt-8 pr-0">
          <span className="text-white text-[8px] lg:text-[10px] tracking-[0.15em] flex items-center">
            <span className="text-[#B4D335] mr-1">&lt;&lt;</span>
            SCORE
          </span>
          <div className="w-6 lg:w-8 h-[1px] bg-white ml-2"></div>
        </div>
      </div>
    </section>
  )
}
