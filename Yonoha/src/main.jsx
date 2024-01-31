import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/header/about/About";
import Contact from "./components/header/contact/Contact";
import Error from "./components/errorPage/Error";
import Body from "./components/body/Body";
import RestaurantMenu from "./components/body/resMenu/RestaurantMenu";

const show = ReactDOM.createRoot(document.getElementById("root"));

const Grocery = lazy(() => import("./components/header/Grocery"));

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
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
    ],
    errorElement: <Error />,
  },
]);

show.render(<RouterProvider router={appRoute} />);
