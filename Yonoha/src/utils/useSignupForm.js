import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import authService from "../appwrite/auth";
import { login as authLogin } from "../store/slices/authSlice";
import { toast } from "react-toastify";

export const useSignupForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = useCallback((e) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const userData = await authService.createAccount(formState);
        if (userData) {
          const userData = await authService.getCurrentUser();
          if (userData) {
            dispatch(authLogin({ userData }));
            toast.success("Account has been created successfully !");
            navigate("/");
          }
        }
      } catch (error) {
        toast.error(error.message);
      }
    },
    [dispatch, formState, navigate]
  );

  return { formState, handleChange, handleSubmit };
};
