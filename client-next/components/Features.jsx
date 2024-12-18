"use client";

import React from 'react';
import Card from './Card';
import CardTilt from './CardTilt';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

const Features = () => {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
      const textTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.feature-text',
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: false,
          toggleActions: 'play none none reverse',
        }
      });
      
      textTl.to('.feature-text', {
        y: -80
      });

      const cardTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.header-card',
          start: '-5% bottom',
          end: 'bottom bottom',
          scrub: false,
          toggleActions: 'play none none reverse',
        }
      });
      
      cardTl.to('.header-card', {
        y: -80
      });

      const gridTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.grid-card',
          start: '-5% bottom',
          end: 'bottom bottom',
          scrub: false,
          toggleActions: 'play none none reverse',
        }
      });
      
      gridTl.to('.grid-card', {
        y: -80
      });
    });

  return (
    <section className='pb-40 relative z-20'>
        <div className='container mx-auto px-3 md:px-10'>
            <div className='feature-text px-5 pt-24 pb-32'>
                <p className='text-lg'>
                    I like to build things.
                </p>
                <p className='max-w-md text-lg opacity-50'>
                    Especially things that make people go <i>"wow"</i>. Here's some of my coolest work.
                </p>
            </div>
            <div className='header-card'>
                <CardTilt className='mb-7 h-96 w-full overflow-hidden md:h-[65vh]'>
                    <Card
                        src={'images/bg.png'}
                        title='Coming Soon'
                        description='Something great is in the works.'
                        href={null}
                        isComingSoon={true}
                    />
                </CardTilt>
            </div>
            <div className='grid-card grid h-[90vh] grid-cols-2 grid-rows-2 gap-7'>
                <CardTilt className='row-span-1 md:col-span-1 md:row-span-2'>
                    <Card
                        src={'images/bg.png'}
                        title='Coming Soon'
                        description='Something great is in the works.'
                        href={null}
                        isComingSoon={true}
                    />
                </CardTilt>
                <CardTilt className='row-span-1 md:col-span-1'>
                    <Card
                        src={'images/bg.png'}
                        title='Coming Soon'
                        description='Something great is in the works.'
                        href={null}
                        isComingSoon={true}
                    />
                </CardTilt>
                <CardTilt className='row-span-1 md:col-span-1'>
                    <Card
                        src={'images/bg.png'}
                        title='Coming Soon'
                        description='Something great is in the works.'
                        href={null}
                        isComingSoon={true}
                    />
                </CardTilt>
            </div>
        </div>
    </section>
  )
}

export default Features;