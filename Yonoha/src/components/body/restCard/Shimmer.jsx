import { useSelector } from "react-redux";

const Shimmer = () => {
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const shimmerCards = new Array(12).fill(0); // Create an array with cardCount elements

  return (
    <div className="shimmer-container flex flex-wrap">
      {shimmerCards.map((_, index) => (
        <div
          key={index}
          className={`shimmer-card mx-1 my-4 w-[232px] h-[400px] ${
            isDarkMode ? "bg-bgCard" : "bg-gray-100"
          } rounded-lg`}
        ></div>
      ))}
    </div>
  );
};

export default Shimmer;
