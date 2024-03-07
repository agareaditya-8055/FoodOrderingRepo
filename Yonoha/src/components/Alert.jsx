import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearAlert } from "../store/slices/alertSlice";

const Alert = ({ message, type }) => {
  const dispatch = useDispatch();
  console.log(type);
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(clearAlert());
    }, 3000); // Clear the alert after 3 seconds

    return () => clearTimeout(timer); // Clear the timer if the component is unmounted
  }, [dispatch]);

  // Define the color classes based on the type prop
  const colorClasses = {
    success: "bg-green-100 border-green-400 text-green-700",
    error: "bg-red-100 border-red-400 text-red-700",
    signout: "bg-red-100 border-red-400 text-red-700",
  };

  // Add the transition and transform classes to enable the sliding animation
  return (
    <div
      className={`p-3 border-l-4 rounded-md ${colorClasses[type]} transition-all w-1/4 transform duration-500 ease-in-out fixed top-4 right-4`}
      role="alert"
      // Use the data-te-animation attribute to specify the animation name and direction
      data-te-animation="slide-top"
    >
      <p className="font-bold">{type.toUpperCase()}</p>
      <p>{message}</p>
    </div>
  );
};

export default Alert;
