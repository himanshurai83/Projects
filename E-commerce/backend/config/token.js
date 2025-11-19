import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const genToken = async (userId) => {
  try {
    // console.log("process from token:", process.env.JWT_SECRET);
    let token = jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    // console.log("generating Token for:", userId);
    return token;
  } catch (error) {
    console.log("Generating token error", error);
  }
};
export const genTokenAdmin = async (email) => {
  try {
    // console.log("process from token:", process.env.JWT_SECRET);
    let token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    // console.log("generating Token for:", userId);
    return token;
  } catch (error) {
    console.log("Generating token error", error);
  }
};
