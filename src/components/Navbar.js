import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import NavLinks from './NavLinks';

const Navbar = () => {
  const links = [
    {
      id: 1,
      link: 'HOME',
      href: '#home'
    },
    {
      id: 2,
      link: 'ABOUT ME',
      href: '#about'
    },
    {
      id: 3,
      link: 'PORTFOLIO',
      href: '#portfolio'
    },
    {
      id: 4,
      link: 'EXPERIENCE',
      href: '#experience'
    },
    {
      id: 5,
      link: 'TOOLS',
      href: '#tools'
    }
  ];
  
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 fixed bg-black">
      <h1 className="text-[#0190ff] font-bold text-4xl cursor-pointer ml-3">JERCARLO.</h1>
      <ul className="hidden md:flex">
        {links.map(({ id, link, href }) => (
          <li
            key={id}
            className="
              px-4 
              text-gray-500 
              hover:scale-110 
              duration-200 
              hover:text-white 
              cursor-pointer
            "
          >
            <a href={href}>{link}</a>
          </li>
        ))}
      </ul>

      <div onClick={toggleNav} className="cursor-pointer pr-4 z-10 text-white md:hidden">
        {navOpen ? <FaTimes className="text-white" size={30} /> : <FaBars size={30} />}
        {navOpen && (
          <ul className="
            flex
            flex-col
            justify-center
            items-center
            absolute
            top-0
            left-0
            w-full
            h-screen
            bg-gradient-to-b
            from-black
            to-gray-800
            text-white
          ">
            {links.map(({ id, link, href }) => (
              <li
                key={id}
                className="
                  px-4 
                  py-6
                  text-2xl
                  text-gray-500 
                  hover:scale-110 
                  duration-200 
                  hover:text-white 
                  cursor-pointer
                "
              >
                <a href={href}>{link}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
