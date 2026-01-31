import Image from 'next/image'

export default function QuoteSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with wavy pattern */}
      <div className="absolute inset-0">
        <Image
          src="/images/Group 18.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-90"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-600/80 to-gray-700/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <blockquote className="text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed mb-10" style={{ fontFamily: 'Matter, sans-serif' }}>
          &ldquo; We have created an environment ideal for
          <br />
          building craft. Our goal is to be recognized as the
          <br />
          best tennis performance centre in the world. &rdquo;
        </blockquote>
        
        <div>
          <p className="text-lg font-medium">John Doe</p>
          <p className="text-sm text-gray-300">Chairman</p>
        </div>
      </div>
    </section>
  )
}
