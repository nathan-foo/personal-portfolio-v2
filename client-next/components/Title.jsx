import React from 'react';

const Title = ({ title, containerClass }) => {
  return (
    <div className={`font-black uppercase text-6xl flex justify-center items-center ${containerClass}`}>
        {title}
    </div>
  )
}

export default Title;