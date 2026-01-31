import Image from 'next/image'

export default function ProfessionalsSection() {
  const professionals = [
    {
      name: 'Craig Tiley',
      title: 'CEO Tennis Australia &',
      title2: 'Australian Open',
      image: '/images/image 6.png',
    },
    {
      name: 'Stephen Farrow',
      title: 'Director - Tournament, Players &',
      title2: 'International Relations',
      image: '/images/stephen.png',
    },
    {
      name: 'Cameron Pearson',
      title: 'Head Major Events -',
      title2: 'Tennis Australia',
      image: '/images/cameroon.png',
    },
  ]

  return (
    <section className="py-16 px-6 bg-white relative">
      <div className="max-w-6xl mx-auto">
        {/* Decorative Vertical Lines at Top */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex gap-48">
          <div className="w-px h-16 bg-gray-200"></div>
          <div className="w-px h-16 bg-gray-200"></div>
          <div className="w-px h-16 bg-gray-200"></div>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 mt-16">
          <div>
            <div className="flex items-start gap-1">
              <h2 
                className="text-2xl md:text-3xl font-bold mb-3"
                style={{ fontFamily: 'Matter, sans-serif' }}
              >
                Meet our professionals
              </h2>
              <span className="w-2 h-2 rounded-full bg-[#B4D335] mt-1" />
            </div>
            <p 
              className="text-gray-500 text-sm max-w-xs"
              style={{ fontFamily: 'Matter, sans-serif' }}
            >
              Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s,
            </p>
          </div>
          <button 
            className="mt-6 md:mt-0 px-8 py-3 bg-[#B4D335] text-white rounded-full text-sm hover:bg-[#9CBD2C] transition-all duration-300"
            style={{ fontFamily: 'Matter, sans-serif' }}
          >
            View All
          </button>
        </div>

        {/* Professionals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {professionals.map((professional, index) => (
            <div 
              key={professional.name}
              className="group"
            >
              {/* Image */}
              <div className="relative h-[280px] overflow-hidden bg-gray-100 mb-4 rounded-2xl">
                <Image
                  src={professional.image}
                  alt={professional.name}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                  className="transition-transform duration-500 group-hover:scale-105 rounded-2xl"
                />
              </div>

              {/* Content */}
              <div>
                <h3 
                  className="text-lg font-semibold mb-1"
                  style={{ fontFamily: 'Matter, sans-serif' }}
                >
                  {professional.name}
                </h3>
                <p 
                  className="text-gray-500 text-sm italic"
                  style={{ fontFamily: 'Matter, sans-serif' }}
                >
                  {professional.title}<br />
                  {professional.title2}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
