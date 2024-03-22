import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import Header from "./components/header/Header";
import authService from "./appwrite/auth";
import docService from "./appwrite/docs";
import { login, logout } from "./store/slices/authSlice";
import { addItems } from "./store/slices/cartSlice";

import "./index.css";
import Alert from "./components/Alert";
import Footer from "./components/footer/Footer";

const App = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.response);
  const alert = useSelector((state) => state.alert);

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const userData = await authService.getCurrentUser();
        const userId = userData?.$id;

        if (userData) {
          dispatch(login({ userData }));

          const response = await docService.showCartItems(userId);
          const data = response?.documents;

          if (data) {
            dispatch(addItems(data));
          }
        } else {
          dispatch(logout());
        }
      } catch (error) {
        dispatch(logout());
      }
    };

    getCurrentUser();
  }, [dispatch]);

  useEffect(() => {
    const htmlClassList = document.querySelector("html").classList;
    htmlClassList.remove("light", "dark");
    htmlClassList.add(isDarkMode);
  }, [isDarkMode]);

  return (
    <>
      {alert.message && <Alert message={alert.message} type={alert.type} />}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
