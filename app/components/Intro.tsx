import React from 'react'
import Link from 'next/link'

import Image from 'next/image'
import LinkBtn from './LinkBtn'
import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

const Intro = () => {
  return (
    <article className='mt-12'>
        <h1 className="text-2xl font-medium tracking-tighter text-white">
            Hey, I'm Zubair Dev ⭐
        </h1>

        <p className='mt-8 max-w-2xl text-slate-300'>
            Front-end web developer specializing with <Link href="https://nextjs.org/" target="_blank" className="font-semibold inline-flex items-center rounded border border-neutral-200 bg-white p-1 text-sm leading-4 text-neutral-900 no-underline"><Image src="/logos/next-logo.svg" width={14} height={18} className='mr-1' alt="next_logo" />Next.js</Link> built on top of {" "}
            <Link href="https://react.dev/" target="_blank" className="font-semibold inline-flex items-center rounded border border-neutral-700 bg-gray-900 p-1 text-sm leading-4 text-slate-200 no-underline"><Image src="/logos/react.svg" width={14} height={18} className='mr-1' alt="next_logo" />React.js</Link> I have made 
            many modern projects from complete scratch. See my self-learning journey 
            at <Link href='/blog/1' className='underline text-blue-500'>blog</Link> including YouTube resources.
        </p>

        <div className='flex items-center flex-wrap gap-3 mt-7'>
          <LinkBtn outline={true} path='/contact' name='Contact Me' />
          <LinkBtn icons={<FaGithub size={16} />} small={true} path='https://github.com/remotezubairdev' name='GitHub' />
          <LinkBtn icons={<FaFacebook size={16} />} small={true} path='https://www.facebook.com/p/Zubair-Dev-61556278371334/?mibextid=LQQJ4d&wtsid=rdr_0N6ZAvKDVdW63gO1L&paipv=0&eav=AfasNpxeuzMqfcSjiFe9awkqC5MTxfpWxf_as1Sst1h4enjjXbW7GP0HM539E6tLLrs&_rdr' name='Facebook' />
          <LinkBtn icons={<FaInstagram size={16} />} small={true} path='https://www.instagram.com/zubairasifdar/' name='Instagram' />
        </div>

        <div className='flex flex-col gap-1 my-7 text-sm'>
            <div className='flex items-center gap-2'>
              <MdEmail size={23} />
              remotezubairdev@gmail.com
            </div>
            <div className='flex items-center gap-2'>
              <MdPhone size={23} />
              +92 332 875 4442
            </div>
        </div>
    </article>
  )
}

export default Intro