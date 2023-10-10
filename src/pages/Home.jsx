import React from "react";
import Header from "../components/Header";
import Skills from "../components/Skills";
import ModalCard from "../components/ModalCard";
import ContactSection from "../components/ContactSection";
import ProjectsSection from "../components/ProjectsSection";
import "../components/styles.css";
import { useSelector } from "react-redux";

function Home({}) {
  const { theme } = useSelector((store) => store.action);

  return (
    <main className=" min-h-screen  bg-cover grid justify-center justify-items-center z-50">
      <div
        id="home"
        className=" self-center min-[1000px]:grid-cols-2 grid w-[80%] w-max-[600px]  pt-[60px] text-[25px] tracking-[4px] min-[600px]:mt-[100px] min-[600px]:text-[40px] min-[800px]:text-[50px] gap-10"
      >
        <div>
          <h3>Hola,</h3>
          <p>
            {" "}
            Yo soy{" "}
            <span className={`${theme ? "letra" : "letraDos"}`}>Cris</span>,
          </p>
          <p> Desarrollador Web Full-Stack </p>
        </div>
        <div className=" w-full ">
          <img
            src="/images/img.png"
            alt=""
            className="grid object-contain h-[400px] mx-auto z-[100]"
          />
        </div>
      </div>

      <div
        id="skills"
        className="grid  mt-[40px] w-full max-w-[1200px] border-t-[1px] border-white/40 pt-[100px]  px-6"
      >
        <h4 className="text-center text-[20px] tracking-[4px] min-[600px]:text-[30px] min-[1000px]:text-[40px]">
          Gracias por visitarme!
        </h4>
        <p className="text-center mt-4 min-[600px]:text-[20px]  min-[1000px]:text-[25px]">
          ¡Hola extraño!, mi nombre es Cristian y soy un desarrollador
          front-end, apasionado por los productos digitales que ayudan a las
          personas a disfrutar la vida cotidiana y con la meta de ofrecerles las
          mejor experiencias en cada visita.
        </p>
      </div>
      <div className="grid w-[90%] justify-items-center mt-[100px]  border-t-[1px] border-white/10 ">
        <Skills />
      </div>

      {/* <ModalCard theme={theme}/> */}

      <h3
        id="projects"
        className={`${
          theme ? "text-white/50" : "text-black/70"
        } mt-[50px] pt-[100px] text-[30px] border-t-[1px] border-white/10 w-full text-center`}
      >
        Conoce mis trabajos
      </h3>

      <ProjectsSection id="projects_home" theme={theme} />

      <div id="contact" className="w-[90%] min-[900px]:w-[800px] pt-[100px]">
        <h3 className=" pl-[15px] text-[30px] text-white/50">
          Mandame un saludo!
        </h3>
        <ContactSection id="contact_home" theme={theme} />
      </div>
      <div className="w-full h-[100px]"></div>
    </main>
  );
}

export default Home;
