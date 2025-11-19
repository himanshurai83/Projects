import React, { useContext } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { adminDataContext } from "./context/AdminContext";
import Login from "./components/Login";
import { Navigate, Route, Routes, useLocation } from "react-router";
import Home from "./components/Home";
import Add from "./components/Add";
import Order from "./components/Order";

function App() {
  const { admin } = useContext(adminDataContext);
  // console.log(admin);
  return (
    <>
      {admin && <Header />}
      {admin && <Sidebar />}

      <Routes>
        <Route
          path="/"
          element={admin ? <Home /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/add"
          element={admin ? <Add /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/order"
          element={admin ? <Order /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/login"
          element={!admin ? <Login /> : <Navigate to={"/"} />}
        />
      </Routes>
    </>
  );
}

export default App;
