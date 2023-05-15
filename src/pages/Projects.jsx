import React from 'react'
import Header from '../components/Header'
import ModalCard from '../components/ModalCard'
import ProjectsSection from '../components/ProjectsSection'
import { useSelector } from 'react-redux'

function Projects({}) {

  const {theme} = useSelector(store => store.action)


  return (
    <main className='grid  min-h-screen  bg-cover justify-center'>

        {/* <div className=''> */}
        {/* </div> */}

        <div className='grid  w-full max-w-[1000px] mt-[150px]'>
            <div className='w-full px-10  grid justify-self-center '>
                <h4 className='text-center text-[20px] tracking-[4px] min-[600px]:text-[30px] min-[1000px]:text-[40px]'><b>My projects</b></h4>
                <p className='text-center mt-4 min-[600px]:text-[20px]  min-[1000px]:text-[25px]'>Hello stranger! 👋, my name is Cristian and I am a front-end developer, passionate about digital products that help people experience everyday life.</p>
             </div>
     
        </div>

        <div className='grid justify-center w-full'>
        <ProjectsSection theme={theme}/>
        </div>
        
        {/* <ModalCard/> */}

    </main>
  )
}

export default Projects