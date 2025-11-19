import Order from "../model/orderModel.js";
import User from "../model/userModel.js";

export const postPlacingOrder = async (req, res) => {
  const userId = req.userId;
  const { userData, productData } = req.body;
  const user = await User.findById(userId);
  user.address = userData;
  await user.save();
  console.log("user:", user);
  const orderData = {
    userId,
    address: userData,
    product: productData,
    payment: userData.payment === "cod" ? false : true,
    status: "Order-placed",
    date: Date.now(),
  };
  const order = new Order(orderData);
  const result = await order.save();
  // console.log("result:", result);
  res.json({ mess: "Data receive!" });
};

export const getOrderDetail = async (req, res) => {
  const userId = req.userId;
  const order = await Order.find();
  // console.log("orderData:", order);
  const userProduct = order.filter((item) => item.userId === userId);
  // console.log("userProduct:", userProduct);
  res.json(userProduct);
};

export const getAdminOrderDetail = async (req, res) => {
  const email = req.email;
  if (!email) {
    console.log("Admin not found!");
    return res.json(null);
  }
  const order = await Order.find();
  return res.json(order);
};

export const adminUpdateOrderDetail = async (req, res) => {
  const email = req.email;
  if (!email) {
    console.log("Admin not found!");
    return res.json(null);
  }
  const { productId, status } = req.params;
  console.log(productId, status);
  const order = await Order.findByIdAndUpdate(productId, { status });
  await order.save();
  console.log("order:", order);
  return res.json({ mess: "status updated!" });
};

export const cancelOrder = async (req, res) => {
  const userId = req.userId;
  const { orderId } = req.params;
  const order = await Order.findByIdAndUpdate(orderId, { status: "Canceled" });
  await order.save();
  return res.json({ mess: "status updated!" });
};

export const initialAddress = async (req, res) => {
  const userId = req.userId;
  const user = await User.findById(userId);
  if (!user) {
    console.log("user not found!");
    res.json(null);
  }
  res.json(user.address);
};
