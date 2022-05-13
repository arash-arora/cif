import member from './members'
export default function main_com() {
  return (
    <div className="mx-auto mt-8 max-w-7xl py-10 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="mb-5 text-4xl font-bold">Meet The Leadership</h1>
        <p className="text-md text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus sit quod voluptate laboriosam quasi tempora cupiditate
          sunt placeat amet minima recusandae ab quos atque velit quisquam,
          consequatur temporibus, ex totam quidem. Unde, minus perferendis.
        </p>
      </div>

      <div className="mt-20 flex flex-wrap items-center justify-between gap-16 gap-y-24">
        {member.map((mem) => {
          return (
            <div
              key={mem.id}
              className="flex min-w-[250px] flex-col items-center"
            >
              <img
                src={
                  mem.img ||
                  'https://cdn-icons-png.flaticon.com/128/847/847969.png'
                }
                alt=""
                className="h-24 w-24 rounded-full"
              />
              <div className="mt-3 flex h-[60px] max-w-[240px] flex-col items-center justify-between text-center">
                <h3 className="block w-full text-xl">{mem.name}</h3>
                <p className="text-gray-400">{mem.des}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
