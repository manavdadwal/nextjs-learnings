import Layout from '../components/Layout'
import Link from 'next/link'

export default function Home() {
  const features = [
    {
      icon: '✨',
      title: 'Creative Design',
      description: 'Unique and stunning designs that capture your brand essence.'
    },
    {
      icon: '🚀',
      title: 'Fast Performance',
      description: 'Optimized solutions that load instantly and run smoothly.'
    },
    {
      icon: '💡',
      title: 'Smart Solutions',
      description: 'Innovative approaches to solve complex challenges.'
    },
  ]

  return (
    <Layout title="KWM Studio | Creative Digital Agency">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              We Create
              <span className="block text-gradient">Digital Magic</span>
            </h1>
            <p className="font-body text-xl text-gray-300 mb-10 animate-slide-up delay-200 opacity-0">
              Transform your vision into stunning digital experiences. 
              We blend creativity with technology to build websites that inspire.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-300 opacity-0">
              <Link href="/contact">
                <a className="px-8 py-4 bg-gradient-to-r from-purple-600 to-orange-500 rounded-full font-body font-semibold text-white hover:shadow-xl hover:shadow-purple-500/25 transform hover:-translate-y-1 transition-all duration-300">
                  Start Your Project
                </a>
              </Link>
              <Link href="/about">
                <a className="px-8 py-4 glass rounded-full font-body font-semibold text-white hover:bg-white/10 transition-all duration-300">
                  Learn More
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-white mb-4">
              Why Choose Us?
            </h2>
            <p className="font-body text-gray-400 max-w-2xl mx-auto">
              We combine expertise, creativity, and dedication to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="glass rounded-2xl p-8 hover:glow-purple transition-all duration-500 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="font-body text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-12 text-center glow-orange">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="font-body text-gray-300 mb-8 max-w-xl mx-auto">
              Let&apos;s create something amazing together. Reach out and let&apos;s discuss your next project.
            </p>
            <Link href="/contact">
              <a className="inline-flex px-8 py-4 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full font-body font-semibold text-white hover:shadow-xl hover:shadow-orange-500/25 transform hover:-translate-y-1 transition-all duration-300">
                Get in Touch
              </a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

