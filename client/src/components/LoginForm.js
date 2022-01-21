import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import Modal from "./Modal";
import UserContext from "../utils/auth-context";

const LoginForm = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { setToken } = useContext(UserContext);
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  async function loginUser(event) {
    event.preventDefault();
    const { email, password } = user;
    const res = await fetch("http://localhost:8080/auth/login", {
      method: "POST",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    console.log(res)
    const data = await res.json();
    if (data.statusCode === 401) {
      setShowModal(true);
      setMessage(data.msg);
      setTimeout(() => {
        navigate("/auth/signup");
      }, 3000);
    } else if (data.statusCode === 422) {
      setShowModal(true);
      setMessage(data.msg);
    } else {
      localStorage.setItem("auth-token", data.token);
      setToken({ token: data.token });
      navigate("/animals"); 
    }
  }
  return (
    <>
      {showModal ? (
        <Modal show={true} msg={message} />
      ) : (
        <div className="fixed top-20 sm:top-36 p-6 mt-3 w-screen bg-white-100 flex items-center justify-center h-screen">
          <form className="w-full h-full max-w-lg" onSubmit={loginUser}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  E-mail
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  name="email"
                  type="text"
                  aria-label="Your e-mail"
                  value={user.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="password"
                  name="password"
                  type="password"
                  aria-label="Your password"
                  value={user.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="bg-yellow-400 p-2 w-full rounded-md text-white uppercase"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default LoginForm;
