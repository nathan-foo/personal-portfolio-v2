import React from 'react';

const Widget = ({ title, href }) => {

  return (
    <button
        className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-[#edff66] px-7 py-3 text-black pointer-events-none`}
    >
        <span className='relative overflow-hidden text-xs uppercase'>
            <div>
                {title}
            </div>
        </span>
    </button>
  )
}

export default Widget;