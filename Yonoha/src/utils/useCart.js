import { useDispatch, useSelector } from "react-redux";
import docService from "../appwrite/docs";
import { clearCart } from "../store/slices/cartSlice";
import { setAlert } from "../store/slices/alertSlice";
import { useState } from "react";

const useCart = () => {
  const [isLoading, setIsLoading] = useState(false);
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const selectedItems = useSelector((state) => state.cart.items);
  const userData = useSelector((state) => state.auth.userData);
  const userId = userData?.$id;
  const dispatch = useDispatch();
  const handleClearAll = async () => {
    setIsLoading(true);
    const allItems = await docService.showCartItems(userId);
    for (let i = 0; i < allItems.documents.length; i++) {
      const doc = allItems.documents[i];
      await docService.deleteCartItems(doc.$id);
    }

    dispatch(clearCart());
    dispatch(
      setAlert({
        message: "All item has been removed successfully",
        type: "success",
      })
    );
    setIsLoading(false);
  };

  return {
    isDarkMode,
    selectedItems,
    handleClearAll,
    isLoading,
  };
};

export default useCart;
