import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function ProjectsSection({}) {
    
  const {theme} = useSelector(store => store.action)

    const projects = [{
        id: 1,
        name :'Pokedex',
        url : 'https://vazquez-pokedex.netlify.app/',
        img : {
              uno:'/images/pokedex/pokedexUno.png',
              dos:'/images/pokedex/pokedexDos.png',
        }
              ,
        description: 'En esta pagina podras encontrar tu pokemon favorito ingresando el nombre, generacion o tipo.',
        descriptionDos: 'En esta pagina podras encontrar tu pokemon favorito ingresando el nombre, generacion o tipo. Veras las caracteristicas de cada pokemon, con su cadena evolutiva y sus habilidades.',
        skills: [ 
          '/images/skills/css.png',
          '/images/skills/html.png',
          '/images/skills/javascript.png',
          '/images/skills/react.png',
          '/images/skills/redux.png',
          '/images/skills/git.png',
        ],
        git: '/images/skills/github.png',
        github: 'https://github.com/VazquezRoo/pokedex',

        
      },
      {
        id: 2,
        name :'Rick and Morty',
        url : 'https://vazquez-rick.netlify.app/',
        img : {
              uno:'/images/rick/rick-uno.png',
              dos:'/images/rick/ricky-dos.png',
        }
              ,
        description: 'Este trabajo te trae los personajes de las diferentes dimenciones de la serie Rick and Morty.',
        descriptionDos: 'Este trabajo te trae los personajes de las diferentes dimenciones de la serie Rick and Morty. Podras buscar entre las diferentes dimensiones y encontrar tu personaje favorito.',
        skills: [ 
          '/images/skills/css.png',
          '/images/skills/html.png',
          '/images/skills/javascript.png',
          '/images/skills/react.png',
          '/images/skills/git.png',
          
        ],
        git: '/images/skills/github.png',
        github: 'https://github.com/VazquezRoo/Rick-and-Morty',
        

      },
      {
        id: 3,
        name :'Weather',
        url : 'https://vazquez-weather.netlify.app',
        img : {
              uno:'/images/weather/weather-uno.png',
              dos:'/images/weather/weather-dos.png',
        }
              ,
        description: 'Aqui puedes ver el clima de Ciudad y buscar el todas las partes del mundo.',
        descriptionDos: 'Aqui puedes ver el clima de Ciudad y buscar el todas las partes del mundo.',
        skills: [ 
          '/images/skills/css.png',
          '/images/skills/html.png',
          '/images/skills/javascript.png',
          '/images/skills/react.png',
          '/images/skills/git.png',
          
        ],
        git: '/images/skills/github.png',
        github: 'https://github.com/VazquezRoo/clima',
        

      },
      {
        id: 4,
        name :'E-comeerce',
        url : 'https://vazquez-shop.netlify.app',
        img : {
              uno:'/images/shop/shop-uno.png',
              dos:'/images/shop/shop-dos.png',
        }
              ,
        description: 'E-commerce con las funciones completas, incluso podras crear y eliminar tu propio usuario.',
        descriptionDos: 'E-commerce con las funciones completas, incluso podras crear y eliminar tu propio usuario.',
        skills: [ 
          '/images/skills/css.png',
          '/images/skills/html.png',
          '/images/skills/javascript.png',
          '/images/skills/react.png',
          '/images/skills/git.png',
          '/images/skills/redux.png',

          
        ],
        git: '/images/skills/github.png',
        github: 'https://github.com/VazquezRoo/shop',
        

      },
      {
        id: 5,
        name :'Phrases',
        url : 'https://vazquez-curiosities.netlify.app',
        img : {
              uno:'/images/space/space-uno.png',
              dos:'/images/space/space-dos.png',
        }
              ,
        description: 'Aqui puedes elegir entre ver curiosidades del universo o probar tu suerte abriendo una galleta.',
        descriptionDos: 'Aqui puedes elegir entre ver curiosidades del universo o probar tu suerte abriendo una galleta.',
        skills: [ 
          '/images/skills/css.png',
          '/images/skills/html.png',
          '/images/skills/javascript.png',
          '/images/skills/react.png',
          '/images/skills/git.png',
          
        ],
        git: '/images/skills/github.png',
        github: 'https://github.com/VazquezRoo/phrasesRandom',
        

      },
        
      ]


  return (
    <div className='grid justify-center w-full p-3  mt-[30px]  items-center '>
   

    <div className='mt-[20px] grid min-[500px]:text-[25px]  justify-center gap-4 py-6  min-[1000px]:grid-cols-2 grid-rows-[auto_auto]  '>
      {
        projects.map(project =>
          // <div key={project.id} className='grid justify-center'>
          <div key={project.id} className={` grid gap-2 border-[1px] border-white/50 rounded-md pt-4 w-[80
            %] max-w-[500px] ${theme? 'bg-black': 'bg-gray-200/80'}   `}>

            <div className='relative group max-h-[270px]'>
              <img src={project.img.uno} alt="" className='w-full h-full group-hover:opacity-0 group-hover:invisible  duration-500 transition-opacity'/>
              <img src={project.img.dos} alt="" className=' duration-1000 transition-opacity w-full h-full absolute object-contain top-0 invisible opacity-0 group-hover:opacity-100 group-hover:visible'/>
              
            </div>

            <div className='flex gap-3 justify-center'>
            {project.skills.map(skill =>  <div key={skill} className='object-contain w-full aspect-square max-w-[30px]'><img src={skill} alt="" className='h-full aspect-square' />
            </div>)}
            </div>

          <div className={`${theme? 'bg-gray-900': 'bg-gray-100'} min-[600px]:h-[270px]`}>
            <h3 className='px-4 pt-6'><b>{project.name}</b></h3>   
            {/* <p className='px-2 min-[600px]:opacity-100 min-[600px]:absolute min-[600px]:insivible'>{project.description}</p> */}
            <p className='px-4 py-6  text-[15px] min-[600px]:text-[25px] '>{project.description}</p>


            <div className='w-full flex justify-end pb-2 pr-2 gap-2'>
            <Link to={project.url} className={`${theme?'text-white': 'text-black'} flex justify-end place-items-center italic hover:opacity-50 text-[15px]`}><i className='bx bxs-right-arrow-alt text-[30px] hover:text-[32px]'></i> </Link>
            <Link to={project.github} className='hover:opacity-50  '>
            <img src={project.git} alt="" className='w-[30px] min-[450px]:w-[40px] aspect-square object-contain' />
            </Link>
            </div>

            </div>
          </div>

         
           )
      }       
    
    </div>
  </div>
  )
}

export default ProjectsSection