import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login as authLogin } from "../store/slices/authSlice";
import authService from "../appwrite/auth";
import { useNavigate } from "react-router-dom";
import docService from "../appwrite/docs";
import { addItems } from "../store/slices/cartSlice";
import { toast } from "react-toastify";
export const useSigninForm = () => {
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    try {
      const session = await authService.login(formState);
      if (session) {
        const userData = await authService.getCurrentUser();
        const userId = userData.$id;
        if (userData) {
          dispatch(authLogin({ userData }));
          toast.success("User has successfully signed in !");
          const response = await docService.showCartItems(userId);
          const data = response?.documents;
          if (data) {
            dispatch(addItems(data));
          }
          navigate("/");
        }
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
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
    isLoading,
  };
};
