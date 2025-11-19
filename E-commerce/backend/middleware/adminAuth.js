import jwt from "jsonwebtoken";

export const adminAuth = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      console.log("Token not found");
      return res.json(null);
    }
    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!verifyToken) {
      console.log("Token Invalid");
      return res.json(null);
    }
    req.email = verifyToken.email;
    next();
  } catch (error) {
    console.log(error);
    return res.json(null);
  }
};
