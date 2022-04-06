import { CardMembership } from '@mui/icons-material'
import Link from 'next/link'

function Team() {
  const team = [
    {
      link: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
      name: 'Mr. Mosh',
      urlLinkedIn: 'https://in.linkedin.com/in/arash-arora',
      profession: 'Programmer',
    },
    {
      link: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
      name: 'Mr. Mosh',
      urlLinkedIn: 'https://in.linkedin.com/in/arash-arora',
      profession: 'Programmer',
    },
    {
      link: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
      name: 'Mr. Mosh',
      urlLinkedIn: 'https://in.linkedin.com/in/arash-arora',
      profession: 'Programmer',
    },
    {
      link: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
      name: 'Mr. Mosh',
      urlLinkedIn: 'https://in.linkedin.com/in/arash-arora',
      profession: 'Programmer',
    },
    {
      link: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
      name: 'Mr. Mosh',
      urlLinkedIn: 'https://in.linkedin.com/in/arash-arora',
      profession: 'Programmer',
    },
    {
      link: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
      name: 'Mr. Mosh',
      urlLinkedIn: 'https://in.linkedin.com/in/arash-arora',
      profession: 'Programmer',
    },
  ]
  return (
    <div className="mx-auto mt-20 flex max-w-6xl">
      <div className="text-justify">
        <div>
          <h1 className="text-5xl font-bold">team</h1>
          <p className="text-md mt-2 text-[#999]">
            Meet our diverse team of professionals
          </p>
        </div>
        <div className="mt-10 flex flex-row flex-wrap items-center justify-center gap-3 md:justify-start">
          {team.map((member) => {
            return (
              <Link href={member.urlLinkedIn}>
                <div className="mb-10 cursor-pointer">
                  <div className="group w-[200px] md:w-[375px]">
                    <img
                      src={member.link}
                      alt=""
                      className="h-full w-full transition group-hover:-translate-y-4 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3 text-center">
                    <h1 className="text-2xl font-semibold">{member.name}</h1>
                    <h3 className="text-md font-medium text-blue-600">
                      {member.profession}
                    </h3>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Team