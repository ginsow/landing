import React from 'react'
import Card from './Card.js'

import Avatar1 from '../public/pills.png'
import Avatar2 from '../public/taxi.png'
import Avatar3 from '../public/house.png'

const Feature = () => {
  return (
    <div>
        <section id='features'>
            {/* Flex Container */}
            <div className='flex flex-col items-center  px-6 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row'>

                {/* What's Different */}
                <div className='flex flex-col items-center md:items-start space-y-12 md:w-1/2 pl-16'>
                    <h2 className='max-w-md text-4xl font-bold text-center md:text-left'>
                        Con cuales servicios contamos?
                    </h2>

                    <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
                        El grupo de Inversiones Excel cuenta con varios pilares para abarcar distintas necesidades de las personas con una excelente calidad.
                    </p>
                </div>
                
                {/* Numbered List */}
                <div className='flex flex-col space-y-8 md:w-1/2'>

                    <Card ImageSrc={Avatar1.src} Title="Centro Médico Excel">
                        Contamos con una gran variedad de servicios que te ayudaran a estar bien en tu dia a dia.
                    </Card>

                    <Card ImageSrc={Avatar2.src} Title="Taxi Excel">
                        Servicio de transporte privado con conductores verificados para garantizar que arrive a su destino con seguridad en el menor tiempo posible.
                    </Card>

                    <Card ImageSrc={Avatar3.src} Title="Inmobiliaria Excel">
                        Tenemos lo que necesita para conseguir el lugar de sus sueños, con la asesoría adecuada para que no exista ningún inconveniente.
                    </Card>
                    
                </div>
            </div>
        </section>

    </div>
  )
}

export default Feature