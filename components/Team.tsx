import { CardMembership } from '@mui/icons-material'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import { AiFillCaretRight } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { Fragment } from 'react'
import Image from 'next/image'
import rb from '../assets/images/rb2.jpg'

function Team() {
  const team = [
    {
      link: 'https://drive.google.com/uc?export=view&id=1PGFjrBG47n9Tb5iPDFJdvQyyWoOyd382',
      name: 'Mr. Manoj Arora',
      urlLinkedIn: 'https://in.linkedin.com/in/',
      profession: 'Chief Technologist & Product Innovator',
      description:
        'Manoj Arora is a well-experienced mentor, an advisor, an investor, a strategist, and an efficient leader for product and business development innovation. He has worked as CXO’s for various renowned companies and was instrumental in initiating and creating digital platforms and products for them. He is deeply committed to adding value to the startup ecosystem and revolutionizing the entrepreneurship picture in India.',
    },
    {
      link: 'https://drive.google.com/uc?export=view&id=1sTReb8QzmOzxK_eKlBi-9JmBtzSUR_Lc',
      name: 'Mr. Gagan Ghai',
      urlLinkedIn: 'https://in.linkedin.com/in/',
      profession: 'Business & Transacation Advisor',
      description:
        'For the last 20 years, he has been involved in analyzing, scaling & building sustainable businesses operating in a constantly evolving ecosystem. He has assumed very diverse roles, from being corporate treasurer, managing funds for family offices & corporate treasury, to serving CXO roles for growing corporates recently.',
    },
    {
      // link: 'https://drive.google.com/uc?export=view&id=1VxIPzDNjZGRhlqXEq9XNbc2HrIxXlN6X',
      link: 'https://drive.google.com/uc?export=view&id=1aUb4-vA2RCAiH-SOG39jhMdk9e1CNPGJ',
      name: 'Mr. Abhimanyu Singh',
      urlLinkedIn: 'https://in.linkedin.com/in/',
      profession: 'Business Advisor',
      description:
        'A Hotel Management Graduate and MBA from IMS Indore has worked with different teams across the globe in his approximate two decades of work experience. Starting as a bartender just after his graduation he has sold timeshares, hotel rooms, travel packages, space selling, Conference and exhibition selling, and a lot more.',
    },
    {
      link: 'https://drive.google.com/uc?export=view&id=1_-UZHsasxVId04vSHvBmyJ36jUDlOuBG',
      name: 'Mr. Rajeev Bansal',
      urlLinkedIn: 'https://in.linkedin.com/in/',
      profession: 'Business Advisor',
      description:
        'Mr. Rajeev Bansal has 26 years of experience in operating high-level business delegations and events globally. He’s having long work experience with the Confederation of India Industry CII and Reed Exhibitions Private. Ltd. (RX) which gives him an extra edge to deal with people in Government and Corporate simultaneously for smooth operations and great results.',
    },
  ]
  return (
    <div className="mx-auto mt-20 flex max-w-6xl">
      <div className="w-full text-justify">
        <div>
          <h1 className="text-5xl font-bold">Team</h1>
          <p className="text-md mt-2 text-[#999]">
            Meet our diverse team of professionals
          </p>
        </div>
        <div className="mt-10 flex flex-row flex-wrap items-center justify-center gap-3 md:justify-around">
          {team.map((member) => {
            return (
              <div className="mb-24 h-80" id={member.name}>
                <div className="group relative w-[200px] md:w-[280px]">
                  <img src={member.link} alt="" className="h-80 w-full" />
                  <Link href={member.urlLinkedIn}>
                    <div className="absolute left-0 bottom-0 inline-flex cursor-pointer items-center rounded-md bg-white p-2 px-3 py-2 text-base font-medium text-white opacity-80 hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 group-hover:bg-blue-700 group-hover:opacity-100">
                      <FaLinkedinIn className="text-lg text-blue-700 group-hover:text-white" />
                    </div>
                  </Link>
                  <div>
                    <Popover className="">
                      {({ open }) => (
                        <>
                          <Popover.Button
                            className={`
                            ${open ? '' : 'text-opacity-90'}
                            group absolute bottom-0 right-0 inline-flex items-center rounded-md bg-blue-700 px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                          >
                            <span>Read More</span>
                            <AiFillCaretRight
                              className={`${open ? '' : 'text-opacity-70'}
                              ml-2 h-5 w-5 text-blue-300 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                              aria-hidden="true"
                            />
                          </Popover.Button>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                <div className="relative bg-white p-7">
                                  {member.description}
                                </div>
                                <div className="bg-gray-50 p-4">
                                  <a
                                    href="##"
                                    className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                  >
                                    <span className="flex items-center">
                                      <span className="text-sm font-medium text-gray-900">
                                        Get Started
                                      </span>
                                    </span>
                                    <span className="block text-sm text-gray-500">
                                      Start integrating products and tools
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <h1 className="text-xl font-semibold">{member.name}</h1>
                  <h3 className="text-md font-medium text-blue-600">
                    {member.profession}
                  </h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Team
