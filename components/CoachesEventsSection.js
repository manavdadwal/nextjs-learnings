import Image from 'next/image'
import Link from 'next/link'

export default function CoachesEventsSection() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Our Coaches Card */}
          <div className="relative h-[280px] rounded-lg overflow-hidden group">
            {/* Background Image */}
            <Image
              src="/images/Rectangle 34.png"
              alt="Our Coaches"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-center text-white">
              <h3 className="text-3xl font-bold mb-3 section-dot" style={{ fontFamily: 'Matter, sans-serif' }}>
                Our Coaches
              </h3>
              <p className="text-white/90 mb-6 text-sm max-w-[250px] leading-relaxed">
                Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s.
              </p>
              <Link href="/coaches">
                <a className="inline-flex items-center gap-2 text-white text-sm hover:gap-3 transition-all duration-300">
                  Read More 
                  <span className="text-lg">→</span>
                </a>
              </Link>
            </div>
          </div>

          {/* Events Card */}
          <div className="relative h-[280px] rounded-lg overflow-hidden group bg-[#99B81B]">
            {/* Green Background */}
            <div className="absolute inset-0 green-gradient-right" />
            
            {/* Tennis Player - Right Side */}
            <div className="absolute right-0 bottom-0 h-[280px] pointer-events-none">
              <img
                src="/images/image 1.png"
                alt="Tennis player"
                className="h-full w-auto object-contain object-right-bottom"
              />
            </div>
            
            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-center text-white">
              <h3 className="text-3xl font-bold mb-3 section-dot-white" style={{ fontFamily: 'Matter, sans-serif' }}>
                Events
              </h3>
              <p className="text-white/90 mb-6 text-sm max-w-[250px] leading-relaxed">
                Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s.
              </p>
              <Link href="/events">
                <a className="inline-flex items-center gap-2 text-white text-sm hover:gap-3 transition-all duration-300">
                  Read More 
                  <span className="text-lg">→</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
