import { useDispatch, useSelector } from "react-redux";
import { addItems, removeItems } from "../store/slices/cartSlice.js";
import docService from "../appwrite/docs.js";

export const useItemList = () => {
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const cartItems = useSelector((state) => state.cart.items);
  const userId = useSelector((state) => state?.auth?.userData?.$id);
  const dispatch = useDispatch();

  const handleAddClick = async (item) => {
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

      if (createDocs) {
        dispatch(addItems(createDocs));
      }
    } else {
      console.log("Please Sign In");
    }
  };

  const handleDeleteClick = async (itemId) => {
    const deleteItem = await docService.deleteCartItems(itemId);

    if (deleteItem) {
      dispatch(removeItems(itemId));
    }
  };

  return {
    handleAddClick,
    handleDeleteClick,
    cartItems,
    isDarkMode,
    userId,
  };
};
