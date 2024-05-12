import React from 'react'
import Banner from './Banner'
import planalto from '../assets/image-planalto.png'
import danche from '../assets/image-danche.png'
import gran_espresso from '../assets/image-gran-espresso.png'
import piccollo from '../assets/image-piccollo.png'
import HomeCTA from './HomeCTA'
import HowItWorks from './HowItWorks'
const bannerText={
    headingText:"Great coffee made simple.",
    description:"Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule."
}
export const Collection =()=>{
  return     <div className='flex items-center flex-col lg:justify-center  lg:flex-row lg:pt-[8.3rem] gap-7 relative z-20'>
  <div className="collection__card  gap-2 sm:text-center md:text-left flex sm:flex-col md:flex-row lg:flex-col items-center lg:text-center lg:h-[360px]">
    <img src={gran_espresso} alt="gran espresso" data-aos="fade-up" />
    <div className="collection__card__content w-[300px] lg:w-[100%]">
      <h3 className='font-bold text-2xl font-[Fraunces] text-[#272e36]' data-aos="fade-up"
     >Gran Espresso</h3>
      <p className='text-[#3c454e]   text-md' data-aos="fade-up"
     >Light and flavorful blend with cocoa and black pepper for an intense experience</p>
    </div>
   
  </div>
  <div className="collection__card  gap-2 sm:text-center md:text-left flex sm:flex-col md:flex-row lg:flex-col items-center lg:text-center lg:h-[360px]">
    <img src={planalto} alt="planto image"  data-aos="fade-up"/>
    <div className="collection__card__content w-[300px] lg:w-[100%]">

    <h3 data-aos="fade-up"
      className='font-bold text-2xl font-[Fraunces] text-[#272e36]'>Planalto</h3>
    <p data-aos="fade-up"
      className='text-[#3c454e] text-md'>Brazilian dark roast with rich and velvety body, and hints of fruits and nuts</p>
    </div>
  </div>
  <div className="collection__card  gap-2 sm:text-center md:text-left flex sm:flex-col md:flex-row lg:flex-col items-center lg:text-center lg:h-[360px]">
  <img src={piccollo} alt="piccollo image" data-aos="fade-up" />
  <div className="collection__card__content w-[300px] lg:w-[100%]">

    <h3 data-aos="fade-up"
      className='font-bold text-2xl font-[Fraunces] text-[#272e36]'>Piccollo</h3>
    <p data-aos="fade-up"
      className='text-[#3c454e] text-md'>Mild and smooth blend featuring notes of toasted almond and dried cherry</p>
  </div>
  </div>
  <div className="collection__card  gap-2 sm:text-center md:text-left flex sm:flex-col md:flex-row lg:flex-col items-center lg:text-center lg:h-[360px]">
  <img src={danche} alt="danche image" data-aos="fade-up" />
  <div className="collection__card__content w-[300px] lg:w-[100%]">

    <h3 data-aos="fade-up"
      className='font-bold text-2xl font-[Fraunces] text-[#272e36]'>Danche</h3>
    <p data-aos="fade-up"
      className='text-[#3c454e] text-md'>Ethiopian hand-harvested blend densely packed with vibrant fruit notes</p>
  </div>
  </div>

  </div>
}

const Home = () => {
  return (
   <>
    <Banner headingText={bannerText.headingText} description={bannerText.description} buttonText="Create your plan" classes="homeBanner"/>
    <section className="collection mt-[15rem] relative">
        <h2 data-aos="textAnimation"  data-aos-duration="1500" className='text-5xl mb-5 lg:mb-0 font-700 text-[#272e36] lg:text-[11rem] text-center lg:absolute lg:text-[#9c9c99a3]  font-[Fraunces] w-full'>our collection</h2>
        <Collection/>
        <div className="text-shadow"></div>
    </section>
    <HomeCTA/>
    <HowItWorks btn={true}/>
   </>
  )
}

export default Home
