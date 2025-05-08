import React from 'react'
// import { GoBookmark } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import { Link } from 'react-scroll';



import Aurora from './Effects';

import SplitText from "./Effects2";

const handleAnimationComplete = () => {
    console.log('All letters have animated!');
};









const Home = () => {
    return (



        <div name='inicio' className='max-w-screen-lg sm:h-screen  w-full  bg-gradient-to-t from-slate-950 to-slate-900'>

            <Aurora
                colorStops={["#3A29FF", "#00FFFF", "#6c35de"]}
                blend={0.5}
                amplitude={1.0}
                speed={1.0}
            />

            <div className='max-w-screen-lg mx-auto py-44flex flex-col items-center justify-center h-56  px-4 mt-16'>

                <div className='flex flex-col justify-center   '>
                    <SplitText
                        text="Hola, soy Sebastian"
                        className="text-5xl font-semibold text-center text-white"
                        delay={50}
                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                        easing="easeOutCubic"
                        threshold={0.2}
                        rootMargin="-50px"
                        onLetterAnimationComplete={handleAnimationComplete}
                    />
                   
                        <h3 className='text-3xl sm:text-5xl font-semibold text-stone-100 my-3 mb-10'>Programador y Analista de datos. </h3>
                    <div className='flex justify-center gap-3 align-center'>
                            {/* <GoBookmark size={80} className='my-4 text-white' />   */}
                        <p className='text-gray-100 pt-6'>
                            Este 2025 trabajemos juntos!
                        </p>
                        <div className='mb-80'>
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
        </div >
    )
}

export default Home