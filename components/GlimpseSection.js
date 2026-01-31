import Image from 'next/image'

export default function GlimpseSection() {
  return (
    <section className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Green dot decoration top left */}

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div>
            <h2 className="text-[32px] font-bold mb-3 text-black" style={{ fontFamily: 'Matter, sans-serif' }}>
              A Glimpse of Excellence
              <span className="inline-block w-2 h-2 bg-[#B4D335] rounded-full ml-1 align-top" style={{ marginTop: '5px' }}></span>
            </h2>
            <p className="text-gray-500 text-sm" style={{ fontFamily: 'Matter, sans-serif' }}>
              Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
            </p>
          </div>
          <button 
            className="mt-6 md:mt-0 px-8 py-3 bg-[#B4D335] text-white rounded-full text-sm font-medium hover:bg-[#9CBD2C] transition-all duration-300"
            style={{ fontFamily: 'Matter, sans-serif' }}
          >
            Register Now
          </button>
        </div>

        {/* Images */}
        <div className="flex flex-col md:flex-row gap-6 items-start justify-start">
          {/* Left Image - Black and white tennis player */}
          <div className="relative w-full md:w-[380px] flex-shrink-0">
            <div className="relative h-[400px] overflow-hidden rounded-xl">
              <Image
                src="/images/Rectangle 12.jpg"
                alt="Tennis player serving"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          {/* Right Image - Tennis courts aerial view */}
          <div className="relative w-full md:w-[520px] flex-shrink-0">
            <div className="relative h-[400px] overflow-hidden rounded-xl">
              <Image
                src="/images/Rectangle 13.jpg"
                alt="Tennis courts aerial view"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
