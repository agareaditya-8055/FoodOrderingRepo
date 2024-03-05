import { useState } from "react";
import { useDispatch } from "react-redux";
import { login as authLogin } from "../store/slices/authSlice";
import authService from "../appwrite/auth";
import { useNavigate } from "react-router-dom";
import docService from "../appwrite/docs";
import { addItems } from "../store/slices/cartSlice";

export const useSigninForm = () => {
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const session = await authService.login(formState);
      if (session) {
        const userData = await authService.getCurrentUser();
        const userId = userData.$id;
        if (userData) {
          dispatch(authLogin({ userData }));
          const response = await docService.showCartItems(userId);
          const data = response.documents;
          if (data) {
            dispatch(addItems(data));
          }
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return { formState, handleChange, handleSubmit };
};
