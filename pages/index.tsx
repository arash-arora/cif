import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import HeroBanner from '../components/HeroBanner'
import Stats from '../components/Stats'
import Roadmap from '../components/Roadmap'
import Features from '../components/Features'
import Clients from '../components/Clients'
import Footer from '../components/Footer'
import Startups from '../components/Startups'

const Home: NextPage = () => {
  return (
    <div className="overflow-x-hidden backdrop-blur-sm">
      <Head>
        <title>Crest Innovations</title>
        <link rel="icon" href="" />
      </Head>
      <Header />
      <Banner />
      <HeroBanner />
      <Stats />
      <Features />
      <Roadmap />
      <Clients />
      <Startups />
      <Footer />
    </div>
  )
}

export default Home
