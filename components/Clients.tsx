import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
function Clients() {
  const settings = {
    infinite: true,
    pauseOnHover: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    arrows: false,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className="mx-auto mt-16 text-center">
      <h1
        style={{ textShadow: '2px 2px 6px' }}
        className="text-7xl text-gray-200 md:text-9xl"
      >
        Our Partners
      </h1>
      <div className="relative bottom-16">
        <h1 className="text-2xl font-semibold">Take a look at our clients</h1>
        <p className="text-sm font-semibold tracking-wide text-blue-600">
          We did great job with these companies! You can be next to work with.
        </p>
      </div>

      <div>
        <Slider {...settings}>
          <div className="m-3">
            <Image
              src="https://www.iconexgulf.com/assets/img/logo-black.png"
              height={80}
              width={200}
            />
          </div>
          <div className="m-3">
            <Image
              src="http://crestinnovations.com/images/logo.png"
              height={90}
              width={260}
            />
          </div>
          {/* <div className="m-3">
            <Image
              src="https://srisiim.ac.in/assets/img/logo/logo-home11.png"
              height={100}
              width={140}
            />
          </div> */}
          <div className="m-3">
            <Image
              src="https://www.santosh.ac.in/assets/img/logo%20(6).png"
              height={100}
              width={100}
            />
          </div>
          <div className="m-3">
            <Image
              src="https://www.icmr.gov.in/img/core-img/icmrlogo.png"
              height={100}
              width={300}
            />
          </div>
          <div className="m-3 w-24 bg-slate-800">
            <Image
              src="http://crestcapitaladvisors.in/assets/images/logo.png"
              height={100}
              width={260}
            />
          </div>
          <div className="m-3 h-20">
            <h1 className="flex h-full items-center justify-center text-3xl font-bold tracking-wider">
              FountainBrain
            </h1>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Clients
