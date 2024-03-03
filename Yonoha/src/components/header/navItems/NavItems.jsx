import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useNavItems } from "../../../utils/useNavItems";
const NavItems = () => {
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
    { label: name, className: "px-4 font-bold text-lg" },
    {
      label: `Online Status : ${onlineStatus ? "✅" : "❎"}`,
      className: "px-4 font-bold text-lg",
    },
    { label: "Home", link: "/", className: "px-4 font-bold text-lg" },
    { label: "About", link: "/about", className: "px-4 font-bold text-lg" },
    { label: "Contact", link: "/contact", className: "px-4 font-bold text-lg" },
    { label: "Grocery", link: "/grocery", className: "px-4 font-bold text-lg" },
  ];

  return (
    <div className="navItems_container">
      <ul className="flex p-3 m-3">
        {navItems.map((item, index) => (
          <li key={index} className={item.className}>
            {item.link ? <Link to={item.link}>{item.label}</Link> : item.label}
          </li>
        ))}
        <li className="px-4 font-semibold text-2xl relative">
          <Link to="/cart">
            🛒{" "}
            <div className="text-xs text-white bg-black h-4 flex w-4 justify-center items-center absolute right-5 bottom-4 rounded-full">
              <span className="">{cart.length}</span>
            </div>
          </Link>
        </li>
        {name ? (
          <button
            className="login_btn px-4 py-1 bg-green-200 rounded-lg font-bold"
            onClick={handleSignout}
          >
            Sign Out
          </button>
        ) : (
          <button
            className="login_btn px-4 py-1 bg-green-200 rounded-lg font-bold"
            onClick={handleSignin}
          >
            Sign In
          </button>
        )}
        <button
          className="px-4 font-bold text-lg"
          onClick={handleDarkModeToggle}
        >
          {isDarkMode ? "🌕" : "🌑"}
        </button>
      </ul>
    </div>
  );
};

export default NavItems;
