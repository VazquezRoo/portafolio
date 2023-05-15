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

        <Link onClick={handleClickShowMenu} to={'/'} href="" className="nav text__home">
         <span className={`  ${theme?'text-white/20':'text-black/20'} text-3xl text__home__span`}>01 </span> <span className=' tracking-[4px]'> Home </span>
        </Link>
       
        </div>

        <Link onClick={handleClickShowMenu}  to={'/about'} href="" className="nav text__about">
        <span  className={` ${theme?'text-white/20':'text-black/20'} text-3xl text__about__span`}>02 </span> <span className=' tracking-[4px]'>About</span>
        </Link>

        <Link onClick={handleClickShowMenu}  to={'/projects'} href="" className="nav text__projects">
        <span  className={`  ${theme?'text-white/20':'text-black/20'} text-3xl text__projects__span`}>03 </span> <span className=' tracking-[4px]'>Projects</span>
        </Link>

        <Link onClick={handleClickShowMenu}  to={'/contact'} href="" className="nav text__contact">
        <span  className={`  ${theme?'text-white/20':'text-black/20'} text-3xl text__contact__span`}>04 </span> <span className=' tracking-[4px]'>Contact</span>
        </Link>
      </nav>

      <p onClick={handleClickShowMenu} className= {`${exitModalButton && 'animation'} mt-[20px]  absolute`}><i className='bx bx-x-circle text-[40px] '></i></p>
    </header>
  )
}

export default ModalCard