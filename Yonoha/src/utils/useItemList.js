import { useDispatch, useSelector } from "react-redux";
import { addItems, removeItems } from "../store/slices/cartSlice.js";
import docService from "../appwrite/docs.js";
import { toast } from "react-toastify";

export const useItemList = () => {
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const cartItems = useSelector((state) => state.cart.items);
  const userId = useSelector((state) => state?.auth?.userData?.$id);
  const dispatch = useDispatch();
  const handleAddClick = async (item) => {
    try {
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
          toast.success("Item has been added successfully !");
        }
      } else {
        toast.error("Please sign in !");
        console.log("Please Sign In");
      }
    } catch (error) {
      toast.error(`An error occurred: ${error.message}`);
    }
  };

  const handleDeleteClick = async (itemId) => {
    try {
      const deleteItem = await docService.deleteCartItems(itemId);

      if (deleteItem) {
        dispatch(removeItems(itemId));
        toast.error("Item has been removed successfully !");
      }
    } catch (error) {
      toast.error(`An error occurred: ${error.message}`);
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
