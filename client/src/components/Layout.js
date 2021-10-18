import React from "react";
import Navbar from "./Navbar";
import Animals from "./Animals";
import Footer from "./Footer";
const Layout = () => {
  return (
    <div className='overflow-y w-screen'>
    <Navbar />
    <div className='absolute top-36'>
  <Animals />
    </div>
    <div>
    <Footer />
    </div>
  </div>
  )
  
};

export default Layout;
