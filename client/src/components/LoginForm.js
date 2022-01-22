import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const LoginForm = () => {
  const { login } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  
  return (
        <div className="fixed top-20 sm:top-36 p-6 mt-3 w-screen bg-white-100 flex items-center justify-center h-screen">
          <form className="w-full h-full max-w-lg" onSubmit={e => login(e, user)}>
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
  );
};

export default LoginForm;
