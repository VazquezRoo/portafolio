import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Footer({link}) {

  const {theme} = useSelector(store => store.action)

  return (
    <div className={` h-[300px] ${theme? 'bg-black': 'bg-white'} grid justify-center text-[12px] min-[600px]:text-[20px]`}>
      <div className='  max-w-[1200px] grid grid-cols-2 p-2'>

        <div className='flex flex-col justify-center items-start  '>
          <h4>Vazquez Roo</h4>
          <p>Gracias por leer!</p>
          <p><i className='bx bx-envelope'></i> vazquez.roo93@gmail.com</p>
          <p><i className='bx bx-phone' ></i> (653) 100-7177</p>
          
          <p className='pt-[30px] '>&copy; 2023 Cristian Vazquez. Derechos reservados.</p>
         </div>
         <div className='grid justify-center items-center'>
           <ul className='grid gap-2 justify-items-center'>
           <div className="h-full w-full flex gap-3">
      <Link target='_blank' to={'https://www.linkedin.com/in/cristian-vazquez-roo/'} className="w-[30px] aspect-square"><img src="/images/skills/github.png" alt="" className="hover:opacity-50" /></Link>
      <Link target='_blank' className="w-[30px] aspect-square"><img src="/images/Linkedin.png" alt="" className="hover:opacity-50" /></Link>
      <Link to="https://api.whatsapp.com/send?phone=6531007177"><i className='bx bxl-whatsapp text-green-500 text-[25px]' ></i></Link>
      </div>
        
           <a  href='#home'  className='hover:text-purple-500'>Inicio</a>
            
            <a  href='#skills'  className='hover:text-purple-500'>Sobre mi</a>
            <a href='#projects' className='hover:text-purple-500'>Proyectos</a>
            <a href='#contact' className='hover:text-purple-500'>Contacto</a> 
          </ul>
         </div>

      </div>
    </div>
  )
}

export default Footer