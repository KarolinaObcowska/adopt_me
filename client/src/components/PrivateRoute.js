import React from 'react'
import { Link } from 'react-router-dom'
const PrivateRoute = ({setNavbarOpen, isOpen}) => {
    const handleLogout = () => {
        localStorage.removeItem('user')
        setNavbarOpen(!isOpen)
    }
    return (
        <div className="w-4/5 flex justify-center">
              <Link
                to="/animals"
                onClick={() => setNavbarOpen(!isOpen)}
                href="#responsive-header"
                className="block m-4 border-transparent border-b rounded text-white hover:border-yellow-400 text-xl"
              >
                Home
              </Link>

              <Link
                to="/animals/add"
                onClick={() => setNavbarOpen(!isOpen)}
                className="inline-block text-xl px-4 py-2 leading-none border-transparent border-b rounded text-white hover:border-yellow-400 m-3"
              >
                Add animals
              </Link>
              <Link
                to="/"
                onClick={() => 
                    handleLogout}
                className=" inline-block text-xl px-4 py-2 leading-none border-transparent border-b rounded text-white hover:border-yellow-400 m-3"
              >
                Logout
              </Link>
            </div>
    )
}

export default PrivateRoute
