import React from "react";
import "./styles.css";
import Projects from "./ProjectsSection";

function Skills() {
  const skills = [
    "/images/skills/css.png",
    "/images/skills/html.png",
    "/images/skills/javascript.png",
    "/images/skills/react.png",
    "/images/skills/redux.png",
    "/images/skills/git.png",
    "/images/skills/github.png",
    "/images/skills/nodej.png",
  ];

  return (
    <div className="w-[90%] grid gap-6 max-w-[1200px]  min-[600px]:grid-cols-[auto_auto_auto] mt-[20px]">
      <div className="max-w-[300px]  min-[600px]:row-span-2">
        <h3 className=" pt-10 text-[25px] min-[600px]:text-[30px]  min-[1000px]:text-[40px]">
          Mis aptitudes
        </h3>
        <p className=" min-[600px]:text-[20px]">
          Tengo habilidades en distintos campos del desarrollo, soy la persona
          perfecta para realizar tus proyectos. Sea cual sea la necesidad, puedo
          asumir cualquier desafio y adaptarme a cualquier situacion.
        </p>
      </div>

      <div className="self-start pt-14 min-[600px]:justify-self-center">
        <i className="bx bx-atom text-green-500 text-[25px]"></i>
        <h4 className="text-[20px]">
          <b>Frameworks</b>
        </h4>
        <ul className="text-[14px] mt-[10px]">
          <li>React</li>
          <li>Wordpress</li>
          <li>Boostrap</li>
          <li>NodeJs</li>
        </ul>
      </div>

      <div className="self-start min-[600px]:pt-14  min-[600px]:justify-self-center">
        <i className="bx bx-atom  text-green-500 text-[25px]"></i>
        <h4 className="text-[20px]">
          <b>Source control </b>
        </h4>
        <ul className="text-[14px] mt-[10px]">
          <li>Git</li>
          <li>Github</li>
          <li>Boostrap</li>
        </ul>
      </div>

      <div className="self-start min-[600px]:justify-self-center  min-[600px]:col-start-2">
        <i className="bx bx-atom  text-green-500 text-[25px]"></i>
        <h4 className="text-[20px]">
          <b>Lenguajes</b>
        </h4>
        <ul className="text-[14px] mt-[10px]">
          <li>Html</li>
          <li>Css</li>
          <li>JavaScript</li>
        </ul>
      </div>

      <div className="flex w-full pt-10 h-100px gap-4 min-[600px]:col-start-1 min-[600px]:row-start-3 min-[600px]:col-span-3 justify-center ">
        {skills.map((skill) => (
          <div
            key={skill}
            className=" w-full max-h-[30px]    aspect-square min-w-[10px] max-w-[50px]"
          >
            <img
              src={skill}
              alt=""
              className="h-full max-h-[30px] object-contain"
            />
          </div>
        ))}
      </div>

      <div className="text-white flex gap-4 flex-wrap mt-[30px] justify-center  min-[1000px]:text-[20px] min-[600px]:row-start-4 min-[600px]:col-span-3">
        <p className=" bg-gray-600 text-[20px] px-6 rounded-sm">HTML</p>
        <p className=" bg-gray-600 text-[20px] px-6 rounded-sm">CSS</p>
        <p className=" bg-gray-600 text-[20px] px-6 rounded-sm">JavaScript</p>
        <p className=" bg-gray-600 text-[20px] px-6 rounded-sm">React</p>
        <p className=" bg-gray-600 text-[20px] px-6 rounded-sm">Git</p>
        <p className=" bg-gray-600 text-[20px] px-6 rounded-sm">GitHub</p>
        <p className=" bg-gray-600 text-[20px] px-4 rounded-sm">
          Responsive Design
        </p>
        <p className=" bg-gray-600 text-[20px] px-6 rounded-sm">Tailwind</p>
        <p className=" bg-gray-600 text-[20px] px-6 rounded-sm">Redux</p>
        <p className=" bg-gray-600 text-[20px] px-6 rounded-sm">NodeJs</p>
        <p className=" bg-gray-600 text-[20px] px-6 rounded-sm">PostgreSQL</p>
      </div>
    </div>
  );
}

export default Skills;
