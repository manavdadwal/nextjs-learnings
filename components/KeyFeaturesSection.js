import Image from 'next/image'

export default function KeyFeaturesSection() {
  const featuresLeft = [
    'First venue in the world',
    'First venue in the world to have 60 multi surface courts (20 clay & 30 hard + 10 natural grass) at one location alongside a stadium',
    'First facility in the world to have capabilities to hold WTA & ATP events on any three court surface at one location',
    'First tennis academy in the world to have capabilities to stage WTA & ATP events too',
    'First venue in the world with tennis academy, Equestrian Centre, 18 holes golf course, Exhibition Centre, Aboriginal Art & Culture Museum, Stadium; 5 Star Hunter Valley resort and airport all in 500 meters radius',
    'First one stop tennis academy in Asia Pacific',
  ]

  const featuresRight = [
    'First venue in the world',
    'First venue in the world to have 60 multi surface courts (20 clay & 30 hard + 10 natural grass) at one location alongside a stadium',
    'First facility in the world to have capabilities to hold WTA & ATP events on any three court surface at one location',
    'First tennis academy in the world to have capabilities to stage WTA & ATP events too',
    'First venue in the world with tennis academy, Equestrian Centre, 18 holes golf course, Exhibition Centre, Aboriginal Art & Culture Museum, Stadium; 5 Star Hunter Valley resort and airport all in 500 meters radius',
    'First one stop tennis academy in Asia Pacific',
  ]

  return (
    <section className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Wavy Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/27121-[Converted] 1.png"
          alt="Background pattern"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
      </div>

      {/* Vertical Lines Decoration at Top */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex gap-40">
        <div className="w-[1px] h-16 bg-gray-200"></div>
        <div className="w-[1px] h-16 bg-gray-200"></div>
        <div className="w-[1px] h-16 bg-gray-200"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto pt-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-start mb-12">
          <div>
            {/* Title with green dot */}
            <h2 className="text-3xl font-bold mb-4 flex items-start" style={{ fontFamily: 'Matter, sans-serif' }}>
              key Features
              <span className="w-2 h-2 bg-[#B4D335] rounded-full ml-1 mt-1"></span>
            </h2>
            <p className="text-gray-500 text-sm">
              Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
            </p>
          </div>
          <button className="mt-6 md:mt-0 px-8 py-3 bg-[#B4D335] text-white rounded-full text-sm hover:bg-[#9CBD2C] transition-all duration-300">
            Register Now
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6">
          {/* Left Column */}
          <div className="space-y-6">
            {featuresLeft.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <span className="text-[#B4D335] text-lg flex-shrink-0 mt-0.5">→</span>
                <p className="text-gray-600 text-sm leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {featuresRight.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <span className="text-[#B4D335] text-lg flex-shrink-0 mt-0.5">→</span>
                <p className="text-gray-600 text-sm leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
