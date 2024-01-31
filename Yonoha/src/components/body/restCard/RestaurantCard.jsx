import React from "react";
import { CDN_URL } from "../../../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { costForTwo, cuisines, name, avgRating, sla, cloudinaryImageId } =
    resData?.info;

  return (
    <div className="res_card m-2 p-2 w-[232px] bg-gray-100 hover:bg-gray-200 rounded-lg">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="dishImage"
        className="res_img w-full h-[182px] rounded-lg"
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