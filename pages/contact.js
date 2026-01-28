import Layout from '../components/Layout'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you'd handle form submission here
    alert('Thank you for your message! We\'ll get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    { icon: '📧', title: 'Email', value: 'hello@kwmstudio.com' },
    { icon: '📞', title: 'Phone', value: '+1 (555) 123-4567' },
    { icon: '📍', title: 'Address', value: '123 Design Street, Creative City' },
  ]

  return (
    <Layout title="Contact | KWM Studio">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="font-body text-xl text-gray-300">
              Have a project in mind? We&apos;d love to hear from you. 
              Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass rounded-3xl p-8">
              <h2 className="font-display text-2xl font-bold text-white mb-6">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-body text-sm text-gray-400 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-700 text-white font-body focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm text-gray-400 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-700 text-white font-body focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-body text-sm text-gray-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-700 text-white font-body focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-700 text-white font-body focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-orange-500 rounded-xl font-body font-semibold text-white hover:shadow-xl hover:shadow-purple-500/25 transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-white mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/20 to-orange-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">{item.icon}</span>
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="font-body text-gray-400">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Office Hours */}
              <div className="glass rounded-3xl p-8 glow-purple">
                <h3 className="font-display text-xl font-bold text-white mb-4">
                  Office Hours
                </h3>
                <div className="space-y-3 font-body text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-orange-400">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-orange-400">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-gray-500">Closed</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="glass rounded-3xl p-8">
                <h3 className="font-display text-xl font-bold text-white mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  {['Twitter', 'LinkedIn', 'Instagram', 'Dribbble'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/20 to-orange-500/20 flex items-center justify-center text-gray-400 hover:text-white hover:from-purple-600/40 hover:to-orange-500/40 transition-all duration-300"
                    >
                      <span className="text-sm font-body font-semibold">
                        {social.charAt(0)}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

