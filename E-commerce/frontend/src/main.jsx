import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Home from "./components/Home";
import UserContent from "./contexts/UserContent.jsx";
import Collection from "./components/Collection.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <UserContent>
    <BrowserRouter>
      <App />
      {/* <ToastContainer autoClose={8000} /> */}
    </BrowserRouter>
  </UserContent>
);
