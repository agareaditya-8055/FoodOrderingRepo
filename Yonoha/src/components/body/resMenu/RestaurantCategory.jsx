import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const { itemCards } = data;

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      {/* header */}
      <div className="w-1/2 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="text-xl">⬇️</span>
        </div>
        {showItems && (
          <ItemList
            items={itemCards}
            buttonContent={"ADD+"}
            actionType={"add"}
          />
        )}
      </div>
    </div>
  );
};
export default RestaurantCategory;
