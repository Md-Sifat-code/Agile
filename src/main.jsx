import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main_layout from "./Layout/Main_layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main_layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Wrap your app with the ThemeSwitcherProvider */}

    <RouterProvider router={router} />
  </React.StrictMode>
);
