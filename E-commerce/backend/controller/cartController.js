import Product from "../model/productModel.js";
import User from "../model/userModel.js";

export const addProductInCart = async (req, res) => {
  const userId = req.userId;
  const { productId, size } = req.body;
  // console.log("userId:", userId);
  const user = await User.findById(userId);
  if (!user) {
    console.log("User not found");
    res.status(404).json(null);
  }
  const existingProduct = user.userCart.find(
    (item) => item.productId.toString() === productId
  );
  if (existingProduct) {
    return res.json({ mess: "Product already in cart!" });
  } else {
    user.userCart.push({ productId, size });
  }
  await user.save();
  return res.status(200).json({ mess: "Product added in to cart!" });
};

export const getProductFromCart = async (req, res) => {
  const userId = req.userId;
  const user = await User.findById(userId);
  if (!user) {
    console.log("User not found");
    res.status(404).json(null);
  }
  const productPromise = user.userCart.map(async (pId) => {
    try {
      const product = await Product.findById(pId.productId);
      const withQuantity = {
        ...product,
        quantity: pId.quantity,
        size: pId.size,
      };
      return withQuantity;
    } catch (error) {
      console.log("error:", error);
      return null;
    }
  });
  //   console.log("promise:", productPromise);
  const product = await Promise.all(productPromise);
  //   console.log("product:", product);
  const validProduct = product.filter((p) => p !== null);
  // console.log("valid:", validProduct);
  return res.json(validProduct);
};

export const updateCart = async (req, res) => {
  const { productId, task } = req.params;
  //   console.log(productId, task);
  const userId = req.userId;
  const user = await User.findById(userId);
  if (!user) {
    console.log("User not found");
    return res.json(null);
  }
  //   console.log("product", product);

  if (task === "increment") {
    user.userCart.map((item) => {
      // console.log(item);
      if (item.productId.toString() === productId) {
        item.quantity += 1;
      } else {
        // console.log("item not found");
        // console.log(item.productId.toString());
        // console.log(productId);
      }
    });
  } else if (task === "decrement") {
    user.userCart.map((item) => {
      // console.log(item);
      if (item.productId.toString() === productId) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          return;
        }
      }
    });
  }
  await user.save();
  return res.json({ mess: "Cart updated!" });
};

export const removeProductFromCart = async (req, res) => {
  const userId = req.userId;
  const productId = req.params.productId;
  const user = await User.findById(userId);
  if (!user) {
    console.log("User not found");
    res.status(404).json(null);
  }
  user.userCart = user.userCart.filter(
    (item) => item.productId.toString() !== productId
  );
  await user.save();
  res.json({ mess: "Product removed " });
};
