// const cloudinary = require("cloudinary");

// cloudinary.config({
//   cloud_name: "dgc7ltpg8",
//   api_key: "LlSl9sYvAuPR1i1jpA1DfrBmt-k",
//   api_secret: "LlSl9sYvAuPR1i1jpA1DfrBmt-k",
// });

// const cloudinaryUploadImg = async (fileToUploads) => {
//   return new Promise((resolve) => {
//     cloudinary.uploader.upload(fileToUploads, (result) => {
//       resolve(
//         {
//           url: result.secure_url,
//           asset_id: result.asset_id,
//           public_id: result.public_id,
//         },
//         {
//           resource_type: "auto",
//         }
//         );
//       });
//     });
//   };

// const cloudinaryDeleteImg = async (fileToDelete) => {
//   return new Promise((resolve) => {
//     cloudinary.uploader.destroy(fileToDelete, (result) => {
//       resolve(
//         {
//           url: result.secure_url,
//           asset_id: result.asset_id,
//           public_id: result.public_id,
//         },
//         {
//           resource_type: "auto",
//         }
//       );
//     });
//   });
// };


// module.exports = { cloudinaryUploadImg, cloudinaryDeleteImg };

const cloudinary = require("cloudinary").v2; // Ensure you're using `.v2`

// Configure Cloudinary
cloudinary.config({
  cloud_name: "dgc7ltpg8", // Use environment variables
  api_key: "559138412476855",
  api_secret: "Cd8zVsoh2J_7zu3-pNPrepzJpoE",
});

const cloudinaryUploadImg = async (fileToUpload) => {
  try {
    const result = await cloudinary.uploader.upload(fileToUpload, {
      resource_type: "auto",
    });

    return {
      url: result.secure_url,
      asset_id: result.asset_id,
      public_id: result.public_id,
    };
  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    throw error;
  }
};

const cloudinaryDeleteImg = async (publicId) => {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    return { result };
  } catch (error) {
    console.error("Cloudinary Delete Error:", error);
    throw error;
  }
};

module.exports = {
  cloudinaryUploadImg,
  cloudinaryDeleteImg,
};

// Function to delete an image from Cloudinary
// const cloudinaryDeleteImg = async (publicId) => {
//   return new Promise((resolve, reject) => {
//     cloudinary.uploader.destroy(publicId, (error, result) => {
//       if (error) {
//         return reject(error); // Reject the promise if there's an error
//       }
//       resolve({
//         result: result,
//       });
//     });
//   });
// };

// module.exports = { cloudinaryUploadImg, cloudinaryDeleteImg };