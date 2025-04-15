import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/config";

const register = async (userData) => {
    try {
        const response = await axios.post(`${base_url}user/register`, userData);
        if (response.data) {
            localStorage.setItem('customer', JSON.stringify(response.data));
        }
        return response.data;
    } catch (error) {
        console.error("Registration error:", error);
        throw error; // Rethrow the error for further handling
    }
};

const login = async (userData) => {
    try {
        const response = await axios.post(`${base_url}user/login`, userData);
        if (response.data) {
            localStorage.setItem('customer', JSON.stringify(response.data));
        }
        return response.data;
    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            console.error("Login error:", error.response.data);
            alert(`Login failed: ${error.response.data.message || 'An error occurred'}`);
        } else if (error.request) {
            // The request was made but no response was received
            console.error("No response received:", error.request);
            alert("Login failed: No response from server.");
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error("Error:", error.message);
            alert(`Login failed: ${error.message}`);
        }
        throw error; // Rethrow the error for further handling if needed
    }
};

const updateUser  = async (userData) => {
    try {
        const response = await axios.put(`${base_url}user/edit`, userData, config);
        if (response.data) {
            localStorage.setItem('customer', JSON.stringify(response.data));
        }
        return response.data;
    } catch (error) {
        console.error("Update user error:", error);
        throw error;
    }
};

const forgotPasswordToken = async (userData) => {
    try {
        const response = await axios.post(`${base_url}user/forgot-password-token`, userData);
        return response.data;
    } catch (error) {
        console.error("Forgot password token error:", error);
        throw error;
    }
};

const resetPasswordToken = async (userData) => {
    try {
        const response = await axios.put(`${base_url}user/reset-password/${userData.token}`, { password: userData.password });
        return response.data;
    } catch (error) {
        console.error("Reset password token error:", error);
        throw error;
    }
};

const getUserWishList = async () => {
    try {
        const response = await axios.get(`${base_url}user/wishlist`, config);
        return response?.data;
    } catch (error) {
        console.error("Get user wishlist error:", error);
        throw error;
    }
};

const addToCart = async (cartData) => {
    try {
        const response = await axios.post(`${base_url}user/cart`, cartData, config);
        return response?.data;
    } catch (error) {
        console.error("Add to cart error:", error);
        throw error;
    }
};

const getUserCart = async () => {
    try {
        const response = await axios.get(`${base_url}user/cart`, config);
        return response?.data;
    } catch (error) {
        console.error("Get user cart error:", error);
        throw error;
    }
};

const removeFromCart = async (id) => {
    try {
        const response = await axios.delete(`${base_url}user/delete-product-cart/${id}`, config);
        return response?.data;
    } catch (error) {
        console.error("Remove from cart error:", error);
        throw error;
    }
};

const updateCartWithQuantity = async (data) => {
    try {
        const response = await axios.post(`${base_url}user/update-product-cart/`, { id: data.id, newQuantity: data.quantity }, config);
        return response?.data;
    } catch (error) {
        console.error("Update cart with quantity error:", error);
        throw error;
    }
};

const createOrder = async (data) => {
    try {
        const response = await axios.post(`${base_url}user/cart/create-order`, data, config);
        return response?.data;
    } catch (error) {
        console.error("Create order error:", error);
        throw error;
    }
};

const getMyOrders = async () => {
    try {
        const response = await axios.get(`${base_url}user/getmyorders`, config);
        return response?.data;
    } catch (error) {
        console.error("Get my orders error:", error);
        throw error;
    }
};

const userService = {
    register,
    login,
    updateUser ,
    forgotPasswordToken,
    resetPasswordToken,
    getUserWishList,
    addToCart,
    getUserCart,
    removeFromCart,
    updateCartWithQuantity,
    createOrder,
    getMyOrders
};

export default userService;