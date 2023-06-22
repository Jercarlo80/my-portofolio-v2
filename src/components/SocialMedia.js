import React from 'react'
import { FaGithub, FaLinkedin, FaTiktok } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { BsInstagram } from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='
        flex
        flex-col
        top-[35%]
        left-0
        fixed
    '
    >
        <ul>
            <li className='
                flex
                justify-between
                items-center
                w-40
                h-14
                px-4
                bg-gray-500
                hover:bg-[#0A66C2]
                ml-[-100px]
                hover:ml-[-10px]
                hover:rounded-md
                duration-300
            '>
                <a href='https://www.linkedin.com/in/jeremia-carlo-50136a1ba/' className='flex justify-between items-center w-full text-white'>
                    {""}
                    <>
                        LinkedIn <FaLinkedin size={30}/>
                    </>
                </a>
            </li>
            <li className='
                flex
                justify-between
                items-center
                w-40
                h-14
                px-4
                bg-gray-500
                hover:bg-black
                ml-[-100px]
                hover:ml-[-10px]
                hover:rounded-md
                duration-300
            '>
                <a href='https://github.com/Jercarlo80' className='flex justify-between items-center w-full text-white'>
                    {" "}
                    <>
                        Github <FaGithub size={30}/>
                    </>
                </a>
            </li>
            <li className='
                flex
                justify-between
                items-center
                w-40
                h-14
                px-4
                bg-gray-500
                hover:bg-black
                ml-[-100px]
                hover:ml-[-10px]
                hover:rounded-md
                duration-300
            '>
                <a href='https://www.tiktok.com/@jercarlo8?is_from_webapp=1&sender_device=pc' className='flex justify-between items-center w-full text-white'>
                    {" "}
                    <>
                        Tiktok <FaTiktok size={30}/>
                    </>
                </a>
            </li>
            <li className='
                flex
                justify-between
                items-center
                w-40
                h-14
                px-4
                bg-gray-500
                hover:bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
                ml-[-100px]
                hover:ml-[-10px]
                hover:rounded-md
                duration-300
            '>
                <a href='https://www.instagram.com/jercarlo/' className='flex justify-between items-center w-full text-white'>
                    {" "}
                    <>
                        Instagram <BsInstagram size={30}/>
                    </>
                </a>
            </li>
            <li className='
                flex
                justify-between
                items-center
                w-40
                h-14
                px-4
                bg-gray-500
                hover:bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500
                ml-[-100px]
                hover:ml-[-10px]
                hover:rounded-md
                duration-300
            '>
                <a href='jeremiacarlo9@gmail.com' className='flex justify-between items-center w-full text-white'>
                    {" "}
                    <>
                        Gmail <SiGmail size={30}/>
                    </>
                </a>
            </li> 
        </ul>
    </div>
  )
}

export default SocialMedia