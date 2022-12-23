import React from 'react'
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'inicio',
        },
        {
            id: 2,
            link: 'sobre mi',
        },
        {
            id: 3,
            link: 'proyectos',
        },
        {
            id: 4,
            link: 'experience',
        },
        {
            id: 5,
            link: 'contact',
        },
    ];
    return (
        <div className='flex justify-between items-center w-full h-20 pt-1 px-5 text-white bg-slate-900  fixed'>
            <div>
                <h1 className='text-5xl font-signature  mx-3'> Sebastian</h1>
            </div>
            <ul className='hidden md:flex'>
                {links.map(({ id, link }) => (
                    <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-200 hover:scale-105 duration-200'><Link to={link}smooth duration={500}>{link}</Link></li>
                ))}
            </ul>


            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-400 md:hidden'>
                {nav ? <FaTimes size={18} /> : <FaBars size={18} />}
            </div>

            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b bg-slate-900  to-gray-800 text-gray-200  '>
                    {links.map(({ id, link }) => (
                        <li key={id} className='px-4 cursor-pointer capitalize py-4 text-1xl'><Link onClick={()=> setNav(!nav)} to={link}smooth duration={700}>{link}</Link></li>
                    ))}
                </ul>
            )}

        </div>
    )
}

export default Navbar