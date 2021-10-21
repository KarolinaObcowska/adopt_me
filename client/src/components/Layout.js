import React from "react";
import Navbar from "./Navbar";
import Animals from "./Animals";
import Hero from "./Hero";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import Animal from "./Animal";
import Footer from "./Footer";
import MobileNavbar from "./MobileNavbar";
const Layout = () => {
  return (
    <div className="overflow-y-scroll h-full">
      <Navbar />

      <MobileNavbar />
      {/* <Animals /> */}
      {/* <Hero /> */}
      {/* <SignUpForm /> */}
      {/* <LoginForm /> */}
      <Animal />
      <Footer />
    </div>
  );
};

export default Layout;
