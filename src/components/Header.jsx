import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeShowModal, changeExitModalButton, changeTheme } from "../store/slice/actions.slice";
import "./styles.css"
import { Link } from "react-router-dom";

function Header({}) {

  const {theme} = useSelector(store => store.action)


  const dispatch = useDispatch()

  const handleClickShowMenu = () =>{
    dispatch(changeShowModal())
    dispatch(changeExitModalButton())
  }

  // const hobbies = [
  //   'soccer player',
  //   'optimist',
  //   'superhero movie fan',

  // ]

  const changeThemeOffOn = () =>{
    dispatch(changeTheme())
  }



  return (
   <div className={``}>

      

    <div className= {` w-[100px]  place-self-center ${theme? 'bg-black': 'bg-white'} h-[80px] flex justify-center opacity-0 invisible absolute min-[600px]:w-screen min-[600px]:opacity-100 min-[600px]:fixed min-[600px]:visible z-50  pb-[25px] px-[50px] min-[990px]:px-[100px] `}>
      
    <div className="self-end " >
            
           <button onClick={changeThemeOffOn}>
            {
              theme? <i className='bx bxs-sun text-[30px]'></i>: <i className='bx bx-moon text-[30px]' ></i>
            }
           </button>
    </div>
    {/* <div className="grid items-end ">
      <Link className="w-[30px] aspect-square"><img src="/images/skills/github.png" alt="" className="w-" /></Link>
    </div> */}
       
      
      <div className=" h-full  max-w-[1200px] w-[100%] flex gap-6 min-[1000px]:text-[20px] min-[1000px]:gap-16 items-end justify-end min-[800px]:text-[20px] scroll-smooth">
      
      <div className="h-full w-full flex items-end pl-10 gap-3">
      <Link target='_blank' to={'https://github.com/VazquezRoo'}  className="w-[30px] aspect-square"><img src="/images/skills/github.png" alt="" className="hover:opacity-50" /></Link>
      <Link target='_blank'  to={'https://www.linkedin.com/in/cristian-vazquez-roo/'} className="w-[30px] aspect-square"><img src="/images/Linkedin.png" alt="" className="hover:opacity-50" /></Link>
      <Link target='_blank' to="https://wa.me/526531007177"><i className='bx bxl-whatsapp text-green-500 text-[25px]' ></i></Link>
      </div>
      
        <a href="#home" className="hover:text-purple-600 scroll-smooth"><p> Inicio</p></a>
        <a href="#skills" className="hover:text-purple-600 scroll-smooth"><p> Conoceme</p></a>
        <a href="#projects" className="hover:text-purple-600 scroll-smooth"><p> Proyectos</p></a>
        <a href="#contact" className="hover:text-purple-600 scroll-smooth"><p> Contacto</p></a>

      </div>
    </div>






            {/* <div className="absolute pt-[20px] pl-[10px] ">
            <div className={` w-[35px] h-[20px] ${theme? 'bg-white' : 'bg-black' } rounded-[25px] transition-[5s]  min-[720px]:mt-[-55px] min-[720px]:ml-[480px] min-[720px]:w-[40px] min-[720px]:h-[25px] self-end `}>
            
            {theme ?           
        <input onClick={changeTheme} type="radio"  className={`${theme? 'bg-black' : 'bg-white' } rounded-[50%] w-[20px] h-[20px] appearance-none min-[720px]:w-[25px] min-[720px]:h-[25px] z-40`}/> :

        <input onClick={changeTheme}  type="radio"  className={`${theme? 'bg-black' : 'bg-white' } rounded-[50%] w-[20px] h-[20px] ml-[15px] appearance-none min-[720px]:w-[25px] min-[720px]:h-[25px] min-[720px]:ml-[15px] z-40`}/>
            }
    </div>
            </div> */}


  <div className=" justify-items-center right-2  mt-2 fixed top-0 flex  rounded-full min-[600px]:invisible min-[600px]:opacity-0 min-[600px]:absolute w-full justify-between pl-6 "bbbb>

  <div >
            
           <button onClick={changeThemeOffOn} className="z-50 pt-2">
            {
              theme? <i className='bx bxs-sun text-[30px]'></i>: <i className='bx bx-moon text-[30px]' ></i>
            }
           </button>
    </div>

  <button onClick={handleClickShowMenu} className={`grid z-50 sticky ${theme? 'text-white': 'text-black'} text-3xl justify-items-center  pt-[10px] w-[40px] h-[40px] rounded-[50%]  cursor-pointer  `}><i className='bx bx-dialpad-alt'></i></button>
  </div>

  </div>
  

    

  );
}

export default Header;
