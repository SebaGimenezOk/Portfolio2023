import React from 'react'
import { GoBookmark } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div name='inicio' className='md:h-screen  w-full  bg-gradient-to-t from-black to-slate-900'>
            <div className='max-w-screen-lg mx-auto py-10 flex flex-col items-center justify-center h-full  px-4  md:flex-row'>
                <div className='flex flex-col justify-center h-full  '>
                    <h3 className='text-4xl sm:text-5xl font-semibold text-gray-300 my-3 mb-2
                    '  >
                        Desarrollador FrontEnd </h3>
                        <h3 className='text-4xl sm:text-5xl font-semibold text-gray-300 my-3 mb-2'> Web & mobile. <GoBookmark size={80} className='my-6' /></h3>
                    <p className='text-gray-400'>
                        Este sitio esta hecho con NodeJs, React and Tailwind.
                    </p>
                    <div>
                        <Link to="skills" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md cursor-pointer bg bg-gradient-to-l  from-slate-800 to-slate-900' >
                            Skills
                            <span className='group-hover:rotate-90 duration-300'>
                                <GoChevronRight size={25} className='ml-1' />
                            </span>
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
                                                                                                                                            
export default Home