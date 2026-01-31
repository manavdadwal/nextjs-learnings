import Layout from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We\'ll get back to you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <Layout title="Contact | SSA Hunter Valley">
      {/* Header */}
      <div className="bg-white py-6 px-6 border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/">
            <a>
              <Image
                src="/images/SSA-Logo03 1.png"
                alt="SSA Logo"
                width={60}
                height={40}
              />
            </a>
          </Link>
          <Link href="/">
            <a className="text-gray-600 hover:text-[#B4D335] text-sm">← Back to Home</a>
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 section-dot" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Contact Us
            </h1>
            <p className="text-gray-500 text-lg">
              Have questions about our programs? Get in touch with us 
              and we&apos;ll help you get started on your tennis journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:border-[#B4D335] transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:border-[#B4D335] transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:border-[#B4D335] transition-colors"
                    placeholder="+91 1234567890"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:border-[#B4D335] transition-colors resize-none"
                    placeholder="Tell us about your interest..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-[#B4D335] rounded-lg font-semibold text-white hover:bg-[#9CBD2C] transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Contact Information
                </h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#B4D335]/20 flex items-center justify-center flex-shrink-0">
                      <Image src="/images/fluent_call-20-regular.svg" alt="Phone" width={20} height={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-500 text-sm">+91 5642589752</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#B4D335]/20 flex items-center justify-center flex-shrink-0">
                      <Image src="/images/iconamoon_email-thin.svg" alt="Email" width={20} height={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-500 text-sm">info@ssagroup.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#B4D335]/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#B4D335]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Address</h3>
                      <p className="text-gray-500 text-sm">30 Wills Hill Road, Lovedale, NSW</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-[#B4D335]/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Operating Hours
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-[#9CBD2C] font-medium">6:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-[#9CBD2C] font-medium">7:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-[#9CBD2C] font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
