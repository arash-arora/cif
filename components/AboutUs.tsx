import React from 'react'

function AboutUs() {
  const style = {
    about_para: `text-md mt-10 font-bold text-blue-600`,
    about_heading: `text-4xl mb-5 font-semibold text-blue-500`,
  }
  return (
    <div className="mx-auto mt-20 flex max-w-6xl flex-wrap justify-center gap-8 md:flex-nowrap">
      <div className="max-w-lg text-justify">
        <div>
          <h1 className="text-5xl font-bold">About</h1>
        </div>
        <div className="mt-5 font-serif text-[#969696]">
          <p>
            Crest innovations is a Non-Profit Organization registered under
            Section 8 of companies act 2013 and it is a part of Crest Advisors
            Group. We work with founders, ideators and business owners to bring
            Innovation in their respective business and products. We also
            provide smart incubation services to germinate the idea to business
            right from grass root level. Our strength lies in bringing together
            team of highly qualified, skilled and motivated professionals who
            are encouraged to lead, innovate and excel.
          </p>
          <p className="mt-4">
            With our multidisciplinary expertise accentuated by our honored
            board of advisors, across various industry segments, we have brought
            clarity to difficult and complex business situations and to provide
            scalable business propositions with skin in the game.
            {/* <ul className="mt-4 ml-4 list-disc">
              <h1 className="mb-2 text-2xl font-bold">How Wavemakers help</h1>
              <li>
                To choose the program that best fits your needs as a founder
              </li>
              <li>Find your product-market fit</li>
              <li>Build a business that’s financially viable</li>
              <li>Get another pair of eyes on your project</li>
              <li>
                Expand your network Develop new abilities and soft skills as an
                entrepreneur
              </li>
              <li>
                Prepare your pitch to potential investors and partners Develop
                your Executive Summary as you build your business
              </li>
            </ul> */}
          </p>
        </div>
      </div>
      <div className="">
        <img
          src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="waves"
          className="h-full w-full"
        />
      </div>
    </div>
  )
}

export default AboutUs
