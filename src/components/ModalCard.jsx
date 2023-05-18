import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeShowModal, changeExitModalButton } from '../store/slice/actions.slice'
import "./styles.css"
import { Link } from 'react-router-dom'

function ModalCard({}) {

  const dispatch = useDispatch()

  const {isShowModal, exitModalButton,theme} = useSelector(store => store.action)

  const handleClickShowMenu = () =>{
    dispatch(changeShowModal())
    dispatch(changeExitModalButton())
  }

 

  return (
    <header className={`z-30 fixed top-0 right-0 left-0 bottom-0 ${theme? 'bg-black': 'bg-white'} flex font-semibold text-4xl justify-center ${isShowModal ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <nav className='flex flex-col items-start gap-20 self-center justify-start '>

        <div className='grid' >

        <a onClick={handleClickShowMenu} href="#home" className="nav text__home">
         <span className={`  ${theme?'text-white/20':'text-black/20'} text-3xl text__home__span`}>01 </span> <span className=' '> Inicio </span>
        </a>
       
        </div>

        <a onClick={handleClickShowMenu}  href="#skills" className="nav text__about">
        <span  className={` ${theme?'text-white/20':'text-black/20'} text-3xl text__about__span`}>02 </span> <span className=''>Sobre mi</span>
        </a>

        <a onClick={handleClickShowMenu}  href="#projects" className="nav text__projects">
        <span  className={`  ${theme?'text-white/20':'text-black/20'} text-3xl text__projects__span`}>03 </span> <span className=''>Proyectos</span>
        </a>

        <a onClick={handleClickShowMenu}   href="#contact" className="nav text__contact">
        <span  className={`  ${theme?'text-white/20':'text-black/20'} text-3xl text__contact__span`}>04 </span> <span className=''>Contacto</span>
        </a>

        <div className="grid grid-cols-3 w-full">
      <Link target='_blank' to={'https://github.com/VazquezRoo'}  className="w-[30px] aspect-square justify-self-end"><img src="/images/skills/github.png" alt="" className="hover:opacity-50" /></Link>
      <Link target='_blank'  to={'https://www.linkedin.com/in/cristian-vazquez-roo/'} className="w-[30px] aspect-square justify-self-center"><img src="/images/Linkedin.png" alt="" className="hover:opacity-50 " /></Link>
      <Link target='_blank' to="https://api.whatsapp.com/send?phone=6531007177"><i className='bx bxl-whatsapp justify-self-start text-green-500 text-[30px] hover:opacity-50' ></i></Link>
      </div>
      </nav>

      

      <p onClick={handleClickShowMenu} className= {`${exitModalButton && 'animation'} mt-[20px]  absolute`}><i className='bx bx-x-circle text-[40px] '></i></p>
    </header>
  )
}

export default ModalCard