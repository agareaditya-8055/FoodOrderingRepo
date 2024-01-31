import React, { useContext, useEffect, useState } from "react";
import Header from "./components/header/Header";
import "./index.css";
import { Outlet } from "react-router-dom";

function App() {
  // const [userName, setUserName] = useState("");

  // useEffect(() => {
  //   const data = {
  //     name: "Aditya Agare",
  //   };
  //   setUserName(data.name);
  // }, []);
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
