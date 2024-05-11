import React, { useState } from 'react'
import Banner from './Banner'
import HowItWorks from './HowItWorks'
import arrow from '../assets/icon-arrow.svg'
import { Link, NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import Accordion from './Accordion'
const CreatePlan = () => {
  const [userPlan,setUserPlan]=useState([])
  let restultText=''
  function updateUserPlan (value) {
    const uniqueIds=[]
    setUserPlan(prev=>{
      const updatedState =prev.filter(element => {
        const isDuplicate = uniqueIds.includes(element.id);
        if (!isDuplicate) {
          uniqueIds.push(element.id);
          return true;
        }
        return false;
      })
      return [
        ...updatedState,
        value
      ]
    })
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
              <Accordion id="1" question={"How do you drink your coffee?"} fnSelectedValue={updateUserPlan} answer={[
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
              <Accordion id="2" question={"What type of coffee?"} fnSelectedValue={updateUserPlan} answer={[
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
               <Accordion id="3" question={"How much would you like?"} fnSelectedValue={updateUserPlan} answer={[
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
              <Accordion id="4" question={"Want us to grind them?"} fnSelectedValue={updateUserPlan} answer={[
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
              <Accordion id="5" question={"How often should we deliver?"} fnSelectedValue={updateUserPlan} answer={[
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
                <button className={` p-4 rounded-lg mt-3 ml-auto w-[190px]  cursor-pointer font-bold ${userPlan.length === 5 ?  'bg-[#0E8784] text-white' :'bg-[#b0c3c3] text-white'}`} disabled={userPlan.length === 5}> Create my plan</button>
              </div>
              </div>
              
            </article>
  </>
  )
}

export default CreatePlan
