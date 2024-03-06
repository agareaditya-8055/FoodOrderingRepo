import { useDispatch, useSelector } from "react-redux";
import docService from "../appwrite/docs";
import { clearCart } from "../store/slices/cartSlice";

const useCart = () => {
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const selectedItems = useSelector((state) => state.cart.items);
  const userData = useSelector((state) => state.auth.userData);
  const userId = userData?.$id;
  const dispatch = useDispatch();
  const handleClearAll = async () => {
    const allItems = await docService.showCartItems(userId);
    for (let i = 0; i < allItems.documents.length; i++) {
      const doc = allItems.documents[i];
      await docService.deleteCartItems(doc.$id);
    }

    dispatch(clearCart());
  };

  return {
    isDarkMode,
    selectedItems,
    handleClearAll,
  };
};

export default useCart;
