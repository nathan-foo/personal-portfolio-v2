"use client";

import React from 'react';
import { TiLocationArrow } from 'react-icons/ti';
import { useRouter } from 'next/navigation';
import Widget from './Widget';

const Card = ({ src, title, description, href, isComingSoon }) => {
    const router = useRouter();

    const handleClick = () => {
        if (href) {
            router.push(href);
        }
    }

  return (
    <div className='relative size-full' onClick={handleClick}>
        <img
            src={src}
            // loop
            // muted
            // autoPlay
            className='absolute left-0 top-0 size-full object-cover object-center'
        />
        <div className='relative z-10 flex flex-col size-full justify-between p-5'>
            <div>
                <h1 className='card-title'>{title}</h1>
                {description && (
                    <p className='mt-3 max-w-64 text-xs md:text-sm text-blue-50'>
                        {description}
                    </p>
                )}
            </div>
            {isComingSoon && (
                <Widget title='Coming Soon' />
            )}
            {/* <TiLocationArrow className='m-5 scale-[5] self-end fill-[#edff66]' /> */}
        </div>
    </div>
  )
}

export default Card;