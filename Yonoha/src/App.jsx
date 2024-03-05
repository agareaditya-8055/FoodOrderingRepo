import React, { useEffect } from "react";
import Header from "./components/header/Header";
import "./index.css";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const isDarkMode = useSelector((state) => state.theme.response);

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(isDarkMode);
  }, [isDarkMode]);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
