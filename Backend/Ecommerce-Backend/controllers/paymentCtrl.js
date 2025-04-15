// const Razorpay = require('razorpay');

// const instance = new Razorpay({
//     key_id: "rzp_test_gpCBVNamBYgZkc",
//     key_secret: "zsoMGQfuTrHjWrV82NJuRf9k"
// });

// const checkout = async (req, res) => {
//     const {amount} = req.body
//     try {
//         const options = {
//             amount: amount * 100, 
//             currency: "INR"
//         };

//         const order = await instance.orders.create(options);

//         res.json({
//             success: true,
//             order
//         });
//     } catch (error) {
//         console.error("Error creating order:", error);
//         res.status(500).json({
//             success: false,
//             message: "Unable to create order. Please try again later.",
//             error: error.message
//         });
//     }
// };

// const paymentVerification = async (req, res) => {
//     try {
//         const { RazorpayOrderId, razorpayPaymentId } = req.body;
//         res.json({
//             success: true,
//             RazorpayOrderId,
//             razorpayPaymentId
//         });
//     } catch (error) {
//         console.error("Error verifying payment:", error);
//         res.status(500).json({
//             success: false,
//             message: "Payment verification failed. Please try again.",
//             error: error.message
//         });
//     }
// };

// module.exports = { checkout, paymentVerification };



// const Razorpay = require('razorpay');

// // Initialize Razorpay instance with your credentials
// const instance = new Razorpay({
//     key_id: "rzp_test_gpCBVNamBYgZkc",
//   key_secret: "zsoMGQfuTrHjWrV82NJuRf9k"
// });

// // Checkout function to create an order
// const checkout = async (req, res) => {
//     const { amount } = req.body;

//     // Validate input
//     if (!amount || isNaN(amount) || amount <= 0) {
//         return res.status(400).json({
//             success: false,
//             message: "Invalid amount."
//         });
//     }

//     try {
//         const options = {
//             amount: amount * 100, // Convert to paise
//             currency: "INR"
//         };

//         const order = await instance.orders.create(options);

//         res.json({
//             success: true,
//             order
//         });
//     } catch (error) {
//         console.error("Error creating order:", error);
//         res.status(500).json({
//             success: false,
//             message: "Unable to create order. Please try again later.",
//             error: error.message
//         });
//     }
// };

// // Payment verification function
// const paymentVerification = async (req, res) => {
//     const { RazorpayOrderId, razorpayPaymentId } = req.body;

//     // Validate input
//     if (!RazorpayOrderId || !razorpayPaymentId) {
//         return res.status(400).json({
//             success: false,
//             message: "Missing required parameters."
//         });
//     }

//     try {
//         // Fetch payment details from Razorpay
//         const payment = await instance.payments.fetch(razorpayPaymentId);

//         // Check if payment is successful
//         if (payment.status === 'captured') {
//             res.json({
//                 success: true,
//                 RazorpayOrderId,
//                 razorpayPaymentId
//             });
//         } else {
//             res.status(400).json({
//                 success: false,
//                 message: "Payment not successful."
//             });
//         }
//     } catch (error) {
//         console.error("Error verifying payment:", error);
//         res.status(500).json({
//             success: false,
//             message: "Payment verification failed. Please try again.",
//             error: error.message
//         });
//     }
// };

// module.exports = { checkout, paymentVerification };






const Razorpay = require('razorpay');

// Initialize Razorpay instance with your credentials
const instance = new Razorpay({
  key_id: "rzp_test_o3vkPO5n8pMXdo",
  key_secret: "fENFkA5Mq3eCWjciw8YWKuVi"
});

// Checkout function to create an order
const checkout = async (req, res) => {
  const { amount } = req.body;

  // Validate input
  if (!amount || isNaN(amount) || amount <= 0) {
    return res.status(400).json({
      success: false,
      message: "Invalid amount."
    });
  }

  try {
    const options = {
      amount: amount * 100, // Convert to paise
      currency: "INR",
    };

    const order = await instance.orders.create(options);

    return res.status(201).json({
      success: true,
      order
    });
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    return res.status(500).json({
      success: false,
      message: "Unable to create order. Please try again later.",
      error: error.message
    });
  }
};

// Payment verification function
const paymentVerification = async (req, res) => {
  const { razorpayOrderId, razorpayPaymentId } = req.body;

  // Validate input
  if (!razorpayOrderId || !razorpayPaymentId) {
    return res.status(400).json({
      success: false,
      message: "Missing required parameters."
    });
  }

  try {
    const payment = await instance.payments.fetch(razorpayPaymentId);

    if (payment.status === 'captured') {
      return res.status(200).json({
        success: true,
        razorpayOrderId,
        razorpayPaymentId
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Payment not successful."
      });
    }
  } catch (error) {
    console.error("Error verifying Razorpay payment:", error);
    return res.status(500).json({
      success: false,
      message: "Payment verification failed. Please try again.",
      error: error.message
    });
  }
};

module.exports = { checkout, paymentVerification };
