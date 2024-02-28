import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const NavItems = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const cart = useSelector((state) => state.cart.items);
  return (
    <div className="navItems_container">
      <ul className="flex p-3 m-3">
        <li className="px-4 font-bold text-lg">
          Online Status : {onlineStatus ? "✅" : "❎"}
        </li>
        <li className="px-4 font-bold text-lg">
          <Link to="/">Home</Link>
        </li>
        <li className="px-4 font-bold text-lg">
          <Link to="/about">About</Link>
        </li>
        <li className="px-4 font-bold text-lg">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="px-4 font-bold text-lg">
          <Link to="/grocery">Grocery</Link>
        </li>
        <li className="px-4 font-semibold text-2xl relative">
          <Link to="/cart">
            🛒{" "}
            <div className="text-xs text-white bg-black h-4 flex w-4 justify-center items-center absolute right-5 bottom-4 rounded-full">
              <span className="">{cart.length}</span>
            </div>
          </Link>
        </li>
        <button
          className="login_btn px-4 py-1 bg-green-200 rounded-lg font-bold"
          onClick={() =>
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
          }
        >
          {btnName}
        </button>
      </ul>
    </div>
  );
};

export default NavItems;
