import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages";
import "./styles/index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
