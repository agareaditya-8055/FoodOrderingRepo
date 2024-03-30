import React from "react";
import Logo from "./logo/Logo";
import NavItems from "./navItems/NavItems";
import { useSelector } from "react-redux";

const Header = () => {
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  return (
    <div
      className={`flex flex-col sm:flex-row justify-between items-center  fixed top-0 w-full z-50 ${
        isDarkMode
          ? "bg-bgCard text-white transition duration-500"
          : "bg-pink-50 border border-solid border-pink-100 transition duration-500"
      } shadow-lg px-4 `}
    >
      {/* <Logo /> */}
      <span className="text-logoColor text-4xl font-bold mb-2 sm:mb-0">
        YONOHA
      </span>
      <NavItems />
    </div>
  );
};

export default Header;
