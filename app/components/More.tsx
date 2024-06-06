import React from 'react'

const More = () => {
  return (
    <section className='mt-10'>
        <h3 className="text-2xl font-medium tracking-tighter text-white">
            my education
        </h3>

        <div className='my-4'>
            <div className='flex flex-wrap justify-between items-center'>
                <div className='flex flex-col'>
                <h2 className='text-lg font-semibold'>High School</h2>
                <h4 className='text-md'>Defence Cambridge Campus</h4>
                <div className='text-sm text-neutral-400'>Lahore, Pakistan</div>
                </div>
                <p>2023-2026</p>
            </div>
        </div>
    </section>
  )
}

export default More