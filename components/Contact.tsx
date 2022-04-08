import ContactForm from './Form'
import Map from './Map'

function Contact() {
  return (
    <div className="mx-24">
      <ContactForm />
      <hr className="mt-20" />
      <div className="mt-20 flex flex-col items-center justify-between text-center md:flex-row md:text-left">
        <div>
          <h1 className="mb-10 whitespace-nowrap text-4xl md:mb-0 md:text-4xl">
            Get in Touch
          </h1>
        </div>
        <div className="flex flex-row flex-wrap gap-10 md:flex-col">
          <div>
            <h3 className="text-xl font-semibold">Collaborate</h3>
            <p className="text-[#999]">support@wavemakers.in</p>
            <p className="text-[#999]">+91 8766212312</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Join Our Team</h3>
            <p className="text-[#999]">support@wavemakers.in</p>
            <p className="text-[#999]">+91 8766212312</p>
          </div>
        </div>
        <div className="mt-10 flex flex-row flex-wrap gap-10 md:mt-0 md:flex-col">
          <div>
            <h3 className="text-xl font-semibold">Press</h3>
            <p className="text-[#999]">support@wavemakers.in</p>
            <p className="text-[#999]">+91 8766212312</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Say Hello</h3>
            <p className="text-[#999]">support@wavemakers.in</p>
            <p className="text-[#999]">+91 8766212312</p>
          </div>
        </div>
      </div>
      <hr className="mt-10" />
      <div className="mt-20 flex flex-col items-center justify-between md:flex-row">
        <div>
          <h1 className="mb-10 whitespace-nowrap pr-12 text-4xl md:mb-0">
            Locations
          </h1>
        </div>
        <div className="flex flex-row flex-wrap gap-10 md:flex-col">
          <div>
            <h3 className="text-xl font-semibold">East of Kailash</h3>
            <p className="text-[#999]">support@wavemakers.in</p>
            <p className="text-[#999]">+91 8766212312</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Bahrain</h3>
            <p className="text-[#999]">support@wavemakers.in</p>
            <p className="text-[#999]">+91 8766212312</p>
          </div>
        </div>
        <div className="flex flex-row flex-wrap gap-10 sm:mt-10 md:mt-0 md:flex-col">
          <div>
            <h3 className="text-xl font-semibold">Bhikaji</h3>
            <p className="text-[#999]">support@wavemakers.in</p>
            <p className="text-[#999]">+91 8766212312</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Mumbai</h3>
            <p className="text-[#999]">support@wavemakers.in</p>
            <p className="text-[#999]">+91 8766212312</p>
          </div>
        </div>
      </div>
      <section className="my-20 mb-32 hidden h-[500px] w-full max-w-none md:block">
        <Map />
      </section>
    </div>
  )
}

export default Contact
