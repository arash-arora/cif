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
          <h1 className=" text-5xl font-bold">about</h1>
        </div>
        <div className="mt-5 font-serif text-[#969696]">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            officia exercitationem nemo corrupti obcaecati animi vel vitae
            dolorum, nobis asperiores unde quaerat explicabo hic aspernatur
            excepturi cupiditate quibusdam qui quam, natus voluptates!
            Perspiciatis necessitatibus quos possimus provident maiores
            dignissimos eaque beatae vel aliquid reprehenderit magni illo facere
            ipsa quod nam repellat qui vero tempora, consequuntur at cum!
            Maiores eum quaerat repudiandae iusto ducimus. Sit atque doloribus
            nostrum veniam provident error excepturi sed hic velit. Est
            accusamus voluptatum cupiditate perspiciatis iste.
          </p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fuga
            quia incidunt voluptates dignissimos voluptatibus dolorum corrupti
            animi nulla odio, exercitationem ipsum porro similique totam.
            Impedit placeat itaque corrupti dignissimos vero nobis adipisci
            soluta reiciendis, dolorum animi. Nostrum odio voluptatum expedita,
            possimus excepturi adipisci ad voluptas sed, fuga quo fugiat saepe
            debitis iste corporis aliquid dolorem suscipit, autem voluptates a
            ea dolores? Error nemo inventore labore magni quibusdam accusamus
            omnis alias aliquam fugiat odio doloremque enim, amet voluptatem
            autem iure.
            <ul className="mt-4 ml-4 list-disc">
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
            </ul>
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
