import { check, validationResult } from "express-validator";
import User from "../model/userModel.js";
import bcrypt from "bcryptjs";
import { genToken, genTokenAdmin } from "../config/token.js";

export const postRegistration = [
  check("username")
    .notEmpty()
    .withMessage("Use-Name is require!")
    .trim()
    .isLength({ min: 3 })
    .withMessage("User-Name at least 3 letter!"),
  check("email").isEmail().withMessage("Enter a valid Email").normalizeEmail(),
  check("password")
    .trim()
    .isLength({ min: 5 })
    .withMessage("Password at least 5 letter!"),
  async (req, res) => {
    const { username, email, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json(errors);
    }
    const existsUser = await User.findOne({ email });
    if (existsUser) {
      return res.json({ message: "User already exists!" });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    let token = await genToken(user._id);
    console.log("Token from authController signup:", token);
    res.cookies("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "Lax",
      maxAge: 7 * 24 * 60 * 1000,
    });
    const userToReturn = { ...user.toObject() };
    delete userToReturn.password;
    return res.status(201).json(userToReturn);
  },
];

export const postLogin = async (req, res) => {
  console.log("Calling login");
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    console.log("user does not exists!");
    return res.status(404).json(null);
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid password" });
  }
  let token = await genToken(user._id);
  // console.log("Token from authController login:", token);
  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "Lax",
    maxAge: 7 * 24 * 60 * 1000,
    domain: "localhost",
    path: "/",
  });
  // console.log("setting cookie and getting this cookie", req.cookie);
  console.log("Login successful, token set in cookie");
  return res.json({ message: `${user.username} is logged-in!` });
};

export const logout = (req, res) => {
  try {
    console.log("calling logout");
    res.clearCookie("token");
    return res.status(200).json({ message: "Logout success!" });
  } catch (error) {
    return res.status(500).json({ message: "Logout error!" });
  }
};

export const adminLogin = async (req, res) => {
  const { email, password } = req.body;
  const admin = email === process.env.ADMIN_EMAIL;
  // console.log("admin:", admin);
  if (!admin) {
    console.log("Admin not found!");
    return res.status(400).json(null);
  }
  const isMatch = password === process.env.ADMIN_PASSWORD;
  // console.log("password:", isMatch);
  if (!isMatch) {
    console.log("Invalid Password!");
    return res.status(400).json(null);
  }
  let token = await genTokenAdmin(email);
  // console.log("Token from authController admin login:", token);
  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "Lax",
    maxAge: 7 * 24 * 60 * 1000,
    domain: "localhost",
    path: "/",
  });
  return res.status(200).json({ mess: "Admin logged-in" });
};
