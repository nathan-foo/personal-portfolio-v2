"use client";

import React, { useRef } from 'react';
import Title from './Title';
import gsap from 'gsap';
import PolygonMask from './PolygonMask';
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
    <section className='hero-section relative w-screen mt-6'>
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
        
      </div>
    </section>
  )
}

export default Hero;