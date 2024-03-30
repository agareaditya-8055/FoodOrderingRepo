import React from "react";

import { useSelector } from "react-redux";
import { CDN_URL } from "../../../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    costForTwo,
    cuisines,
    name,
    avgRating,
    sla,
    cloudinaryImageId,
    aggregatedDiscountInfoV3,
  } = resData?.info;
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
    // <div
    //   className={`res_card m-2 p-2 w-[232px] h-[400px] rounded-lg overflow-hidden ${bgColor} ${textColor} ${shadowColor} transition-all duration-500`}
    // >
    //   <img
    //     src={CDN_URL + cloudinaryImageId}
    //     alt="dishImage"
    //     className="res_img w-full h-[182px] rounded-t-lg object-cover"
    //   />
    //   <h3 className="font-bold py-4 text-lg">{name}</h3>
    //   <h4 className="font-semibold pb-1">{cuisines.slice(0, 3).join(", ")}</h4>
    //   <span className="flex flex-row items-center w-1/5 bg-green-900 text-white text-sm px-1 rounded-md">
    //     <i className="fa-solid fa-star" style={{ color: "#ffffff" }} />
    //     <h4 className="font-semibold ">{avgRating}</h4>
    //   </span>

    //   <h4 className="font-semibold pb-2">{costForTwo}</h4>
    //   <h4 className="font-semibold pb-2">{sla.slaString}</h4>
    // </div>

    <div
      className={`Food-item w-[350px] h-[365px] mb-[20px] hover:rounded-xl ${
        isDarkMode
          ? "text-textColor hover:bg-bgCard"
          : "hover:border hover:border-white  hover:bg-white"
      }`}
    >
      <div className="Food-item-margin p-2">
        <span className="Food-item-link block relative cursor-pointer no-underline">
          <div className="card-img relative max-w-full w-[328.4] h-[248] overflow-hidden rounded-2xl cursor-pointer ">
            <img
              className="w-full h-full rounded-[inherit] object-cover transition duration-250 ease-in-out transform hover:scale-125 "
              src={CDN_URL + cloudinaryImageId}
              alt="restaurant img"
            />
          </div>
        </span>
        <span className="Food-item-link block relative cursor-pointer no-underline">
          <div className="pname flex justify-between text-base leading-[17px]">
            <h4 className="leading-[1.2] mt-1 font-medium text-left text-base text-[17px] mb-5 ">
              {name}
            </h4>

            <div className="rating flex items-center justify-center border border-green-900 bg-green-900 text-white text-[13px] rounded-[6px] h-[20px] w-[40px] my-[7.2px]">
              <p className="mr-[2px] font-semibold text-[13px]">{avgRating} </p>
              <i
                className="fa-solid fa-star text-white text-[10px] h-[9px]"
                style={{ color: "#ffffff" }}
              />
            </div>
          </div>
          <div className="Category flex justify-between text-base leading-[17px]">
            <p className="p1 text-sm leading-1.5 text-left overflow-hidden overflow-ellipsis whitespace-nowrap text-gray-400 max-w-[60%]">
              {cuisines.join(", ")}
            </p>
            <p className="p2 text-[inherit] leading-1.5 text-right overflow-hidden overflow-ellipsis whitespace-nowrap text-gray-400 max-w-[30%]">
              {costForTwo}
            </p>
          </div>
          <div className="time flex justify-end h-[21px]">
            <p className="font-medium text-[12px] mt-3">
              {sla.deliveryTime} min
            </p>
          </div>
        </span>
      </div>
    </div>
  );
};

// Higher Order Component : - which takes an component and return theenhance version of that component

export const isOpenLable = (RestaurantCard) => {
  return (props) => {
    const aggregatedDiscountInfoV3 =
      props && props.resData && props.resData.info
        ? props.resData.info.aggregatedDiscountInfoV3
        : null;

    return (
      <div>
        {(aggregatedDiscountInfoV3?.header ||
          aggregatedDiscountInfoV3?.subHeader) && (
          <label className="absolute  bg-bgColor text-white text-sm p-1 mx-2 rounded-md z-10">
            {aggregatedDiscountInfoV3?.header}{" "}
            {aggregatedDiscountInfoV3?.subHeader}
          </label>
        )}

        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
