import React from 'react'
import Trax from "../assets/works/Trax.png"
import TiendaReact from "../assets/works/TiendaReact.png"
import rdn from "../assets/works/rdn.png"
import Tropiweb from "../assets/works/tropiweb.png"
import SimpsonsGame from "../assets/works/SimpsonGamePortada.png"
import pontecle from "../assets/works/pontecle.png"


const Proyectos = () => {

  const portfolios = [
    {

      id: 1,
      src: pontecle,
      titulo: 'PonteCle',
      link: 'https://sebagimenezok.github.io/Pontecle26/',
      tools: 'html 5, css vanilla '

    },
    {
      id: 2,
      src: SimpsonsGame,
      titulo: 'Simpsons Game',
      link: 'https://sebagimenezok.github.io/SimpsonsGame/',
      tools: 'javascript vanilla'

    },
    {
      id: 3,
      src: rdn,
      titulo: 'Radio de las Naciones',
      link: 'https://rdnweb.netlify.app/',
      tools: 'react js, tailwind'
    },
    {
      id: 4,
      src: TiendaReact,
      titulo: 'Tienda React',
      link: 'https://github.com/SebaGimenezOk/tienda-React',
      tools: 'react js, bootsrap'
    },
    {
      id: 5,
      src: Trax,
      titulo: 'Trax',
      link: 'https://github.com/SebaGimenezOk/Trax',
      tools: 'react native,expo go'
    },
    {
      id: 6,
      src: Tropiweb,
      titulo: 'Tropiweb',
      link: 'https://github.com/SebaGimenezOk/TropiWeb/tree/master',
      tools: 'react js, bootsrap'

    }
  ]


  return (
    <div name="proyectos" className=' bg-gradient-to-t from-black to-slate-900 w-full text-white  md:h-screen' >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-5xl capitalize font-bold inline border-b-4 border-gray-500'>Proyectos</p>
          <p className="text-gray-200 py-6" >Algunos de mis trabajos:  Logos, Branding, PressKit, Flyers, Banners,etc... ( Todavía en construcción )</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-12'>
          {
            portfolios.map(({ id, src, link, titulo, tools }) => (
              <div key={id} className='rounded-lg'>
                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                <h3 className='flex text-2xl justify-center p-3'>{titulo}</h3>
                <h3 className='flex justify-center p-3 '>{tools}</h3>
                <div className='flex items-center justify-center ' >
                  <button onClick={() => window.location.href = link} className='w-1/3 px-1 py-1 duration-200 hover:scale-105 '>ver demo</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>

  )
}

export default Proyectos