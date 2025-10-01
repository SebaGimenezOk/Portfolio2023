import React from 'react'
import Trax from "../assets/works/Trax.png"
import TiendaReact from "../assets/works/TiendaReact.png"
import rdn from "../assets/works/rdn.png"
import Tropiweb from "../assets/works/tropiweb.png"
import SimpsonsGame from "../assets/works/SimpsonGamePortada.png"
import pontecle from "../assets/works/pontecle.png"






const items = [
  {
    image: "https://i.pravatar.cc/300?img=1",
    title: "Sarah Johnson",
    subtitle: "Frontend Developer",
    handle: "@sarahjohnson",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/sarahjohnson"
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen"
  }
];




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
      titulo: 'Radio Naciones',
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
    <div name="proyectos" className='bg-gradient-to-t from-slate-900 to-indigo-950 w-full text-stone-100  md:max-h-full' >
      <div className='max-w-screen-lg p-4  justify-center  mx-auto flex flex-col  w-full h-full gap-8'>
        <div className='pb-8 mt-32  '>
          <p className='text-5xl capitalize font-bold inline border-b-4  border-gray-100'>Proyectos</p>
          <p className="text-stone-100 py-6" >Algunos de mis trabajos:  Logos, Branding, PressKit, Flyers, Banners,etc... ( Todavía en construcción )</p>
        </div>
        
         <div className='grid sm:grid-cols-2 md:grid-cols-3  md:my-8 gap-8 px-12 sm:px-12'>
          {
            portfolios.map(({ id, src, link, titulo, tools }) => (
              <div key={id} className='rounded-lg'>
                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                <h3 className='flex text-2xl justify-center p-3'>{titulo}</h3>
                <h3 className='flex justify-center p-3 '>{tools}</h3>
                <div className='flex items-center justify-center ' >
                  <button onClick={() => window.location.href = link} className='w-1/3 px-1 py-1 duration-200 hover:scale-105 mb-10 '>ver demo</button>
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