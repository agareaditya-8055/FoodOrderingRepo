// SignInForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login as authLogin } from "../../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import authService from "../../../appwrite/auth";

const Signin = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const session = await authService.login({ email, password });
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin({ userData }));
        navigate("/");
        console.log(userData);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-full">
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your password"
            required
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
