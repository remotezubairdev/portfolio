import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LinkBtn from './LinkBtn';
import { projectProps } from '../props/projectProps';
import { FaPencil } from 'react-icons/fa6';

const AdminProjects = async () => {
  const response = await fetch("http://localhost:3000/api/projects/")
  const projects: projectProps[] = await response.json();
  return (
    <section className='mt-8'>
      <div className='flex items-center justify-between'>
          <h2 className="text-2xl font-medium tracking-tighter text-white">
            my projects
          </h2>
          <LinkBtn small={true} path="/admin/new-project" name="New project +" />
      </div>

      <div className='rounded-xl grid sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-1 w-full bg-neutral-900 mt-4 p-4'>
        {projects.map((project) => (
              <Link href={`admin/projects/${project._id}`} key={project._id}>
                <div className='relative hover:opacity-50'>
                  <Image
                    src={project.image}
                    width={300}
                    height={200}
                    alt={project.alt}
                    className='rounded-lg'
                  />
                  <span className='absolute flex items-center justify-center gap-2 inset-x-0 top-[45%] font-semibold text-black text-xl text-center'>
                    <FaPencil /> Edit Project
                  </span>
                </div>
                
                <div className='my-5'>
                    <h4 className='mt-2 text-md font-semibold tracking-tighter text-white'>{project.title}</h4>
                    <p className='text-neutral-300 font-medium text-sm'>{project.description}</p>
                </div>
              </Link>
            )
        )}  
      </div>
    </section>
  );
}

export default AdminProjects;
