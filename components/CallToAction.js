import React from 'react'

const CallToAction = () => {
  return (
    <div>
        {/* CTA Section */}
        <section id='cta' className='bg-newBlue'>
            {/* Flex Container */}
            <div className='container flex flex-col items-center justify-between px-6 py-12 mx-auto space-y-12 md:flex-row md:space-y-0'>
                {/* Heading */}
                <h2 className=' text-3xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left'> 
                        Tenemos ofertas en diversos productos
                </h2>

                {/* Button */}
                <button className='px-6 py-2 shadow-2xl text-newBlue rounded-full bg-white  hover:bg-gray-900 focus:outline-none'>
                  Ver Ofertas
                </button>
            </div>
        </section>
    </div>
  )
}

export default CallToAction