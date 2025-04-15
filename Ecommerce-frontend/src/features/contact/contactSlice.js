import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import contactService from "./contactService";
import { toast } from "react-toastify";

export const createEnquiry = createAsyncThunk('enquiry/create-enquiry',async(enqData,thunkApi)=>{
    try{
        return await contactService.createEnquiry(enqData)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

const initialState = {
    contact:"",
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}
export const contactSlice = createSlice({
    name:"contact",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(createEnquiry.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(createEnquiry.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.enquiry = action.payload
            if(state.isSuccess){
                toast.success("Enquiry Submitted")
            }
        })
        .addCase(createEnquiry.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.message = action.error
            if(state.isError){
                toast.success("Something went wrong")
            }
        })
    }
})

export default contactSlice.reducer