import { useContext } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { userDataContext } from "./contexts/UserContent";
import Login from "./components/Login";
import Home from "./components/Home";
import Collection from "./components/Collection";
import Registration from "./components/Registration";
import Product from "./components/Product";
import Cart from "./components/Cart";
import PlaceOrder from "./components/PlaceOrder";
import OrderDetail from "./components/OrderDetail";
import Loading from "./components/Loading";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const { user, loading } = useContext(userDataContext);
  const location = useLocation();
  return (
    <>
      {user && <Header />}
      {loading && <Loading />}
      {!loading && (
        <Routes>
          <Route
            path="/login"
            element={
              user ? <Navigate to={location.state?.from || "/"} /> : <Login />
            }
          />
          <Route
            path="/signup"
            element={
              user ? (
                <Navigate to={location.state?.from || "/"} />
              ) : (
                <Registration />
              )
            }
          />
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/collections"
            element={user ? <Collection /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/product/:productId"
            element={user ? <Product /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/cart"
            element={user ? <Cart /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/place-order/:productId"
            element={user ? <PlaceOrder /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/order-detail"
            element={user ? <OrderDetail /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/about"
            element={user ? <About /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/contact"
            element={user ? <Contact /> : <Navigate to={"/login"} />}
          />
        </Routes>
      )}
      {user && <Footer />}
    </>
  );
}

export default App;
