import React from 'react'
import Blog from '../components/Blog'
import { blogs } from '../constants'

const page = () => {
  return (
    <main className='mt-12'>
        <h3 className="mb-8 text-2xl font-medium tracking-tighter text-white">
            blogs by me
        </h3>
        <div className='flex flex-col gap-3'>
        {
            blogs.map(blog => (
                <Blog key={blog.title} title={blog.title} body={blog.body} 
                date={blog.date} id={blog.id} />
            ))
        }
        </div>
        
    </main>
  )
}

export default page