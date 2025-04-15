import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from '../../utils/config';

const getAllProducts = async (data) => {
    try {
        const params = new URLSearchParams();

        if (data?.brand) params.append('brand', data.brand);
        if (data?.tag) params.append('tags', data.tag);
        if (data?.category) params.append('category', data.category);
        if (data?.minPrice) params.append('price[gte]', data.minPrice);
        if (data?.maxPrice) params.append('price[lte]', data.maxPrice);
        if (data?.sort) params.append('sort', data.sort);

        const response = await axios.get(`${base_url}product?${params.toString()}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "Failed to fetch products");
    }
};

const getSingleProduct = async (id) => {
    try {
        const response = await axios.get(`${base_url}product/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "Failed to fetch product");
    }
};

const addToWishList = async (prodId) => {
    try {
        const response = await axios.put(`${base_url}product/wishlist`, { prodId }, config);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "Failed to add to wishlist");
    }
};

const rateProduct = async (data) => {
    try {
        const response = await axios.put(`${base_url}product/rating`, { data }, config);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "Failed to add rating");
    }
};

const productService = {
    getAllProducts,
    addToWishList,
    getSingleProduct,
    rateProduct
};

export default productService;