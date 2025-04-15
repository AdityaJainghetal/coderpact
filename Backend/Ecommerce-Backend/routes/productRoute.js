const express = require('express')
const { createProduct, getSingleProduct, getAllProducts, updateProduct, deleteProduct, addToWishlist, rating ,getSigleProductData} = require('../controllers/productCtrl')
const { authMiddleware,isAdmin } = require('../middlewares/authMiddleware')
const router = express.Router()

// create product 
router.post('/create',authMiddleware,isAdmin,createProduct)

// get a single product 
router.get('/:id',getSingleProduct)
router.get('/singleproduct/getSigleProductData/:id',getSigleProductData)
router.put("/list-product", updateProduct);
//add to wish list
router.put("/wishlist", authMiddleware, addToWishlist)


//ratings
router.put("/rating", authMiddleware, rating)


//get all products
router.get('/',getAllProducts)

//update product
router.put('/:id',authMiddleware,isAdmin,updateProduct)

// delete Product
router.delete('/:id',authMiddleware,isAdmin,deleteProduct)



module.exports = router