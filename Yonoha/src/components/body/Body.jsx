import React, { useState } from "react";
import RestaurantCard, { isOpenLable } from "./restCard/RestaurantCard";
import Shimmer from "./restCard/Shimmer";
import { Link } from "react-router-dom";
import useRestaurantData from "../../utils/useRestaurantData";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const RestaurantCardLabel = isOpenLable(RestaurantCard);
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const {
    resDataList,
    filteredList,
    setFilteredList,
    setResDataList,
    bgColor,
    cardColor,
    textColor,
    buttonColor,
    inputColor,
    title,
  } = useRestaurantData();
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Please check your internet connection</h1>;
  }
  if (resDataList?.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className={`body ${bgColor}`}>
      <div
        className={`filter  justify-center gap-x-[20px]  mt-28 flex items-center   ${cardColor} rounded-lg shadow-md p-4`}
      >
        <div
          className={`search flex flex-row items-center mx-4 my-1 px-4 py-1 ${textColor}`}
        >
          <div className="relative w-72 ">
            <input
              type="text"
              placeholder="Search for restaurants, cuisines"
              className={`search_input search-m border border-solid border-gray-300 w-full rounded-xl p-2 pl-[40px] text-[16px]  ${inputColor}`}
              value={searchText}
              onChange={(e) => {
                const searchTextValue = e.target.value.toLowerCase();
                setSearchText(searchTextValue);

                if (searchTextValue === "") setFilteredList(resDataList);
                else {
                  const filteredRestaurantList = resDataList?.filter(
                    (res) =>
                      res.info.name.toLowerCase().includes(searchTextValue) ||
                      res.info.cuisines.some((cuisine) =>
                        cuisine.toLowerCase().includes(searchTextValue)
                      )
                  );
                  setFilteredList(filteredRestaurantList);
                }
              }}
            />
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <i
                className="fa-solid fa-magnifying-glass"
                style={{ color: "#939393" }}
              ></i>
            </div>
          </div>
        </div>

        <button
          className={`filter_btn px-4 py-1 ${buttonColor} hover:bg-green-100 rounded-lg`}
          onClick={() => {
            let newResdataList = resDataList.filter((data) => {
              return data?.info?.avgRating > 4.3;
            });
            setFilteredList(newResdataList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="w-[calc(100%-10rem)] mx-40 p-4">
        <h2
          className={`food-menu-title my-10  text-3xl font-bold ${
            isDarkMode && "text-textColor"
          }`}
        >
          {title}
        </h2>
        <div className="res_container flex flex-wrap justify-start gap-4 p-4 ">
          {filteredList?.map((data) => (
            <Link key={data.info.id} to={"/restaurants/" + data.info.id}>
              {data.info.isOpen ? (
                <RestaurantCardLabel resData={data} />
              ) : (
                <RestaurantCard resData={data} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
