import { MENU_API } from "./constants";
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resMenuData, setReMenuData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setReMenuData(json.data);
  };

  return resMenuData;
};

export default useRestaurantMenu;
