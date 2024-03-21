import { useDispatch, useSelector } from "react-redux";
import { addItems, removeItems } from "../store/slices/cartSlice.js";
import docService from "../appwrite/docs.js";
import { setAlert } from "../store/slices/alertSlice.js";
import { useState } from "react";

export const useItemList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const cartItems = useSelector((state) => state.cart.items);
  const userId = useSelector((state) => state?.auth?.userData?.$id);
  const dispatch = useDispatch();

  const handleAddClick = async (item) => {
    setIsLoading(true);
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
        dispatch(
          setAlert({
            message: "Item has been added successfully.",
            type: "success",
          })
        );
      }
      setIsLoading(false);
    } else {
      dispatch(setAlert({ message: "Please sign in.", type: "error" }));
      console.log("Please Sign In");
    }
  };

  const handleDeleteClick = async (itemId) => {
    setIsLoading(true);
    const deleteItem = await docService.deleteCartItems(itemId);

    if (deleteItem) {
      dispatch(removeItems(itemId));
      dispatch(
        setAlert({
          message: "Item has been removed successfully",
          type: "success",
        })
      );
    }
    setIsLoading(false);
  };

  return {
    handleAddClick,
    handleDeleteClick,
    cartItems,
    isDarkMode,
    userId,
    isLoading,
  };
};
