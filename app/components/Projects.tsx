import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LinkBtn from './LinkBtn';
import { projects } from '../constants';

const Projects = () => {
  return (
    <article className='mt-8'>
      <div className='flex items-center justify-between'>
          <h2 className="text-2xl font-medium tracking-tighter text-white">
            my projects
          </h2>
          <LinkBtn small={true} path="/projects" name="View more" />
      </div>

      <div className='rounded-xl grid sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-1 w-full bg-neutral-900 mt-4 p-4'>
        {projects.map((project, index) => {
          if (index < 3) {
            return (
              <div key={index}>
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
              </div>
            )
          }
        })}  
      </div>
    </article>
  );
}

export default Projects;
