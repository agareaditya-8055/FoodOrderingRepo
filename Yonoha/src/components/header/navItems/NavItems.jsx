import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../../utils/useOnlineStatus";

const NavItems = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

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
        <li className="px-4 font-bold text-lg">Cart</li>
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
