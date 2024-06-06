import React from 'react'
import LinkBtn from '../components/LinkBtn';

import Image from 'next/image'
import Link from 'next/link'
import { projects } from '../constants';

const page = () => {
  return (
    <main className='mt-12'>
        <h2 className="text-2xl font-medium tracking-tighter text-white">
        my projects
        </h2>

      <div className='rounded-xl grid sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-1 w-full bg-neutral-900 mt-4 p-4'>
        {projects.map((project, index) => (
          <Link href={`/projects/${project.id}`} key={index} className='hover:-translate-y-1 transition-[0.3s]'>
            <Image
              src={project.image}
              width={project.width}
              height={project.height}
              alt={project.alt}
              className='rounded-lg'
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