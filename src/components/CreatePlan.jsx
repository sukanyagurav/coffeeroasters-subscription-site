import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import HowItWorks from './HowItWorks'
import arrow from '../assets/icon-arrow.svg'

import { HashLink } from 'react-router-hash-link'
import Accordion from './Accordion'
import Modal from './Modal'
import imgsrc from '../assets/thankyou.gif'
const CreatePlan = () => {
  const [userPlan,setUserPlan]=useState([])
  const [isOpen,setIsOpen] = useState(false)
  const [isCheckout,setIsCheckout] = useState(false)
  function updateUserPlan (value) {

    setUserPlan(prev=>{
      const updatedState = [...prev]
      const existingItemIndex = updatedState.findIndex(
        item=>item.id === value.id
      )
      const existingItem = updatedState[existingItemIndex]
      if(existingItem){
        const updatedItem ={
          ...existingItem,
          type:value.type
        }
        updatedState[existingItemIndex] = updatedItem
      }else{
        updatedState.push(value)
      }
      return [...updatedState]
    })
  
  }
  function closeModal(){
    setIsOpen(false)
    setIsCheckout(false)

  }
  let  price=''
  if(userPlan?.find(plan=> plan.id == '5')?.type ==='Every Week'){
      price=`$${52}`
  }
  else if(userPlan?.find(plan=> plan.id == '5')?.type ==='Every 2 weeks'){
      price=`$${35}`
  }else if(userPlan?.find(plan=> plan.id == '5')?.type ==='Every month'){
      price=`$${22} `
  }

  function checkout(){
    setIsOpen(false)
    setIsCheckout(true)
    const inter= setTimeout(()=>{
      setIsOpen(true)
      setUserPlan([])

    },1500)

  }
  return (
  <>
            <Banner headingText="Create a plan" description="Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door." classes="create_plan__banner_bg"/>
            <HowItWorks  classes="createPlan" />
            <article className='flex gap-[5rem]  md:w-[80%] md:mx-auto relative mb-[15rem] min-h-[400px] oveflow-y'>
              <aside className="hidden lg:block w-[50%] sticky lg:top-0 justify-center overflow-hidden ">
                <ul>
                  <li><HashLink smooth to="#1" className='block w-full text-left p-5 text-3xl text-[#B4B7BA] font-[Fraunces] border-b-[1px] border-b-[#B4B7BA] font-semibold'><span>01</span> <span>Prefrences</span></HashLink></li>
                  <li><HashLink smooth to="#2" className='block  w-full text-left p-5 text-3xl text-[#B4B7BA] font-[Fraunces] border-b-[1px] border-b-[#B4B7BA] font-semibold'><span>02</span> <span>Bean Type</span></HashLink></li>
                  <li><HashLink smooth to="#3" className='block w-full text-left p-5 text-3xl text-[#B4B7BA] font-[Fraunces] border-b-[1px] border-b-[#B4B7BA] font-semibold'><span>03</span> <span>Quantity</span></HashLink></li>
                  <li><HashLink  smooth to="#4" className='block w-full text-left p-5 text-3xl text-[#B4B7BA] font-[Fraunces] border-b-[1px] border-b-[#B4B7BA] font-semibold'><span>04</span> <span>Grind option</span></HashLink></li>
                  <li><HashLink  smooth to="#5" className='block w-full text-left p-5 text-3xl text-[#B4B7BA] font-[Fraunces] border-b-[1px] border-b-[#B4B7BA] font-semibold'><span>05</span> <span>Deliveries</span></HashLink></li>
                </ul>
              </aside>
              <div className="w-full ">
              <Accordion id="1" isCheckout={isCheckout} question={"How do you drink your coffee?"} fnSelectedValue={updateUserPlan} answer={[
                { 
                  type:'Capsule',
                  description:'Compatible with Nespresso systems and similar brewers',
                },{
                  type:'Filter',
                  description:'For pour over or drip methods like Aeropress, Chemex, and V60'
                },
                {
                  type:'Espresso',
                  description:'Dense and finely ground beans for an intense, flavorful experience'
                }
              ]}/>
              <Accordion id="2" isCheckout={isCheckout} question={"What type of coffee?"} fnSelectedValue={updateUserPlan} answer={[
                { type:'Single origin',
                  description:'Distinct, high quality coffee from a specific family-owned farm',
                },{
                  type:'Decaf',
                  description:'Just like regular coffee, except the caffeine has been removed'
                },
                {
                  type:'Blended',
                  description:'Combination of two or three dark roasted beans of organic coffees'
                }
              ]}/>
               <Accordion id="3" isCheckout={isCheckout} question={"How much would you like?"} fnSelectedValue={updateUserPlan} answer={[
                { type:'250g',
                  description:'Perfect for the solo drinker. Yields about 12 delicious cups.',
                },{
                  type:'500g',
                  description:'Perfect option for a couple. Yields about 40 delectable cups.'
                },
                {
                  type:'1000g',
                  description:'Perfect for offices and events. Yields about 90 delightful cups.'
                }
              ]}/>
              <Accordion id="4" isCheckout={isCheckout} question={"Want us to grind them?"} fnSelectedValue={updateUserPlan} answer={[
                { type:'Wholebean',
                  description:'Perfect for the solo drinker. Yields about 12 delicious cups.',
                },{
                  type:'Filter',
                  description:'Perfect option for a couple. Yields about 40 delectable cups.'
                },
                {
                  type:'Cafetiere',
                  description:'Perfect for offices and events. Yields about 90 delightful cups.'
                }
              ]}/>
              <Accordion id="5"  isCheckout={isCheckout} question={"How often should we deliver?"} fnSelectedValue={updateUserPlan} answer={[
                { type:'Every Week',
                  amount:'$22',
                  description:` per shipment. Includes free first class shipping.`,
                },{
                  type:'Every 2 weeks',
                  amount:'$32',
                  description:' per shipment. Includes free first class shipping.'
                },
                {
                  type:'Every month',
                  amount:'$42',
                  description:' per shipment. Includes free first class shipping.'
                }
              ]}/>
              <div className="summary__content">

                <div className="summary p-[1.4rem] bg-[#0E8784] rounded-lg text-gray-200">
                  <h6 className='font-[Fraunces] text-2xl font-medium mb-3'>Order summary</h6>
               
                    {
                      userPlan.length > 0 ? <p className='text-3xl font-semibold'>
                      “I drink my coffee as <span className='text-[#464f5c]'>{userPlan.find(plan=> plan.id == '1') ?  userPlan.find(plan=> plan.id =='1').type : '...'} </span>, with a  type of bean <span className='text-[#464f5c]'>{userPlan.find(plan=> plan.id == '2') ? userPlan.find(plan=> plan.id =='2').type : '...'} </span>.  <span className='text-[#464f5c]'>{userPlan.find(plan=> plan.id == '3') ? userPlan.find(plan=> plan.id =='3').type : '...'} </span>ground ala  <span className='text-[#464f5c]'>{userPlan.find(plan=> plan.id == '4') ? userPlan.find(plan=> plan.id =='4').type : '...'}</span>, sent to me  <span className='text-[#464f5c]'>{userPlan.find(plan=> plan.id == '5') ? userPlan.find(plan=> plan.id =='5').type : '...'} </span>”
                   
                      </p>
                      :
                      <p className='text-3xl font-semibold'>Customize your <span className='text-[#464f5c]' >plan</span> with our range of options then come back to review your choices! </p>
                     
                    }
                  
                </div>
                <button className={` p-4 rounded-lg mt-3 ml-auto w-[190px]  ${userPlan.length!==5 ? 'cursor-not-allowed' : 'cursor-pointer'} font-bold ${userPlan.length === 5 ?  'bg-[#0E8784] text-white' :'bg-[#b0c3c3] text-white'}`} disabled={userPlan.length !== 5} onClick={()=>setIsOpen(true)}> Create my plan</button>
              
                
              </div>
             
              </div>
              {
                  (isOpen && !isCheckout) && <Modal isOpen={isOpen} closeModal={closeModal}>
                
                      <div className="header flex justify-between bg-[#0E8784] p-[1.5rem] text-[#494b4a]">
                        <h3 className='text-3xl font-semibold font-[Fraunces] '>Order Summary </h3>
                        <button className='text-3xl font-semibold' onClick={closeModal}>X</button>
                      </div>
                      <div className="body p-[1.5rem]">
                      <p className='text-2xl font-semibold text-[#676869]'>
                      “I drink my coffee as <span className='text-[#0E8784]'>{userPlan.find(plan=> plan.id == '1') ?  userPlan.find(plan=> plan.id =='1').type : '...'} </span>, with a  type of bean <span className='text-[#0E8784]'>{userPlan.find(plan=> plan.id == '2') ? userPlan.find(plan=> plan.id =='2').type : '...'} </span>.  <span className='text-[#0E8784]'>{userPlan.find(plan=> plan.id == '3') ? userPlan.find(plan=> plan.id =='3').type : '...'} </span>ground ala  <span className='text-[#0E8784]'>{userPlan.find(plan=> plan.id == '4') ? userPlan.find(plan=> plan.id =='4').type : '...'}</span>, sent to me  <span className='text-[#0E8784]'>{userPlan.find(plan=> plan.id == '5') ? userPlan.find(plan=> plan.id =='5').type : '...'} </span>”</p>
                      <p className='text-lg text-gray-800 mt-3'>
                      Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout.
                      </p>
                      <div className="flex justify-between mt-4 items-center">
                        <h5 className='text-2xl font-extrabold font-[Fraunces] text-[#676869]'><span className='text-[#0E8784]'>{price}</span> / month</h5>
                        <button className='bg-[#0E8784] p-2 rounded-lg mt-3 w-[190px] cursor-pointer font-bold transition-all duration-700 hover:bg-transparent border-[1px] border-[#0E8784]' onClick={checkout}>Checkout</button>
                      </div>
                      </div>

            
                  </Modal>
              }
              {
                isCheckout && 
                <>
                
                <Modal isOpen={isOpen} closeModal={closeModal}>
                <img src={imgsrc} className='top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] fixed w-[70%] z-30'/>
                  <div className="header flex justify-between bg-[#0E8784] p-[1.5rem] text-[#494b4a]">
                        <h3 className='text-3xl font-semibold font-[Fraunces] '>Thank You! </h3>
                        <button className='text-3xl font-semibold relative z-90' onClick={closeModal}>X</button>
                      </div>
                      <div className="body p-[1.5rem]">
                      <p className='text-2xl  text-[#676869]'>
                      Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@Coffeeroasters.com.
                      </p>
                     
                      </div>
                     
                </Modal>
                </> 
              }
            </article>
  </>
  )
}

export default CreatePlan
