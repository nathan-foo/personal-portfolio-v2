import React from 'react';
import { TiLocationArrow } from 'react-icons/ti';

const Widget = ({ title, href }) => {

  return (
    <button
        className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-[#ffff27] px-7 py-3 text-black fill-black pointer-events-none flex items-center justify-center gap-1 outline outline-1 outline-black`}
    >
        <span className='relative overflow-hidden text-xs uppercase'>
            <div>
                {title}
            </div>
        </span>
        <TiLocationArrow />
    </button>
  )
}

export default Widget;