import { useEffect, useState } from "react";
import { CARD_API } from "./constants";

const useRestaurantData = () => {
  const [resDataList, setResDataList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

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
  };
};

export default useRestaurantData;
