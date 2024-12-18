"use client";

import React, { useRef } from 'react';
import Title from './Title';
import gsap from 'gsap';
import PolygonMask from './PolygonMask';
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo('.hero-section', {
      opacity: 0,
      y: 20,
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
    });
  });

  const frameRef = useRef('null');

  const handleMouseLeave = () => {
    const element = frameRef.current;

    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      ease: 'power1.inOut',
    });
  }
  
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerY) / centerX) * 5;

    gsap.to(element, {
      duration: 0.3,
      rotateX, rotateY,
      transformPerspective: 500,
      ease: 'power1.out',
    });
  }

  return (
    <section className='hero-section w-screen mt-6'>
      <div className='flex size-full flex-col items-center py-10 pb-24'>
        <p className='text-sm uppercase md:text-[10px]'>Hello, my name is</p>
        <div className='relative size-full'>
          <Title
            title='Nathan Foo'
            containerClass='mt-2 relative z-10 text-4xl md:text-6xl mix-blend-difference'
          />
          <div className='hero-img-container'>
            <div className='hero-img-mask'>
              <div className='mt-4 md:mt-0'>
                <img
                  ref={frameRef}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                  src='/images/headshotcrop.png'
                  alt='image'
                  className='object-contain'
                />
              </div>
            </div>
            <PolygonMask />
          </div>
        </div>
        <div className='-mt-80 flex w-full justify-center md:mt-[-22rem] md:me-44 md:justify-end'>
          <div className='flex h-full z-10  w-fit flex-col items-center md:items-start'>
            <p className='mt-80 md:mt-[2rem] max-w-sm text-center md:text-start'>
              I'm a full-stack software engineer, currently pursuing a computer science degree at UT Austin.
            </p>
            <Link href='/contact'>
              <Button
                id='hero-button'
                title={`Let's Connect`}
                rightIcon={<TiLocationArrow />}
                containerClass='mt-5 flex items-center justify-center gap-1'
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;