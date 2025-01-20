import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    const responce = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log("file uplode successfully", responce.url);
    fs.unlinkSync(localFilePath);
  } catch (error) {
    fs.unlinkSync(localFilePath);
    console.log("cloudinary error", error);
    return null;
  }
};

export { uploadOnCloudinary };
