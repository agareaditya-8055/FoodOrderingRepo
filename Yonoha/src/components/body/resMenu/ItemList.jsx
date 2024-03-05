import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../../../utils/constants";
import { addItems, removeItems } from "../../../store/slices/cartSlice";
import docService from "../../../appwrite/docs";
import authService from "../../../appwrite/auth";

const ItemList = ({ items, buttonContent, actionType }) => {
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const cartItems = useSelector((state) => state.cart.items);
  const userId = useSelector((state) => state?.auth?.userData?.$id);
  const dispatch = useDispatch();

  const handleClick = async (item) => {
    if (actionType === "add") {
      const {
        id: cartItemId,
        name,
        price,
        defaultPrice,
        description,
        imageId,
      } = item;
      const id = `${userId}${cartItemId}`;
      const priceString = (price / 100).toString();
      const defaultpriceString = (defaultPrice / 100).toString();
      if (userId) {
        const createDocs = await docService.createCartItems({
          id,
          name,
          price: priceString,
          defaultPrice: defaultpriceString,
          description,
          imageId,
          userId,
        });
        console.log("cart has been created", createDocs);
        if (createDocs) {
          dispatch(addItems(createDocs));
        }
      } else {
        console.log("Please Sign In");
      }
    } else if (actionType === "delete") {
      const deleteItem = await docService.deleteCartItems(item?.$id);
      if (deleteItem) {
        dispatch(removeItems(item?.$id));
      }
    }
  };

  console.log("cartItems", cartItems);

  return (
    <div>
      {items.map((item) => {
        const info = item?.card?.info || item;
        const itemId = info.$id || info.id;
        const id = `${userId}${itemId}`;

        const { name, price, defaultPrice, description, imageId } = info;
        const priceToShow = info === item ? price : price / 100;
        const defaultPriceToShow =
          info === item ? defaultPrice : defaultPrice / 100;

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
