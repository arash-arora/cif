import logo from '../assets/images/wavemakers1.png'
import Image from 'next/image'
function Footer() {
  //F9FAFB
  return (
    <footer className="body-font bg-[#fff] text-gray-600">
      <div className="container mx-auto flex flex-col flex-wrap px-5 py-24 md:flex-row md:flex-nowrap md:items-center lg:items-start">
        <div className="mx-auto w-64 flex-shrink-0 text-center md:mx-0 md:text-left">
          <a className="title-font flex items-center justify-center font-medium text-gray-900 md:justify-start">
            <Image
              className="h-8 w-auto sm:h-10"
              src={logo}
              alt=""
              width={176}
              height={80}
            />
            {/* <span className="ml-3 text-xl">Wavemakers</span> */}
          </a>
          <p className="mt-2 text-sm text-gray-500">
            Making the world a better place through constructing elegant
            hierarchies
          </p>
        </div>
        <div className="-mb-10 mt-10 flex flex-grow flex-wrap text-center md:mt-0 md:pl-20 md:text-left">
          <div className="w-full px-4 md:w-1/2 lg:w-1/3 ">
            <h2 className="title-font mb-3 text-sm font-medium tracking-widest text-gray-900">
              Support
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Pricing</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Documentation
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Guides</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Contact</a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3 ">
            <h2 className="title-font mb-3 text-sm font-medium tracking-widest text-gray-900">
              Company
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <a className="text-gray-600 hover:text-gray-800">About</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Courses</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Our Offerings
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Media</a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3 ">
            <h2 className="title-font mb-3 text-sm font-medium tracking-widest text-gray-900">
              Legal
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Claim</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Privacy</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Terms</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Policies</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="container mx-auto flex flex-col flex-wrap py-4 px-5 sm:flex-row">
          <p className="text-center text-sm text-gray-500 sm:text-left">
            © 2022 Wavemakers —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="ml-1 text-gray-600"
              target="_blank"
            >
              @wavemakers
            </a>
          </p>
          <span className="mt-2 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
            <a
              href="https://www.facebook.com/wavemakerss"
              className="text-gray-500"
            >
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500" href="">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a
              className="ml-3 text-gray-500"
              href="https://instagram.com/_wave_makers?igshid=YmMyMTA2M2Y="
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a
              className="ml-3 text-gray-500"
              href="https://www.linkedin.com/company/79148449/admin/"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
