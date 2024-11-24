import React from 'react';
import Image from 'next/image';

import LinkBtn from '@/app/components/LinkBtn';
import { BsArrowLeft } from 'react-icons/bs';
import { Metadata } from 'next';
import { projectProps } from '@/app/props/projectProps';

export async function generateMetadata({ params }: { params: { slug: string }}): Promise<Metadata> {
  
  const response = await fetch("http://localhost:3000/api/projects");
  const projects: projectProps[] = await response.json();
  const currentProject = projects.find(project => String(project._id) === params.slug);

  return {
    title: currentProject?.title,
    description: currentProject?.description,
  }
}

const ProjectPage = async ({ params }: { params: { slug: string }}) => {
  const response = await fetch(`http://localhost:3000/api/projects/${params.slug}`);
  const projects: projectProps[] = await response.json();
  const currentProject = projects[0];

  if (!currentProject) {
    return <div className="flex justify-center items-center h-screen">
             <h2 className="text-2xl font-bold text-red-500">Project not found</h2>
           </div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-4">
        <LinkBtn icons={<BsArrowLeft />} small={true} path="/admin" name="back to admin page" />
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

