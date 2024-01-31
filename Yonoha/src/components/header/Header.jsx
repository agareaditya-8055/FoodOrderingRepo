import React from "react";
import Logo from "./logo/Logo";
import NavItems from "./navItems/NavItems";
const Header = () => {
  return (
    <div className="flex justify-between items-center bg-pink-50 shadow-lg border border-solid border-gray-300 m-2">
      <Logo />
      <NavItems />
    </div>
  );
};

export default Header;
