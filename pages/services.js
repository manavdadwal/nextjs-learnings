import Layout from '../components/Layout'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      icon: '🎨',
      title: 'Brand Identity',
      description: 'Create a memorable brand identity that resonates with your audience and sets you apart from competitors.',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy']
    },
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Build fast, responsive, and engaging websites that deliver exceptional user experiences.',
      features: ['Custom Websites', 'E-commerce', 'Web Applications', 'CMS Integration']
    },
    {
      icon: '📱',
      title: 'UI/UX Design',
      description: 'Design intuitive interfaces and seamless user experiences that delight your customers.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing']
    },
    {
      icon: '🚀',
      title: 'Digital Marketing',
      description: 'Grow your online presence and reach your target audience with strategic digital marketing.',
      features: ['SEO Optimization', 'Content Strategy', 'Social Media', 'Analytics']
    },
  ]

  return (
    <Layout title="Services | KWM Studio">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="font-body text-xl text-gray-300">
              Comprehensive digital solutions tailored to your unique needs. 
              From concept to launch, we&apos;ve got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="glass rounded-3xl p-8 hover:glow-purple transition-all duration-500 group"
              >
                <div className="flex items-start gap-6">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-semibold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="font-body text-gray-400 mb-6">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((feature) => (
                        <li 
                          key={feature}
                          className="font-body text-sm text-gray-300 flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-orange-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-white mb-4">
              Our Process
            </h2>
            <p className="font-body text-gray-400 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discover', desc: 'Understanding your goals and vision' },
              { step: '02', title: 'Design', desc: 'Creating stunning visual concepts' },
              { step: '03', title: 'Develop', desc: 'Building with precision and care' },
              { step: '04', title: 'Deliver', desc: 'Launching and supporting growth' },
            ].map((item, index) => (
              <div key={item.step} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-600/20 to-orange-500/20 flex items-center justify-center border border-purple-500/30 group-hover:border-orange-400/50 transition-colors duration-300">
                  <span className="font-display font-bold text-gradient text-xl">{item.step}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-gray-400 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-12 text-center glow-orange">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Have a Project in Mind?
            </h2>
            <p className="font-body text-gray-300 mb-8 max-w-xl mx-auto">
              Let&apos;s discuss how we can help bring your vision to life.
            </p>
            <Link href="/contact">
              <a className="inline-flex px-8 py-4 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full font-body font-semibold text-white hover:shadow-xl hover:shadow-orange-500/25 transform hover:-translate-y-1 transition-all duration-300">
                Start a Conversation
              </a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

