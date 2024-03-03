import { useState } from "react";
import { useDispatch } from "react-redux";
import { login as authLogin } from "../store/slices/authSlice";
import authService from "../appwrite/auth";
import { useNavigate } from "react-router-dom";

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
        if (userData) dispatch(authLogin({ userData }));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return { formState, handleChange, handleSubmit };
};
