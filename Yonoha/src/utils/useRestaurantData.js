import { useEffect, useState } from "react";
import { CARD_API } from "./constants";
import { useSelector } from "react-redux";

const useRestaurantData = () => {
  const [resDataList, setResDataList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [title, setTitle] = useState("");

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
    try {
      const response = await fetch(CARD_API);

      const json = await response.json();

      const card = json?.data?.cards.find(
        (card) =>
          card?.card?.card?.gridElements?.infoWithStyle?.collectionId ===
          "84124"
      );

      const cardTitle =
        card?.card?.card?.header?.title || "Top restaurant chains";

      const newResData =
        card?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      setTitle(cardTitle);
      setResDataList(newResData);
      setFilteredList(newResData);
    } catch (error) {
      console.error("Failed to fetch data: ", error);
    }
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
    title,
  };
};

export default useRestaurantData;
