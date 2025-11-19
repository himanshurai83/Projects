import express from "express";
import mongoose from "mongoose";
import authRouter from "./routes/authRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

const app = express();
const DB_PATH = "mongodb://localhost:27017/FOREVER";
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(authRouter);
app.use(userRouter);
app.use(productRoute);
app.use(cartRouter);
app.use(orderRouter);

const PORT = 3000;
mongoose.connect(DB_PATH).then(() => {
  app.listen(PORT, () => {
    console.log("Connection stable with Database!");
    console.log(`Listening request on http://localhost:${PORT}`);
  });
});
