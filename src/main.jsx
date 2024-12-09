import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main_layout from "./Layout/Main_layout";
import Home from "./Pages/Home";
import { ThemeSwitcherProvider } from "react-css-theme-switcher"; // Import the ThemeSwitcherProvider

const themeFiles = {
  light: "/path/to/light-theme.css", // Adjust with the correct path to your light theme CSS file
  dark: "/path/to/dark-theme.css", // Adjust with the correct path to your dark theme CSS file
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main_layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Wrap your app with the ThemeSwitcherProvider */}
    <ThemeSwitcherProvider themeMap={themeFiles} defaultTheme="light">
      <RouterProvider router={router} />
    </ThemeSwitcherProvider>
  </React.StrictMode>
);
