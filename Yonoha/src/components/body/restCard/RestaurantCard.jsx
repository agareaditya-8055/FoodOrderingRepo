import React from "react";
import { CDN_URL } from "../../../utils/constants";
import { useSelector } from "react-redux";

const RestaurantCard = ({ resData }) => {
  const { costForTwo, cuisines, name, avgRating, sla, cloudinaryImageId } =
    resData?.info;
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const bgColor = isDarkMode
    ? "bg-bgCard transition duration-500"
    : "bg-white transition duration-500";
  const textColor = isDarkMode
    ? "text-white transition duration-500"
    : "text-gray-700 transition duration-500";
  const shadowColor = isDarkMode
    ? "shadow-2xl transition duration-500"
    : "shadow-md transition duration-500";

  return (
    <div
      className={`res_card m-2 p-2 w-[232px] h-[400px] rounded-lg overflow-hidden ${bgColor} ${textColor} ${shadowColor} transition-all duration-500`}
    >
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="dishImage"
        className="res_img w-full h-[182px] rounded-t-lg object-cover"
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 className="font-semibold pb-1">{cuisines.slice(0, 3).join(", ")}</h4>
      <h4 className="font-semibold pb-2">{avgRating}</h4>
      <h4 className="font-semibold pb-2">{costForTwo}</h4>
      <h4 className="font-semibold pb-2">{sla.slaString}</h4>
    </div>
  );
};

// Higher Order Component : - which takes an component and return theenhance version of that component

export const isOpenLable = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white p-2 mx-2 rounded-md">
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
