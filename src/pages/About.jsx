import React from 'react'
import ModalCard from '../components/ModalCard'
import Header from '../components/Header'
import Skills from '../components/Skills'

function About({theme}) {
  return (
    <div className='flex flex-col items-center min-h-screen justify-center'>

      <div>
                
            <header className="flex flex-col mt-[120px]">

                <div className="bg-[url('/images/bg-02.jpg')] bg-cover opacity-25 absolute  z-0 "></div>

                 <div className="">


                     {/* seccion de informacion e imagen */}

                    <div className="grid pt-[100px] min-[600px]:pt-[150px]" > 

                      {/* imagen */}

                       <div className={`absolute justify-self-center self-center pt-2 w-[200px]  ${theme?'bg-green-900/50':'bg-gray-300'} rounded-[50%] mb-[200px] `}>
                             <div src="" alt="" className={`relative w-[190px] h-[180px] rounded-[50%] bg-black border-[3px] ${theme?'border-blue-700': 'border-green-500'} mx-auto`}/>
                      </div>


                        {/* saludo y redes */}

                        <div  className={`w-[200px] h-[230px] mx-auto ${theme? 'bg-gray-500/50': 'bg-white'} flex items-center justify-end flex-col `}> 
                            <h3 className="text-center  font-semibold text-3xl pb-[10px]">Hi, I'm <span className="text__shadow text-blue-700">Cris </span>!</h3>
                            <p className={`${theme?'text-white/60':'text-black/60'}`}>A fronted developer</p>
                            <div className={`flex text-xl ${theme?'text-white/60':'text-black/60'} p-2 gap-3 `}>
                                <i className='bx bxl-instagram'></i>
                                <i className='bx bxl-facebook' ></i>
                                <i className='bx bxl-twitter' ></i>
                                <i className='bx bx-envelope' ></i>       
                            </div>
                        </div>
                    </div>
                 </div>

             </header>
        </div>

        <div className='w-[90%] max-w-[1100px] text-[15px]  min-[600px]:text-[25px] p-6 min-[900px]:p-10 '>
          <h4 className='text-[40px]'>About</h4>

          <p>Hey! I'm Cristian and I'm a Front-End developer. I love working on the web and making sure it continues to be a place for everyone and our creative, personal, and weird passions.</p>  <br></br>
          
          <p> I love to experiment with the web as a creative medium. This here portfolio changes each year in pursuit of learning and using web technology in unexpected ways. My drawing project, A Single Div, explores the artistic power of CSS.
          </p> <br></br> 
          <p> My projects have been created by CSS, HTML, JS, REACT, TAILWIND to CSS.</p>
        </div>

      <div className='grid w-[90%] justify-items-center max-w-[1100px] border-t-[1px] border-white/10'>
        <Skills/>
      </div>
      <div className='h-[50px]'>

      </div>

        {/* <ModalCard/> */}

    </div>
  )
}

export default About