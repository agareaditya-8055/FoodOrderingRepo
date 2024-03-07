import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import authService from "../appwrite/auth";
import { login as authLogin } from "../store/slices/authSlice";
import { setAlert } from "../store/slices/alertSlice";

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
          dispatch(
            setAlert({
              message: "Account has been created successfully.",
              type: "success",
            })
          );
          const userData = await authService.getCurrentUser();
          if (userData) dispatch(authLogin({ userData }));
          navigate("/");
        }
      } catch (error) {
        dispatch(setAlert({ message: error.message, type: "error" }));
        console.log(error.message);
      }
    },
    [dispatch, formState, navigate]
  );

  return { formState, handleChange, handleSubmit };
};
