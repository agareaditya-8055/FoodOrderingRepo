import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useOnlineStatus from "../../../utils/useOnlineStatus";
import { useDispatch, useSelector } from "react-redux";
import { logout as authLogout } from "../../../store/slices/authSlice";
import {
  toggleDarkMode,
  toggleLightMode,
} from "../../../store/slices/themeSlice";
import authService from "../../../appwrite/auth";

const NavItems = () => {
  const onlineStatus = useOnlineStatus();
  const cart = useSelector((state) => state.cart.items);

  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const name = useSelector((state) => state?.auth?.userData?.name);

  console.log(name);

  const handleSignin = () => {
    navigate("/signin");
  };

  const handleSignout = async () => {
    try {
      const logoutResponse = await authService.logout();
      if (logoutResponse) {
        console.log("logout");
        dispatch(authLogout()); // Assuming you have a logoutAction imported from your actions
        navigate("/signin");
      }
    } catch (error) {
      console.log("Error signing out:", error);
    }
  };

  const handleDarkModeToggle = () => {
    if (isDarkMode) {
      dispatch(toggleLightMode());
    } else {
      dispatch(toggleDarkMode());
    }
  };
  return (
    <div className="navItems_container">
      <ul className="flex p-3 m-3">
        <li className="px-4 font-bold text-lg">{name}</li>
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
