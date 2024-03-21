import ItemList from "../../../body/resMenu/ItemList.jsx";
import useCart from "../../../../utils/useCart.js";
import Loader from "../../../Loader.jsx";

const Cart = () => {
  const { isDarkMode, selectedItems, handleClearAll, isLoading } = useCart();

  return (
    <div className={`text-center m-4 mt-40 p-4 ${isDarkMode && "text-white"}`}>
      {isLoading && <Loader />}

      <h1 className="text-2xl font-bold">Cart</h1>

      <div className="w-6/12 m-auto">
        {!isLoading && selectedItems.length > 0 && (
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
