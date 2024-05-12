import React,{useEffect, useState}from 'react'
import arrow from '../assets/icon-arrow.svg'
const Accordion = ({id,question,answer,fnSelectedValue,isCheckout}) => {
    const [isOpen,setIsOpen] = useState(false)
    const [selectedType,setSelectedType] = useState('')
    function selectedValue(val){
        setSelectedType(val.type)
        fnSelectedValue(val)
    }
    useEffect(()=>{
      if(isCheckout){
        setSelectedType('')
      }
    },[isCheckout])
   
  return (
    <div className="order-1 " id={id} >
    <button className='flex justify-between items-center w-full mb-[22px] ' onClick={()=>setIsOpen(!isOpen)}>
      <span className='font-[Fraunces] text-[19px] md:text-3xl font-extrabold text-[#464f5c]'>{question}</span>
      <img src={arrow} className={`transition-all duration-700 ${isOpen && 'rotate-180'}`} alt="" />
    </button>
    <div className={`order-details flex-col md:flex-row flex justify-between gap-[1rem] mb-[30px] overflow-hidden relative ease-in-out h-0 transition-all duration-1000 animate-[fromRight] ${isOpen && 'animate-[fromLeft] h-[470px] md:h-[220px]'}`}>
        {
            answer.map(card=>(
                <button key={card.type} className={`order__card p-[1.4rem]  text-left rounded-lg h-[200px] transition-all duration-700 hover:!bg-[#FDD6BA] hover:text-[#373739] cursor-pointer ${((selectedType === card.type) && !isCheckout) ? 'bg-[#0E8784] text-white' : 'bg-[#F4F1EB] text-[#373739]' }`} 
                onClick={()=>selectedValue({id:id,type:card.type})}>
                    <h6 className='text-2xl font-[Fraunces] font-semibold  mb-2'>{card.type}</h6>
                    <p >{card.amount && <strong>{card.amount}</strong>}{card.description}</p>
                </button>
            ))
        }
    </div>
  </div>
  )
}

export default Accordion
