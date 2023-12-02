import React from 'react'
import logohtml from '../assets/skills/html5.png'
import logocss from '../assets/skills/logocss.png'
import bootstrap from '../assets/skills/logoboots.png'
import javascript from '../assets/skills/javascript.png'
import github from '../assets/skills/github.png'
import logoreact from '../assets/skills/logoreact.png'
import graphql from '../assets/skills/graphql.png'
import material from '../assets/skills/material.png'
import tailwind from '../assets/skills/tailwind.png'
import firebase from '../assets/skills/logofirebase.png'
import nodejs from '../assets/skills/node.png'
import mysql from '../assets/skills/mysql.png'
import mongo from '../assets/skills/hojaverde.png'
import logoExpress from '../assets/skills/logoExpress.png'
import logoredis from '../assets/skills/logoredis.png'
import logomaria from '../assets/skills/logomariadb.png'
import logosass from '../assets/skills/logosass.png'
import tullio from '../assets/skills/logotullio.png'
import Xcode from '../assets/skills/Xcode.png'
import AndroidSt from '../assets/skills/Android-Studio.png'
import ExpoGo from '../assets/skills/ExpoGo.png'






const Experience = () => {

    const techs = [
        {
            id: 1,
            src: logohtml,
            titulo: 'html 5',
            style: 'shadow-blue-500'
        },
        {
            id: 2,
            src: logocss,
            titulo: 'css',
            style: 'shadow-gray-200'
        },
        {
            id: 3,
            src: javascript,
            titulo: 'javascript',
            style: 'shadow-green-500'
        },
        {
            id: 4,
            src: logoreact,
            titulo: 'react',
            style: 'shadow-blue-500'
        },
        {
            id: 5,
            src: bootstrap,
            titulo: 'bootstrap',
            style: 'shadow-gray-200'
        },
        {
            id: 6,
            src: material,
            titulo: 'material',
            style: 'shadow-yellow-500'
        },
        {
            id: 7,
            src: tailwind,
            titulo: 'tailwind',
            style: 'shadow-blue-500'
        },
        {
            id: 8,
            src: nodejs,
            titulo: 'node js',
            style: 'shadow-blue-500'
        },
        {
            id: 9,
            src: mysql,
            titulo: 'mysql',
            style: 'shadow-pink-500'
        },
        {
            id: 10,
            src: logomaria,
            titulo: 'maria db',
            style: 'shadow-pink-500'
        },
        {
            id: 11,
            src: mongo,
            titulo: 'mongo db',
            style: 'shadow-pink-500'
        },
        {
            id: 12,
            src: logoredis,
            titulo: 'redis',
            style: 'shadow-pink-500'
        },
        {
            id: 13,
            src: github,
            titulo: 'github',
            style: 'shadow-pink-500'
        },
        {
            id: 14,
            src: logosass,
            titulo: 'sass',
            style: 'shadow-pink-500'
        },
        {
            id: 15,
            src: firebase,
            titulo: 'firebase',
            style: 'shadow-pink-500'
        },
        {
            id: 16,
            src: logoExpress,
            titulo: 'express',
            style: 'shadow-pink-500'
        },
        {
            id: 17,
            src: graphql,
            titulo: 'graphql',
            style: 'shadow-pink-500'
        },
        {
            id: 18,
            src: tullio,
            titulo: 'tullio',
            style: 'shadow-pink-500'
        },
        {
            id: 19,
            src: logoreact,
            titulo: 'React Native',
        },
        {
            id: 20,
            src: Xcode,
            titulo: 'Xcode',
            style: 'shadow-pink-500'
        },
        {
            id: 21,
            src: ExpoGo,
            titulo: 'Expo Go',
            style: 'shadow-pink-500'
        },
        {
            id: 22,
            src: AndroidSt,
            titulo: 'Android Studio',
            style: 'shadow-pink-500'
        }
    ]

    return (
        <div name="skills" className='pb-10 bg-gradient-to-t from-black to-slate-900 py-4 w-full h-full '>
            <div className='max-w-screen-lg  mx-auto flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-5xl capitalize font-bold inline border-b-4 border-gray-500 '>Skills </p>
                    <p className="text-gray-200 py-6" >tengo conocimientos y manejo de </p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-9 gap-8 text-center py-8 px-12 sm:px-0'>
                    {
                        techs.map(({ id, src, titulo, style }) => (
                            <div key={id} className={`hover:scale-105 duration-500 rounded-lg py-2 ${style}`}>
                                <img src={src} alt="" className='w-20 mx-auto' />
                                <p className='mt-4'>{titulo}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Experience