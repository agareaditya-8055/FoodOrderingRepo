import { useSigninForm } from "../../../utils/useSigninForm";
import { Link } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";

const Signin = () => {
  const {
    formState,
    handleChange,
    handleSubmit,
    isDarkMode,
    cardColor,
    textColor,
    inputColor,
    isLoading,
  } = useSigninForm();

  return (
    <div
      className={`flex flex-col justify-center  items-center h-screen ${
        isDarkMode && "bg-htmlColor"
      }`}
    >
      <form
        onSubmit={handleSubmit}
        className={`w-full max-w-md ${cardColor} shadow-md rounded px-8 pt-6 pb-8 mb-4`}
      >
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
              Sign In
            </button>
          )}

          <span className={`text-gray-600 text-sm ${textColor}`}>
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:text-blue-800">
              Sign Up
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Signin;
