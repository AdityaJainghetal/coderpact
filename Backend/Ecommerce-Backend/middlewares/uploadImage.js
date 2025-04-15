const multer = require("multer");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

// Multer Storage Setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/images/")); // Temp upload path
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + ".jpeg");
  },
});

// File Filter to allow only images
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb({ message: "Unsupported file format" }, false);
  }
};


// Multer Upload Instance
const uploadPhoto =  multer({
  storage: storage,
  fileFilter: multerFilter,
  limits: { fileSize: 1000000 }, // 1MB max
});

const productImgResize = async (req, res, next) => {
  if (!req.files) return next(); // Skip if no files
  try {
    const outputDir = path.join(__dirname, "../public/images/products/");
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    await Promise.all(
      req.files.map(async (file) => {
        const outputPath = path.join(outputDir, file.filename);
        const tempOutputPath = path.join(outputDir, "resized-" + file.filename);

        console.log(`Resizing: ${file.path} to ${tempOutputPath}`);

        await sharp(file.path)
          .resize(300, 300)
          .toFormat("jpeg")
          .jpeg({ quality: 90 })
          .toFile(tempOutputPath);


        console.log("workend not ")
        // fs.unlinkSync(file.path); // Delete original uploaded file
        
        try {
          if (fs.existsSync(file.path)) {
            await fs.promises.unlink(file.path);
          }
        } catch (unlinkErr) {
          console.warn(`Warning: Could not delete original file ${file.path}`, unlinkErr.message);
        }
        fs.renameSync(tempOutputPath, outputPath);
        console.log('not print')

      })
    );
    next();
  } catch (err) {
    console.error("Resize Error:", err.message);
    res.status(500).json({ message: "Image resizing failed", error: err.message });
  }
};



// Resize Blog Image
const blogImgResize = async (req, res, next) => {
  if (!req.files) return next();

  try {
    await Promise.all(
      req.files.map(async (file) => {
        const outputPath = `public/images/blogs/${file.filename}`;
        await sharp(file.path)
          .resize(300, 300)
          .toFormat("jpeg")
          .jpeg({ quality: 90 })
          .toFile(outputPath);

        fs.unlinkSync(file.path);
      })
    );
    next();
  } catch (err) {
    console.error("Resize Error:", err.message || err);
    res.status(500).json({ message: "Image resizing failed", error: err.message || err });
  }
};

module.exports = { uploadPhoto, productImgResize, blogImgResize };
