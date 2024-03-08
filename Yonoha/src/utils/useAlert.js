import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearAlert } from "../store/slices/alertSlice";

export const useAlert = (type) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(clearAlert());
    }, 3000); // Clear the alert after 3 seconds

    return () => clearTimeout(timer); // Clear the timer if the component is unmounted
  }, []);

  return type;
};
