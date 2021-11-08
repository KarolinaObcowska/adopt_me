import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router";

const PrivateRoute = ({setNavbarOpen, isOpen, setIsAuthenticated}) => {
  const history = useHistory();

  function handleLogout(e)  {
      e.preventDefault()
      setNavbarOpen(!isOpen)
      localStorage.clear('user')
      history.push("/")
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
              <button
                onClick={handleLogout}
                className=" inline-block text-xl px-4 py-2 leading-none border-transparent border-b rounded text-white hover:border-yellow-400 m-3"
              >
                Logout
              </button>
            </div>
    )
}

export default PrivateRoute
