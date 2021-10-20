import React from "react";
const MobileNavbar = () => {
  return (
    <nav className="fixed text-center z-50 text-white flex sm:hidden bottom-0 bg-green-800 w-screen h-12">
      <button className="pointer w-1/4 items-center flex justify-center  border-r boder-solid ">
        <span>Pets</span>
      </button>
      <button className="w-1/4 items-center flex justify-center  border-r boder-solid ">
        <span>Blog</span>
      </button>
      <button className="w-1/4 items-center flex justify-center  border-r boder-solid ">
        <span>Login</span>
      </button>
      <button className="w-1/4 items-center flex justify-center  border-r boder-solid ">
        <span>Signup</span>
      </button>
    </nav>
  );
};

export default MobileNavbar;
