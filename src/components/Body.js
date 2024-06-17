import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Feed from "./Feed";
import Profile from "./Profile";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/", // This will render Feed inside Home
        element: <Feed />,
      },
      {
        path: "/profile", // This will render Profile inside Home
        element: <Profile />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);

const Body = () => {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
