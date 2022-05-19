import Link from 'next/link'
import { BsCaretRight } from 'react-icons/bs'
import member from './members'

const member1: any[] = []
const chooseRandom = (arr: string | any[], num = 1) => {
  for (let i = 0; i < num; ) {
    const random = Math.floor(Math.random() * arr.length)
    if (member1.indexOf(arr[random]) !== -1) {
      continue
    }
    member1.push(arr[random])
    i++
  }
}
chooseRandom(member, 6)

export default function committee() {
  return (
    <div className="mx-auto mt-20 max-w-7xl py-14 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-20 md:flex-row">
        <div className="max-w-lg">
          <h1 className="mb-8 text-4xl font-bold">Meet The Leadership</h1>
          <p className="text-md text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus sit quod voluptate laboriosam quasi tempora
            cupiditate sunt placeat amet minima recusandae ab quos atque velit
            quisquam, consequatur temporibus, ex totam quidem. Unde, minus
            perferendis.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-12 gap-x-1">
          {member1.map((mem) => {
            return (
              <div className="flex max-w-[250px]" key={mem.id}>
                <img
                  src={
                    mem.img ||
                    'https://cdn-icons-png.flaticon.com/128/847/847969.png'
                  }
                  alt=""
                  className="h-24 w-24 rounded-full"
                />
                <div className="ml-5 flex flex-col justify-center">
                  <h3 className="block w-full text-xl">{mem.name}</h3>
                  <p>{mem.des}</p>
                </div>
              </div>
            )
          })}
          <div className="group block w-[300px] rounded border-2 border-white bg-blue-600 py-2 text-center text-white transition hover:border-2 hover:border-blue-600 hover:bg-white hover:text-blue-600">
            <Link href="/team">
              <a className="flex items-center justify-center gap-1 text-lg text-white group-hover:text-blue-600">
                View More
                <BsCaretRight className="relative top-0.5" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
