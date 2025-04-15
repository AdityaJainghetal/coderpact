// import axios from "axios";
// import { base_url } from "../../utils/base_url";
// import { config } from "../../utils/config";

// const getProducts = async ()=>{
//     const response = await axios.get(`${base_url}product`)
    
//     return response.data
// }

// const createProduct = async (product)=>{
//     const response = await axios.post(`${base_url}product/create`,product,config)
//     return response.data
// }

// const updateProduct = async (data) => {
//     const { productData, id } = data;
//     const response = await axios.put(`${base_url}productupdate/${id}`, productData, config);
//     return response.data;
// };



// const deleteProduct = async (id)=>{
//     const response = await axios.delete(`${base_url}product/${id}`,config)
//     return response.data
// }


// const productService = {getProducts,createProduct,deleteProduct,updateProduct}

// export default productService




// import axios from "axios";
// import { base_url } from "../../utils/base_url";
// import { config } from "../../utils/config";

// const getProducts = async () => {
//   const response = await axios.get(`${base_url}product`);
//   return response.data;
// };

// const createProduct = async (product) => {
//   const response = await axios.post(`${base_url}product/create`, product, config);
//   return response.data;
// };
// export const updateProduct = async (id, productData) => {
//   try {
//     const response = await axios.put(
//       `${base_url}list-product/${id}`,
//       productData
//     );

//     if (response.status >= 200 && response.status < 300) {
//       return response.data;
//     } else {
//       throw new Error(`Request failed with status ${response.status}`);
//     }
//   } catch (error) {
//     console.error('Error updating product:', error);
//     if (error.response) {
//       console.error('Response data:', error.response.data);
//     }
//     throw new Error(
//       error.response?.data?.message || 
//       error.message || 
//       'Failed to update product'
//     );
//   }
// };
// const deleteProduct = async (id) => {
//   const response = await axios.delete(`${base_url}product/${id}`, config);
//   return response.data;
// };
// const editProduct = async (id) => {
//   const response = await axios.get(`${base_url}product/singleproduct/getSigleProductData/${id}`, config);
//   console.log('response',response.data)

//   return response.data;
// };

// const productService = { getProducts, createProduct, deleteProduct, updateProduct ,editProduct};

// export default productService;


import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/config";

// Get all products
const getProducts = async () => {
  const response = await axios.get(`${base_url}product`);
  return response.data;
};

// Create a new product
const createProduct = async (product) => {
  const response = await axios.post(`${base_url}product/create`, product, config);
  return response.data;
};

// Update a product
const updateProduct = async (id, productData) => {
  try {
    const response = await axios.put(
      `${base_url}list-product/${id}`,
      productData,
      config // use config for headers (e.g., token)
    );

    return response.data;
  } catch (error) {
    console.error("Error updating product:", error);
    throw new Error(
      error.response?.data?.message ||
      error.message ||
      "Failed to update product"
    );
  }
};

// Delete a product
const deleteProduct = async (id) => {
  const response = await axios.delete(`${base_url}product/${id}`, config);
  return response.data;
};

// Get a single product by ID
const editProduct = async (id) => {
  const response = await axios.get(
    `${base_url}product/singleproduct/getSigleProductData/${id}`,
    config
  );
  return response.data;
};

// Export all product services
const productService = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  editProduct,
};

export default productService;
