import React from 'react'
import { useState } from 'react';
import Logo from '../public/excel1.png'
import Link from 'next/link'

// const btn = document.getElementById('menu-btn')
// const nav = document.getElementById('menu')

// btn.addEventListener('click', () => {
//   btn.classList.toggle('open')
//   nav.classList.toggle('flex')
//   nav.classList.toggle('hidden')
// })

const Navbar = () => {     
    const [open, setOpen] = useState(false);

    //const btn = document.getElementById('menu-btn')
    //const nav = document.getElementById('menu')

    const handleMenuClick = (e) => {
      setOpen((prev) => !prev);

      //console.log(e.target);
    //   btn.classList.toggle('open')
    //   nav.classList.toggle('flex')
    //   nav.classList.toggle('hidden')
    };

  return (
    <div>
        <nav className='relative container mx-auto p-6'>
            {/* Flex Container */}
            <div className='flex items-center justify-between'>

                {/* Logo */}
                <div className='pt-2'>
                    <img src={Logo.src} alt='logo' className='h-28'></img>
                </div>

                {/* Menu Items */}
                <div className='hidden space-x-6 md:flex'>
                    <Link href='/'><a className='hover:text-darkGrayishBlue font-semibold'>Inicio</a></Link>
                    <Link href='/farmacia'><a className='hover:text-darkGrayishBlue font-semibold'>Servicios</a></Link>
                    <Link href='/about'><a className='hover:text-darkGrayishBlue font-semibold'>Sobre nosotros</a></Link>
                    <Link href='/contact'><a className='hover:text-darkGrayishBlue font-semibold'>Contactanos</a></Link>
                </div>

                {/* Button
                <div>
                    <a href='/' className='hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block'>Contactanos</a>
                </div>
                */}

                {/* Hambuger Icon */}
                <button
                    id='menu-btn'
                    className={`block hamburger md:hidden focus:outline-none ${open && 'open'}`}
                    onClick={() => handleMenuClick()}
                     >
                    <span className='hamburger-top'></span>
                    <span className='hamburger-middle'></span>
                    <span className='hamburger-bottom'></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className='md:hidden'>
                <div 
                    id='menu' 
                    className={`absolute flex-col items-center self-end  py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md ${open && 'flex' } ${!open && 'hidden'} `}>
                        <a href='/'>Inicio</a>
                        <a href='/'>Servicios</a>
                        <a href='/'>Sobre Nosotros</a>
                        <a href='/'>Contactanos</a>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar