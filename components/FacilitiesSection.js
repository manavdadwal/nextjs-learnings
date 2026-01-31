import Image from "next/image";

export default function FacilitiesSection() {
  return (
    <section className="relative overflow-hidden bg-white pb-16">
      {/* BACKGROUND IMAGE - Covers content area, repeats on mobile */}
      <div 
        className="absolute left-0 right-0 top-[180px] bottom-0 md:top-[260px] md:bottom-auto md:h-[380px]"
      >
        <Image
          src="/images/Rectangle 33.png"
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* TROPHY WATERMARK - positioned at extreme right, no spacing */}
      <div 
        className="absolute w-[150px] sm:w-[200px] md:w-[280px] opacity-20 pointer-events-none z-20 top-[180px] md:top-[260px] right-0 bottom-0 md:bottom-auto md:h-[380px]"
      >
        <Image
          src="/images/Untitled-1 1.png"
          alt=""
          layout="fill"
          objectFit="contain"
          objectPosition="right"
        />
      </div>

      {/* DECORATIVE VERTICAL LINE */}
      <div className="absolute top-0 left-[35%] h-20 w-px bg-gray-300 z-10" />

      <div className="relative z-10 max-w-6xl mx-auto px-8 py-12">
        
        {/* HEADER */}
        <div className="mb-8">
          <div className="flex items-start gap-1">
            <h2 
              className="text-2xl font-bold text-gray-900 tracking-tight"
              style={{ fontFamily: 'Matter, sans-serif' }}
            >
              Facilities
            </h2>
            <span className="w-2 h-2 rounded-full bg-[#B4D335] mt-1" />
          </div>
          <p 
            className="text-gray-500 text-sm mt-2 max-w-xs leading-relaxed"
            style={{ fontFamily: 'Matter, sans-serif' }}
          >
            Lorem Ipsum has been the industry&apos;s standard
            dummy text ever since the 1500s,
          </p>
        </div>

        {/* ROW 1 - Tennis (left) and Accommodation (center-right) - mirror of row 2 */}
        <div className="flex flex-col md:flex-row gap-12">
          
          {/* TENNIS CARD - Left edge */}
          <div className="md:w-[38%] space-y-3">
            <div className="relative h-[200px] rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/images/Rectangle 21.jpg" 
                alt="Tennis" 
                layout="fill" 
                objectFit="cover"
              />
              {/* Play Button - Center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg z-10">
                <div className="w-0 h-0 border-l-[8px] border-l-gray-600 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent ml-0.5" />
              </div>
              {/* Overlay Text */}
              <div className="absolute bottom-4 right-4 text-right">
                <p className="text-white/80 text-[10px] max-w-[140px]" style={{ fontFamily: 'Matter, sans-serif' }}>
                  Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                </p>
              </div>
            </div>
            
            <h3 className="text-white text-lg font-bold" style={{ fontFamily: 'Matter, sans-serif' }}>
              Tennis
            </h3>
            
            <div className="flex gap-2">
              <span className="px-3 py-1 border border-white/50 rounded-full text-xs text-white" style={{ fontFamily: 'Matter, sans-serif' }}>
                9 Clay Courts
              </span>
              <span className="px-3 py-1 border border-white/50 rounded-full text-xs text-white" style={{ fontFamily: 'Matter, sans-serif' }}>
                4 Hard Courts
              </span>
            </div>
            
            <p className="text-white/80 text-sm leading-relaxed" style={{ fontFamily: 'Matter, sans-serif' }}>
              Lorem Ipsum has been the industry&apos;s standard
              dummy text ever since the 1500s,
            </p>
          </div>

          {/* ACCOMMODATION CARD - Center-right (mirrored from Fitness position) */}
          <div className="md:w-[38%] md:mr-[18%] md:ml-auto space-y-3">
            <div className="relative h-[200px] rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/images/Rectangle 22.jpg" 
                alt="Accommodation" 
                layout="fill" 
                objectFit="cover"
              />
              {/* Play Button - Center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg z-10">
                <div className="w-0 h-0 border-l-[8px] border-l-gray-600 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent ml-0.5" />
              </div>
            </div>
            
            <h3 className="text-white text-lg font-bold" style={{ fontFamily: 'Matter, sans-serif' }}>
              Accommodation
            </h3>
            
            <div className="flex gap-2">
              <span className="px-3 py-1 border border-white/50 rounded-full text-xs text-white" style={{ fontFamily: 'Matter, sans-serif' }}>
                5 Star Hotel
              </span>
            </div>
            
            <p className="text-white/80 text-sm leading-relaxed" style={{ fontFamily: 'Matter, sans-serif' }}>
              Lorem Ipsum has been the industry&apos;s standard
              dummy text ever since the 1500s,
            </p>
          </div>
        </div>

        {/* ROW 2 - Fitness (center-left) and Recovery (right) */}
        <div className="flex flex-col md:flex-row gap-12 mt-10">
          
          {/* FITNESS CARD - Center-left */}
          <div className="md:w-[38%] md:ml-[18%] space-y-3">
            <div className="relative h-[200px] rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/images/Rectangle 28.jpg" 
                alt="Fitness" 
                layout="fill" 
                objectFit="cover"
              />
              {/* Play Button - Center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg z-10">
                <div className="w-0 h-0 border-l-[8px] border-l-gray-600 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent ml-0.5" />
              </div>
            </div>
            
            <h3 className="text-gray-900 text-lg font-bold" style={{ fontFamily: 'Matter, sans-serif' }}>
              Fitness
            </h3>
            
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-[#B4D335] rounded-full text-xs text-white" style={{ fontFamily: 'Matter, sans-serif' }}>
                Gym
              </span>
              <span className="px-3 py-1 bg-[#B4D335] rounded-full text-xs text-white" style={{ fontFamily: 'Matter, sans-serif' }}>
                Fitness Room
              </span>
            </div>
            
            <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: 'Matter, sans-serif' }}>
              Lorem Ipsum has been the industry&apos;s standard<br />
              dummy text ever since the 1500s,
            </p>
          </div>

          {/* RECOVERY CARD - Right edge */}
          <div className="md:w-[38%] md:ml-auto space-y-3">
            <div className="relative h-[200px] rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/images/Rectangle 29.jpg" 
                alt="Recovery" 
                layout="fill" 
                objectFit="cover"
              />
              {/* Play Button - Center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg z-10">
                <div className="w-0 h-0 border-l-[8px] border-l-gray-600 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent ml-0.5" />
              </div>
            </div>
            
            <h3 className="text-gray-900 text-lg font-bold" style={{ fontFamily: 'Matter, sans-serif' }}>
              Recovery
            </h3>
            
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-[#B4D335] rounded-full text-xs text-white" style={{ fontFamily: 'Matter, sans-serif' }}>
                Spa
              </span>
              <span className="px-3 py-1 bg-[#B4D335] rounded-full text-xs text-white" style={{ fontFamily: 'Matter, sans-serif' }}>
                Pool
              </span>
              <span className="px-3 py-1 bg-[#B4D335] rounded-full text-xs text-white" style={{ fontFamily: 'Matter, sans-serif' }}>
                Massage
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
