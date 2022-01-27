import React from "react";
import { Link } from "react-router-dom";

const MobileNavbar = () => {
  return (
    <nav className="fixed text-center z-50 text-white flex sm:hidden bottom-0 bg-green-800 w-screen h-12">
      <Link
        to="/animals/page/1"
        className="pointer w-1/3 items-center flex justify-center  border-r boder-solid "
      >
        <span>Pets</span>
      </Link>
      <Link
        to="/auth/login"
        className="w-1/3 items-center flex justify-center  border-r boder-solid "
      >
        <span>Login</span>
      </Link>
      <Link
        to="/auth/signup"
        className="w-1/3 items-center flex justify-center  border-r boder-solid "
      >
        <span>Signup</span>
      </Link>
    </nav>
  );
};

export default MobileNavbar;
