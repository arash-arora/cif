import Image from 'next/image'
import m1 from '../assets/WM/media1.jpeg'
import m2 from '../assets/WM/media2.jpeg'
import m3 from '../assets/WM/media3.jpeg'
import m4 from '../assets/WM/media4.jpeg'
import m5 from '../assets/WM/media5.jpeg'
import m6 from '../assets/WM/media6.jpeg'
import m7 from '../assets/WM/media7.jpeg'
import m8 from '../assets/WM/media8.jpeg'
import m9 from '../assets/WM/media9.jpeg'
import m10 from '../assets/WM/media10.jpeg'
import m11 from '../assets/WM/media11.jpeg'
import m12 from '../assets/WM/media12.jpeg'
import m13 from '../assets/WM/media13.jpeg'
import m14 from '../assets/WM/media14.jpeg'
import m15 from '../assets/WM/media15.jpeg'
import m16 from '../assets/WM/media16.jpeg'
import m17 from '../assets/WM/media17.jpeg'
import m18 from '../assets/WM/media18.jpeg'

const images = [
  {
    link: m1,
  },
  {
    link: m2,
  },
  {
    link: m3,
  },
  {
    link: m4,
  },
  {
    link: m5,
  },
  {
    link: m6,
  },
  {
    link: m7,
  },
  {
    link: m8,
  },
  {
    link: m9,
  },
  {
    link: m10,
  },
  {
    link: m11,
  },
  {
    link: m12,
  },
  {
    link: m13,
  },
  {
    link: m14,
  },
  {
    link: m15,
  },
  {
    link: m16,
  },
  {
    link: m17,
  },
  {
    link: m18,
  },
]

export default function MediaContent() {
  return (
    <div className="mx-16 mt-10 duration-300 ease-in md:mx-auto md:max-w-5xl">
      <div className="text-center">
        <h1 className="mb-5 text-3xl font-bold uppercase tracking-wide">
          Media
        </h1>
      </div>
      <div className="my-16 flex flex-wrap justify-center gap-12 md:mx-[80px] lg:justify-start">
        {images.map((image) => {
          return <Image src={image.link} alt="" width={400} height={400} />
        })}
        {/* <Image src={m1} alt="" width={400} height={400} />
        <Image src={m2} alt="" width={400} height={400} />
        <Image src={m3} alt="" width={400} height={400} />
        <Image src={m4} alt="" width={400} height={400} />
        <Image src={m5} alt="" width={400} height={400} />
        <Image src={m6} alt="" width={400} height={400} />
        <Image src={m7} alt="" width={400} height={400} />
        <Image src={m8} alt="" width={400} height={400} />
        <Image src={m9} alt="" width={400} height={400} />
        <Image src={m10} alt="" width={400} height={400} />
        <Image src={m11} alt="" width={400} height={400} />
        <Image src={m12} alt="" width={400} height={400} />
        <Image src={m13} alt="" width={400} height={400} />
        <Image src={m14} alt="" width={400} height={400} />
        <Image src={m15} alt="" width={400} height={400} />
        <Image src={m16} alt="" width={400} height={400} />
        <Image src={m17} alt="" width={400} height={400} />
        <Image src={m18} alt="" width={400} height={400} /> */}
        <div></div>
      </div>
    </div>
  )
}
