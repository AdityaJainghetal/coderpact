import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "./userService";
import { toast } from "react-toastify";

const getCustomerFromLocalStorage = localStorage.getItem('customer') ? JSON.parse(localStorage.getItem('customer')) : null;

export const registerUser  = createAsyncThunk('auth/user-register', async (user, thunkApi) => {
    try {
        return await userService.register(user);
    } catch (err) {
        return thunkApi.rejectWithValue(err.response.data.message || "Registration failed");
    }
});

export const loginUser  = createAsyncThunk('auth/user-login', async (user, thunkApi) => {
    try {
        return await userService.login(user);
    } catch (err) {
        return thunkApi.rejectWithValue(err.response.data.message || "Login failed");
    }
});

export const updateUser  = createAsyncThunk('auth/user-update', async (user, thunkApi) => {
    try {
        return await userService.updateUser (user);
    } catch (err) {
        return thunkApi.rejectWithValue(err.response.data.message || "Update failed");
    }
});

export const forgotPasswordToken = createAsyncThunk('auth/forgot-password-token', async (user, thunkApi) => {
    try {
        return await userService.forgotPasswordToken(user);
    } catch (err) {
        return thunkApi.rejectWithValue(err.response.data.message || "Failed to send password reset token");
    }
});

export const resetPasswordToken = createAsyncThunk('auth/reset-password-token', async (user, thunkApi) => {
    try {
        return await userService.resetPasswordToken(user);
    } catch (err) {
        return thunkApi.rejectWithValue(err.response.data.message || "Password reset failed");
    }
});

export const getUserWishList = createAsyncThunk('auth/user-wishlist', async (_, thunkApi) => {
    try {
        return await userService.getUserWishList();
    } catch (err) {
        return thunkApi.rejectWithValue(err.response.data.message || "Failed to fetch wishlist");
    }
});

export const addToCart = createAsyncThunk('auth/add-cart', async (cartData, thunkApi) => {
    try {
        return await userService.addToCart(cartData);
    } catch (err) {
        return thunkApi.rejectWithValue(err.response.data.message || "Failed to add to cart");
    }
});

export const getUserCart = createAsyncThunk('auth/get-cart', async (_, thunkApi) => {
    try {
        return await userService.getUserCart();
    } catch (err) {
        return thunkApi.rejectWithValue(err.response.data.message || "Failed to fetch cart");
    }
});

export const removeFromCart = createAsyncThunk('auth/delete-from-cart', async (id, thunkApi) => {
    try {
        return await userService.removeFromCart(id);
    } catch (err) {
        return thunkApi.rejectWithValue(err.response.data.message || "Failed to remove from cart");
    }
});

export const updateCartWithQuantity = createAsyncThunk('auth/update-cart', async (data, thunkApi) => {
    try {
        return await userService.updateCartWithQuantity(data);
    } catch (err) {
        return thunkApi.rejectWithValue(err.response.data.message || "Failed to update cart");
    }
});

export const createOrder = createAsyncThunk('auth/create-order', async (data, thunkApi) => {
    try {
        return await userService.createOrder(data);
    } catch (err) {
        return thunkApi.rejectWithValue(err.response.data.message || "Failed to create order");
    }
});

export const getMyOrders = createAsyncThunk('auth/get-my-order', async (_, thunkApi) => {
    try {
        return await userService.getMyOrders();
    } catch (err) {
        return thunkApi.rejectWithValue(err.response.data.message || "Failed to fetch orders");
    }
});

const initialState = {
    user: getCustomerFromLocalStorage,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
};

export const resetState = createAction('Reset_all');

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser .pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerUser .fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
                toast.info("User  Created");
            })
            .addCase(registerUser .rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.payload;
                toast.error(state.message);
            })
            .addCase(loginUser .pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser .fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
                localStorage.setItem("token", action.payload.token);
                toast.info("User  Logged In");
            })
            .addCase(loginUser .rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.payload;
                toast.error(state.message);
            })
            .addCase(updateUser .pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateUser .fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
                localStorage.setItem("token", action.payload.refreshToken);
                toast.info("User  Updated Successfully");
            })
            .addCase(updateUser .rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.payload;
                toast.error(state.message);
            })
            .addCase(forgotPasswordToken.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(forgotPasswordToken.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.token = action.payload;
                toast.info("Mail Sent Successfully");
            })
            .addCase(forgotPasswordToken.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.payload;
                toast.error(state.message);
            })
            .addCase(resetPasswordToken.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(resetPasswordToken.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.pass = action.payload;
                toast.info("Password Reset Successfully");
            })
            .addCase(resetPasswordToken.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.payload;
                toast.error(state.message);
            })
            .addCase(getUserWishList.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getUserWishList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.userWishList = action.payload;
            })
            .addCase(getUserWishList.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.payload;
                toast.error(state.message);
            })
            .addCase(addToCart.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.cartData = action.payload;
                toast.success("Product Added to Cart");
            })
            .addCase(addToCart.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.payload;
                toast.error(state.message);
            })
            .addCase(getUserCart.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getUserCart.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.userCart = action.payload;
            })
            .addCase(getUserCart.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.payload;
                toast.error(state.message);
            })
            .addCase(removeFromCart.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(removeFromCart.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.deletedCartProduct = action.payload;
                toast.success('Product Removed from Cart');
            })
            .addCase(removeFromCart.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.payload;
                toast.error(state.message);
            })
            .addCase(updateCartWithQuantity.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateCartWithQuantity.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.updatedCartProduct = action.payload;
            })
            .addCase(updateCartWithQuantity.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.payload;
                toast.error(state.message);
            })
            .addCase(createOrder.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createOrder.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.orderDetails = action.payload;
            })
            .addCase(createOrder.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.payload;
                toast.error(state.message);
            })
            .addCase(getMyOrders.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getMyOrders.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.myOrders = action.payload;
            })
            .addCase(getMyOrders.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.payload;
                toast.error(state.message);
            })
            .addCase(resetState, () => initialState);
    }
});

export default authSlice.reducer;