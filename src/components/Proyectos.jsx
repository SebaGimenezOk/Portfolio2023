import React from 'react'
import asterion from "../assets/works/asterion.png"
import macnally from "../assets/works/macnally.png"
import rdn from "../assets/works/rdn.png"
import sigales from "../assets/works/sigales.png"
import silin from "../assets/works/silin.png"
import pontecle from "../assets/works/pontecle.png"

const Proyectos = () => {

  const portfolios = [
    {
      id: 1,
      src: asterion
    },
    {
      id: 2,
      src: macnally
    },
    {
      id: 3,
      src: rdn
    },
    {
      id: 4,
      src: sigales
    },
    {
      id: 5,
      src: silin
    },
    {
      id: 6,
      src: pontecle
    }
  ]


  return (
    <div name="proyectos" className=' bg-gradient-to-t from-black to-slate-900 w-full text-white  md:h-screen' >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-5xl capitalize font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className="text-gray-200 py-6" >Algunos de mis trabajos:  Logos, Branding, PressKit, Flyers, Banners,etc... ( Todavía en construcción )</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-12'>
        {
          portfolios.map(({ id, src }) => (
            <div key={id} className='rounded-lg'>
              <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
              <div className='flex items-center justify-center ' >
                <button className='w-1/3 px-2 py-3 m-4 duration-200 hover:scale-105 '>Demo</button>
                <button className='w-1/3 px-2 py-3 m-4 duration-200 hover:scale-105 '>Code</button>
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