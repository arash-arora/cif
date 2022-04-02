import Image from 'next/image'

function Clients() {
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

      <div className="mt-10 flex flex-wrap items-center justify-around">
        <div className="m-3 grayscale hover:grayscale-0">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/5969/5969083.png"
            height={80}
            width={80}
          />
        </div>
        <div className="m-3 grayscale hover:grayscale-0">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/732/732221.png"
            height={80}
            width={80}
          />
        </div>
        <div className="m-3 grayscale hover:grayscale-0">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/5969/5969073.png"
            height={80}
            width={80}
          />
        </div>
        <div className="m-3 grayscale hover:grayscale-0">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/6033/6033716.png"
            height={80}
            width={80}
          />
        </div>
        <div className="m-3 grayscale hover:grayscale-0">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
            height={80}
            width={80}
          />
        </div>
      </div>
    </div>
  )
}

export default Clients
