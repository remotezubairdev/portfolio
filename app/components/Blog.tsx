import React from 'react'
import Link from 'next/link'

interface BlogProps {
  id: number;
  title: string;
  body: string;
  date: string;
}

const Blog = ({ id, title, body, date } : BlogProps) => {
  return (
    <Link href={`/blog/${id}`} className='flex flex-wrap justify-between items-center'>
      <div>
        <h3>{title}</h3>
        <p className='text-sm text-neutral-400'>{body.length > 8 ? body.split("", 42) : ""}...</p>
      </div>

      <p className='text-sm text-neutral-400'>{date}</p>
    </Link>
  )
}

export default Blog