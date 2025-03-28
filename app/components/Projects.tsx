import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LinkBtn from './LinkBtn';
import { projectProps } from '../props/projectProps';

const Projects = async () => {
  const response = await fetch("http://localhost:3000/api/projects")
  const projects: projectProps[] = await response.json();
  return (
    <section className='mt-8'>
      <div className='flex items-center justify-between'>
          <h2 className="text-2xl font-medium tracking-tighter text-white">
            my projects
          </h2>
          <LinkBtn small={true} path="/projects" name="View more" />
      </div>

      <div className='rounded-xl grid sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-1 w-full bg-neutral-900 mt-4 p-4'>
        {projects.map((project) => {
            return (
              <Link href={`/projects/${project._id}`} key={project._id}>
                <Image
                  src={project.image}
                  width={300}
                  height={200}
                  alt={project.alt}
                  className='rounded-lg'
                />
                <div className='my-5'>
                    <h4 className='mt-2 text-md font-semibold tracking-tighter text-white'>{project.title}</h4>
                    <p className='text-neutral-300 font-medium text-sm'>{project.description}</p>
                </div>
              </Link>
            )
          }
        )}  
      </div>
    </section>
  );
}

export default Projects;
