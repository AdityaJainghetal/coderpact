const asyncHandler = require("express-async-handler");
const imagekit = require("../utils/imageKit");
const fs = require("fs");
const path = require("path");
const {cloudinaryUploadImg} = require('../utils/cloudinary')



const uploadImages = asyncHandler(async (req, res) => {
  const files = req.files;
  console.log(files)
  if (!files || files.length === 0) {
    return res.status(400).json({ message: "No images provided" });
  }

  try {
    const uploadedImages = await Promise.all(
      files.map(async (file) => {
        const filePath = path.join(__dirname, "../public/images/products/", file.filename);
        console.log("Uploading from path:", filePath);

        if (!fs.existsSync(filePath)) {
          throw new Error(`File not found: ${filePath}`);
        }
        console.log(filePath)
        let result;
        try {
          result = await cloudinaryUploadImg(filePath);
          console.log(result)
          console.log("Uploaded to Cloudinary:", result.secure_url);
        } catch (uploadErr) {
          console.error("Cloudinary upload error:", uploadErr.message);
          throw new Error(`Upload failed for: ${file.originalname}`);
        }

        try {
          await fs.promises.unlink(filePath);
        } catch (unlinkErr) {
          console.warn(`Warning: Could not delete local file ${filePath}`, unlinkErr.message);
        }
        console.log(result.url)
        return result.url;
      })
    );

    res.status(200).json({ uploadedImages });
  } catch (err) {
    console.error("UploadImages Error:", err.message);
    res.status(500).json({ message: "Image upload failed", error: err.message });
  }
});
// Delete Image by fileId from ImageKit
const deleteImages = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    await imagekit.deleteFile(id);
    res.status(200).json({ message: "Image deleted successfully" });
  } catch (err) {
    console.error("Delete error:", err.message);
    res.status(500).json({ message: "Image deletion failed", error: err.message });
  }
});

module.exports = {
  uploadImages,
  deleteImages,
};

