import Layout from '../components/Layout'
import Link from 'next/link'
import Image from 'next/image'

export default function Custom404() {
  return (
    <Layout title="Page Not Found | SSA Hunter Valley">
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
        </div>
      </div>

      <section className="py-20 px-6 bg-white min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-8xl font-bold text-[#B4D335] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            404
          </h1>
          <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Page Not Found
          </h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed or is temporarily unavailable.
          </p>
          <Link href="/">
            <a className="inline-flex px-8 py-3 bg-[#B4D335] text-white rounded-sm font-semibold hover:bg-[#9CBD2C] transition-all duration-300">
              Back to Home
            </a>
          </Link>
        </div>
      </section>
    </Layout>
  )
}
