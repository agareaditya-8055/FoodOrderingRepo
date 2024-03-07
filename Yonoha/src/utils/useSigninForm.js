import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login as authLogin } from "../store/slices/authSlice";
import authService from "../appwrite/auth";
import { useNavigate } from "react-router-dom";
import docService from "../appwrite/docs";
import { addItems } from "../store/slices/cartSlice";
import { setAlert } from "../store/slices/alertSlice";
export const useSigninForm = () => {
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const cardColor = isDarkMode ? "bg-bgCard" : "bg-white";
  const textColor = isDarkMode ? "text-white" : "text-gray-700";
  const inputColor = isDarkMode
    ? "bg-gray-700 text-white"
    : "bg-white text-gray-700";
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const session = await authService.login(formState);
      if (session) {
        dispatch(
          setAlert({
            message: "User has successfully signed in.",
            type: "success",
          })
        );
        const userData = await authService.getCurrentUser();
        const userId = userData.$id;
        if (userData) {
          dispatch(authLogin({ userData }));
          const response = await docService.showCartItems(userId);
          const data = response?.documents;
          if (data) {
            dispatch(addItems(data));
          }
          navigate("/");
        }
      }
    } catch (error) {
      dispatch(setAlert({ message: error.message, type: "error" }));
      console.log(error.message);
    }
  };

  return {
    formState,
    handleChange,
    handleSubmit,
    cardColor,
    textColor,
    inputColor,
    isDarkMode,
  };
};
