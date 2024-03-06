import { useEffect, useState } from "react";
import { CARD_API } from "./constants";
import { useSelector } from "react-redux";

const useRestaurantData = () => {
  const [resDataList, setResDataList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const bgColor = isDarkMode
    ? "bg-htmlColor transition duration-500"
    : "bg-gray-100 transition duration-500";
  const cardColor = isDarkMode
    ? "bg-bgCard transition duration-500"
    : "bg-white transition duration-500";
  const textColor = isDarkMode
    ? "text-white transition duration-500"
    : "text-gray-700 transition duration-500";
  const inputColor = isDarkMode
    ? "bg-gray-700 text-white transition duration-500"
    : "bg-white text-gray-700 transition duration-500";
  const buttonColor = isDarkMode ? "bg-logoColor " : "bg-green-200 ";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(CARD_API);
    const json = await data.json();

    const newResData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setResDataList(newResData);
    setFilteredList(newResData);
  };

  return {
    resDataList,
    filteredList,
    setFilteredList,
    setResDataList,
    bgColor,
    cardColor,
    textColor,
    inputColor,
    buttonColor,
  };
};

export default useRestaurantData;
