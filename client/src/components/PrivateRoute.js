import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import UserContext from "../utils/auth-context";

const PrivateRoute = ({ setNavbarOpen, isOpen }) => {
  const navigate = useNavigate();
  const { setToken } = useContext(UserContext);

  async function handleLogout (e) {
    e.preventDefault();
    const res = await fetch('http://localhost:8080/auth/logout', {
      method: 'POST',
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
    setNavbarOpen(!isOpen);
    setToken(false);
    navigate("/");
  }
  return (
    <div>
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
  );
};

export default PrivateRoute;
