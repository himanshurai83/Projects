import jwt from "jsonwebtoken";
export const isAuth = async (req, res, next) => {
  // console.log("Calling auth");
  try {
    let token = req.cookies.token;
    // console.log("cookie from auth:", token);
    if (!token) {
      console.log("token not found!");
      return res.json(null);
    }
    // console.log("process:", process.env.JWT_SECRET);
    let verifyToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!verifyToken) {
      console.log("invalid token!");
      return res.status(401).json(null);
    }
    req.userId = verifyToken.userId;
    // console.log("UserID:", req.userId);
    next();
  } catch (error) {
    console.log("Token error", error);
    return res.status(500).json(null);
  }
};
