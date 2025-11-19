import Product from "../model/productModel.js";
import User from "../model/userModel.js";
export const getCurrentUser = async (req, res) => {
  // console.log("Getting current userId:", req.userId);
  let user = await User.findById(req.userId);
  // console.log("user", user);
  if (!user) {
    console.log("User does not exists!");
    return res.json(null);
  }
  return res.status(200).json(user);
};

export const getCurrentAdmin = async (req, res) => {
  const email = req.email;
  if (!email) {
    console.log("Email not found!");
    return res.status(404).json(null);
  }
  return res.status(200).json(email);
};
