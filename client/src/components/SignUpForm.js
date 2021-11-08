import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Modal from "./Modal";
import UserContext from '../utils/auth-context'

const SignUpForm = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const { setToken } = useContext(UserContext)
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  async function registerUser(event) {
    event.preventDefault();
    const { firstname, lastname, email, password } = user;
    const res = await fetch("http://localhost:8080/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    if (data.statusCode === 422) {
      setShowModal(true);
      setMessage(data.msg);
    } else if(data.statusCode === 403) {
      setShowModal(true)
      setMessage(data.msg)
      setTimeout(() => {
        history.push("/auth/login")
      }, 3000)
    } else {
      setToken({token: data.token})
      localStorage.setItem('auth-token', data.token)
      history.push("/animals");
    }
  }
  return (
    <>
      {showModal ? (
        <Modal show={true} msg={message} />
      ) : (
        <div className="fixed top-20 sm:top-36 p-6 mt-3 w-screen bg-white-100 flex justify-center h-screen">
          <form className="w-full h-full max-w-lg" onSubmit={registerUser}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6 md:mb-4">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  E-mail
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  name="email"
                  type="text"
                  aria-label="Your e-mail"
                  value={user.email}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-8 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="firstname"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="firstname"
                  type="text"
                  name="firstname"
                  aria-label="Your first name"
                  value={user.firstname}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="lastname"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="lastname"
                  name="lastname"
                  type="text"
                  aria-label="Your last name"
                  value={user.lastname}
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
                <p className="text-gray-600 text-xs italic">
                  Make it as long and as crazy as you'd like
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="bg-yellow-400 p-2 w-full rounded-md text-white uppercase"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default SignUpForm;
