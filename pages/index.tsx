import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import HeroBanner from '../components/HeroBanner'
import Stats from '../components/Stats'
import Roadmap from '../components/Roadmap'
import Features from '../components/Features'
import Clients from '../components/Clients'
// import CL from '../components/Clients1'
import Footer from '../components/Footer'
import Committee from '../components/Committee'
import Startups from '../components/Startups'

const Home: NextPage = () => {
  return (
    <div className="overflow-x-hidden backdrop-blur-sm">
      <Head>
        <title>Wavemakers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <HeroBanner />
      <Stats />
      <Features />
      <Roadmap />
      <Clients />
      <Startups />
      {/* <div className="mx-16">
        <Committee />
      </div> */}
      <Footer />
    </div>
  )
}

export default Home
