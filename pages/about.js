import Layout from '../components/Layout'

export default function About() {
  const team = [
    { name: 'Alex Chen', role: 'Creative Director', emoji: '🎨' },
    { name: 'Jordan Smith', role: 'Lead Developer', emoji: '💻' },
    { name: 'Maya Patel', role: 'UX Designer', emoji: '✏️' },
  ]

  const stats = [
    { value: '150+', label: 'Projects Completed' },
    { value: '50+', label: 'Happy Clients' },
    { value: '5+', label: 'Years Experience' },
    { value: '99%', label: 'Client Satisfaction' },
  ]

  return (
    <Layout title="About | KWM Studio">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
              We Are <span className="text-gradient">Creators</span>
            </h1>
            <p className="font-body text-xl text-gray-300">
              A passionate team of designers, developers, and strategists dedicated 
              to crafting exceptional digital experiences that make a lasting impact.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="glass rounded-2xl p-6 text-center">
                <div className="font-display text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="font-body text-gray-400 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="glass rounded-3xl p-8 glow-purple">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-600/30 to-orange-500/30 flex items-center justify-center">
                <span className="text-8xl">🚀</span>
              </div>
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 font-body text-gray-300">
                <p>
                  Founded in 2021, KWM Studio began with a simple mission: to create 
                  digital experiences that truly matter. What started as a small team 
                  of three passionate creatives has grown into a full-service digital agency.
                </p>
                <p>
                  We believe in the power of design to transform businesses and connect 
                  with audiences on a deeper level. Every project we undertake is approached 
                  with curiosity, creativity, and a commitment to excellence.
                </p>
                <p>
                  Today, we work with clients from startups to Fortune 500 companies, 
                  helping them navigate the digital landscape and achieve their goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-white mb-4">
              Meet the Team
            </h2>
            <p className="font-body text-gray-400">
              The creative minds behind our success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div 
                key={member.name}
                className="glass rounded-2xl p-8 text-center hover:glow-orange transition-all duration-500 group"
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-600 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">{member.emoji}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-2">
                  {member.name}
                </h3>
                <p className="font-body text-orange-400">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

