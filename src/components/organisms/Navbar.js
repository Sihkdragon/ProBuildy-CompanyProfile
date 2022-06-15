import React from "react";
import Brand from "../atoms/Brand";
import RightNavigation from "../molecules/RightNavigation";

const Navbar = () => {
  return (
    <nav className="w-screen bg-dark bg-opacity-75 h-20 fixed top-0 z-40">
      <div className="container flex items-center h-full justify-between">
        <Brand />
        <RightNavigation />
      </div>
    </nav>
  );
};

export default Navbar;
