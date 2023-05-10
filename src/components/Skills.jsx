import React from 'react'
import "./styles.css"
import Projects from './ProjectsSection'


function Skills() {

  
  return (

    <div className='w-[90%] grid gap-6 max-w-[1200px]  min-[600px]:grid-cols-[auto_auto_auto] mt-[20px]'>
     

      <div className='max-w-[300px]'>
        <h3 className=' p-4 text-[25px]  min-[1000px]:text-[40px]'>My Skills</h3>
        <p>With skills in  different fields of design, I am the perfect person to hire when it comes to a full fledged project. Whatever your needs are, I can pretty much take on any challenge.</p>
      </div>

      <div   className='self-center'>
        <i class='bx bx-atom text-green-500 text-[25px]'></i>
        <h4 className='text-[20px]'><b>Frameworks</b></h4>
        <ul className='text-[14px] mt-[10px]'>
          <li>React</li>
          <li>Wordpress</li>
          <li>Boostrap</li>
        </ul>
      </div>

      <div className='self-center'>
      <i class='bx bx-atom  text-green-500 text-[25px]'></i>
        <h4 className='text-[20px]'><b>Source control  </b></h4>
        <ul className='text-[14px] mt-[10px]'>
          <li>Git</li>
          <li>Github</li>
          <li>Boostrap</li>
        </ul>
      </div>

      <div className='self-center min-[600px]:col-start-2'>
      <i class='bx bx-atom  text-green-500 text-[25px]'></i>
        <h4 className='text-[20px]'><b>Languages</b></h4>
        <ul className='text-[14px] mt-[10px]'>
          <li>Html</li>
          <li>Css</li>
          <li>JavaScript</li>
        </ul>
      </div>







    {/* <div className='text-white flex gap-4 flex-wrap mt-[30px] justify-center  min-[1000px]:text-[20px]'>
      <p className=' bg-gray-600 text-[13px] px-6 rounded-sm'>HTML</p>
      <p className=' bg-gray-600 text-[20px] px-6 rounded-sm'>CSS</p>
      <p className=' bg-gray-600 text-[20px] px-6 rounded-sm'>JavaScript</p>
      <p className=' bg-gray-600 text-[20px] px-6 rounded-sm'>React</p>
      <p className=' bg-gray-600 text-[20px] px-6 rounded-sm'>GIT</p>
      <p className=' bg-gray-600 text-[20px] px-6 rounded-sm'>GitHub</p>
      <p className=' bg-gray-600 text-[18px] px-4 rounded-sm'>Responsive Design</p>
      <p className=' bg-gray-600 text-[20px] px-6 rounded-sm'>Tailwind</p>
     
    </div> */}
    </div>
  )
}

export default Skills