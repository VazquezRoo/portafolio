import React from 'react'
import { Link } from 'react-router-dom'

function Footer({theme}) {
  return (
    <div className={`w-screen h-[200px] ${theme? 'bg-black': 'bg-white'} grid justify-center text-[18px]`}>
      <div className=' w-screen max-w-[1200px] grid grid-cols-2 p-2'>

        <div className='flex flex-col justify-center items-start  '>
          <h4>Vazquez Roo</h4>
          <p>Thanks for reading!</p>
          <p className='pt-[30px] '>&copy; 2023 Cristian Vazquez. All rights reserved.</p>
         </div>

         <div className='grid justify-center items-center'>
          <ul className='grid gap-2'>
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