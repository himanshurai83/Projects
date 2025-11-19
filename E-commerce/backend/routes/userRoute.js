import express from "express";
const userRouter = express.Router();

import {
  getCurrentAdmin,
  getCurrentUser,
} from "../controller/userController.js";
import { isAuth } from "../middleware/isAuth.js";
import { adminAuth } from "../middleware/adminAuth.js";

userRouter.get("/getCurrentUser", isAuth, getCurrentUser);
userRouter.get("/getCurrentAdmin", adminAuth, getCurrentAdmin);

export default userRouter;
