import React from 'react'
import emailjs from '@emailjs/browser'

function Register() {
  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_pb1vr97',
        'template_utl13y6',
        e.target,
        'JVIV5y6AeUML9LUno'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-10">
        <h1 className="text-4xl font-semibold tracking-wide">
          Register as a Startup
        </h1>
      </div>
      <div className="mt-12">
        <form
          // action="mailto:connect@wavemakers.in?subject=Register as a Startup"
          // method="POST"
          onSubmit={sendEmail}
          // encType="text/plain"
          // name="EmailForm"
        >
          <div className="overflow-hidden shadow sm:rounded-md">
            <div className="bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    id="first-name"
                    autoComplete="given-name"
                    className="mt-1 block w-full rounded-md border border-gray-400 px-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="mt-1 block w-full rounded-md border border-gray-400 px-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-6">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="mt-1 block w-full rounded-md border border-gray-400 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  >
                    <option>India</option>
                    <option>Bahrain</option>
                    <option>England</option>
                    <option>United States</option>
                    <option>Bangladesh</option>
                    <option>New Zealand</option>
                  </select>
                </div>
                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="mt-1 block w-full rounded-md border border-gray-400 px-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label
                    htmlFor="region"
                    className="block text-sm font-medium text-gray-700"
                  >
                    State / Province
                  </label>
                  <input
                    type="text"
                    name="region"
                    id="region"
                    autoComplete="address-level1"
                    className="mt-1 block w-full rounded-md border border-gray-400 px-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label
                    htmlFor="postal-code"
                    className="block text-sm font-medium text-gray-700"
                  >
                    ZIP / Postal code
                  </label>
                  <input
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autoComplete="postal-code"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="startup-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Startup Name
                  </label>
                  <input
                    type="text"
                    name="startup-name"
                    id="startup-name"
                    className="mt-1 block w-full rounded-md border border-gray-400 px-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="company-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Legal Company Name
                  </label>
                  <input
                    type="text"
                    name="company-name"
                    id="company-name"
                    className="mt-1 block w-full rounded-md border border-gray-400 px-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="idea"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Brief Idea
                  </label>
                  <textarea
                    rows={6}
                    cols={12}
                    name="idea"
                    id="idea"
                    autoComplete="idea"
                    className="mt-1 block w-full rounded-md border border-gray-400 px-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="vision"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Vision
                  </label>
                  <input
                    type="text"
                    name="vision"
                    id="vision"
                    autoComplete="vision"
                    className="mt-1 block w-full rounded-md border border-gray-400 px-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="status"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Present Status
                  </label>
                  <textarea
                    rows={3}
                    cols={12}
                    name="status"
                    id="status"
                    autoComplete="status"
                    className="mt-1 block w-full rounded-md border border-gray-400 px-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="street-address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Documents to be attached
                  </label>
                  <input
                    type="file"
                    id="docpicker"
                    accept=".doc,.docx,.pdf"
                    className="mt-1"
                  />
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="plan"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Business Plan
                  </label>
                  <textarea
                    rows={5}
                    cols={12}
                    name="plan"
                    id="plan"
                    autoComplete="plan"
                    className="mt-1 block w-full rounded-md border border-gray-400 px-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="needs"
                    className="block text-sm font-medium text-gray-700"
                  >
                    What are you looking for
                  </label>
                  <textarea
                    rows={2}
                    cols={12}
                    name="needs"
                    id="needs"
                    autoComplete="needs"
                    className="mt-1 block w-full rounded-md border border-gray-400 px-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button
                type="submit"
                className="block w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
