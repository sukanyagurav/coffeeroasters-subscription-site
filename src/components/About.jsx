import React from 'react'
import Banner from './Banner'
import commitment from '../assets/image-commitment.jpg'
import uk from '../assets/illustration-uk.svg'
import canada from '../assets/illustration-canada.svg'
import australia from '../assets/illustration-australia.svg'
const About = () => {
  return (
    <>
        <Banner headingText="About us" description="Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment" classes="about__banner_bg"/>
        <article className='flex justify-between gap-[5rem] my-[8rem] max-w-[85%] mx-auto items-center text-center lg:text-left  flex-col lg:flex-row'>
            <img src={commitment} className='rounded-xl' alt="commitment image" />
            <div className="commitment">
                <h2 className='font-[Fraunces] text-4xl font-extrabold text-[#4e5661] mb-3'>Our Commitment</h2>
                <p className='text-[#585d64] text-[1.05rem] leading105'>We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.</p>
            </div>
        </article>
        <article className='flex bg-[#2C343E] h-[500px] justify-end lg:justify-between md:h-[420px] rounded-lg lg:gap-[5rem] mt-[20rem]  lg:p-12 items-center text-center lg:text-left  flex-col lg:flex-row relative'>
       
            <div className="quality p-6 lg:mt-0 flex-[0.5]  lg:w-[550px] lg:flex-[0.6] order-2 lg:order-1">
                <h2 className='font-[Fraunces] text-4xl font-extrabold text-white mb-3'>Uncompromising quality</h2>
                <p className='text-white text-[1.05rem] leading105'>Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.</p>
            </div>
            <div className='quality__bg flex-[0.5] order-1 top-[-150px]  lg:order-2 lg:relative lg:right-[4%] lg:top-[-170px]'>

            </div>
        </article>
        {/* location */}
        <section className='w-[90%] mx-auto my-[12rem] text-center lg:text-left'>
            <h3 className='font-[Fraunces] text-2xl font-extrabold text-[#83888F] mb-9'>Our headquarters</h3>
            <div className="flex items-center justify-between gap-[1rem] flex-col lg:flex-row">
                <div className='w-[100%] md:w-[25%]'>
                    <img src={uk} alt="uk" className='w-[80px] mx-auto lg:mx-0 h-[80px] mb-5 '/>
                    <div className="flex  flex-col gap-5">
                        <h5 className='text-2xl font-[Fraunces] font-semibold whitespace-nowrap'>United Kingdom</h5>
                        <address className='not-italic'>

                        <ul>
                            <li >68 Asfordby Rd</li>
                            <li >Alcaston</li>
                            <li >SY6 1YA</li>
                            <li >+44 1241 918425</li>
                        </ul>
                        </address>
                    </div>
                </div>
                <div className='w-[100%] md:w-[25%]'>
                    <img src={canada} alt="uk" className='w-[80px] mx-auto lg:mx-0 h-[80px] mb-5 ' />
                    <div className="flex  flex-col gap-5">
                        <h5 className='text-2xl font-[Fraunces] font-semibold'>Canada</h5>
                        <address className='not-italic'>
                        <ul>
                            <li>1528 Eglinton Avenue</li>
                            <li>Toronto</li>
                            <li>Ontario M4P 1A6</li>
                            <li>+1 416 485 2997</li>
                        </ul>
                        </address>
                      
                    </div>
                </div>
                <div className='w-[100%] md:w-[25%]'>
                    <img src={uk} alt="uk" className='w-[80px] mx-auto lg:mx-0 h-[80px] mb-5 ' />
                    <div className="flex  flex-col gap-5">
                        <h5 className='text-2xl font-[Fraunces] font-semibold'>Australia</h5>
                        <address>
                        <ul>
                            <li>36 Swanston Street</li>
                            <li>Kewell</li>
                            <li>Victoria</li>
                            <li>+61 4 9928 3629</li>
                        </ul>
                        </address>
                       
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About
