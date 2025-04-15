import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import blogService from "./blogService";

export const getAllBlogs = createAsyncThunk('blog/get-blogs',async(thunkApi)=>{
    try{
        return await blogService.getAllBlogs()
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const getSingleBlog = createAsyncThunk('blog/get-singleBlog',async(id,thunkApi)=>{
    try{
        return await blogService.getSingleBlog(id)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})
const initialState = {
    blog:"",
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}
export const productSlice = createSlice({
    name:"blog",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAllBlogs.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(getAllBlogs.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.blogs = action.payload
        })
        .addCase(getAllBlogs.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.message = action.error
        })
        .addCase(getSingleBlog.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(getSingleBlog.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.singleBlog = action.payload
        })
        .addCase(getSingleBlog.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.message = action.error
        })
      
    }
})

export default productSlice.reducer