import React from "react";
import Logo from "./logo/Logo";
import NavItems from "./navItems/NavItems";
import { useSelector } from "react-redux";
const Header = () => {
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  return (
    <div
      className={`flex justify-between items-center ${
        isDarkMode
          ? "bg-bgCard text-white"
          : "bg-pink-50 border border-solid border-pink-100"
      } shadow-lg   m-2`}
    >
      <Logo />
      <NavItems />
    </div>
  );
};

export default Header;
