import React from 'react'
import { Link } from 'react-router-dom'
const PublicRoute = ({setNavbarOpen, isOpen}) => {
    return (
        <div className="w-4/5 flex justify-center">
              <Link
                to="/animals"
                onClick={() => setNavbarOpen(!isOpen)}
                href="#responsive-header"
                className="block m-4 border-transparent border-b rounded text-white hover:border-yellow-400 text-xl"
              >
                Animals for adopt
              </Link>

              <Link
                to="/auth/login"
                onClick={() => setNavbarOpen(!isOpen)}
                className="inline-block text-xl px-4 py-2 leading-none border-transparent border-b rounded text-white hover:border-yellow-400 m-3"
              >
                Login
              </Link>
              <Link
                to="/auth/signup"
                onClick={() => setNavbarOpen(!isOpen)}
                className=" inline-block text-xl px-4 py-2 leading-none border-transparent border-b rounded text-white hover:border-yellow-400 m-3"
              >
                Sign Up
              </Link>
            </div>
    )
}

export default PublicRoute
