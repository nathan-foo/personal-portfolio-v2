"use client";

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.about-text',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: false,
        toggleActions: 'play none none reverse',
      }
    });
    
    tl.to('.about-text', {
      y: -80
    });
  });

  return (
    <section className='relative pt-48 pb-12 z-20'>
      <div className='container mx-auto px-3 md:px-10'>
        <div className='about-text flex flex-col items-center justify-center'>
          <p className='font-black text-4xl md:text-6xl'>
            Dream Bigger.
          </p>
          <p className='py-12 opacity-50 max-w-[28rem] text-center'>
            ...is what I tell myself each day. Because settling for less is never an option.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About;