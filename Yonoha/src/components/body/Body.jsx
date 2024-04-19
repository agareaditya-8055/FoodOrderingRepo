import React, { useState } from "react";
import RestaurantCard, { isOpenLable } from "./restCard/RestaurantCard";
import Shimmer from "./restCard/Shimmer";
import { Link } from "react-router-dom";
import useRestaurantData from "../../utils/useRestaurantData";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import noresult from "../../logos/no-results.png";
import OfflinePage from "../OfflinePage";

// import { ToastContainer, toast } from "react-toastify";
import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Body = () => {
  const notify = () => toast.warning("Wow so easy!");
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

  if (onlineStatus === false) return <OfflinePage />;

  // if (1+1 === 2 ) {
  //   return <Shimmer />;
  // }
  if (resDataList?.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className={`mt-20 h-auto py-4 ${bgColor}`}>
      <div
        className={`${cardColor} filter flex flex-col overflow-x-hidden  md:justify-between md:flex md:items-center rounded-lg shadow-md p-4`}
      >
        <div
          className={`search flex flex-col md:flex md:flex-row overflow-x-hidden justify-center md:gap-28 items-center px-4 py-1 w-full ${textColor}`}
        >
          <div className="relative w-[260px] md:w-72 min-w-[275.5px] overflow-x-hidden ">
            <input
              type="text"
              placeholder="Search for restaurants, cuisines"
              className={`search_input search-m border border-solid border-gray-300  rounded-xl p-2 pl-[40px] w-full text-[16px]  ${inputColor}`}
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

          <button
            className={`filter_btn  md:mr-0 mt-3 md:mt-0 w-[275.5px] md:w-72 py-1 ${buttonColor} hover:bg-green-100 rounded-lg`}
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
      </div>
      <div className="flex items-center  justify-center">
        <div className="w-[calc(100%-2rem)] md:w-[calc(100%-4rem)]  xl:w-[calc(100%-14rem)] 2xl:w-[calc(100%-25rem)]">
          <h2
            className={`food-menu-title my-10 text-center text-xl md:text-3xl font-bold ${
              isDarkMode && "text-textColor"
            }`}
          >
            {title}
          </h2>
          {filteredList.length === 0 ? (
            <div className="lg:flex lg:justify-center lg:items-center m-32">
              <img
                className="w-80"
                src={noresult}
                alt="Search Results Are Finished - No Results Found Cartoon@clipartmax.com"
              />
            </div>
          ) : (
            <div className="flex justify-center mx-auto  overflow-hidden">
              <div className=" grid grid-cols-1 gap-9 sm:grid-cols-2 sm:gap-3 md:grid-cols-3 md:gap-3  ">
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
          )}
        </div>
      </div>
    </div>

    // <div className={`mt-20 h-screen py-4 ${bgColor}`}>
    //   <div
    //     className={`${cardColor} filter flex flex-col overflow-x-hidden  md:justify-between md:flex md:items-center rounded-lg shadow-md p-4`}
    //   >
    //     <div
    //       className={`search flex flex-col md:flex md:flex-row md:justify-between items-center px-4 py-1 w-full  ${textColor}`}
    //     >
    //       <div className="relative w-[260px] md:w-72 min-w-[275.5px] overflow-x-hidden ">
    //         <input
    //           type="text"
    //           placeholder="Search for restaurants, cuisines"
    //           className={`search_input search-m border border-solid border-gray-300  rounded-xl p-2 pl-[40px] w-full text-[16px]  ${inputColor}`}
    //           value={searchText}
    //           onChange={(e) => {
    //             const searchTextValue = e.target.value.toLowerCase();
    //             setSearchText(searchTextValue);

    //             if (searchTextValue === "") setFilteredList(resDataList);
    //             else {
    //               const filteredRestaurantList = resDataList?.filter(
    //                 (res) =>
    //                   res.info.name.toLowerCase().includes(searchTextValue) ||
    //                   res.info.cuisines.some((cuisine) =>
    //                     cuisine.toLowerCase().includes(searchTextValue)
    //                   )
    //               );
    //               setFilteredList(filteredRestaurantList);
    //             }
    //           }}
    //         />
    //         <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
    //           <i
    //             className="fa-solid fa-magnifying-glass"
    //             style={{ color: "#939393" }}
    //           ></i>
    //         </div>
    //       </div>

    //       <button
    //         className={`filter_btn mr-2 md:mr-0 mt-3 md:mt-0 px-4 py-1 ${buttonColor} hover:bg-green-100 rounded-lg`}
    //         onClick={() => {
    //           let newResdataList = resDataList.filter((data) => {
    //             return data?.info?.avgRating > 4.3;
    //           });
    //           setFilteredList(newResdataList);
    //         }}
    //       >
    //         Top Rated Restaurants
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Body;
