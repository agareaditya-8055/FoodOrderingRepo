import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../../../utils/constants";
import { addItems, removeItems } from "../../../store/slices/cartSlice";

const ItemList = ({ items, buttonContent, actionType }) => {
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();
  const handleClick = (item) => {
    if (actionType === "add") {
      dispatch(addItems(item));
    } else {
      dispatch(removeItems(item?.card?.info?.id));
    }
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className={` flex rounded-lg justify-between py-2 my-2 relative px-2 ${
            isDarkMode ? "bg-bgCard " : "bg-gray-200 border-b-2 "
          }`}
        >
          <div className="flex flex-col text-start text-wrap w-3/4">
            <span className="font-bold">{item?.card?.info?.name}</span>
            <span>
              ₹{" "}
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </span>
            <p
              className={`text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              } my-3`}
            >
              {item?.card?.info?.description}
            </p>
          </div>
          <div className="w-1/4 flex justify-center  ">
            <img
              className={
                item?.card?.info?.imageId ? "w-3/4 rounded-lg" : "hidden"
              }
              src={CDN_URL + item?.card?.info?.imageId}
              alt="dishImage"
            />
            <button
              className={`py-1 px-4 text-orange-400 bg-bgColor  shadow-lg rounded-lg absolute bottom-2`}
              onClick={() => handleClick(item)}
            >
              {buttonContent}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
