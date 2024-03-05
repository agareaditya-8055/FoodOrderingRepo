import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../../../store/slices/cartSlice";
import ItemList from "../../../body/resMenu/ItemList.jsx";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearAll = () => {
    dispatch(clearCart());
  };
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const selectedItems = useSelector((state) => state.cart.items);

  return (
    <div className={`text-center m-4 p-4 ${isDarkMode && "text-white"}`}>
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        {selectedItems.length > 0 && (
          <>
            <button
              className="m-2 p-2 bg-bgColor hover:bg-slate-700 text-white rounded-lg"
              onClick={handleClearAll}
            >
              Clear Cart
            </button>
            <ItemList
              items={selectedItems}
              buttonContent={"Remove"}
              actionType={"delete"}
            />
          </>
        )}
        {selectedItems.length === 0 && <h1>No items are added</h1>}
      </div>
    </div>
  );
};

export default Cart;
