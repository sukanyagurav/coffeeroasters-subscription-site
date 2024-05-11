import React from 'react'
import coffeeBean from '../assets/icon-coffee-bean.svg'
import gift from '../assets/icon-gift.svg'
import truck from '../assets/icon-truck.svg'
const HomeCTA = () => {
  return (
    <section className='my-28 bg-[#2C343E] rounded-2xl p-8 pt-28 flex flex-col  items-center text-white mb-[17rem]  relative lg:h-[580px]'>
      <h2 className='font-[Fraunces] mb-3 text-4xl font-extrabold text-center'>Why choose us?</h2>
      <p className='lg:w-[500px] mb-9 text-center'>A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.</p>
      <div className="choose__us flex-col lg:flex-row lg:absolute bottom-[-130px]  flex w-[100%] justify-center gap-[2rem]">
        <div className="choose__us-card flex sm:flex-col sm:p-9 sm:text-center md:flex-row justify-center w-full lg:flex-col max-w-full lg:w-[350px] bg-[#0E8784] p-4 rounded-lg px-8 md:text-left  items-center lg:text-center gap-9 lg:h-[350px] " >
            <img src={coffeeBean} className='w-[80px] object-contain  lg:mt-9 h-[80px]' alt="coffee bean image" />
            <div className="choose__us-card__content ">
                <h3 className='font-[Fraunces] mb-4  font-bold lg:mb-10 text-2xl'>Best quality</h3>
                <p className='md:w-[300px] lg:w-full'>Discover an endless variety of the world’s best artisan coffee from each of our roasters.</p>
            </div>
        </div>
        <div className="choose__us-card flex sm:flex-col sm:p-9 sm:text-center md:flex-row justify-center w-full lg:flex-col max-w-full lg:w-[350px] bg-[#0E8784] p-4 rounded-lg px-8 md:text-left  items-center lg:text-center gap-9 lg:h-[350px] ">
            <img src={gift} className='w-[80px] lg:mt-9 h-[80px] object-contain' alt="gift image" />
            <div className="choose__us-card__content ">
                <h3 className='font-[Fraunces] mb-4  font-bold lg:mb-10 text-2xl'>Exclusive benefits</h3>
                <p className='md:w-[300px] lg:w-full'>Special offers and swag when you subscribe, including 30% off your first shipment.</p>
            </div>
        </div>
        <div className="choose__us-card flex sm:flex-col sm:p-9 sm:text-center md:flex-row justify-center w-full lg:flex-col max-w-full lg:w-[350px] bg-[#0E8784] p-4 rounded-lg px-8  md:text-left items-center lg:text-center gap-9 lg:h-[350px] ">
            <img src={truck} className='w-[80px] object-contain  lg:mt-9 h-[80px]' alt="truckimage" />
            <div className="choose__us-card__content ">
                <h3 className='font-[Fraunces] mb-4  font-bold lg:mb-10 text-2xl'>Free shipping</h3>
                <p className='md:w-[300px] lg:w-full'>We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default HomeCTA
