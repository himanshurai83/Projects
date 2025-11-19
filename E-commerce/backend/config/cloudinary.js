import { v2 as cloudinary } from "cloudinary";

const uploadOnCloudinary = async (filePath) => {
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
  });
  if (!filePath) return null;

  // Upload an image
  const uploadResult = await cloudinary.uploader.upload(filePath);
  // console.log("Upload result", uploadResult);
  // console.log("filepath:", filePath);

  return uploadResult.secure_url;
};
export default uploadOnCloudinary;
