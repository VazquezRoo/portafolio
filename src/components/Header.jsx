import React from "react";
import { useDispatch } from "react-redux";
import { changeShowModal, changeExitModalButton } from "../store/slice/actions.slice";
import "./styles.css"

function Header() {

  const dispatch = useDispatch()

  const handleClickShowMenu = () =>{
    dispatch(changeShowModal())
    dispatch(changeExitModalButton())
  }

  const hobbies = [
    'soccer player',
    'optimist',
    'superhero movie fan',

  ]

  return (


    <header className="grid pb-6">

      <div className="bg-[url('/images/bg-02.jpg')] bg-cover opacity-25 absolute w-screen h-[400px] z-0 "></div>
      <div className="z-30 grid">
       
        <button onClick={handleClickShowMenu} className="grid z-50 sticky top-[10px]  text-white text-3xl justify-items-center mr-[20px] pt-[10px] w-[40px] h-[40px] rounded-[50%]  cursor-pointer"><i className='bx bx-menu ' ></i></button>
        
      

      <div className="grid pt-[100px]" >
      <div className="absolute justify-self-center self-center pt-2 w-[200px] h-[200px] bg-green-900/50 rounded-[50%] mb-[200px]  mx-auto">
        <img src="" alt="" className="w-[190px] h-[180px] rounded-[50%] bg-black border-4 border-green-500 mx-auto" />
      </div>
     <div  className=" w-[200px] h-[230px] mx-auto bg-gray-500/50 flex items-center justify-end flex-col "> 
       <h3 className="text-center text-white font-semibold text-3xl pb-[10px]">Hi, I'm <span className="text__shadow text-green-600">Cris </span>!</h3>
       <p className="text-white/50">A fronted developer</p>
       <div className="flex text-xl text-white/60 p-2 gap-3 ">
       <i class='bx bxl-instagram'></i>
       <i class='bx bxl-facebook' ></i>
       <i class='bx bxl-twitter' ></i>
       <i class='bx bx-envelope' ></i>       </div>
      </div>
      </div>
      </div>
     
    </header>
  );
}

export default Header;
