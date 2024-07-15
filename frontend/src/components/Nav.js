import React, { useState } from 'react';
import { navLinks } from "../constants";
import { FiAlignJustify, FiUser, FiShoppingCart, FiSearch } from "react-icons/fi";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const Nav = () => {

  const [showNavLinks, setShowNavLinks] = useState(false);

  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };


  return (
      <header className="py-2 absolute z-10 w-full bg-black">
        <nav className="flex h-16 justify-between items-center max-container">
        <div className='block lg:hidden pl-10 hover:cursor-pointer' onClick={toggleNavLinks}>
            <IconContext.Provider value={{ color: "white", size: "35px" }}>
              <FiAlignJustify />
            </IconContext.Provider>
          </div>
        <div className='hidden sm:block w-nav-i-width lr-12'></div>
          <ul className='flex-1 flex justify-center items-center gap-10 max-lg:hidden'>
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link to={item.href} className='leading-normal text-sm text-white font-merriweather '>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className='hidden lg:block w-nav-i-width'>
            <IconContext.Provider value={{ color: "white", size: "25px" }}>
              <ul className="flex flex-row justify-evenly items-center">
                <li className="hover:cursor-pointer"><FiSearch /></li> 
                <li className="hover:cursor-pointer"><FiShoppingCart /></li> 
                <li className="hover:cursor-pointer">
                    <Link to="/login">
                      <FiUser />
                    </Link>
                </li> 
              </ul>
            </IconContext.Provider>
          </div>
        </nav>
          {showNavLinks && (<ul className="flex flex-col lg:hidden transition-opacity delay-1000 ease-in-out">
            {navLinks.map((item, index) => (
              <li key={item.label} className={`py-3 pl-11 ${index % 2 === 0 ? 'bg-listing' : ''}`}>
                <Link to={item.href} className='leading-normal text-sm text-white font-merriweather'>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>)}
      </header>
  )
}

export default Nav;