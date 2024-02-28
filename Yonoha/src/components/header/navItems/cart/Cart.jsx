import { useDispatch } from "react-redux";
import { clearCart } from "../../../../store/slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearAll = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        {selectedItems.length > 0 && (
          <button
            className="m-2 p-2 bg-black hover:bg-slate-700 text-white rounded-lg"
            onClick={handleClearAll}
          >
            Clear Cart
          </button>
        )}
        {selectedItems.length === 0 && <h1>No items are added</h1>}
        <ItemList
          items={selectedItems}
          buttonContent={"Remove"}
          actionType={"delete"}
        />
      </div>
    </div>
  );
};

export default Cart;
