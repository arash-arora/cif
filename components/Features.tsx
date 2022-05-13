import { FaNetworkWired, FaGlobeAsia, FaPeopleArrows } from 'react-icons/fa'
import { VscSymbolMethod } from 'react-icons/vsc'
import { BsFillLightningChargeFill } from 'react-icons/bs'
import { RiFundsFill } from 'react-icons/ri'

const features = [
  {
    name: 'Critical Support Network',
    description:
      'Join an Equity Collective of helpful start-up mentors and founders that are invested in your success.',
    icon: FaNetworkWired,
  },
  {
    name: 'Structured Methodology',
    description:
      'Know what to work on, and when, with our proven business-building sprints and structured approach.',
    icon: VscSymbolMethod,
  },
  {
    name: 'Lifetime Support',
    description:
      'You get access to a lifetime of advanced "Founder Lab" accelerator programs and partners, at no additional cost.',
    icon: BsFillLightningChargeFill,
  },
  {
    name: 'Funding Support',
    description:
      'Get matched to investors through us, Venture Network of funds focused on the first or second round of funding.',
    icon: RiFundsFill,
  },
  {
    name: 'Global Network',
    description:
      "Build a company with impact by leveraging the world's largest network of start-up founders and mentors help you there.",
    icon: FaGlobeAsia,
  },
  {
    name: 'Global Market Access',
    description:
      'Recast your product and services to map the global market and align your business with worldwide clients.',
    icon: FaPeopleArrows,
  },
]

export default function Example() {
  return (
    <div id="features" className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base font-semibold uppercase tracking-wide text-indigo-600">
            Features
          </h2>
          <p className="mt-2 text-4xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            How We Help Businesses
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Wavemakers is one of the world’s proven networks to turn ideas into
            fundable startups, and startups into global businesses.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-blue-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
