import { CDN_URL } from "../../../utils/constants";

const ItemList = ({ items }) => {
  // console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="border-b-2 flex justify-between py-2 my-2 relative"
        >
          <div className="flex flex-col text-start text-wrap w-3/4">
            <span className="font-bold">{item?.card?.info?.name}</span>
            <span className="text-black">
              ₹{" "}
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </span>
            <p className="text-sm text-gray-500 my-3">
              {item?.card?.info?.description}
            </p>
          </div>
          <div className="w-1/4 flex justify-center  ">
            <img
              className={
                item?.card?.info?.imageId ? "w-3/4 rounded-lg" : "hidden"
              }
              src={CDN_URL + item?.card?.info?.imageId}
              alt="dishImage"
            />
            <button className="py-1 px-4 text-orange-400 bg-slate-50 shadow-lg rounded-lg absolute bottom-2">
              ADD+
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
