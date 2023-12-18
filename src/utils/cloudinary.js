import { v2 as cloudinary } from "cloudinary";
import fs, { unlink } from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return;

    //uplod file to cliudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    //after successfull upload
    console.log("File uploaded on cloudinary");
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    return;
  }
};

export { uploadOnCloudinary };
