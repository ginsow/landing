import React from 'react'
import farmacia from '../public/farmacia2.jpg'

const Hero = () => {
  return (
    <div>
       <section id='hero'>
           {/* Flex Container */}
           {/*<div className='container flex flex-col-reverse items-center md:flex-row px-6 mx-auto mt-10 space-y-0 md:space-y-0'>*/}
           <div className='flex flex-col-reverse items-center md:flex-row md:justify-around'>
                
                {/* Image  md:w-2/5*/}
                <div className=' max-w-md px-6' >
                    {/*<IllustrationLogo alt='illustration-intro.svg'/>*/}
                    <img src={farmacia.src} className='rounded-md' alt="farmaceuta vendiendo a cliente"></img>
                </div>
                
                {/*Item */}
                <div className='flex flex-col items-center md:items-start justify-center my-16 space-y-12 px-6 md:px-0 md:w-2/5'>
                    <h1 className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left'>
                      Es importante cuidar de tu salud
                    </h1>

                    <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
                    Contamos con un servicio de farmacia con todos los productos que necesitas para mantenerte saludable en tu dia a dia.

                    </p>

                    <div className='flex justify-center md:justify-start'>
                      <button className='px-6 py-2 baseline text-white rounded-full bg-newBlue hover:bg-newBlueLight focus:outline-none'>
                        Ver Productos
                      </button>
                    </div>

                    
                </div>
           </div>
       </section>
    </div>
  )
}

export default Hero