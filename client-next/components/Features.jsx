import React from 'react';
import Card from './Card';
import CardTilt from './CardTilt';

const Features = () => {
  return (
    <section className='pb-48'>
        <div className='container mx-auto px-3 md:px-10'>
            <div className='px-5 py-32'>
                <p className='text-lg'>
                    I like to build things.
                </p>
                <p className='max-w-md text-lg opacity-50'>
                    But not just anything. Through my apps, I am driven to make a positive difference in the world.
                </p>
            </div>
            <CardTilt className='mb-7 h-96 w-full overflow-hidden md:h-[65vh]'>
                <Card
                    src={'images/bg.png'}
                    title='Coming Soon'
                    description='Something great is in the works.'
                    href={null}
                    isComingSoon={true}
                />
            </CardTilt>
            <div className='grid h-[135vh] grid-cols-2 grid-rows-3 gap-7'>
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