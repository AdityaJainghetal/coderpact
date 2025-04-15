// Load environment variables from .env file
const dotenv = require('dotenv').config();
const express = require('express');
const dbConnect = require('./config/dbConnect');
const { errorHandler, notFound } = require('./middlewares/errorHandler');
const cors = require('cors');
const fileuploader = require('express-fileupload');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

// Initialize Express app
const app = express();

// Connect to the database
dbConnect();

// Middleware setup
app.use(morgan('dev')); // Logging middleware
app.use(cors()); // Enable CORS
// app.use(fileuploader()); // File upload middleware
app.use(bodyParser.urlencoded({ extended: false })); // Parse URL-encoded bodies
app.use(bodyParser.json()); // Parse JSON bodies
app.use(cookieParser()); // Parse cookies

// Route imports
const authRouter = require('./routes/authRoutes');
const productRouter = require('./routes/productRoute');
const blogRouter = require('./routes/blogRoutes');
const productCategoryRouter = require('./routes/productCategoryRoute');
const blogCategoryRouter = require('./routes/blogCategoryRoutes');
const brandRouter = require('./routes/brandRoutes');
const couponRouter = require('./routes/couponRoute');
const colorRouter = require('./routes/colorRoute');
const enquiryRouter = require('./routes/enquiryRoute');
const uploadRouter = require('./routes/uploadRoute');

// API routes
app.use('/api/user', authRouter);
app.use('/api/product', productRouter);
app.use('/api/blog', blogRouter);
app.use('/api/productCategory', productCategoryRouter);
app.use('/api/blogCategory', blogCategoryRouter);
app.use('/api/brand', brandRouter);
app.use('/api/coupon', couponRouter);
app.use('/api/color', colorRouter);
app.use('/api/enquiry', enquiryRouter);
app.use('/api/upload', uploadRouter);

// Error handling middleware
app.use(notFound); // 404 Not Found
app.use(errorHandler); // General error handler

// Start the server
const PORT = process.env.PORT || 5000; // Default to 5000 if PORT is not set
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});