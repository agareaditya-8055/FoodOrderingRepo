import React, { useState } from "react";

import Shimmer from "../restCard/Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();

  const resMenuData = useRestaurantMenu(resId);

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
    <div className="menu border m-6 p-5 text-center">
      <h1 className="font-bold text-3xl my-6 ">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category.card.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() =>
            setShowIndex((prevIndex) => (prevIndex === index ? null : index))
          }
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
