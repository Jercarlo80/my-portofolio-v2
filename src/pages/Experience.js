import React from 'react'

import TelkomLogo from '../assets/other/Telkom.png';
import Telu_GSG from '../assets/other/Telu_GSG.png';
import Telu_TULT from '../assets/other/Telu_TULT.png';
import { AiOutlineRight } from 'react-icons/ai';
import SMAN9 from '../assets/other/SMAN9.png';

import html from "../assets/tools/html.png";
import css from "../assets/tools/css.png";
import javascript from "../assets/tools/javascript.png";
import reactImage from "../assets/tools/react.png";
import github from "../assets/tools/github.png";
import tailwind from "../assets/tools/tailwind.png";

const Experience = () => {
    const techs = [
        {
          id: 1,
          src: html,
          title: "HTML",
          style: "shadow-orange-500",
        },
        {
          id: 2,
          src: css,
          title: "CSS",
          style: "shadow-blue-500",
        },
        {
          id: 3,
          src: javascript,
          title: "JavaScript",
          style: "shadow-yellow-500",
        },
        {
          id: 4,
          src: reactImage,
          title: "React",
          style: "shadow-blue-600",
        },
        {
          id: 5,
          src: tailwind,
          title: "Tailwind",
          style: "shadow-sky-400",
        },
        {
          id: 6,
          src: github,
          title: "GitHub",
          style: "shadow-gray-400",
        },
      ];
    
  return (
    <div 
    id='experience'
    className='
    max-w-screen-lg 
    mx-auto
    flex
    flex-col
    h-full
    px-[30px]
    md:flex-row 
    '>
        <div>
            <div className='
            flex 
            flex-col 
            justify-center
            '>
                <h2 className=' 
                    pt-2
                    text-white 
                    font-bold 
                    text-4xl 
                    sm:text-5xl
                    text-justify
                    '
                    >
                    Experience
                </h2>
                <h2 className=' 
                    text-gray-400 
                    font-normal
                    text-xl 
                    pt-[20px]
                    sm:text-2xl'
                    >
                    This is all of my experience and my education
                </h2>
                <div className='
                    grid
                    grid-cols-1
                    md:grid-cols-2 
                    lg:grid-cols-2
                    gap-12
                    md:grid-rows-2
                    md:grid-flow-row
                '>
                    {/* Telkom University */}
                    <div>
                        <div className='w-[500px] md:w-[450px] lg:w-[450px]'>
                                <img className='
                                rounded-lg
                                mx-auto
                                md:w-full
                                
                                md:pt-8 
                                lg:pt-12
                                ' 
                                src={Telu_GSG}
                                />
                        </div>
                        <div className='w-[450px]'>
                            <h2 className='
                                text-white
                                pt-2
                                text-xl
                                font-bold
                                flex
                                justify-between
                            '>
                                Telkom University 
                                
                                <span className='
                                justify-between
                                items-end'>
                                    (2020 - 2024)
                                </span>
                            </h2>
                            <p className='
                            text-gray-400 
                            w-[500px]     
                            md:w-[450px]
                            text-justify
                            '
                            >
                                I enrolled in Telkom University in 2020, majoring in Software Engineering with the hope of becoming a competent IT professional after graduation. 
                                Based on my experience studying at Telkom University, I have gained a lot of knowledge in the field of technology and even obtained additional knowledge in business. 
                                I hope that after graduation, I can find a job that aligns with my interests and talents.
                            </p>
                            <a href='https://telkomuniversity.ac.id/en/'>
                                <button className='
                                    text-white
                                    px-6
                                    py-3
                                    my-2
                                    flex
                                    items-center
                                    rounded-md
                                    bg-[#01579b]
                                    group
                                '
                                >
                                    Go to their Web Site
                                </button>
                            </a>
                        </div>
                    </div>

                    <div>
                        <div className='w-[500px] md:w-[450px] lg:w-[450px]'>
                                <img className='
                                rounded-lg
                                mx-auto
                                md:w-full
                                
                                md:pt-8 
                                lg:pt-12
                                ' 
                                src={SMAN9}
                                />
                        </div>
                        <div className='w-[450px]'>
                            <h2 className='
                                text-white
                                pt-2
                                text-xl
                                font-bold
                                flex
                                justify-between
                            '>
                                SMA Negeri 9 Jakarta 
                                
                                <span className='
                                justify-between
                                items-end'>
                                    (2017 - 2020)
                                </span>
                            </h2>
                            <p className='
                            text-gray-400 
                            w-[500px]     
                            md:w-[450px]
                            text-justify
                            '
                            >
                                I entered SMA Negeri 9 Jakarta in 2017, majoring in Science (Natural Sciences), with the hope of getting into the best university after graduation. 
                                Based on my experience attending SMA Negeri 9 Jakarta, I have gained a lot of knowledge and have cherished many beautiful memories in my friendships during my youth. 
                                I hope that my memories will remain alive and not be overshadowed by time.
                            </p>
                            <a href='
                                https://sma9jkt.my.id/
                            '>
                                <button className='
                                    text-white
                                    px-6
                                    py-3
                                    my-2
                                    flex
                                    items-center
                                    rounded-md
                                    bg-[#01579b]
                                    group
                                '
                                >
                                    Go to their Web Site
                                </button>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div id='tools'>
                            <h2 className=' 
                                pt-2
                                text-white 
                                font-bold 
                                text-4xl 
                                sm:text-5xl
                                text-justify
                                '
                                >
                                Tools
                            </h2>
                            <h2 className=' 
                                text-gray-400 
                                font-normal
                                text-xl 
                                pt-[20px]
                                sm:text-2xl
                                w-[700px]
                                '
                                >
                                This is all tools i've used to create this portfolio website
                            </h2>
                            <div className="mx-auto p-1 flex flex-col justify-center  h-full text-white">
                                <div className="
                                md:w-[950px]
                                w-[475px] 
                                grid 
                                grid-cols-1 
                                sm:grid-cols-3 
                                gap-[50px] 
                                text-center 
                                py-8  
                                px-12 
                                sm:px-0">
                                    {techs.map(({ id, src, title, style }) => (
                                        <div
                                        key={id}
                                        className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                                        >
                                            <img src={src} alt="tools" className="w-20 mx-auto" />
                                            <p className="mt-4">{title}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
    </div>
  )
}

export default Experience