import Image from 'next/image'

export default function LaunchingSection() {
  const connectivityItems = [
    { name: 'Hunter Valley Golf And Country Club', distance: '220m' },
    { name: 'Rydges Resort Hunter Valley', distance: '550m' },
    { name: 'Cessnock Airport', distance: '1.7km' },
    { name: 'Cessnock CBD', distance: '7km' },
    { name: 'Nulkaba Public School', distance: '4.8km' },
    { name: 'Cessnock Hospital', distance: '7.3km' },
    { name: 'Mcdonalds, KFC, Oporto', distance: '7km' },
  ]

  return (
    <section className="relative">
      <div className="flex flex-col md:flex-row md:h-[500px]">
        {/* Left Side - Content with Background Image */}
        <div className="w-full md:w-1/2 relative overflow-hidden min-h-[400px] sm:min-h-[450px] md:h-full">
          {/* Background Image */}
          <Image
            src="/images/Rectangle 37.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
          
          {/* Content Overlay */}
          <div className="absolute inset-0 z-10 py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-10 flex flex-col justify-center overflow-hidden">
            <div className="max-w-md">
              {/* Launching Label */}
              <p 
                className="text-white text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-2 sm:mb-3 font-medium"
                style={{ fontFamily: 'Matter, sans-serif' }}
              >
                LAUNCHING
              </p>

              {/* Main Heading */}
              <h2 
                className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-5 leading-tight"
                style={{ fontFamily: 'Matter, sans-serif' }}
              >
                Signature Slam Academy<br />Hunter Valley
              </h2>

              {/* SSA Connectivity */}
              <h3 
                className="text-white text-xs sm:text-sm md:text-base font-bold mb-2 sm:mb-3"
                style={{ fontFamily: 'Matter, sans-serif' }}
              >
                SSA Connectivity
              </h3>

              {/* Connectivity List */}
              <div className="space-y-1 sm:space-y-1.5 md:space-y-2">
                {connectivityItems.map((item, index) => (
                  <div key={index} className="flex items-center">
                    {/* Location Icon */}
                    <div className="flex-shrink-0 w-3 h-3 sm:w-3.5 sm:h-3.5">
                      <Image
                        src="/images/ion_golf-outline.svg"
                        alt="Location"
                        width={14}
                        height={14}
                        className="w-full h-full"
                      />
                    </div>

                    {/* Location Name */}
                    <span 
                      className="text-white text-[10px] sm:text-xs md:text-sm ml-2 min-w-[130px] sm:min-w-[160px] md:min-w-[200px]"
                      style={{ fontFamily: 'Matter, sans-serif' }}
                    >
                      {item.name}
                    </span>

                    {/* Dashed Line */}
                    <div 
                      className="flex-grow mx-2 sm:mx-3"
                      style={{
                        borderTop: '1px dashed rgba(255,255,255,0.5)',
                        minWidth: '20px'
                      }}
                    />

                    {/* Distance */}
                    <span 
                      className="text-white text-[10px] sm:text-xs md:text-sm font-medium flex-shrink-0"
                      style={{ fontFamily: 'Matter, sans-serif' }}
                    >
                      {item.distance}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Aerial Image */}
        <div className="w-full md:w-1/2 relative min-h-[400px] sm:min-h-[450px] md:h-full overflow-hidden">
          <Image
            src="/images/image 5.png"
            alt="Hunter Valley Golf Resort Aerial View"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  )
}
