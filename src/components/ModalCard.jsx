import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeShowModal, changeExitModalButton } from '../store/slice/actions.slice'
import "./styles.css"

function ModalCard() {

  const dispatch = useDispatch()

  const {isShowModal, exitModalButton} = useSelector(store => store.action)

  const handleClickShowMenu = () =>{
    dispatch(changeShowModal())
    dispatch(changeExitModalButton())
  }

 

  return (
    <header className={`z-30 fixed top-0 right-0 left-0 bottom-0 bg-black text-white flex font-semibold text-4xl justify-center ${isShowModal ? 'opacity-100' : 'opacity-0 invisible]'}`}>
        <nav className='flex flex-col items-start gap-5 self-center justify-start '>

        <div className='grid' >
        <a href="" className="nav text__home">
         <span className={`${exitModalButton && 'animation__section'}  text-white/20 text-3xl text__home__span`}>01 </span> Home
        </a>
       
        </div>

        <a href="" className="nav text__about">
        <span  className={`${exitModalButton && 'animation__section'}  text-white/20 text-3xl text__about__span`}>02 </span> About
        </a>
        <a href="" className="nav text__projects">
        <span  className={`${exitModalButton && 'animation__section'}  text-white/20 text-3xl text__projects__span`}>03 </span> Projects
        </a>
        <a href="" className="nav text__contact">
        <span  className={`${exitModalButton && 'animation__section'}  text-white/20 text-3xl text__contact__span`}>04 </span> Contact
        </a>
      </nav>
      <p onClick={handleClickShowMenu} className= {`${exitModalButton && 'animation'} mt-[20px]  absolute`}><i className='bx bx-x-circle text-[40px] '></i></p>
    </header>
  )
}

export default ModalCard