import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Register from '../components/RegisterS'

function about() {
  return (
    <div>
      <Header />
      <Banner />
      <div className="mx-16">
        <Register />
      </div>
      <Footer />
    </div>
  )
}

export default about
