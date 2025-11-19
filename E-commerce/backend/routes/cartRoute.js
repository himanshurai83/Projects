import express from "express";
import { isAuth } from "../middleware/isAuth.js";
import {
  addProductInCart,
  getProductFromCart,
  removeProductFromCart,
  updateCart,
} from "../controller/cartController.js";

const cartRouter = express.Router();

cartRouter.post("/addProductInCart", isAuth, addProductInCart);
cartRouter.get("/getProductFromCart", isAuth, getProductFromCart);
cartRouter.delete(
  "/removeProductFromCart/:productId",
  isAuth,
  removeProductFromCart
);

cartRouter.put("/updateCart/:productId/:task", isAuth, updateCart);

export default cartRouter;
