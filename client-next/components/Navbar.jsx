"use client";

import React, { useEffect, useRef, useState } from 'react';
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';
import Link from 'next/link';

const navItems = [
    'About', 'Work', 'Contact',
];

const Navbar = () => {
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isNavVisible, setIsNavVisible] = useState(true);

    const navContainerRef = useRef(null);

    const { y: currentScrollY } = useWindowScroll();

    useEffect(() => {
        if (currentScrollY === 0) {
            setIsNavVisible(true);
            navContainerRef.current.classList.remove('floating-nav');
        } else if (currentScrollY > lastScrollY) {
            setIsNavVisible(false);
            navContainerRef.current.classList.add('floating-nav');
        } else if (currentScrollY < lastScrollY) {
            setIsNavVisible(true);
            navContainerRef.current.classList.add('floating-nav');
        }
        setLastScrollY(currentScrollY);
    }, [currentScrollY, lastScrollY]);

    useEffect(() => {
        gsap.to(navContainerRef.current, {
            y: isNavVisible ? 0 : -100,
            opacity: isNavVisible ? 1 : 0,
            duration: 0.1,
        });
    }, [currentScrollY]);
    
  return (
    <div ref={navContainerRef} className='fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6'>
        <header className='absolute top-1/2 w-full -translate-y-1/2'>
            <nav className='flex size-full items-center justify-between p-4'>
                <div className='flex items-center gap-7'>
                  <Link href='/'>
                    <Button
                        id='product-button'
                        title='#ntfoo'
                        containerClass='bg-blue-50 md:flex hidden items-center justify-center gap-1'
                    />
                  </Link>
                </div>
                <div className='flex h-full items-center'>
                    <div className='hidden md:block'>
                        {navItems.map((item) => (
                            <Link key={item} href={`/${item.toLowerCase()}`} className='nav-hover'>
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Navbar;