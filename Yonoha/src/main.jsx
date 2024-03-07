import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/header/about/About";
import Contact from "./components/header/contact/Contact";
import Error from "./components/errorPage/Error";
// import Body from "./components/body/Body";
import RestaurantMenu from "./components/body/resMenu/RestaurantMenu";
// import Cart from "./components/header/navItems/cart/Cart";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import Signin from "./components/body/signin/Signin";
import Signup from "./components/body/signup/Signup";
import Shimmer from "./components/body/restCard/Shimmer.jsx";

const show = ReactDOM.createRoot(document.getElementById("root"));

const Body = lazy(() => import("./components/body/Body"));

const Grocery = lazy(() => import("./components/header/Grocery"));

const Cart = lazy(() => import("./components/header/navItems/cart/Cart"));

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Body />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
    errorElement: <Error />,
  },
]);

show.render(
  <Provider store={appStore}>
    <RouterProvider router={appRoute} />
  </Provider>
);
