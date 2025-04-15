import axios from "axios";
import { config } from "../../utils/config";
import { base_url } from "../../utils/base_url";
import { toast } from "react-toastify";

const getTokenFromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user")).token
  : null;

const uploadImg = async (acceptedFiles) => {
  if (!getTokenFromLocalStorage) {
    console.error("No token found. Please log in.");
    toast.error("Please log in to upload images.");
    return;
  }
  const formData = new FormData();
  acceptedFiles.forEach((file) => formData.append("images", file));

  try {
    const response = await axios.post(`http://localhost:5000/api/upload/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${getTokenFromLocalStorage}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Upload Error:", error);
    throw error;
  }
};
const deleteImg = async (id) => {
  const response = await axios.delete(
    `${base_url}upload/delete-img/${id}`,

    config
  );
  return response.data;
};

const uploadService = {
  uploadImg,
  deleteImg,
};

export default uploadService;



// import axios from "axios";
// import { config } from "../../utils/config";
// import { base_url } from "../../utils/base_url";



// // Upload image
// const uploadImg = async (data) => {
//   // const response = await axios.post(`http://localhost:5000/api/upload/`, data, config);
//   const response = await axios.post(`${base_url}api/upload/`, data, config);

//   return response.data;
// };

// // Delete image by ID
// const deleteImg = async (id) => {
//   const response = await axios.delete(`${base_url}api/upload/delete-img/${id}`, config);
//   return response.data;
// };

// // Export the upload service
// const uploadService = {
//   uploadImg,
//   deleteImg,
// };

// export default uploadService;






// import axios from "axios";
// import { config } from "../../utils/config";
// import { base_url } from "../../utils/base_url";

// // Upload image
// const uploadImg = async (data) => {
//   const response = await axios.post(`${base_url}upload/`, data, config);
//   return response.data;
// };

// // Delete image by ID (ImageKit's fileId)
// const deleteImg = async (id) => {
//   const response = await axios.delete(`${base_url}upload/delete-img/${id}`, config);
//   return response.data;
// };

// // Export the upload service
// const uploadService = {
//   uploadImg,
//   deleteImg,
// };

// export default uploadService;
