import express from "express";
const authRouter = express.Router();
import {
  adminLogin,
  logout,
  postLogin,
  postRegistration,
} from "../controller/authController.js";

authRouter.post("/auth/registration", postRegistration);
authRouter.post("/auth/login", postLogin);
authRouter.get("/auth/logout", logout);
authRouter.post("/auth/admin/login", adminLogin);

export default authRouter;
