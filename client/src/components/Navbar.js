import React, { useState, useRef, useEffect } from "react";
import Logo from "../images/logo.svg";
import Paw from '../images/paw.svg'

const Navbar = () => {
  const ref = useRef()

  const [isOpen, setNavbarOpen] = useState();

  useEffect(() => {
      const checkIfClickedOutside = e => {
          if(isOpen && ref.current && !ref.current.contains(e.target)) {
              setNavbarOpen(false)
          }
      }
      document.addEventListener('click', checkIfClickedOutside)
      return () => {
          document.removeEventListener('click', checkIfClickedOutside)
      }
  },[isOpen])

  return (
    <nav ref={ref} className="w-full fixed bg-green-800 flex p-6 justify-center z-50">
      <div className="flex items-center justify-between flex-wrap md:w-4/5 w-screen">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img
            className="fill-current h-10 w-10 mr-4"
            src={Logo}
            alt="pet paws"
          ></img>
          <span className="font-semibold text-3xl">Adopt Me</span>
        </div>
        <div className="block lg:flex items-center w-auto">
          <div className="block">
            <button
              className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-yellow-400 hover:border-yellow-400"
              onClick={() => setNavbarOpen(!isOpen)}
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className={
              isOpen
                ? "flex justify-center flex-row p-3 absolute top-20 right-0 bg-green-800  w-screen"
                : "hidden"
            }
          >
            <div className="w-4/5 flex justify-center">
              <button
                onClick={() => setNavbarOpen(!isOpen)}
                href="#responsive-header"
                className="block m-4 border-transparent border-b rounded text-white hover:border-yellow-400 text-xl"
              >
                Animals for adopt
              </button>
              <button
                onClick={() => setNavbarOpen(!isOpen)}
                href="#responsive-header"
                className="block m-4 text-white text-xl border-transparent border-b rounded hover:border-yellow-400"
              >
                Blog
              </button>
              <button
                onClick={() => setNavbarOpen(!isOpen)}
                className="inline-block text-xl px-4 py-2 leading-none border-transparent border-b rounded text-white hover:border-yellow-400 m-3"
              >
                Login
              </button>
              <button
                onClick={() => setNavbarOpen(!isOpen)}
                className=" inline-block text-xl px-4 py-2 leading-none border-transparent border-b rounded text-white hover:border-yellow-400 m-3"
              >
                Sign Up
              </button>
              <img src={Paw} className='absolute right-48 top-12 -rotate-45 transform animate-pulseFirst h-7 w-7' alt='paws'/>
              <img src={Paw} className='absolute right-48 bottom-16 -rotate-45 transform animate-pulse h-7 w-7' alt='paws'/>
              <img src={Paw} className='absolute right-60 top-2 -rotate-45 transform animate-pulseFirst h-7 w-7' alt='paws'/>
              <img src={Paw} className='absolute right-72 bottom-24 z-50 -rotate-45 transform animate-pulse h-7 w-7' alt='paws'/>
              <img src={Paw} className='absolute right-60 bottom-28 -rotate-45 transform animate-pulseFirst h-7 w-7' alt='paws'/>

            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
