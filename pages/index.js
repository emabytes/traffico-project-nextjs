import Head from 'next/head'
import Header from '../components/Header'
import About from '../components/About'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Traffico</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <About />
      <Footer/>
    </div>
  )
}
