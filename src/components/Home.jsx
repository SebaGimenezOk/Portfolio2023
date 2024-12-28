import React from 'react'
import { GoBookmark } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div name='inicio' className='md:h-screen  w-full  bg-gradient-to-t from-gray-900 to-slate-900'>
            <div className='max-w-screen-lg mx-auto py-10 flex flex-col items-center justify-center h-full  px-4  md:flex-row'>
                <div className='flex flex-col justify-center h-full  '>
                    <h3 className='text-5xl sm:text-5xl font-semibold text-stone-100 my-20 mb-2'>
                        Hola!  soy Desarrollador FrontEnd</h3>
                        
                        <h3 className='text-5xl sm:text-5xl font-semibold text-stone-100 my-3 mb-2'>Analista de datos. </h3>
                    <p className='text-gray-100'>
                    <GoBookmark size={80} className='my-4' />  Este 2025 trabajemos juntos en tu proyecto!
                    </p>
                    <div>
                        <Link to="skills" smooth duration={500} className='group text-stone-100 w-fit px-6 py-3 my-2 flex items-center rounded-md cursor-pointer bg bg-gradient-to-t from-gray-900 to-slate-800' >
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