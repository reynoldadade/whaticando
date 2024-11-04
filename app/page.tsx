import Image from 'next/image'
import LeaderSvg from '../public/Leader.svg'
import Link from 'next/link'
import { IconCornerUpRight } from '@tabler/icons-react'
export default function Home() {
  return (
    <div className="px-40 grid grid-cols-2 gap-6 py-10">
      <Image
        priority
        src={LeaderSvg}
        alt="Follow us on Twitter"
      />
      <section>
        <p className="mb-3 text-foreground  first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-primary  first-letter:me-3 first-letter:float-start">
          Hello, my name is Reynold and this is my portfolio page, where I showcase my skills on
          projects. I want to do things a bit differently here, I will generally discuss problems
          and how to solve unique situations I encountered, you can check usecases for interesting
          scenarios I have worked on.
        </p>
        <p className="text-foreground">
          Look around and lets talk about how we can work together to solve your problems.
        </p>
      </section>
      <div className="col-span-1">
        <h2 className=" text-primary italic">About Me</h2>
        <p className="text-foreground">
          I am a software engineer with a passion for solving problems. But I also enjoy building
          teams and improving developer experiences. I currently work as a lead focusing a tech
          leadership and engineering management. If you want a 50/50 leader, I am your best bet, as
          I am a big IC as well as a dedicated team manager. I can scale up the skills in your
          frontend team and prepare them to handle more complex tasks. I gravitate towards servant
          leadership, where I am always looking out for the team and making sure they have what they
          need to succeed but I am also going to be your strongest tech leader, making sure we are
          always on the right path.
        </p>
      </div>
      <div className="p-2">
        <Link
          className="p-2 flex gap-2 hover:text-primary hover:font-semibold transition-all delay-75"
          href={'/usecases'}
        >
          <span>
            <IconCornerUpRight className="w-6 h-6" />
          </span>
          <span> Check out some of the interesting problems I have solved.</span>
        </Link>
      </div>
    </div>
  )
}
