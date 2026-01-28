import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children, title = 'KWM Studio' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="KWM Studio - Creative Digital Agency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen flex flex-col relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full shape-blur animate-float" />
          <div className="absolute bottom-40 right-20 w-96 h-96 bg-orange-500 rounded-full shape-blur animate-float delay-300" />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-500 rounded-full shape-blur animate-float delay-500" />
        </div>
        
        <Navbar />
        <main className="flex-1 relative z-10">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

