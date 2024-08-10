import React from 'react';
import Image from 'next/image';

const skills = [
  { name: 'React.js', logo: '/logos/react.svg', bgColor: 'bg-gray-900', textColor: 'text-slate-200' },
  { name: 'Next.js', logo: '/logos/next-logo.svg', bgColor: 'bg-white', textColor: 'text-gray-800' },
  { name: 'HTML', bgColor: 'bg-red-500', textColor: 'text-gray-200' },
  { name: 'JavaScript', bgColor: 'bg-green-500', textColor: 'text-gray-200' },
  { name: 'CSS3', bgColor: 'bg-purple-500', textColor: 'text-gray-200' },
  { name: 'Tailwind CSS', bgColor: 'bg-blue-500', textColor: 'text-gray-200' },
  { name: 'Front end Web Development', bgColor: 'bg-yellow-500', textColor: 'text-gray-200' },
];

const AboutLayout = () => {
  return (
    <article className='mt-10'>
      <h2 className="text-2xl font-medium tracking-tighter text-white">
        my skills
      </h2>

      <div className='mt-4 flex items-center gap-2 flex-wrap'>
        {skills.map((skill, index) => (
          <div key={index} className={`min-w-sm font-semibold inline-flex items-center rounded ${skill.bgColor} p-1 text-sm leading-4 ${skill.textColor} no-underline`}>
            {skill.logo && <Image src={skill.logo} width={14} height={18} className='mr-1' alt={`${skill.name}_logo`} />}
            {skill.name}
          </div>
        ))}
      </div>
    </article>
  );
}

export default AboutLayout;
