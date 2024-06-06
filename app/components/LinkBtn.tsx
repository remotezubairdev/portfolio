import Link from 'next/link'
import React from 'react'

interface LinkBtnProps {
    path: string;
    name: string;
    outline?: boolean;
    small?: boolean;
    icons?: any;
}

const LinkBtn = ({ path, name, outline, small, icons } : LinkBtnProps) => {
  return (
    <Link href={path} className={`flex items-center gap-2 text-center h-fit w-fit ${outline ? "text-gray-900 bg-white" : "text-neutral-200 border border-neutral-700"} 
    rounded ${small ? "p-2 text-[12px] font-medium" : "px-4 py-2 font-bold"}`}>
      {
        icons ? (
          <>
          {icons}
          </>
        ) : ""
      }
        {name}
    </Link>
  )
}

export default LinkBtn