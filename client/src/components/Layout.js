import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Animals from "./Animals/Animals";
import Hero from "./Hero";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import AddAnimalForm from "./Animals/AddAnimalForm";
import Animal from "./Animals/Animal";
import Footer from "./Footer";
import MobileNavbar from "./Navbar/MobileNavbar";
import UserContext from "../utils/auth-context";
import Error404 from "./Error404";
import Cookie from "universal-cookie"

const cookies = new Cookie();

const Layout = () => {
  const [token, setToken] = useState({
    token: false
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let jwt = cookies.get('jwt')
      if (!jwt) {
        setToken(false)
      } else {
        setToken(true);
      }
    };
    checkLoggedIn();
  }, []);

  return (
    <div className="overflow-y-scroll h-full">
      <Router>
        <UserContext.Provider value={{ token, setToken }}>
          <Navbar />
          <MobileNavbar />
          <Routes>
            <Route path="/" exact element={<Hero />} />
            <Route path="/animals/add" exact element={<AddAnimalForm />} />
            <Route path="/animals" exact element={<Animals />} />
            <Route path="/animals/:id" exact element={<Animal />} />
            <Route path="/auth/signup" exact element={<SignUpForm />} />
            <Route path="/auth/login" exact element={<LoginForm />} />
            {/* <Route path="/animals/:id/addimages" exact /> */}
            <Route path="*" exact element={<Error404 />} />
          </Routes>
          <Footer />
        </UserContext.Provider>
      </Router>
    </div>
  );
};

export default Layout;
