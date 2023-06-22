import React from 'react'

import KG from '../assets/other/kuliner_go.png';
import KG_Comp from '../assets/other/kg_comp.png';
import Stationary from '../assets/other/stationaryShop.png'
import Portofolio from '../assets/other/portfolio.png';
import KG_Mobile from '../assets/other/KG_Mobile.png';

const Portfolio = () => {
  return (
    <div className='
            max-w-screen-lg 
            mx-auto
            flex
            flex-col
            h-full
            px-[30px]
            md:flex-row 
        '
        >
        <div>
            <div className='
            flex 
            flex-col 
            justify-center
            
            '>
                <h2 className=' 
                text-white 
                font-bold 
                text-4xl 
                sm:text-5xl
                text-justify
                '
                >
                Portfolio
                </h2><h2 className=' 
                text-gray-400 
                font-normal
                text-xl 
                pt-[20px]
                sm:text-2xl'
                >
                Checkout some of my work, right here!
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
                        {/* Portofolio Website */}
                        <div>
                            <div className='w-[500px] md:w-[450px] lg:w-[450px]'>
                                <img className='
                                mx-auto
                                md:w-full
                                pt-4 
                                md:pt-8 
                                lg:pt-12
                                ' 
                                src={Portofolio}
                                />
                            </div>
                            <div className='w-[450px]'>
                                <h2 className='
                                text-white
                                py-2
                                text-xl
                                font-bold

                            '>
                                Portfolio Website 
                                (2022)
                            </h2>
                            <p className='
                            text-gray-400 
                            w-[500px]     
                            md:w-[450px]
                            text-justify
                            '
                            >
                                I have created my first portfolio website using HTML, CSS, JavaScript, and Tailwind CSS. 
                                The reason for creating this portfolio website is because I want to document my experiences 
                                and enhance the programming skills that I have learned during my studies at Telkom University. 
                                I hope to further develop my abilities in website programming, specifically in the field of 
                                Front-End Web Development.
                            </p>
                            </div>
                        </div>

                    {/* Stationary Shop Website */}
                    <div>
                        <div className='w-[500px] md:w-[450px] lg:w-[450px]'>
                                <img className='
                                mx-auto
                                md:w-full
                                pt-4 
                                md:pt-8 
                                lg:pt-12
                                ' 
                                src={Stationary}
                                />
                            </div>
                            <div className='w-[450px]'>
                                <h2 className='
                                text-white
                                py-3
                                text-xl
                                font-bold
                            '>
                                Stationary Shop Website 
                                (2022)
                            </h2>
                            <p className='
                            text-gray-400   
                            w-[500px] 
                            md:w-[435px]
                            text-justify
                            '
                            >
                            Stationary Shop is a platform where customers can browse and make purchases of books, stationery, and other school supplies. 
                            Additionally, customers can calculate the payment for their items using the calculator feature available on the website page. 
                            With this website, customers can conduct transactions without physically visiting the store. We also assist bookstores and stationery 
                            shops in marketing their businesses and reaching a larger audience.
                            </p>
                            </div>

                        </div>
                        {/* Kuliner.Go Website */}
                    <div>
                        <div className='w-[500px] md:w-[450px] lg:w-[450px]'>
                                <img className='
                                
                                mx-auto
                                md:w-full
                                pt-4 
                                md:pt-8 
                                lg:pt-12
                                ' 
                                src={KG}
                                />
                            </div>
                            <div className='w-[450px]'>
                                <h2 className='
                                text-white
                                py-2
                                text-xl
                                font-bold

                            '>
                                Kuliner.Go Website 
                                (2023)
                            </h2>
                            <p className='
                            text-gray-400 
                            w-[500px] md:w-[450px]
                            text-justify
                            '
                            >
                                Kuliner.GO is a platform where customers can write reviews after visiting culinary establishments, and other users can view those reviews as information to determine whether or not to try the dining place. 
                                Additionally, culinary establishments can view and interact with user reviews, enabling them to improve the quality of their restaurants over time. In addition to facilitating interactions between dining places 
                                and their customers, Kuliner.GO also helps these establishments market their businesses and reach a larger audience.
                            </p>
                        </div>
                    </div>

                    {/* Kuliner.Go Website */}
                    <div>
                        <div className='w-[500px] md:w-[450px] lg:w-[450px]'>
                                <img className='
                                pt-4 
                                md:pt-8 
                                lg:pt-12
                                w-[500px]
                                md:w-[450px]
                                h-[280px]
                                md:h-[275px]
                                
                                ' 
                                src={KG_Comp}
                                />
                            </div>
                            <div className='w-[450px]'>
                                <h2 className='
                                text-white
                                py-2
                                text-xl
                                font-bold

                            '>
                                Kuliner.Go Competition Website 
                                (2023)
                            </h2>
                            <p className='
                            text-gray-400 
                            w-[500px] md:w-[450px]
                            text-justify
                            '
                            >
                            Kuliner.GO has participated in a website creation competition along with my team members, 
                            Ahmad Naufal Diwantara Putra and Akbar Sirajuddin Hanif, when I was still a student at Telkom University. 
                            The competition is called I/O Fest UNTAR (Tarumanagara University), which has a theme focused on the regions 
                            of Indonesia. With this theme, Kuliner.GO can bridge the interaction between dining places and their customers. 
                            We also assist these dining establishments in marketing their businesses and reaching a larger audience.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Portfolio