import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen  bg-slate-900 text-white'>
            <div className='flex flex-col p-8 justify-center max-w-screen-lg mx-auto h-full'>
                <div className=''>
                    <p className='text-5xl capitalize font-bold inline border-b-4 border-gray-500 pb-1'>Contact</p>
                    <p className="text-gray-200 py-11">Contactame super rápido!</p>
                </div>
                <div className='flex justify-center items-center'>
                    <form action="https://getform.io/f/8ae5999c-2b96-4e2a-ac1f-0cead3fe5206" method='POST' className='flex flex-col w-full md:w-1/2 '>
                        <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                        <input type="text" name='email' placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                        <textarea name="message" rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' placeholder='Enter you message'  ></textarea>
                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-900 px-6 py-3 my-8 flex items-center rounded-md hover:scale-110 '>enviar!</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact