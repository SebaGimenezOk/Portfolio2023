import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-full bg-gradient-to-t from-orange-100 to-orange-200  text-stone-600'>
            <div className='flex flex-col p-10 justify-center max-w-screen-lg  mx-auto h-full'>
                <div className='mt-10'>
                    <p className='text-5xl capitalize font-bold inline border-b-4 border-stone-600 pb-1'>Contact</p>
                    <p className="text-stone-600 py-11">Contactame super rápido!</p>
                </div>
                <div className='flex justify-center items-center'>
                    <form action="https://getform.io/f/8ae5999c-2b96-4e2a-ac1f-0cead3fe5206" method='POST' className=' pb-2 flex flex-col w-full md:w-1/2 '>
                        <input type="text" name='name' placeholder='Tu nombre' className='p-2 bg-transparent border-2 border-orange-500 rounded-md placeholder-stone-600 focus:outline-none' />
                        <input type="text" name='email' placeholder='Tu email' className='my-4 p-2 bg-transparent border-2 border-orange-500 rounded-md placeholder-stone-600 focus:outline-none' />
                        <textarea name="message" rows="10" className='p-2 bg-transparent border-2 border-orange-500 rounded-md placeholder-stone-600   focus:outline-none' placeholder='Escribi tu  mensaje '  ></textarea>
                    <button className='text-white bg-gradient-to-t from-orange-500 to-orange-400 px-6 py-3 my-8 flex items-center rounded-md hover:scale-110 '>enviar!</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact