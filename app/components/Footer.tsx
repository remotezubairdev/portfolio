import React from 'react'
import LinkBtn from './LinkBtn'
import { BiRightArrow } from 'react-icons/bi'

const Footer = () => {
  return (
    <footer className='mt-12 flex items-center gap-5'>
        <LinkBtn small={true} icons={<BiRightArrow />} path="/quote" name='Need a Quote?' />
        <LinkBtn small={true} icons={<BiRightArrow />} path="/blog/1" name='Why next js?' />
    </footer>
  )
}

export default Footer