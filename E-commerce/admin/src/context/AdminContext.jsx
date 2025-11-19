import { useState } from "react";
import { createContext } from "react";
import {
  addProduct,
  adminLogout,
  deleteProduct,
  getOrderDetail,
  getProduct,
  postLogin,
  updateOrderDetail,
} from "../service";
import { getCurrentAdmin } from "../service";
import { useEffect } from "react";

export const adminDataContext = createContext();

const AdminContext = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [product, setProduct] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [orderData, setOrderData] = useState({});

  const gettingCurrentAdmin = async () => {
    try {
      const serverResponse = await getCurrentAdmin();
      // console.log("server:", serverResponse);
      setAdmin(serverResponse);
    } catch (error) {
      console.log("Admin not found!");
      setAdmin(null);
    }
  };

  const login = async (email, password) => {
    const serverResponse = await postLogin(email, password);
    // console.log("serverResponse:", serverResponse);
    await gettingCurrentAdmin();
  };

  const logout = async () => {
    const serverResponse = await adminLogout();
    // console.log("server:", serverResponse);
    setAdmin(null);
  };

  const gettingProduct = async () => {
    const serverResponse = await getProduct();
    // console.log("Getting product:", serverResponse);
    setProduct(serverResponse);
  };

  const addingProduct = async (formData) => {
    setFetching(true);
    // console.log("Form Data for adding:", formData);
    const serverResponse = await addProduct(formData);
    // console.log("Response:", serverResponse);
    if (serverResponse) {
      gettingProduct();
      setFetching(false);
    }
  };

  const deletingProduct = async (productId) => {
    const serverResponse = await deleteProduct(productId);
    // console.log("serverResponse:", serverResponse);
    gettingProduct();
  };

  const gettingOrderDetail = async () => {
    const serverResponse = await getOrderDetail();
    // console.log("server:", serverResponse);
    setOrderData(serverResponse);
  };

  const updatingOrderDetail = async (productId, status) => {
    const serverResponse = await updateOrderDetail(productId, status);
    console.log("server:", serverResponse);
    gettingOrderDetail();
  };
  useEffect(() => {
    gettingCurrentAdmin();
    gettingProduct();
    gettingOrderDetail();
  }, []);

  return (
    <adminDataContext.Provider
      value={{
        login,
        admin,
        logout,
        addingProduct,
        product,
        deletingProduct,
        fetching,
        orderData,
        updatingOrderDetail,
      }}
    >
      {children}
    </adminDataContext.Provider>
  );
};

export default AdminContext;
