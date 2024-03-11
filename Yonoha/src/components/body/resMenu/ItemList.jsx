import { CDN_URL } from "../../../utils/constants";
import { useItemList } from "../../../utils/useItemList";

const ItemList = ({ items, buttonContent, actionType }) => {
  const { handleAddClick, handleDeleteClick, cartItems, isDarkMode, userId } =
    useItemList();

  const handleClick = (item) => {
    if (actionType === "add") {
      handleAddClick(item);
    } else if (actionType === "delete") {
      handleDeleteClick(item?.$id);
    }
  };

  return (
    <div>
      {items.map((item) => {
        const info = item?.card?.info || item;
        console.log(info);

        const itemId = info.$id || info.id;
        const id = `${userId}${itemId}`;

        const { name, price, defaultPrice, description, imageId } = info;
        const priceToShow =
          typeof price === "number" ? price / 100 : Number(price);
        const defaultPriceToShow =
          typeof defaultPrice === "number"
            ? defaultPrice / 100
            : Number(defaultPrice);

        console.log(" priceToShow  ", priceToShow);
        console.log(" defaultPriceToShow  ", defaultPriceToShow);

        const isInCart = cartItems.some((cartItem) => cartItem?.$id === id);

        return (
          <div
            key={id}
            className={`flex rounded-lg justify-between py-2 my-2 relative px-2 ${
              isDarkMode
                ? "bg-bgCard text-white"
                : "bg-gray-200 border-b-2 text-black shadow-lg"
            }`}
          >
            <div className="flex flex-col text-start text-wrap w-3/4">
              <span className="font-bold">{name}</span>
              <span>₹ {priceToShow || defaultPriceToShow}</span>
              <p
                className={`text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                } my-3`}
              >
                {description}
              </p>
            </div>
            <div className="w-1/4 flex justify-center">
              <img
                className={imageId ? "w-3/4 rounded-lg" : "hidden"}
                src={CDN_URL + imageId}
                alt="dishImage"
              />
              <button
                className={`py-1 px-4 text-white bg-bgColor shadow-lg rounded-lg absolute bottom-2 ${
                  isInCart && actionType === "add"
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                onClick={() => handleClick(info)}
                disabled={isInCart && actionType === "add"}
              >
                {buttonContent}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
