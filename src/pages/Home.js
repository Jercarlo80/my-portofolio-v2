import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineRight } from 'react-icons/ai';
import Carlo from '../assets/portofolio/Carlo.png'
const Home = () => {
  return (
    <div 
        name='home' 
        className='
        h-screen 
        w-full
        '>
        <div 
            className='
                max-w-screen-lg 
                mx-auto
                flex
                flex-col
                items-center
                justify-center
                h-full
                px-[30px]
                md:flex-row
                pt-72 
                md:pt-8 
                lg:pt-12
            '
            >
            <div className='flex flex-col justify-center'>
                
                <h1 className='text-white flex max-w-md'>
                    <CiLocationOn size={20}/>
                    <span className='font-bold px-1'>
                        Jakarta, Indonesia
                    </span>
                </h1>
                <h1 className='text-white font-bold text-justify text-[20px]'>Hello Everyone,
                </h1>
                <h2 className='font-normal text-justify text-white text-[32px]'>I'm Jeremia Carlo CS</h2>
                <h2 className='text-white font-bold text-4xl sm:text-7xl'>
                    Front End Web Developer
                </h2>
                <p className='text-gray-400 py-4 max-w-md text-justify'>
                    Hello everyone I'am Jeremia Carlo a student of Software Engineering at Telkom University. 
                    I have interest on Web Development specifically in Front End and Mobile Development. 
                    I've already learned tools for Web Development are HTML, CSS, Javascript, React JS, Tailwind CSS, Bootstrap, and Flutter.
                </p>

                <div>
                    <button className='
                        text-white
                        w-fit
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
                        Get Started
                        <span className='group-hover:rotate-90 duration-900'>
                            <AiOutlineRight className='text-white ml-1' size={20}/>
                        </span>
                    </button>
                </div>
            </div>
            <div >
                <img 
                    src={Carlo} 
                    className='
                        rounded-2xl
                        mx-auto
                        md:w-full
                        pt-4 
                        md:pt-8 
                        lg:pt-12
                    '
                />
            </div>
        </div>
    </div>
  )
}

export default Home