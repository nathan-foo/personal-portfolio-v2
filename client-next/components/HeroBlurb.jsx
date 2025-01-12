import Link from 'next/link'
import React from 'react'
import Button from './Button'
import { TiLocationArrow } from 'react-icons/ti'

const HeroBlurb = () => {
    return (
        <div className='absolute bottom-[10%] right-[10%] z-20 max-w-sm'>
            <div className='flex flex-col items-center justify-center md:items-start'>
                <p className='text-center md:text-start'>
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
    )
}

export default HeroBlurb