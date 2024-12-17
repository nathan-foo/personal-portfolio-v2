import React from 'react'
import { TiLocationArrow } from 'react-icons/ti'

const Card = ({ src, title, description }) => {
  return (
    <div className='relative size-full'>
        <video
            src={src}
            loop
            muted
            autoPlay
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
            {/* <TiLocationArrow className='m-5 scale-[5] self-end fill-blue-300' /> */}
        </div>
    </div>
  )
}

export default Card