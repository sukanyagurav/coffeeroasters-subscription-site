import React from 'react'
import { Link } from 'react-router-dom'

const HowItWorks = ({classes='',btn=false}) => {
  return (
    <section className={`mt-[8rem] text-center md:text-left mb-[10rem]   mx-auto p-[2rem]  lg:w-[85%] ${classes && classes } `}>
      <h3 data-aos="textAnimation"   className={`font-[Fraunces] text-3xl font-extrabold ${classes ? 'text-gray-300]' : 'text-[#5e6f81]'} mb-3`}>How it works</h3>
        <div className="plans flex justify-between flex-col items-center md:items-start md:flex-row gap-[1rem] mt-20">
            <div data-aos="fade-right"   className={`plan md:w-[32%] `} >
                <h4 className='text-[5rem] font-[Fraunces] font-semibold text-[#FDD6BA]'>01</h4>
                <div className="plan__content">
                    <h3 className='text-[28px] font-bold font-[Fraunces] md:w-[223px] my-3'>Pick your coffee</h3>
                    <p className='leading-7'>Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.</p>
                </div>
            </div>
            <div data-aos="fade-right"  data-aos-delay="100"  className={`plan md:w-[32%] `}>
                <h4 className='text-[5rem] font-[Fraunces] font-semibold text-[#FDD6BA]'>02</h4>
                <div className="plan__content">
                    <h3 className='text-[28px] font-bold font-[Fraunces] md:w-[223px] my-3'>Choose the frequency</h3>
                    <p className='leading-7'>Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.</p>
                </div>
            </div>
            <div  data-aos="fade-right"  data-aos-delay="100"  className={`plan md:w-[32%]`}>
                <h4 className='text-[5rem] font-[Fraunces] font-semibold text-[#FDD6BA]'>03</h4>
                <div className="plan__content">
                    <h3 className='text-[28px] font-bold font-[Fraunces] md:w-[223px] my-3'>Receive and enjoy!</h3>
                    <p className='leading-7'>We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.</p>
                </div>
            </div>
        </div>
       {btn && <Link to="/create_your_own_plan">
        <button className='bg-[#0E8784] p-4 rounded-lg mt-8 w-[190px] text-white cursor-pointer font-bold transition-all duration-700 hover:bg-transparent border-[1px] hover:text-[#0E8784] border-[#0E8784]'> 
            Create your own plan
        </button>
      </Link>}
    </section>
  )
}

export default HowItWorks
