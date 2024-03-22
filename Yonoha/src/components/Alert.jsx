import React from "react";
import { useAlert } from "../utils/useAlert";

const Alert = ({ message, type }) => {
  const alertType = useAlert(type);

  // Define the color classes based on the type prop
  const colorClasses = {
    success: "bg-green-100 border-green-400 text-green-700",
    error: "bg-red-100 border-red-400 text-red-700",
    removed: "bg-red-100 border-red-400 text-red-700",
    signout: "bg-red-100 border-red-400 text-red-700",
  };

  // Add the transition and transform classes to enable the sliding animation
  return (
    <div
      className={`p-3 border-l-4  rounded-md ${colorClasses[alertType]} transition-all w-1/4 transform duration-500 ease-in-out fixed top-28 right-1/3 z-10`}
      role="alert"
      // Use the data-te-animation attribute to specify the animation name and direction
      data-te-animation="slide-bottom"
    >
      <p className="font-bold">{alertType.toUpperCase()}</p>
      <p>{message}</p>
    </div>
  );
};

export default Alert;
