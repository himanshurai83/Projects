import uploadOnCloudinary from "../config/cloudinary.js";
import Product from "../model/productModel.js";

export const addProduct = async (req, res) => {
  try {
    // console.log("req:", req.body);
    const {
      name,
      description,
      price,
      category,
      subcategory,
      sizes,
      bestseller,
    } = req.body;
    const image1 = await uploadOnCloudinary(req.files.image1[0].path);
    const image2 = await uploadOnCloudinary(req.files.image2[0].path);
    const image3 = await uploadOnCloudinary(req.files.image3[0].path);
    const image4 = await uploadOnCloudinary(req.files.image4[0].path);

    const productData = {
      name,
      description,
      price: Number(price),
      category,
      subcategory,
      sizes: JSON.parse(sizes),
      bestseller: bestseller === "true" ? true : false,
      date: Date.now(),
      image1,
      image2,
      image3,
      image4,
    };
    // console.log("Product Data:", productData);
    const product = await Product.create(productData);

    return res.status(200).json({ mess: "Product added into db!", product });
  } catch (error) {
    console.log("AddProduct Error:", error);
    res.json({ mess: "Product not added into db!" });
  }
};

export const getProduct = async (req, res) => {
  const product = await Product.find();
  if (!product) {
    return res.status(404).json({ mess: "Product not found!" });
  }
  return res.status(200).json(product);
};

export const deleteProduct = async (req, res) => {
  const productId = req.params.productId;
  const product = await Product.findByIdAndDelete(productId);
  if (!product) {
    return res.status(404).json({ mess: "Product not found!" });
  }
  return res.status(200).json({ mess: `${productId} was deleted!` });
};

export const getOneProduct = async (req, res) => {
  const productId = req.params.productId;
  const product = await Product.findById(productId);
  if (!product) {
    return res.status(404).json({ mess: "Product not found!" });
  }
  return res.status(200).json(product);
};
