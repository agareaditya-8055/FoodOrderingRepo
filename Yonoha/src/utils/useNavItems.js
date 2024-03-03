import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout as authLogout } from "../store/slices/authSlice";
import { toggleDarkMode, toggleLightMode } from "../store/slices/themeSlice";
import authService from "../appwrite/auth";
import useOnlineStatus from "./useOnlineStatus";

export const useNavItems = (navigate) => {
  const onlineStatus = useOnlineStatus();
  const cart = useSelector((state) => state.cart.items);
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();
  const name = useSelector((state) => state?.auth?.userData?.name);

  const handleSignin = useCallback(() => navigate("/signin"), [navigate]);

  const handleSignout = useCallback(async () => {
    try {
      const logoutResponse = await authService.logout();
      if (logoutResponse) {
        dispatch(authLogout());
        navigate("/signin");
      }
    } catch (error) {
      console.error("Error signing out:", error);
    }
  }, [dispatch, navigate]);

  const handleDarkModeToggle = useCallback(() => {
    dispatch(isDarkMode ? toggleLightMode() : toggleDarkMode());
  }, [dispatch, isDarkMode]);

  return {
    onlineStatus,
    cart,
    isDarkMode,
    name,
    handleSignin,
    handleSignout,
    handleDarkModeToggle,
  };
};
