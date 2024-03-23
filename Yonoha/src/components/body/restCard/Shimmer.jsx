import { useSelector } from "react-redux";

const Shimmer = () => {
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  // You can adjust the number of shimmer items based on your design
  const shimmerItems = Array.from({ length: 20 }, (_, index) => index + 1);

  return (
    <div className="Food-menu max-w-screen-lg mx-auto mt-40">
      <div className="Food-card flex flex-wrap w-full my-5">
        {shimmerItems.map((item) => (
          <div
            key={item}
            className={`shimmer-item  ${
              isDarkMode ? "bg-bgCard" : "bg-gray-100"
            } rounded-lg `}
          >
            <div className="shimmer-img"></div>
            <div className="shimmer-details p-3">
              <div className="shimmer-title h-4 w-4/5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 mb-1"></div>
              <div className="shimmer-rating h-5 w-10 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 mb-1"></div>
              <div className="shimmer-category h-4 w-1/2 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 mb-1"></div>
              <div className="shimmer-cost h-4 w-3/10 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 mb-1"></div>
              <div className="shimmer-time h-4 w-2/5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
