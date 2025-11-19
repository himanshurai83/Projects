import express from "express";
import {
  addProduct,
  deleteProduct,
  getOneProduct,
  getProduct,
} from "../controller/productController.js";
import upload from "../middleware/multer.js";

const productRoute = express.Router();

productRoute.post(
  "/admin/addProduct",
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct
);

productRoute.get("/admin/getProduct", getProduct);
productRoute.delete("/admin/deleteProduct/:productId", deleteProduct);
productRoute.get("/admin/getOneProduct/:productId", getOneProduct);

export default productRoute;
