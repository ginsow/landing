import React from 'react'
//w-32 md:w-44
const Card = ({ImageSrc, Title, children}) => {
  return (
    <div>
        <div className='flex flex-row items-center max-w-md space-y-0 space-x-6'>

            <img src={ImageSrc} className='w-1/3' alt='avatar1.png'></img> 

            <div>
                <h3 className='title-card text-lg font-bold px-4  '> {/*rounded-full bg-newBlueSupLight*/}
                    {Title}
                </h3>
                <p className='text-darkGrayishBlue px-2'>
                    {children}
                </p>
            </div>

        </div>
    </div>
  )
}

export default Card

/*
    {//List Item 1 }
    <div className='flex flex-col items-center space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>

        {//Heading }
        <div className='rounded-full bg-brightRedSupLight md:bg-transparent'>
            <img src={Avatar1.src} className='w-24 md:w-80' alt='avatar1.png'></img>
            <div className='flex items-center py-4 px-8 space-x-2'>
                <div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed'>
                        01
                </div>
                <h3 className='text-base font-bold md:mb-4 md:hidden'>
                    Farmacia Excel
                </h3>
            </div>
        </div>

        {//Heading in Medium Screen}
        <div>
            <h3 className='hidden mb-4 text-lg font-bold md:block'>
                Farmacia Excel
            </h3>
            <p className='text-darkGrayishBlue'>
                Contamos con una gran variedad de productos que son de uso vital para la vida diaria y también para tratamientos.
            </p>
        </div>
        </div>
    </div>
*/