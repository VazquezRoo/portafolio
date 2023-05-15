import React from 'react'
import { useSelector } from 'react-redux'

function ContactSection({}) {

  const {theme} = useSelector(store => store.action)


  return (
    <div className={`grid p-4 w-[100%] h-[500px] ${theme? 'bg-black/20 ': 'bg-white'} mt-[20px] rounded-md  `}>
        <div className='grid h-[20%] gap-2 w-[100%]'>
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Enter your Name' className={`border-[1px] rounded-sm pl-2 h-[40px] ${theme?'bg-gray-500/20': 'bg-gray-100'}  outline-none w-[100%]`}/>
        </div>
        <div className='grid h-[20%] gap-2 w-[100%]'>
            <label htmlFor="">Email</label>
            <input type="text" placeholder='Enter yout Email' className={`border-[1px] rounded-sm pl-2 h-[40px] ${theme?'bg-gray-500/20': 'bg-gray-100'} outline-none w-[100%]`}/>
        </div>
        <div className='grid h-[40%] gap-2 w-[100%]'>
            <label htmlFor="">Message</label>
            <input type="text"  placeholder='Enter your message' className={`border-[1px] rounded-sm h-[200px] pl-2 ${theme?'bg-gray-500/20': 'bg-gray-100'} justify-self-start  outline-none w-[100%]`}/>
        </div>
        <button className='px-6 bg-yellow-400 hover:bg-yellow-300 rounded-md w-[150px] justify-self-center'>Submit</button>
    </div>
  )
}

export default ContactSection