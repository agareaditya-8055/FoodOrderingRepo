import { Link } from "react-router-dom";
import { useSignupForm } from "../../../utils/useSignupForm";
import { useSelector } from "react-redux";
import { InfinitySpin } from "react-loader-spinner";

const Signup = () => {
  const { formState, handleChange, handleSubmit } = useSignupForm();
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const cardColor = isDarkMode ? "bg-bgCard" : "bg-white";
  const textColor = isDarkMode ? "text-white" : "text-gray-700";
  const inputColor = isDarkMode
    ? "bg-gray-700 text-white"
    : "bg-white text-gray-700";

  return (
    <div
      className={`flex flex-col justify-center items-center h-screen ${
        isDarkMode && "bg-htmlColor"
      }`}
    >
      <form
        onSubmit={handleSubmit}
        className={`w-full max-w-md ${cardColor} shadow-md rounded px-8 pt-6 pb-8 mb-4`}
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className={`block ${textColor} text-sm font-bold mb-2`}
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${inputColor}`}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className={`block ${textColor} text-sm font-bold mb-2`}
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${inputColor}`}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className={`block ${textColor} text-sm font-bold mb-2`}
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formState.password}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${inputColor}`}
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          {isLoading ? (
            <InfinitySpin />
          ) : (
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
          )}

          <span className={`text-gray-600 text-sm ${textColor}`}>
            Already have an account?{" "}
            <Link to="/signin" className="text-blue-500 hover:text-blue-800">
              Sign In
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Signup;
