import React from 'react'
import fotoPerfil from "../assets/para perfil 23.png"




const SobreMi = () => {
    return (
        <div name="sobre mi" className='w-full h-full bg-gradient-to-t from-gray-900 to-slate-900 text-stone-100'>
           
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center  w-auto'>

                <div className=' pb-4 mb-6 my-20 '>
                    <p className='text-5xl capitalize font-bold inline border-b-4 border-stone-100'>sobre mi</p>
                </div>
                <div className='flex justify-between gap-8'>

                    <div >
                        <p className='mb-3'>Desarrollador de aplicaciones web y móviles con experiencia en análisis de datos.</p>
                        <p className='mb-3'> Formación en Power BI, SQL Server, Excel y Google Sheets.</p>
                        <p className='mb-3'> Experiencia en React Native, Expo Go y Redux para aplicaciones móviles; React, TypeScript y JavaScript para desarrollo web.</p>
                        <p className='mb-3'> Conocimientos en NodeJS, Express, MySQL y MongoDB.</p>
                        <p className='mb-3'> Competencia en HTML5, CSS3, SASS y frameworks como Bootstrap y Material UI.</p>
                        <p className='mb-3'> Enfoque en soluciones funcionales, optimización de procesos y colaboración en entornos ágiles.</p>
                        <p className='py-6 mb-6 '>Espero que podamos crear proyectos juntos! Abrazo, Sebastian </p>
                    </div>
                    <div >
                        <img src={fotoPerfil} alt="my archivo" className=" rounded-2xl mx-auto  md:w-6/12 " />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default SobreMi