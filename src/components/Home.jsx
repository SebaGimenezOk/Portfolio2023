import React from 'react'
import { GoBookmark } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import fotoPerfil from "../assets/para perfil 23.png";


const Home = () => {
    return (
        <div name='inicio' className='h-screen  w-full bg-gradient-to-b from-black  to-gray-800'>
            <div className='max-w-screen-lg  mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full '>
                    <h2 className='text-4xl sm:text-7xl font-semibold text-gray-300'  >
                        I'm  a FullStack Developer MERN STACK <GoBookmark />
                    </h2>
                    <p className='text-gray-400 py-6 max-w-md'>
                        Más de 10 años en el Diseño Digital y Gráfico. Actualmente, aprendiendo coding 4.0 Javascript...
                    </p>
                    <div>
                        <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md cursor-pointer bg bg-gradient-to-l  from-slate-800 to-slate-900' >
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <GoChevronRight size={25} className='ml-1' />
                            </span>
                        </button>
                    </div>
                </div>
                <div>
                    <img src={fotoPerfil} alt="my archivo" className='rounded-2xl mx-auto  h-2/4  md:w-4/5 ' />
                </div>
            </div>
        </div>
    )
}

export default Home