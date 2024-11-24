'use client'
import React from 'react'
import { FaUpload } from 'react-icons/fa'

const page = () => {
    const handleChange = (e: any) => {

    }
    const submitChanges = () => {

    }
  return (
    <div className='mx-auto max-w-xl text-center'>
        <h1 className='text-2xl font-medium tracking-tighter text-white'>
            New Project
        </h1>
        <button className="hover:bg-white hover:text-neutral-900 ease-in-out transition-[0.3s] text-neutral-300 bg-transparent my-2 p-2 flex items-center justify-center gap-3 w-full border border-neutral-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            <FaUpload size={14} />
            Upload an image
        </button>
        <input
            type="text"
            placeholder='Alt (Describe your image)'
            name='alt'
            onChange={(e) => handleChange(e)}
            className="bg-transparent my-2 p-2 block w-full border border-neutral-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        <input
            type="text"
            placeholder='Title'
            name='username'
            onChange={(e) => handleChange(e)}
            className="bg-transparent my-2 p-2 block w-full border border-neutral-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        <textarea
            placeholder='Description'
            rows={6}
            className='bg-transparent my-2 p-2 block w-full border border-neutral-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
        >

        </textarea>
        <button
            onClick={() => submitChanges()}
            className="w-full bg-white text-neutral-900 font-semibold mt-2 py-2 px-4 rounded-md shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Create New Project
          </button>
    </div>
  )
}

export default page