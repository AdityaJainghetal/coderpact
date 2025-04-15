import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from "./productService";
import { toast } from "react-toastify";

export const getAllProducts = createAsyncThunk('product/get-products', async (data, thunkApi) => {
    try {
        return await productService.getAllProducts(data);
    } catch (err) {
        return thunkApi.rejectWithValue(err.message || "Failed to fetch products");
    }
});

export const getSingleProduct = createAsyncThunk('product/get-product', async (id, thunkApi) => {
    try {
        return await productService.getSingleProduct(id);
    } catch (err) {
        return thunkApi.rejectWithValue(err.message || "Failed to fetch product");
    }
});

export const addToWishList = createAsyncThunk('wishlist/add-wishlist', async (prodId, thunkApi) => {
    try {
        return await productService.addToWishList(prodId);
    } catch (err) {
        return thunkApi.rejectWithValue(err.message || "Failed to add to wishlist");
    }
});

export const addRating = createAsyncThunk('rating/product', async (data, thunkApi) => {
    try {
        return await productService.rateProduct(data);
    } catch (err) {
        return thunkApi.rejectWithValue(err.message || "Failed to add rating");
    }
});

const initialState = {
    products: [],
    singleProduct: null,
    wishlist: [],
    rating: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.products = action.payload;
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.payload;
                toast.error(state.message);
            })
            .addCase(addToWishList.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addToWishList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.wishlist.push(action.payload); // Assuming payload is the product added
                state.message = "Product added to wishlist";
                toast.success(state.message);
            })
            .addCase(addToWishList.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.payload;
                toast.error(state.message);
            })
            .addCase(getSingleProduct.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getSingleProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.singleProduct = action.payload;
            })
            .addCase(getSingleProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.payload;
                toast.error(state.message);
            })
            .addCase(addRating.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addRating.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.rating = action.payload;
                toast.success("You commented successfully");
            })
            .addCase(addRating.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.payload;
                toast.error(state.message);
            });
    }
});

export default productSlice.reducer;