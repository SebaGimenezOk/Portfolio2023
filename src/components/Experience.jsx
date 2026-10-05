import React from 'react'
import bootstrap from '../assets/skills/logoboots.png'
import javascript from '../assets/skills/javascript.png'
import logoreact from '../assets/skills/logoreact.png'
import material from '../assets/skills/material.png'
import tailwind from '../assets/skills/tailwind.png'
import nodejs from '../assets/skills/node.png'
import nextjs from '../assets/skills/next2.png'
import astro from '../assets/skills/astro.png'






const Experience = () => {

    const techs = [

        {
            id: 3,
            src: javascript,
            titulo: 'javascript',
            style: 'shadow-green-500'
        },
        {
            id: 4,
            src: logoreact,
            titulo: 'react',
            style: 'shadow-blue-500'
        },
        {
            id: 5,
            src: bootstrap,
            titulo: 'bootstrap',
            style: 'shadow-gray-200'
        },
        {
            id: 6,
            src: material,
            titulo: 'material',
            style: 'shadow-yellow-500'
        },
        {
            id: 7,
            src: tailwind,
            titulo: 'tailwind',
            style: 'shadow-blue-500'
        },
        {
            id: 8,
            src: nodejs,
            titulo: 'node js',
            style: 'shadow-blue-500'
        },
        {
            id: 9,
            src: astro,
            titulo: "astro",
            style: 'shadow-blue-900'

        },

        {
            id: 15,
            src: nextjs,
            titulo: 'next js',
            style: 'shadow-pink-500'
        },


    ]

    return (
        <div name="skills" className='pb-5 bg-gradient-to-b from-blue-950 to-blue-900 pt-8 w-full h-full '>
    
    

            <div className='max-w-screen-lg  mx-auto flex flex-col justify-center w-full h-full my-20 text-stone-100'>
                <div className='px-4'>
                    <p className='text-5xl capitalize font-bold inline border-b-4  border-gray-100 '>Front-End</p>
                    <p className="text-stone-100 py-6" >conocimientos y manejo de </p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-9 gap-8 text-center py-2 px-12 sm:px-0'>
                    {
                        techs.map(({ id, src, titulo, style }) => (
                            <div key={id} className={`hover:scale-125 duration-500 rounded-lg py-2 ${style}`}>
                                <img src={src} alt="" className='w-20 mx-auto' />
                                <p className='mt-4'>{titulo}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
           
        </div>
    )
}

export default Experience