import React, { useCallback, useState } from "react";

import Shimmer from "../restCard/Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useSelector } from "react-redux";
const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(0);
  const { resId } = useParams();

  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const resMenuData = useRestaurantMenu(resId);

  const menuData = resMenuData?.cards?.find(
    (card) =>
      card?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
  );

  const onShowIndexChange = useCallback((index) => {
    setShowIndex((prevIndex) => (prevIndex === index ? null : index));
  }, []);

  if (resMenuData === null) {
    return <Shimmer />;
  }

  const {
    name,
    cuisines,
    costForTwoMessage,
    totalRatingsString,
    avgRating,
    locality,
    sla,
  } = menuData?.card?.card?.info;

  const categoriesData = resMenuData?.cards.find(
    (card) => card.groupedCard !== undefined
  );

  const categories =
    categoriesData?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div
      className={`   m-6 p-5  text-center  mt-28 flex flex-col items-center ${
        isDarkMode
          ? "text-white bg-bgCard transition duration-500"
          : "text-black bg-gray-100 transition duration-500"
      }`}
    >
      <div className={`flex justify-between my-4 p-1 w-full max-w-2xl `}>
        <div className="flex flex-col  ">
          <h2 className="font-bold text-left text-2xl my-2 ">{name}</h2>
          <p className="font-normal text-left text-base text-gray-400 ">
            {cuisines.join(", ")}
          </p>
          <p className="font-normal text-left text-base text-gray-400 ">
            {locality}, {sla.slaString.toLowerCase()} ...
          </p>
        </div>
        <div
          className={` w-20 h-16 flex flex-col justify-around p-2 rounded-lg shadow-lg ${
            isDarkMode
              ? "text-white bg-htmlColor border border-slate-600 transition duration-500"
              : "text-black bg-gray-100 border border-gray-300 transition duration-500"
          }`}
        >
          <div className={` flex items-center gap-2 `}>
            <i className="fa-solid fa-star text-green-600"></i>
            <p className="text-xs">{avgRating}</p>
          </div>
          <span className="text-xs border-teal-200 border-t">
            {totalRatingsString}
          </span>
        </div>
      </div>
      <div
        className={`  my-4  flex flex-col w-full max-w-2xl  ${
          isDarkMode
            ? " border-teal-700 border-t-4 transition duration-500"
            : "border-teal-200 border-t-4 transition duration-500"
        }`}
      >
        {categories.map((category, index) => {
          return (
            <RestaurantCategory
              key={category?.card?.card?.title}
              data={category?.card?.card}
              showItems={index === showIndex}
              setShowIndex={() => onShowIndexChange(index)}
            />
          );
        })}
      </div>

      <p className="text-sm mt-8">
        Explore our delightful menu and savor the flavors! 🍽️
      </p>
    </div>
  );
};

export default RestaurantMenu;
