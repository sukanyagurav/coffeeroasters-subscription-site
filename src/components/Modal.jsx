import React from 'react'
import { createPortal } from 'react-dom'

const Modal = ({children,isOpen,closeModal}) => {
   
   
  return  createPortal(
    <div>
           {isOpen && <div className="backdrop w-full h-full bg-[rgba(0,0,0,0.7)]  fixed top-0 left-0 z-20" onClick={closeModal}></div>}
                    <dialog open={isOpen} className='top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] fixed w-[100%] max-w-[600px] z-50 rounded-lg overflow-hidden bg-[#ccbeb4]'>
                      {children}
                    </dialog> 
    </div>,
    document.getElementById('modal')
  )
}

export default Modal
