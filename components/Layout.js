import Head from 'next/head'
import Footer from './Footer'

export default function Layout({ children, title = 'SSA Hunter Valley - Signature Slam Academy', showFooter = true }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Signature Slam Academy - Grow your game with the professionals. The first one-stop tennis academy in Asia Pacific producing grand slam champions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <main className="flex-1">
          {children}
        </main>
        {showFooter && <Footer />}
      </div>
    </>
  )
}
