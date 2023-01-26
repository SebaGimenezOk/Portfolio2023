import React from "react";
import Ae from "../assets/skills/Ae.png"
import Psd from "../assets/skills/Ps.png"
import Ai from "../assets/skills/Ai.png"
import Au from "../assets/skills/Au.png"
import Id from "../assets/skills/Id.png"
import Xd from "../assets/skills/Xd.png"
import Lr from "../assets/skills/Lr.png"


const Experience2 = () => {

    const tech2 = [
        {
            id: 10,
            src: Xd,
            titulo: 'Xd',
            style: 'shadow-pink-500'
        },
        {
            id: 11,
            src: Ai,
            titulo: 'Ai',
            style: 'shadow-pink-500'
        },
        {
            id: 12,
            src: Psd,
            titulo: 'Ps',
            style: 'shadow-pink-500'
        },
        {
            id: 13,
            src: Lr,
            titulo: 'Lr',
            style: 'shadow-pink-500'
        },
        {
            id: 14,
            src: Au,
            titulo: 'Au',
            style: 'shadow-pink-500'
        },
        {
            id: 15,
            src: Id,
            titulo: 'Id',
            style: 'shadow-pink-500'
        },
        {
            id: 16,
            src: Ae,
            titulo: 'Ae',
            style: 'shadow-pink-500'
        }
    ]
    return (
        <div name="skills" className=' pb-10  bg-slate-900 py-8 w-full '>
            <div className='max-w-screen-lg  mx-auto flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-5xl capitalize font-bold inline border-b-4 border-gray-500 '>Adobe Suite</p>
                    <p className="text-gray-200 py-6" >Conocimientos avanzados en Audition, Illustrator,Photoshop...</p>
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