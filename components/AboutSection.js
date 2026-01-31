import Image from 'next/image'
import { useState } from 'react'
// section file.
export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('about')
  
  const tabs = [
    { id: 'about', label: 'About Us' },
    { id: 'coaches', label: 'Coaches' },
    { id: 'vision', label: 'Vision' },
    { id: 'mission', label: 'Mission' },
  ]
  
  const stats = [
    { number: '20', label: 'courts' },
    { number: '12', label: 'coaches' },
    { number: '17', label: 'years' },
    { number: '10', label: 'clubs' },
  ]

  return (
    <section id="about" className="bg-white relative overflow-hidden">
      {/* Large A Background - Starting from intro text level */}
      <div className="absolute left-0 top-8 pointer-events-none z-0" style={{ width: '220px', height: '400px' }}>
        <Image
          src="/images/a 1.jpg"
          alt="A decoration"
          layout="fill"
          objectFit="contain"
          objectPosition="left top"
        />
      </div>

      {/* Top Section with Intro Text and Tabs */}
      <div className="relative z-10 pt-16 pb-8 border-b border-gray-200">
        {/* Vertical Lines Decoration */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex gap-40">
          <div className="w-[1px] h-20 bg-gray-200"></div>
          <div className="w-[1px] h-20 bg-gray-200"></div>
          <div className="w-[1px] h-20 bg-gray-200"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 pt-16">
          {/* Intro Text */}
          <div className="text-center mb-16">
            <p className="text-lg text-gray-600 leading-relaxed">
              To be the first venue in the world to have <span className="text-[#B4D335] font-semibold">60 multi surface courts</span>
              <br />
              at one location and establish first one stop tennis academy
              <br />
              in the Asia Pacific producing grand slam champions.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-16">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-2 text-base transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'text-gray-900 border-b-2 border-gray-900 font-semibold' 
                    : 'text-[#B4D335] hover:text-[#9CBD2C]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative py-16 px-6 z-10">
        {/* Vertical Line on Left */}
        <div className="absolute left-[28%] top-0 w-[1px] h-6 bg-[#B4D335]"></div>

        <div className="max-w-6xl mx-auto">
          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div>
              {/* About Us Heading with dot */}
              <h2 className="text-2xl font-bold mb-4 flex items-start" style={{ fontFamily: 'Matter, sans-serif' }}>
                About Us
                <span className="w-2 h-2 bg-[#B4D335] rounded-full ml-1 mt-1"></span>
              </h2>
              
              <p className="text-gray-500 mb-8 leading-relaxed text-sm max-w-md">
                To be the first venue in the world to have 60 multi surface courts at
                one location and establish first one stop tennis academy in the Asia
                Pacific producing grand slam champions.
              </p>

              {/* Stats */}
              <div className="flex gap-12 mb-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-bold text-[#B4D335]" style={{ fontFamily: 'Matter, sans-serif' }}>
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Read More Button */}
              <button className="px-8 py-3 bg-[#B4D335] text-white rounded-full text-sm hover:bg-[#9CBD2C] transition-all duration-300">
                Read More
              </button>
            </div>

            {/* Right Image Grid - Using Group 17 composite image */}
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/Group 17.jpg"
                alt="Tennis activities collage"
                width={520}
                height={400}
                objectFit="cover"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom border line */}
      <div className="border-b border-gray-200"></div>
    </section>
  )
}
