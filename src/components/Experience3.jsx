import React from 'react'


import logoreact from '../assets/skills/logoreact.png'
import Xcode from '../assets/skills/Xcode.png'
import AndroidSt from '../assets/skills/Android-Studio.png'
import ExpoGo from '../assets/skills/expo2.png'








const Experience = () => {

    const techs = [

        {
            id: 19,
            src: ExpoGo,
            titulo: 'expo go',
        },
        {
            id: 20,
            src: logoreact,
            titulo: 'react native',
            style: 'shadow-pink-500'
        },
        {
            id: 21,
            src: AndroidSt,
            titulo: 'android studio',
            style: 'shadow-pink-500'
        },
        {
            id: 22,
            src: Xcode,
            titulo: 'xcode',
            style: 'shadow-pink-500'
        }
    ]

    return (
        <div name="skills" className='pb-10 bg-gradient-to-t from-indigo-950 to-violet-950 pt-7 w-full h-full '>
           

            <div className='max-w-screen-lg  mx-auto flex flex-col justify-center w-full h-full my-10 text-stone-100'>
                <div className='px-4'>
                    <p className='text-5xl capitalize font-bold inline border-b-4  border-gray-100 '>Mobile</p>
                    <p className="text-stone-100 py-6" >conocimientos y manejo de </p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-9 gap-4 text-center py-2 px-12 sm:px-0'>
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