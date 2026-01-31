import Image from 'next/image'

export default function ProgramsSection() {
  const programs = [
    {
      title: 'Academy',
      description: 'Live and train with us',
      image: '/images/Rectangle 14.jpg',
      hasTopBorder: false,
    },
    {
      title: 'Camps',
      description: 'Train like a pro with us',
      image: '/images/Rectangle 15.png',
      hasTopBorder: false,
    },
    {
      title: 'Performance',
      description: 'Elevate your game with us',
      image: '/images/Rectangle 16.jpg',
      hasTopBorder: true,
    },
  ]

  return (
    <section id="programs" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="max-w-md">
            <h2 className="text-[32px] font-bold mb-4 text-black" style={{ fontFamily: 'Matter, sans-serif' }}>
              Programs
              <span className="inline-block w-2 h-2 bg-[#B4D335] rounded-full ml-1 align-top" style={{ marginTop: '5px' }}></span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: 'Matter, sans-serif' }}>
              Lorem Ipsum has been the industry&apos;s standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
          <button 
            className="mt-6 md:mt-0 px-8 py-3 bg-[#B4D335] text-white rounded-full text-sm font-medium hover:bg-[#9CBD2C] transition-all duration-300"
            style={{ fontFamily: 'Matter, sans-serif' }}
          >
            Register Now
          </button>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((program) => (
            <div 
              key={program.title}
              className={`group relative overflow-hidden cursor-pointer ${program.hasTopBorder ? 'border-t-4 border-[#B4D335]' : ''}`}
              style={{ borderRadius: '20px' }}
            >
              {/* Image */}
              <div className="relative h-[480px]">
                <Image
                  src={program.image}
                  alt={program.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center text-white">
                <h3 className="text-2xl font-bold mb-1" style={{ fontFamily: 'Matter, sans-serif' }}>
                  {program.title}
                </h3>
                <p className="text-gray-300 text-sm" style={{ fontFamily: 'Matter, sans-serif' }}>
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Adopt Nurture Deliver Banner */}
      <div className="mt-16 w-full overflow-hidden">
        <img
          src="/images/adopt nurture deliver adopt nurture deliver.svg"
          alt="Adopt Nurture Deliver"
          className="w-full h-auto"
          style={{ minHeight: '50px' }}
        />
      </div>
    </section>
  )
}
