import Navbar from '../components/Navbar';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import icon1 from '../public/icons1.png'
import icon2 from '../public/icons2.png'
import icon3 from '../public/icons3.png'

export default function Home() {
  return (
    <div>
        <Navbar />
        <section id='hero'>
           {/* Flex Container */}
           {/*<div className='container flex flex-col-reverse items-center md:flex-row px-6 mx-auto mt-10 space-y-0 md:space-y-0'>*/}
           <div className='flex flex-col items-center md:justify-around'>
                
                {/* Image  md:w-2/5*/}
                <div className='flex flex-row max-w-md w-3/4 justify-evenly' >
                    {/*<IllustrationLogo alt='illustration-intro.svg'/>*/}
                    
                    <div className='flex flex-row items-center justify-center w-28 h-28 bg-red-400 rounded-full'>
                      <img src={icon3.src} className=' icons-style' alt="farmaceuta vendiendo a cliente"></img>
                    </div>
                    <div className='flex flex-row items-center justify-center w-28 h-28 bg-yellow-200 rounded-full' >
                      <img src={icon1.src} className=' icons-style '  alt="farmaceuta vendiendo a cliente"></img>
                    </div>
                    <div className='flex flex-row items-center justify-center w-28 h-28 bg-green-400 rounded-full'>
                      <img src={icon2.src} className=' icons-style' alt="farmaceuta vendiendo a cliente"></img>
                    </div>
                    
                </div>
                
                {/*Item */}
                <div className='flex flex-col items-center ml-10 md:items-start justify-center my-16 space-y-12 px-6 md:px-0 md:w-2/5'>
                    <h1 className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left'>
                      LLevamos +10 años preocupandonos por ti
                    </h1>

                    <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
                     Inversiones Excel siempre busca lo mejor para que el cliente pueda cumplir de una manera garantizada sus necesidades.

                    </p>

                    

                    
                </div>
           </div>
       </section>
        <CallToAction />
        <Footer />
    </div>
  )
}