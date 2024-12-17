import React from 'react';
import { TiLocationArrow } from 'react-icons/ti';

const Widget = ({ title, href }) => {

  return (
    <button
        className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-[#edff66] px-7 py-3 text-black pointer-events-none flex items-center justify-center gap-1`}
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