import { useSelector } from "react-redux";

const Shimmer = () => {
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  return (
    <div className="shimmer-container flex flex-wrap">
      <div
        className={`shimmer-card mx-1 my-4 w-[232px] h-[400px] ${
          isDarkMode ? "bg-bgCard" : "bg-gray-100"
        } rounded-lg`}
      ></div>
      <div
        className={`shimmer-card mx-1 my-4 w-[232px] h-[400px] ${
          isDarkMode ? "bg-bgCard" : "bg-gray-100"
        } rounded-lg`}
      ></div>
      <div
        className={`shimmer-card mx-1 my-4 w-[232px] h-[400px] ${
          isDarkMode ? "bg-bgCard" : "bg-gray-100"
        } rounded-lg`}
      ></div>
      <div
        className={`shimmer-card mx-1 my-4 w-[232px] h-[400px] ${
          isDarkMode ? "bg-bgCard" : "bg-gray-100"
        } rounded-lg`}
      ></div>
      <div
        className={`shimmer-card mx-1 my-4 w-[232px] h-[400px] ${
          isDarkMode ? "bg-bgCard" : "bg-gray-100"
        } rounded-lg`}
      ></div>
      <div
        className={`shimmer-card mx-1 my-4 w-[232px] h-[400px] ${
          isDarkMode ? "bg-bgCard" : "bg-gray-100"
        } rounded-lg`}
      ></div>
      <div
        className={`shimmer-card mx-1 my-4 w-[232px] h-[400px] ${
          isDarkMode ? "bg-bgCard" : "bg-gray-100"
        } rounded-lg`}
      ></div>
      <div
        className={`shimmer-card mx-1 my-4 w-[232px] h-[400px] ${
          isDarkMode ? "bg-bgCard" : "bg-gray-100"
        } rounded-lg`}
      ></div>
      <div
        className={`shimmer-card mx-1 my-4 w-[232px] h-[400px] ${
          isDarkMode ? "bg-bgCard" : "bg-gray-100"
        } rounded-lg`}
      ></div>
      <div
        className={`shimmer-card mx-1 my-4 w-[232px] h-[400px] ${
          isDarkMode ? "bg-bgCard" : "bg-gray-100"
        } rounded-lg`}
      ></div>
      <div
        className={`shimmer-card mx-1 my-4 w-[232px] h-[400px] ${
          isDarkMode ? "bg-bgCard" : "bg-gray-100"
        } rounded-lg`}
      ></div>
      <div
        className={`shimmer-card mx-1 my-4 w-[232px] h-[400px] ${
          isDarkMode ? "bg-bgCard" : "bg-gray-100"
        } rounded-lg`}
      ></div>
    </div>
  );
};

export default Shimmer;
