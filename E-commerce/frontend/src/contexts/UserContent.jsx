import { useState, useEffect, createContext } from "react";
import axios from "axios";
import {
  addProductInCart,
  cancelOrder,
  getCurrentUser,
  getInitialAddress,
  getLogout,
  getOneProduct,
  getOrderDetail,
  getProductFromCart,
  getProductFromServer,
  placeOrder,
  postLogin,
  postSignUp,
  removeProductFromCart,
  updateCart,
} from "../service";
import { useNavigate } from "react-router-dom";
axios.defaults.withCredentials = true;
export const userDataContext = createContext();

const UserContent = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState([]);
  const [individualProduct, setIndividualProduct] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [initialAddress, setInitialAddress] = useState({});

  const fetchCurrentUser = async () => {
    try {
      setLoading(true);
      const user = await getCurrentUser();

      // console.log("Current user response:", user);
      setUser(user);
      setError(null);
    } catch (err) {
      console.error("Error fetching current user:", err);
      setError("Failed to fetch user data");
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      setLoading(true);
      const serverResponse = await postLogin(email, password);
      // console.log("serverResponse:", serverResponse);
      await fetchCurrentUser();
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const signup = async (username, email, password) => {
    try {
      console.log("calling signup");
      setLoading(true);
      const serverResponse = await postSignUp(username, email, password);
      console.log("serverResponse:", serverResponse);
      // await fetchCurrentUser();
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      const serverResponse = await getLogout();
      console.log("server:", serverResponse);
      setUser(null);
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  const gettingInitialProduct = async () => {
    setLoading(true);
    const serverResponse = await getProductFromServer();
    if (serverResponse) {
      setLoading(false);
    }
    setProduct(serverResponse);
  };

  const gettingIndividualProduct = async (productId) => {
    setLoading(true);
    const serverResponse = await getOneProduct(productId);
    // console.log("server: ", serverResponse);
    if (serverResponse) setLoading(false);
    setIndividualProduct(serverResponse);
  };

  const searchProduct = (productName) => {
    setSearch(productName);
  };

  const addingProductInCart = async (productId, size) => {
    setLoading(true);
    const serverResponse = await addProductInCart(productId, size);
    console.log("serverResponse:", serverResponse);
    if (serverResponse) setLoading(false);
    gettingCartProduct();
  };

  const gettingCartProduct = async () => {
    setLoading(true);
    const serverResponse = await getProductFromCart();
    // console.log("serverResponse:", serverResponse);
    if (serverResponse) setLoading(false);
    setCart(serverResponse);
  };

  const updatingCart = async (productId, task) => {
    setLoading(true);
    const serverResponse = await updateCart(productId, task);
    // console.log("serverResponse:", serverResponse);
    if (serverResponse) setLoading(false);
    gettingCartProduct();
  };

  const removingProductFromCart = async (productId) => {
    setLoading(true);
    const serverResponse = await removeProductFromCart(productId);
    if (serverResponse) setLoading(false);
    gettingCartProduct();
  };

  const gettingOrderDetail = async () => {
    setLoading(true);
    const serverResponse = await getOrderDetail();
    console.log("server:", serverResponse);
    if (serverResponse) setLoading(false);
    setOrderData(serverResponse);
  };

  const placingOrder = async (userData, productData) => {
    setLoading(true);
    const serverResponse = await placeOrder(userData, productData);
    if (serverResponse) setLoading(false);
    console.log("server:", serverResponse);
    gettingOrderDetail();
  };

  const cancelingOrder = async (orderId) => {
    setLoading(true);
    const serverResponse = await cancelOrder(orderId);
    if (serverResponse) setLoading(false);
    gettingOrderDetail();
  };

  const gettingInitialAddress = async () => {
    const serverResponse = await getInitialAddress();
    console.log("server:", serverResponse);
    setInitialAddress(serverResponse);
  };

  useEffect(() => {
    fetchCurrentUser();
    gettingInitialProduct();
    gettingCartProduct();
    gettingOrderDetail();
    gettingInitialAddress();
  }, []);

  return (
    <userDataContext.Provider
      value={{
        login,
        user,
        logout,
        signup,
        product,
        gettingIndividualProduct,
        individualProduct,
        searchProduct,
        search,
        addingProductInCart,
        cart,
        removingProductFromCart,
        updatingCart,
        placingOrder,
        orderData,
        loading,
        cancelingOrder,
        initialAddress,
      }}
    >
      {children}
    </userDataContext.Provider>
  );
};

export default UserContent;
