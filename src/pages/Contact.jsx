import React from 'react'
import Header from '../components/Header'
import ModalCard from '../components/ModalCard'
import ContactSection from '../components/ContactSection'
import Skills from '../components/Skills'
import Projects from './Projects'
import { useSelector } from 'react-redux'


// npm i @emailjs/browser

function Contact({}) {

  const {theme} = useSelector(store => store.action)

 


  return (

    <main className=' min-h-screen bg-cover grid justify-center justify-items-center'>
      
    
  
     <div className='grid mt-[150px] w-full max-w-[1000px] '>
      <div className='w-full px-10  grid justify-self-center '>
        <h4 className='text-center text-[20px] tracking-[4px] min-[600px]:text-[30px] min-[1000px]:text-[40px]'><b>Contact</b></h4>
        <p className='text-center mt-4 min-[600px]:text-[20px]  min-[1000px]:text-[25px]'>Hello stranger! 👋, my name is Cristian and I am a front-end developer, passionate about digital products that help people experience everyday life.</p>
      </div>
     
    </div>
   
    {/* <ModalCard/>  */}

    <div className='w-[90%] min-[900px]:w-[800px]'>
    <ContactSection theme={theme}/>
    </div>
   
    {/* <Footer/> */}
    
   </main>
  )
}

export default Contact