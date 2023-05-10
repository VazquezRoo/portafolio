import React from 'react'
import { Link } from 'react-router-dom'

function ProjectsSection({theme}) {
    
    const projects = [{
        id: 1,
        name :'Pokedex',
        url : 'https://vazquez-pokedex.netlify.app/',
        img : {
              uno:'/images/pokedex/pokedexUno.png',
              dos:'/images/pokedex/pokedexDos.png',
              tres:'/images/pokedex/pokedexTres.png'
        }
              ,
        description: 'En esta pagina podras encontrar tu pokemon favorito ingresando el nombre, generacion o tipo.',
        descriptionDos: 'En esta pagina podras encontrar tu pokemon favorito ingresando el nombre, generacion o tipo. Veras las caracteristicas de cada pokemon, con su cadena evolutiva y sus habilidades.',
        skills: [ 
          'Js',
          'Html',
          'TailwindCss',
          'Redux',
        ]
        
      },
      {
        id: 2,
        name :'Rick and Morty',
        url : 'https://vazquez-rick.netlify.app/',
        img : {
              uno:'/images/rick/rick-uno.png',
              dos:'/images/rick/rick-dos.png',
        }
              ,
        description: 'Este trabajo te trae los personajes de las diferentes dimenciones de la serie Rick and Morty.',
        descriptionDos: 'Este trabajo te trae los personajes de las diferentes dimenciones de la serie Rick and Morty. Podras buscar entre las diferentes dimensiones y encontrar tu personaje favorito.',
        skills: [ 
          'Js',
          'Html',
          'TailwindCss',
          
        ]
        

      }
        
      ]


  return (
    <div className='grid justify-center w-full p-3  mt-[30px]  items-center '>
   

    <div className='mt-[20px] grid min-[500px]:text-[25px]  justify-center gap-4 py-6  min-[1000px]:grid-cols-2 grid-rows-[auto_auto]  '>
      {
        projects.map(project =>
          // <div key={project.id} className='grid justify-center'>
          <div key={project.id} className={` grid gap-2 border-[1px] border-white/50 rounded-md pt-4 w-[80
            %] max-w-[500px] ${theme? 'bg-black': 'bg-gray-200/80'}`}>

            <div className='relative'>
              <img src={project.img.uno} alt="" className='w-full h-full'/>
              
            </div>

            <div className='flex gap-4 justify-center'>
            {project.skills.map(skill => <p key={skill} className='text-[10px] tracking-[3px]'>{skill}</p>)}
            </div>

          <div className={`${theme? 'bg-gray-900': 'bg-gray-100'}`}>
            <h3 className='px-4 pt-6'><b>{project.name}</b></h3>   
            {/* <p className='px-2 min-[600px]:opacity-100 min-[600px]:absolute min-[600px]:insivible'>{project.description}</p> */}
            <p className='px-4 py-6  text-[15px] min-[600px]:text-[25px] '>{project.description}</p>
            <Link to={project.url} className={`${theme?'text-purple-500': 'text-orange-400'} flex justify-end place-items-center italic hover:text-gray-300 text-[15px]`}>visit the site <i className='bx bx-right-arrow-alt'></i></Link>
            </div>
          </div>

         
           )
      }       
    
    </div>
  </div>
  )
}

export default ProjectsSection