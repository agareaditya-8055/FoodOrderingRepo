import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const { itemCards } = data;
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      {/* header */}
      <div
        className={`w-1/2 mx-auto my-4 rounded-lg  p-4 ${
          isDarkMode
            ? "text-white bg-htmlColor transition duration-500"
            : "text-black bg-gray-100 shadow-lg transition duration-500 border-gray-700"
        }`}
      >
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data?.title} ({data?.itemCards?.length})
          </span>
          <span className="text-xl">⬇️</span>
        </div>
        {showItems && (
          <ItemList
            items={itemCards}
            buttonContent={"ADD+"}
            actionType={"add"}
          />
        )}
      </div>
    </div>
  );
};
export default RestaurantCategory;
