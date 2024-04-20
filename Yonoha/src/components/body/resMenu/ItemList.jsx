import { toast } from "react-toastify";
import { CDN_URL } from "../../../utils/constants";
import { useItemList } from "../../../utils/useItemList";
import { useSelector } from "react-redux";
import { useState } from "react";
import { InfinitySpin } from "react-loader-spinner";

const ItemList = ({ items, buttonContent, actionType }) => {
  const [loadingItems, setLoadingItems] = useState({});
  const user = useSelector((state) => state.auth.status);
  const {
    handleAddClick,
    handleDeleteClick,
    cartItems,
    isDarkMode,
    userId,
    isLoading,
  } = useItemList();

  // In your ItemList component

  const handleClick = (item) => {
    setLoadingItems((prev) => ({ ...prev, [item.$id || item.id]: true })); // Set loading state for this item

    if (actionType === "add") {
      handleAddClick(item).finally(() => {
        setLoadingItems((prev) => ({ ...prev, [item.$id || item.id]: false })); // Reset loading state for this item
      });
    } else if (actionType === "delete") {
      handleDeleteClick(item?.$id).finally(() => {
        setLoadingItems((prev) => ({ ...prev, [item.$id || item.id]: false })); // Reset loading state for this item
      });
    }
  };

  return (
    <div>
      {items.map((item) => {
        const info = item?.card?.info || item;

        const itemId = info.$id || info.id;
        const id = `${userId}${itemId}`;

        const { name, price, defaultPrice, description, imageId } = info;
        const priceToShow =
          typeof price === "number" ? price / 100 : Number(price);
        const defaultPriceToShow =
          typeof defaultPrice === "number"
            ? defaultPrice / 100
            : Number(defaultPrice);

        const isInCart = cartItems.some((cartItem) => cartItem?.$id === id);

        const isLoading = loadingItems[itemId];

        return (
          <div
            key={id}
            className={`flex flex-col-reverse gap-3 items-center md:flex md:flex-row max-w-2xl mx-auto md:justify-between rounded-lg py-2 my-2 relative px-2 ${
              isDarkMode
                ? "bg-bgCard text-white transition duration-500"
                : "bg-gray-200 border-b-2 text-black shadow-lg transition duration-500"
            }`}
          >
            <div className="flex flex-col text-start text-wrap w-full">
              <span className="font-bold">{name}</span>
              <span>₹ {priceToShow || defaultPriceToShow}</span>
              <p
                className={`text-[1rem] ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                } my-3`}
              >
                {description}
              </p>
            </div>
            <div className="w-full sm:w-1/2 md:max-w-36 relative flex justify-center">
              <div className="w-full aspect-square relative rounded-lg overflow-hidden">
                <img
                  className={
                    imageId ? "absolute w-full h-full object-cover" : "hidden"
                  }
                  src={CDN_URL + imageId}
                  alt="dishImage"
                />
              </div>
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 rounded-lg">
                  <InfinitySpin />{" "}
                </div>
              )}
              {!isLoading && (
                <button
                  className={`py-1 w-3/4 md:px-4  text-white bg-bgColor shadow-lg rounded-lg absolute bottom-0 ${
                    isInCart && actionType === "add"
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  onClick={() => handleClick(info)}
                  disabled={isInCart && actionType === "add"}
                >
                  {buttonContent}
                </button>
              )}
            </div>
          </div>
        );
      })}
      {/* } */}
    </div>
  );
};

export default ItemList;
