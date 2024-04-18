import { useDispatch, useSelector } from "react-redux";
import docService from "../appwrite/docs";
import { clearCart } from "../store/slices/cartSlice";
import { useState } from "react";
import { toast } from "react-toastify";

const useCart = () => {
  const [isLoading, setIsLoading] = useState(false);
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const selectedItems = useSelector((state) => state.cart.items);
  const userData = useSelector((state) => state.auth.userData);
  const userId = userData?.$id;
  const dispatch = useDispatch();

  // Clear all items from cart

  const handleClearAll = async () => {
    setIsLoading(true);
    try {
      const allItems = await docService.showCartItems(userId);
      for (let i = 0; i < allItems.documents.length; i++) {
        const doc = allItems.documents[i];
        await docService.deleteCartItems(doc.$id);
      }

      dispatch(clearCart());
      toast.error("All items have been removed successfully !");
    } catch (error) {
      toast.error(`An error occurred: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isDarkMode,
    selectedItems,
    handleClearAll,
    isLoading,
  };
};

export default useCart;
