import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'
import Team from '../components/Team'

function about() {
  return (
    <div>
      <Header />
      <Banner />
      <div className="mx-16">
        <AboutUs />
        <Team />
      </div>
      <Footer />
    </div>
  )
}

export default about
