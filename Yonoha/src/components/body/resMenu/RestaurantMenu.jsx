import React, { useCallback, useState } from "react";

import Shimmer from "../restCard/Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useSelector } from "react-redux";
const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();

  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const resMenuData = useRestaurantMenu(resId);

  const onShowIndexChange = useCallback((index) => {
    console.log("Creating a new function for index", index);
    setShowIndex((prevIndex) => (prevIndex === index ? null : index));
  }, []);

  if (resMenuData === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resMenuData?.cards[0]?.card?.card?.info;

  const categories =
    resMenuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);
  return (
    <div
      className={`menu  m-6 p-5 text-center ${
        isDarkMode
          ? "text-white bg-bgCard transition duration-500"
          : "text-black bg-gray-100 transition duration-500"
      }`}
    >
      <h1 className="font-bold text-3xl my-6 ">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => {
        return (
          <RestaurantCategory
            key={category.card.card.title}
            data={category.card.card}
            showItems={index === showIndex}
            setShowIndex={() => onShowIndexChange(index)}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
