

import React from 'react'
import LinkBtn from '../components/LinkBtn';

import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next';
import { projectProps } from '../props/projectProps';

export const metadata: Metadata = {
  title: "My Projects",
  description: "Made using HTML | CSS | JavaScript | Tailwind CSS | React JS | Next JS by Zubair Dev front end web developer",
  keywords: "zubair dev portfolio | zubair dev projects | html | css | javascript | react js | reactjs | web developer"
}

const page = async () => {
  const res = await fetch("http://localhost:3000/api/projects");
  const projects: projectProps[] = await res.json();
  return (
    <main className='mt-12'>
        <h2 className="text-2xl font-medium tracking-tighter text-white">
        my projects
        </h2>

      <div className='rounded-xl grid sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-1 w-full bg-neutral-900 mt-4 p-4'>
        {projects.map((project, index) => (
          <Link href={`/projects/${project._id}`} key={index} className='hover:-translate-y-1 transition-[0.3s]'>
            <Image
              src={project.image}
              width={300}
              height={200}
              alt={project.alt}
              className='rounded-lg max-h-[200px] object-cover'
            />
            <div className='my-5'>
                <h4 className='mt-2 text-md font-semibold tracking-tighter text-white'>{project.title}</h4>
                <p className='text-neutral-300 font-medium text-sm'>{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}

export default page
