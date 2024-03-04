import React, { useState } from "react";
import RestaurantCard, { isOpenLable } from "./restCard/RestaurantCard";
import Shimmer from "./restCard/Shimmer";
import { Link } from "react-router-dom";
import useRestaurantData from "../../utils/useRestaurantData";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const RestaurantCardLabel = isOpenLable(RestaurantCard);

  const { resDataList, filteredList, setFilteredList, setResDataList } =
    useRestaurantData();

  const onlineStatus = useOnlineStatus();

  console.log(resDataList);

  if (onlineStatus === false) {
    return <h1>Please check your internet connection</h1>;
  }

  if (resDataList?.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter flex items-center m-2">
        <div className="search mx-4 my-1 px-4 py-1">
          <input
            type="text"
            className="search_input search-m border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search_btn search-m px-4 py-1 bg-green-200 mx-2 rounded-lg"
            onClick={() => {
              const filteredRestaurantList = resDataList?.filter((data) =>
                data?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredList(filteredRestaurantList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter_btn px-4 py-1 bg-green-200 rounded-lg"
          onClick={() => {
            let newResdataList = resDataList.filter(
              (data) => data?.info?.avgRating > 4.4
            );
            setResDataList(newResdataList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res_container flex flex-wrap">
        {filteredList?.map((data) => (
          <Link key={data.info.id} to={"/restaurants/" + data.info.id}>
            {data.info.isOpen ? (
              <RestaurantCardLabel resData={data} />
            ) : (
              <RestaurantCard resData={data} />
            )}
          </Link>
          // <RestaurantCard resData={data} />
        ))}
      </div>
    </div>
  );
};

export default Body;
