const router = require("express").Router();
const multer = require("multer");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const { uploadImages, deleteImages } = require("../controllers/uploadControllers");
const { productImgResize } = require("../middlewares/uploadImage");

const uploadPhoto = multer({
  storage: multer.diskStorage({
    destination: "../public/images/products",
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${file.originalname}`);
    },
  }),
  limits: { fileSize: 1000000 },
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith("image/")) {
      return cb(new Error("Unsupported file format"), false);
    }
    cb(null, true);
  },
});

console.log('authMiddleware type:', typeof authMiddleware);
console.log('uploadPhoto.array type:', typeof uploadPhoto.array("images", 10));
console.log('productImgResize type:', typeof productImgResize);
console.log('uploadImages type:', typeof uploadImages);
router.post("/", uploadPhoto.array("images", 10), productImgResize, uploadImages);


router.delete('/delete-img/:id',authMiddleware,isAdmin,deleteImages)

module.exports = router





// routes/uploadRoute.js
// const express = require('express');
// const { uploadImages, deleteImages } = require('../controllers/uploadControllers');
// const { authMiddleware } = require('../middlewares/authMiddleware');
// const router = express.Router();

// router.post('/', authMiddleware, uploadImages);
// router.delete('/delete-img/:id', authMiddleware, deleteImages);

// module.exports = router;
