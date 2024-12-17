import React from 'react';
import Card from './Card';
import CardTilt from './CardTilt';

const Features = () => {
  return (
    <section className='pb-52'>
        <div className='container mx-auto px-3 md:px-10'>
            <div className='px-5 py-32'>
                <p className='text-lg'>
                    Some cool text
                </p>
                <p className='max-w-md text-lg opacity-50'>
                    Even more cool text that you definitely shouldn't ignore because it's so cool and awesome and yeah please give me a job please please please
                </p>
            </div>
            <CardTilt className='mb-7 h-96 w-full overflow-hidden md:h-[65vh]'>
                <Card
                    src={'videos/temp-vid.mp4'}
                    title='Project'
                    description='This is a project highlight.'
                    href={null}
                    isComingSoon={true}
                />
            </CardTilt>
            <div className='grid h-[135vh] grid-cols-2 grid-rows-3 gap-7'>
                <CardTilt className='row-span-1 md:col-span-1 md:row-span-2'>
                    <Card
                        src={'videos/temp-vid.mp4'}
                        title='Project'
                        description='This is a project highlight.'
                        href={null}
                        isComingSoon={true}
                    />
                </CardTilt>
                <CardTilt className='row-span-1 md:col-span-1'>
                    <Card
                        src={'videos/temp-vid.mp4'}
                        title='Project'
                        description='This is a project highlight.'
                        href={null}
                        isComingSoon={true}
                    />
                </CardTilt>
                <CardTilt className='row-span-1 md:col-span-1'>
                    <Card
                        src={'videos/temp-vid.mp4'}
                        title='Project'
                        description='This is a project highlight.'
                        href={null}
                        isComingSoon={true}
                    />
                </CardTilt>
                <CardTilt className='row-span-1 md:col-span-1'>
                    <Card
                        src={'videos/temp-vid.mp4'}
                        title='Project'
                        description='This is a project highlight.'
                        href={null}
                        isComingSoon={true}
                    />
                </CardTilt>
                <CardTilt className='row-span-1 md:col-span-1'>
                    <Card
                        src={'videos/temp-vid.mp4'}
                        title='Project'
                        description='This is a project highlight.'
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