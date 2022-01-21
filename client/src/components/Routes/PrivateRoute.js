import React, { useContext } from "react";
import { useNavigate } from "react-router";
import UserContext from "../../utils/auth-context";
import RouteItem from "./RouteItem";

const PrivateRoute = ({ setNavbarOpen, isOpen }) => {
  const navigate = useNavigate();
  const { setToken } = useContext(UserContext);

  async function handleLogout (e) {
    e.preventDefault();
    await fetch('http://localhost:8080/auth/logout', {
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
      <RouteItem clickHandle={() => setNavbarOpen(!isOpen)} location='/animals' text='Home'/>
      <RouteItem clickHandle={() => setNavbarOpen(!isOpen)} location='/animals/add' text='Add Animal'/>
      <button
        onClick={handleLogout}
        className="inline-block text-xl px-4 py-2 leading-none border-transparent border-b rounded text-white hover:border-yellow-400 m-3"
      >
        Logout
      </button>
    </div>
  );
};

export default PrivateRoute;
