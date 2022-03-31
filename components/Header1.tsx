import Image from 'next/image'
import Link from 'next/link'
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'

import logo from '../assets/images/wavemakers1.png'
import Banner from './Banner'

function Header() {
  const style = {
    links: `cursor-pointer hover:animate-pulse text-lg uppercase`,
    contact: `cursor-pointer rounded-full bg-green-600 uppercase px-4 py-1 text-white hover:animate-pulse`,
    icon: `cursor-pointer hover:text-blue-700 text-xl`,
  }
  return (
    <>
      <header className="mx-auto flex  justify-between px-5 py-1 shadow-lg shadow-white">
        <Link href="/">
          <Image
            className="w-44 cursor-pointer object-contain"
            src={logo}
            objectFit="contain"
            width={176}
            height={80}
          />
        </Link>
        <div className="hidden items-center space-x-8 md:flex">
          <div className="items-center space-x-5 md:inline-flex">
            <h3 className={style.links}>About</h3>
            <h3 className={style.links}>Courses</h3>
            <h3 className={style.links}>Events</h3>
            <h3 className={style.contact}>Contact</h3>
          </div>
        </div>
        <div className="hidden items-center text-blue-500 md:flex md:space-x-5">
          <h3 className={style.icon}>
            <FaFacebookF />
          </h3>
          <h3 className={style.icon}>
            <FaLinkedinIn />
          </h3>
          <h3 className={style.icon}>
            <FaWhatsapp />
          </h3>
          <h3 className={style.icon}>
            <FaTwitter />
          </h3>
        </div>
        <div className="flex items-center text-3xl md:hidden">
          <GiHamburgerMenu />
        </div>
      </header>
      <Banner />
    </>
  )
}

export default Header
