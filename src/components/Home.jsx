import React from 'react'
import { GoBookmark } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import fotoPerfil from "../assets/para perfil 23.png";
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div name='inicio' className='h-screen  w-full  bg-slate-900'>
            <div className='max-w-screen-lg mx-auto py-10 flex flex-col items-center justify-center h-full  px-4  md:flex-row'>
                <div className='flex flex-col justify-center h-full  '>
                    <h3 className='text-4xl sm:text-5xl font-semibold text-gray-300'  >
                        I'm  a FullStack Developer MERN STACK <GoBookmark /> </h3>
                    <p className='text-gray-400'>
                        Este sitio esta hecho con NodeJs, React and Tailwind.
                        Idea original de @zeroyashp </p>

                    <div>
                        <Link to="proyectos" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md cursor-pointer bg bg-gradient-to-l  from-slate-800 to-slate-900' >
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <GoChevronRight size={25} className='ml-1' />
                            </span>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src={fotoPerfil} alt="my archivo" className=" w-10/12 rounded-2xl mx-auto  md:w-1/2" />
                </div>
            </div>
        </div>
    )
}

export default Home