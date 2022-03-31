import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline'

export default function Example() {
  return (
    <div className="bg-blue-600">
      <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center">
          <div className="flex items-center">
            <span className="flex rounded-lg bg-blue-800 p-2">
              <SpeakerphoneIcon
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </span>
            <p className="ml-3 truncate font-medium text-white">
              <span className="md:hidden">Building Dreams Today!</span>
              <span className="hidden md:inline">
                Building Dreams Today by Democratizing access to quality
                entrepreneurship
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
