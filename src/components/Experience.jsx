import React from 'react'
import logocss from '../assets/skills/logocss.png'
import github from '../assets/skills/github.png'
import node from '../assets/skills/node.png'
import logoreact from '../assets/skills/logoreact.png'
import nextjs from '../assets/skills/nextjs.png'
import javascript from '../assets/skills/javascript.png'
import tailwind from '../assets/skills/tailwind.png'
import graphql from '../assets/skills/graphql.png'

const Experience = () => {

    const techs = [
        {
            id: 1,
            src: logocss,
            titulo: 'css',
            style: 'shadow-blue-500'
        },
        {
            id: 2,
            src: github,
            titulo: 'github',
            style: 'shadow-gray-200'
        },
        {
            id: 3,
            src: node,
            titulo: 'node',
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
            src: nextjs,
            titulo: 'nextjs',
            style: 'shadow-gray-200'
        },
        {
            id: 6,
            src: javascript,
            titulo: 'javascript',
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
            src: logocss,
            titulo: 'css',
            style: 'shadow-blue-500'
        },
        {
            id: 8,
            src: graphql,
            titulo: 'graphql',
            style: 'shadow-pink-500'
        }
    ]


    return (
        <div name="experience" className=' pb-10 bg-gradient-to-b from-slate-800 to-black py-8 w-full '>
            <div className='max-w-screen-lg  mx-auto flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-5xl capitalize font-bold inline border-b-4 border-gray-500 '>Experience</p>
                    <p className= "text-gray-200 py-6" >Tech con las que trabajo</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-9 gap-8 text-center py-8 px-12 sm:px-0'>
                    {
                        techs.map(({ id, src, titulo, style }) => (
                            <div key={id} className={`hover:scale-105 duration-500 rounded-lg py-2 ${style}`}>
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