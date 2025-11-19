import express from "express";
import {
  adminUpdateOrderDetail,
  cancelOrder,
  getAdminOrderDetail,
  getOrderDetail,
  initialAddress,
  postPlacingOrder,
} from "../controller/orderController.js";
import { isAuth } from "../middleware/isAuth.js";
import { adminAuth } from "../middleware/adminAuth.js";

const orderRouter = express.Router();

orderRouter.post("/place-order", isAuth, postPlacingOrder);
orderRouter.get("/getOrderDetail", isAuth, getOrderDetail);

orderRouter.get("/admin/getOrderDetail", adminAuth, getAdminOrderDetail);
orderRouter.put(
  "/admin/updateOrderDetail/:productId/:status",
  adminAuth,
  adminUpdateOrderDetail
);

orderRouter.put("/cancelOrder/:orderId", isAuth, cancelOrder);
orderRouter.get("/gettingAddress", isAuth, initialAddress);

export default orderRouter;
