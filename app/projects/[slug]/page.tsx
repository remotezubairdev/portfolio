import { projects } from '@/app/constants';
import React from 'react';
import Image from 'next/image';

import LinkBtn from '@/app/components/LinkBtn';
import { BsArrowLeft } from 'react-icons/bs';

const ProjectPage = ({ params }: { params: { slug: string }}) => {
  const currentProject = projects.find(project => project.id == params.slug);

  if (!currentProject) {
    return <div className="flex justify-center items-center h-screen">
             <h2 className="text-2xl font-bold text-red-500">Project not found</h2>
           </div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-4">
        <LinkBtn icons={<BsArrowLeft />} small={true} path="/projects" name="back to projects" />
      </div>
      <div className="mb-6">
        <Image 
          src={currentProject.image} 
          alt={currentProject.alt} 
          width={600} 
          height={200} 
          className="rounded-lg shadow-md"
        />
      </div>
      <h2 className="text-3xl font-bold mb-4">{currentProject.title}</h2>
      <p className="text-lg text-gray-200">{currentProject.description}</p>
    </div>
  );
}

export default ProjectPage;
