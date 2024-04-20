import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useNavItems } from "../../../utils/useNavItems";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const NavItems = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const {
    onlineStatus,
    cart,
    isDarkMode,
    name,
    handleSignin,
    handleSignout,
    handleDarkModeToggle,
  } = useNavItems(navigate);

  const navItems = [
    {
      label: `Online Status : ${onlineStatus ? "✅" : "❎"}`,
    },
    {
      label: name,
      icon: ` ${name && "fa fa-user mr-1"}`,
    },
    {
      label: "Home",
      icon: "fa fa-house mr-1",
      link: "/",
    },
    {
      label: "About",
      icon: "fa fa-circle-info mr-1",
      link: "/about",
    },
  ];

  return (
    <div className="navItems_container ">
      {/* <ToastContainer /> */}
      <div
        className="text-3xl absolute right-8 top-6 lg:hidden cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {open ? <span>&#10005;</span> : <span>&#9776;</span>}
      </div>
      <ul
        className={`lg:flex lg:items-center  pl-7 lg:pl-0 lg:mt-0 lg:pb-0 pb-8 absolute lg:static lg:z-auto left-0 w-full lg:w-auto z-[1] transition-all duration-500 ease-in ${
          open ? "top-20" : "top-[-490px]"
        }  
        ${
          isDarkMode
            ? "text-textColor  transition duration-500"
            : "text-bgCard transition duration-500"
        }
        `}
      >
        {navItems.map((item, index) => (
          <li
            key={index}
            className="lg:mr-4 my-5 lg:my-0 lg:text-lg lg:font-semibold  "
            onClick={() => setOpen(false)}
          >
            {item.icon && <i className={item.icon}></i>}
            {item.link ? <Link to={item.link}>{item.label}</Link> : item.label}
          </li>
        ))}

        <li
          className=" my-5 lg:mr-2 lg:my-0 base:flex base:items-center font-semibold  relative"
          onClick={() => setOpen(false)}
        >
          <Link to="/cart">
            <div className="w-16 flex justify-between items-center rounded-lg  bg-yellow-500 px-2 py-1 text-white">
              <i className="fa-solid fa-cart-shopping "></i>
              <div className="rounded-full bg-white w-5 h-5 flex items-center justify-center">
                <span className="text-yellow-500">{cart.length}</span>
              </div>
            </div>
          </Link>
        </li>
        {name ? (
          <button
            className="login_btn my-5 lg:my-0 px-4 py-1 bg-green-200 text-black rounded-lg font-bold"
            onClick={handleSignout}
          >
            Sign Out
          </button>
        ) : (
          <button
            className="login_btn my-5 lg:my-0 px-4 py-1 bg-green-200 text-black rounded-lg font-bold"
            onClick={handleSignin}
          >
            Sign In
          </button>
        )}
        <button
          className={`px-4 font-bold text-lg my-5 lg:my-0  rounded-lg ml-2 ${
            isDarkMode ? "border-2 border-white" : " border-2 border-slate-900"
          }`}
          onClick={handleDarkModeToggle}
        >
          {isDarkMode ? (
            <i className="fas fa-sun"></i>
          ) : (
            <i className="fas fa-moon"></i>
          )}
        </button>
      </ul>
    </div>
  );
};

export default NavItems;
