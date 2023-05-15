import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Footer({}) {

  const {theme} = useSelector(store => store.action)

  return (
    <div className={` h-[300px] ${theme? 'bg-black': 'bg-white'} grid justify-center text-[12px] min-[600px]:text-[20px]`}>
      <div className='  max-w-[1200px] grid grid-cols-2 p-2'>

        <div className='flex flex-col justify-center items-start  '>
          <h4>Vazquez Roo</h4>
          <p>Thanks for reading!</p>
          <p><i className='bx bx-envelope'></i> vazquez.roo93@gmail.com</p>
          <p><i className='bx bx-phone' ></i> (653) 100-7177</p>
          
          <p className='pt-[30px] '>&copy; 2023 Cristian Vazquez. All rights reserved.</p>
         </div>
         <div className='grid justify-center items-center'>
           <ul className='grid gap-2'>
         {/* <a href='home' className='hover:text-purple-500'>Home</a>
            <a href='about_home'  className='hover:text-purple-500'>About</a>
            <a href='projects_home'  className='hover:text-purple-500'>Projects</a>
            <a href='contact_home' className='hover:text-purple-500'>Contact</a> */}
            <Link to={'/'} className='hover:text-purple-500'>Home</Link>
            <Link to={'/about'} className='hover:text-purple-500'>About</Link>
            <Link to={'/projects'} className='hover:text-purple-500'>Porjects</Link>
            <Link to={'/contact'} className='hover:text-purple-500'>Contact</Link> 
          </ul>
         </div>

      </div>
    </div>
  )
}

export default Footer