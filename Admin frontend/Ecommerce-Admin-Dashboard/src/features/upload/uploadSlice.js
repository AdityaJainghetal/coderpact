// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import uploadService from "./uploadService";

// export const uploadImg = createAsyncThunk(
//   "upload/images",
//   async (data, thunkAPI) => {
//     try {
//       const formData = new FormData();
//       for (let i = 0; i < data.length; i++) {
//         formData.append("images", data[i]);
//       }
//       return await uploadService.uploadImg(formData);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );
// export const delImg = createAsyncThunk(
//   "delete/images",
//   async (id, thunkAPI) => {
//     try {
//       return await uploadService.deleteImg(id);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );
// const initialState = {
//   images: [],
//   isError: false,
//   isLoading: false,
//   isSuccess: false,
//   message: "",
// };
// export const uploadSlice = createSlice({
//   name: "images",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(uploadImg.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(uploadImg.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isError = false;
//         state.isSuccess = true;
//         state.images = action.payload;
//       })
//       .addCase(uploadImg.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.isSuccess = false;
//         state.message = action.error;
//       })
//       .addCase(delImg.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(delImg.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isError = false;
//         state.isSuccess = true;
//         state.images = [];
//       })
//       .addCase(delImg.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.isSuccess = false;
//         state.message = action.payload;
//       });
//   },
// });
// export default uploadSlice.reducer;


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import uploadService from "./uploadService";



// Upload images
export const uploadImg = createAsyncThunk(
  "upload/images",
  async (data, thunkAPI) => {
    try {
      const formData = new FormData();
      for (let i = 0; i < data.length; i++) {
        formData.append("images", data[i]);
      }
      const response = await uploadService.uploadImg(formData);
      console.log(response)
      return response; // Expecting response to be an array of uploaded image objects
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

// Delete image by ID
export const delImg = createAsyncThunk(
  "delete/images",
  async (id, thunkAPI) => {
    try {
      await uploadService.deleteImg(id);
      return id; // Return ID to filter the image from the state
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

// Initial state
const initialState = {
  images: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const uploadSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    resetUploadState: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      // Upload
      .addCase(uploadImg.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(uploadImg.fulfilled, (state, action) => {
        console.log(action.payload.uploadedImages)
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.images = [action.payload.uploadedImages];
        console.log(state.images)
        console.log(action.payload)
      })
      .addCase(uploadImg.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })

      // Delete
      .addCase(delImg.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(delImg.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.images = state.images.filter((img) => img.id !== action.payload);
      })
      .addCase(delImg.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      });
  },
});

export const { resetUploadState } = uploadSlice.actions;
export default uploadSlice.reducer;
