import React from "react";

import PowerBi from "../assets/skills/powerbi.png"
import Tableau from "../assets/skills/Tableau.png"
import Python from "../assets/skills/python.png"
import SqlServer from '../assets/skills/sql server.png'
import nodejs from '../assets/skills/node.png'
import mongo from '../assets/skills/hojaverde.png'




const Experience2 = () => {

    const tech2 = [
        {
            id: 1,
            src: nodejs,
            titulo: 'node js',
            style: 'shadow-pink-500'
        },
        
        {
            id: 3,
            src: mongo,
            titulo: 'mongo db',
            style: 'shadow-pink-500'
        },
        {
            id: 4,
            src: SqlServer,
            titulo: 'sql server',
            style: 'shadow-pink-500'
        },
        {
            id: 5,
            src: Tableau,
            titulo: 'tableau',
            style: 'shadow-pink-500'
        },
        {
            id: 6,
            src: Python,
            titulo: 'python',
            style: 'shadow-pink-500'
        },
        {
            id: 7,
            src: PowerBi,
            titulo: 'power bi',
            style: 'shadow-pink-500'
        }
    ]
    return (
        <div name="skills" className=' pb-5 bg-gradient-to-t from-emerald-900 to-emerald-800 py-4 w-full '>
          
           
            <div className='max-w-screen-lg  mx-auto flex flex-col justify-center w-full h-full my-10  text-stone-100'>
                <div className="px-4">
                    <p className='text-5xl capitalize font-bold inline border-b-4 border-gray-100 '>Data Analitycs</p>
                    <p className="text-stone-100 py-6" >Conocimientos y manejo de </p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-9 gap-8 text-center py-8 px-12 sm:px-0'>
                    {
                        tech2.map(({ id, src, titulo, style }) => (
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
export default Experience2