import { useSelector } from 'react-redux';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function ContactSection({}) {
    const navigate = useNavigate()

    const DEFAULT_VALUES = {
        user_name: "",
        user_email: "",
        message: "",
      }

  const {register,handleSubmit, formState:{errors},reset} = useForm()


  const {theme} = useSelector(store => store.action)


  const form = useRef();

  const submit = (e) => {

    emailjs.sendForm('service_1wurm64', 'template_dfbwoo5', form.current, '9g1QjflHjvzLKXVnR')
      .then((result) => {
          console.log(result.text)
          Swal.fire('Submitted successfully')
          ;
      }, (error) => {
          console.log(error.text);
      });
      reset(DEFAULT_VALUES)
      navigate('/contact')
  };


  return (
    <form ref={form} onSubmit={handleSubmit(submit)} className={`grid p-4 w-[100%] h-[500px] ${theme? 'bg-black/20 ': 'bg-white'} mt-[20px] rounded-md min-[600px]:grid-cols-2 gap-3 `}>

        <div className='grid h-[20%] gap-2 w-[100%]'>
            <label htmlFor="">Name</label>
            <input type="text"  name="user_name" placeholder='Enter your Name' className={`border-[1px] rounded-sm pl-2 h-[40px] ${theme?'bg-gray-500/20': 'bg-gray-100'}  outline-none w-[100%]`} {...register('user_name',{required:'Required'})}/>
            <span className="text-[10px]  text-red-500 pl-3">{errors.user_name && errors.user_name.message}</span>
        </div>

        <div className='grid h-[20%] gap-2 w-[100%]'>
            <label htmlFor="">Email</label>
            <input type="text"  name="user_email" placeholder='example@gmail.com    ' className={`border-[1px] rounded-sm pl-2 h-[40px] ${theme?'bg-gray-500/20': 'bg-gray-100'} outline-none w-[100%]`} {...register('user_email',{required:'Required'})}/>
            <span className="text-[10px]  text-red-500 pl-3">{errors.user_email && errors.user_email.message}</span>
        </div>

        <div className='grid h-[40%] gap-2 w-[100%] min-[600px]:col-span-2'>
            <label htmlFor="" >Message</label>
            <input type="text"  name="message"  placeholder='Enter your message' className={`border-[1px] rounded-sm h-[200px] pl-2 ${theme?'bg-gray-500/20': 'bg-gray-100'}  outline-none w-[100%]`} {...register('message',{required:'Required'})}/>
            <span className="text-[10px]  text-red-500 pl-3">{errors.message && errors.message.message}</span>
        </div>

        <button type='text' value="Send" className='px-6 bg-yellow-400 hover:bg-yellow-300 rounded-md w-[150px] justify-self-center min-[600px]:col-span-2'>Submit</button>

    </form>
  )
}

export default ContactSection