import Layout from '../components/Layout'
import Link from 'next/link'

export default function Custom404() {
  return (
    <Layout title="404 | Page Not Found">
      <section className="pt-32 pb-20 px-6 min-h-[80vh] flex items-center justify-center">
        <div className="text-center">
          <div className="text-9xl font-display font-bold text-gradient mb-6">
            404
          </div>
          <h1 className="font-display text-3xl font-bold text-white mb-4">
            Page Not Found
          </h1>
          <p className="font-body text-gray-400 mb-8 max-w-md mx-auto">
            Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link href="/">
            <a className="inline-flex px-8 py-4 bg-gradient-to-r from-purple-600 to-orange-500 rounded-full font-body font-semibold text-white hover:shadow-xl hover:shadow-purple-500/25 transform hover:-translate-y-1 transition-all duration-300">
              Back to Home
            </a>
          </Link>
        </div>
      </section>
    </Layout>
  )
}

