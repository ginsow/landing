import React from 'react'
import LogoWhite from '../public/excel2.png'
import Facebook from '../public/icon-facebook.svg'
import Instagram from '../public/icon-instagram.svg'

const Footer = () => {

  return (
    <div>
        <footer id='footer' className='bg-veryDarkBlue'>
            {/* Flex Container */}
            <div className='container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>
                {/* Logo and Social Links Container */}
                <div className='flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start'>

                    <div className='mx-auto my-6 text-center font-semibold text-white md:hidden'>
                        Derechos reservados &copy; 2022
                    </div>

                    {/* Logo */}
                    <div>
                        <img src={LogoWhite.src} alt='logo' className='h-28'></img>
                    </div>

                    {/* Social Links Container*/}
                    <div>
                        <div className='text-white mb-2 font-semibold'>
                            Síguenos en nuestras redes
                        </div>

                        <div className='flex justify-center mx-auto space-x-4'>
                            
                            {/* Link 1 */}
                            <a href='/'>
                                <Facebook alt='icon-facebook.svg' className='h-8'/>
                            </a>

                            {/* Link 5 */}
                            <a href='/'>
                                <Instagram alt='icon-instagram.svg' className='h-8'/>
                            </a>

                        </div>
                    </div>
                    
                </div>

                {/* List */}
                <div className='flex justify-around space-x-32 md:space-x-4 lg:space-x-32'>
                    <div className='flex flex-col space-y-3 text-white'>
                        <a href='/' className='hover:text-newBlue'>Inicio</a>
                        <a href='/' className='hover:text-newBlue'>Servicios</a>
                        <a href='/' className='hover:text-newBlue'>Acerca de Nosotros</a>
                    </div>
                    {/*
                    <div className='flex flex-col space-y-3 text-white'>
                        <a href='/' className='hover:text-brightRed'>Careers</a>
                        <a href='/' className='hover:text-brightRed'>Community</a>
                        <a href='/' className='hover:text-brightRed'>Privacy Policy</a>
                    </div>
                    */}
                </div>

                {/* Input Container */}
                <div className='flex flex-col justify-between'>

                    <div>
                        <div className='hidden text-white font-semibold md:block'>
                            Atención al cliente
                        </div>
                        
                        <div className='hidden text-white md:block'>
                            8AM Hasta las 6PM
                        </div>

                        <div className='hidden text-white md:block'>
                            Urb. Las Quintas, C.C. Diagnóstico del Norte
                        </div>
                    </div>
                    
                    <div className='flex justify-center md:justify-start my-2'>
                        <button className='px-6 py-2 text-white rounded-full bg-newBlue hover:bg-newBlueLight focus:outline-none'>
                            Contactanos
                        </button>
                    </div>

                    <div className='hidden text-white font-semibold md:block'>
                        Derechos reservados &copy; 2022
                    </div>
                </div>

                
            </div>
        </footer>
    </div>
  )
}

export default Footer