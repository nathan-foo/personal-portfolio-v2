import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <section className='pb-28'>
      <div className='container mx-auto px-3 md:px-10'>
        <div className='px-5 pb-8'>
          Let's work together.
        </div>
        <div className='flex items-start justify-between px-5 opacity-50'>
          <div className='flex flex-col'>
            <Link href='/' className='py-2'>Home &#8599;</Link>
            <Link href='/about' className='py-2'>About &#8599;</Link>
          </div>
          <div className='flex flex-col'>
            <Link href='/work' className='py-2'>Work &#8599;</Link>
            <Link href='/contact' className='py-2'>Contact &#8599;</Link>
          </div>
          <div className='flex flex-col'>
            <a href='https://www.linkedin.com/in/nathan-foo/' target='_blank' className='py-2'>LinkedIn &#8599;</a>
            <a href='https://github.com/nathan-foo' target='_blank' className='py-2'>GitHub &#8599;</a>
          </div>
          <div className='flex flex-col'>
            <p className='py-2'>nathanfoo@utexas.edu</p>
            <a href='#' target='_blank' className='py-2'>Resume &#8599;</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer;