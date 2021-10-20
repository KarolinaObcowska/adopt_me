import React from "react";
import Navbar from "./Navbar";
// import Animals from "./Animals";
import Hero from "./Hero";
import SignUpForm from './SignUpForm'
import LoginForm from "./LoginForm";
import Footer from "./Footer";
import MobileNavbar from "./MobileNavbar";
const Layout = () => {
  return (
    <div className="w-screen">
      <Navbar />
      {/* <div className="absolute top-36">
        <Animals />
      </div> */}
      <MobileNavbar />
      {/* <Hero /> */}
      {/* <SignUpForm /> */}
      <LoginForm />
      <Footer />
    </div>
  );
};

export default Layout;
