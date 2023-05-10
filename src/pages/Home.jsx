import React from 'react'
import Header from '../components/Header'
import Skills from '../components/Skills'
import ModalCard from '../components/ModalCard'
import ContactSection from '../components/ContactSection'
import ProjectsSection from '../components/ProjectsSection'
import "../components/styles.css"

function Home({theme}) {
  return (
    <main className=' min-h-screen  bg-cover grid justify-center justify-items-center'>

    <div className=' self-center grid w-full w-max-[900px] px-10 pt-[60px] text-[40px] tracking-[4px] min-[600px]: mt-[100px] '>

      <h3>Hi,</h3>
      <p> I'm <span className={`${theme?'letra':'letraDos'}`}>Cris</span>,</p>
      <p> A fronted developer </p>
    </div>
        
  
     <div className='grid  mt-[40px] w-full max-w-[1200px] border-t-[1px] border-white/40 pt-[50px]  px-6'>
        <h4 className='text-center text-[20px] tracking-[4px] min-[600px]:text-[30px] min-[1000px]:text-[40px]'><b>Welcome</b></h4>
        <p className='text-center mt-4 min-[600px]:text-[20px]  min-[1000px]:text-[25px]'>Hello stranger! 👋, my name is Cristian and I am a front-end developer, passionate about digital products that help people experience everyday life.</p>
    
     
    </div>
    <div className='grid w-[90%] justify-items-center mt-[100px]  border-t-[1px] border-white/10 '>
        <Skills/>
      </div>
   
    {/* <ModalCard theme={theme}/> */}

   
    <h3 className='text-white/50 mt-[50px] pt-[50px] text-[30px] border-t-[1px] border-white/10 w-full text-center'>My projects</h3>
   
     <ProjectsSection theme={theme}/>

    <div className='w-[90%] min-[900px]:w-[800px] mt-[50px]'>
      <h3 className=' pl-[15px] text-[30px] text-white/50'>Contact</h3>
    <ContactSection theme={theme}/>
    </div>
    <div className='w-full h-[100px]'>

    </div>
   
    
   </main>
  )
}

export default Home