import React from 'react'

const SobreMi = () => {
    return (
        <div name="sobre mi" className='w-full h-full bg-gradient-to-b from-black to-slate-900 text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>
                <div className=' pb-5'>
                    <p className='text-5xl capitalize font-bold inline border-b-4 border-gray-500'>sobre mi</p>
                </div>
                <p className='text-gray-400 py-6'> Hola! Soy Sebastian, este año cumplo 46, estoy casado y a punto de ser papá!</p>
                <p className='text-gray-400 py-6'>La primera parte de mi vida ha sido en las Estaciones FM, como conductor y locutor comercial he trabajado en más de 15 radios. Mi debut fue allá por los años 1997 hasta nuestros días que continúo en el aire, unas horas.</p>
                <p className='text-gray-400 py-6'>La Segunda Etapa comienza en los años 2007 cuando el hobby de diseñar pasó a ser profesión y desde allí una metamorfosis entre el mundo gráfico y digital.  Me gusta muchísimo crear logotipos, flyers y cartelería. </p>
                <p className='text-gray-400 py-6'>Estos últimos años comencé a estudiar programación viendo los avances agigantados en el mundo web.
                    Creo que esta Tercera Etapa como programador será la última y quizás la más satisfactoria.
                    El universo digital se expande a cada instante, pero también unifica contenidos; donde todo lo anterior me ha servido para llegar aquí.
                </p>
                <p className='text-gray-400 py-6 '>Espero que podamos crear proyectos juntos! Abrazo, Sebastian </p>
            </div>
        </div>
    )
}

export default SobreMi