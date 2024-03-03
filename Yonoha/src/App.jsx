import React, { useContext, useEffect, useState } from "react";
import Header from "./components/header/Header";
import "./index.css";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/slices/authSlice";

function App() {
  const isDarkMode = useSelector((state) => state.theme.response);

  const dispatch = useDispatch();
  const checkLoggedInUser = async () => {
    try {
      const userData = await authService.getCurrentUser();
      console.log("User data:", userData); // Log user data
      if (userData) {
        dispatch(login({ userData }));
      } else {
        dispatch(logout());
      }
    } catch (error) {
      console.error("Error fetching current user:", error);
      dispatch(logout());
    }
  };

  useEffect(() => {
    checkLoggedInUser();
  }, [dispatch]);

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(isDarkMode);
  }, [isDarkMode]);

  return (
    <>
      {/* <UserContext.Provider value={{ loggedInUser: userName, setUserName }}> */}
      <Header />
      <Outlet />
      {/* </UserContext.Provider> */}
    </>
  );
}

export default App;
