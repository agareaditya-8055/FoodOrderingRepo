import { useSelector } from "react-redux";

const Shimmer = () => {
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  // You can adjust the number of shimmer items based on your design
  const shimmerItems = Array.from({ length: 20 }, (_, index) => index + 1);

  return (
    <div className="Food-menu flex items-center  justify-center overflow-hidden mt-40 ">
      <div className="w-[calc(100%-2rem)] md:w-[calc(100%-4rem)]  xl:w-[calc(100%-14rem)] 2xl:w-[calc(100%-25rem)]">
        <div className="Food-card grid grid-cols-1 gap-9 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 justify-items-center   w-full my-5">
          {shimmerItems.map((item) => (
            <div
              key={item}
              className={`shimmer-item xs:w-[300px] xs:h[315px] mb-[20px] hover:rounded-xl sm:w-[280px] sm:h-[295px] md:w-[250px] md:h-[265px] lg:w-[320px] lg:h-[335px]  xl:w-[350px] xl:h-[365px] ${
                isDarkMode ? "bg-bgCard" : "bg-gray-100"
              } rounded-lg `}
            >
              <div
                className={
                  isDarkMode ? "shimmer-img-dark" : "shimmer-img-light"
                }
              ></div>
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
    </div>
  );
};

export default Shimmer;
