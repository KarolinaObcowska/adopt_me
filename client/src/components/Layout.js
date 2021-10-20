import React from "react";
import Navbar from "./Navbar";
// import Animals from "./Animals";
import Hero from './Hero';
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
        <Hero />
        <Footer />
    </div>
  );
};

export default Layout;
