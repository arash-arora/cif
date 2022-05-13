// import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function Startups() {
  const settings = {
    infinite: true,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
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
    <div className="mx-auto mt-20 bg-[#F9FAFB] px-2 py-14 text-center">
      <h1
        style={{ textShadow: '2px 2px 6px' }}
        className="text-7xl text-gray-200 md:text-9xl"
      >
        Our Startups
      </h1>
      <div className="relative bottom-16">
        <h1 className="text-2xl font-semibold">Take a look at our startups</h1>
        <p className="text-sm font-semibold tracking-wide text-blue-600">
          We did great job with these companies! You can be next to work with.
        </p>
      </div>

      <div>
        <Slider {...settings}>
          <div className="m-3 mx-4">
            <h1 className="flex h-16 w-52 items-center justify-center rounded-full border-2 border-blue-600 py-1 px-1 text-2xl font-semibold tracking-wider text-gray-600 transition hover:bg-blue-600 hover:text-white ">
              Healthyssure
            </h1>
          </div>
          <div className="m-3">
            <h1 className="flex h-16 w-52 items-center justify-center rounded-full border-2 border-blue-600 px-1 py-1 text-2xl font-semibold tracking-wider text-gray-600 transition hover:bg-blue-600 hover:text-white ">
              Herbicure
            </h1>
          </div>
          <div className="m-3">
            <h1 className="flex h-16 w-52 items-center justify-center rounded-full border-2 border-blue-600 px-1 py-1 text-2xl font-semibold tracking-wider text-gray-600 transition hover:bg-blue-600 hover:text-white ">
              Noor
            </h1>
          </div>
          <div className="m-3">
            <h1 className="flex h-16 w-52 items-center justify-center rounded-full border-2 border-blue-600 px-1 py-1 text-2xl font-semibold tracking-wider text-gray-600 transition hover:bg-blue-600 hover:text-white ">
              Oshellare
            </h1>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Startups
