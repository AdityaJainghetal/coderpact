// import { createSlice ,createAsyncThunk,createAction} from "@reduxjs/toolkit";
// import productService from './productService'


// export const getProducts = createAsyncThunk('product/get-products',async(thunkApi)=>{
//     try{
//         return await productService.getProducts()
//     }catch(err){
//         return thunkApi.rejectWithValue(err) 
//     }
// })

// export const createProduct = createAsyncThunk('product/create-product',async(productData,thunkApi)=>{
//     try{
//         console.log(productData)
//         return await productService.createProduct(productData)
//     }catch(err){
//         return thunkApi.rejectWithValue(err) 
//     }
// })

// export const updateProduct = createAsyncThunk(
//     'product/update-product',
//     async (productData, thunkApi) => {
//       try {
//         const { id, ...updateFields } = productData;
//         return await productService.updateProduct(id, updateFields);
//       } catch (err) {
//         return thunkApi.rejectWithValue(err.response?.data || err.message);
//       }
//     }
//   );
  



// export const deleteProduct = createAsyncThunk('product/delete-product',async(id,thunkApi)=>{
//     try{
//         return await productService.deleteProduct(id)
//     }catch(err){
//         return thunkApi.rejectWithValue(err) 
//     }
// })




// export const resetState=createAction('Reset_all')

// const initialState = {
//     products:[],
//     isError:false,
//     isLoading:false,
//     isSuccess:false,
//     message:""
// }

// export const productSlice = createSlice({
//     name:'products',
//     initialState,
//     reducers:{},
//     extraReducers:(builder)=>{
//         builder.addCase(getProducts.pending,(state)=>{
//             state.isLoading=true
//         })
//         .addCase(getProducts.fulfilled,(state,action)=>{
//             state.isLoading = false
//             state.isError =false
//             state.isSuccess = true
//             state.products= action.payload
//         })
//         .addCase(getProducts.rejected,(state,action)=>{
//             state.isLoading = false
//             state.isError =true
//             state.isSuccess = false
//             state.message = action.error
//         })
//         .addCase(createProduct.pending,(state)=>{
//             state.isLoading=true
//         })
//         .addCase(createProduct.fulfilled,(state,action)=>{
//             state.isLoading = false
//             state.isError =false
//             state.isSuccess = true
//             state.createProduct= action.payload
//         })
//         .addCase(createProduct.rejected,(state,action)=>{
//             state.isLoading = false
//             state.isError =true
//             state.isSuccess = false
//             state.message = action.error
//         })
//         .addCase(deleteProduct.pending,(state)=>{
//             state.isLoading=true
//         })
//         .addCase(deleteProduct.fulfilled,(state,action)=>{
//             state.isLoading = false
//             state.isError =false
//             state.isSuccess = true
//             state.deleteProduct= action.payload
//         })
//         .addCase(deleteProduct.rejected,(state,action)=>{
//             state.isLoading = false
//             state.isError =true
//             state.isSuccess = false
//             state.message = action.error
//         })
//         .addCase(resetState,()=> initialState)
//     }
// })

// export default productSlice.reducer



// import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
// import productService from './productService';

// export const getProducts = createAsyncThunk('product/get-products', async (thunkApi) => {
//   try {
//     return await productService.getProducts();
//   } catch (err) {
//     return thunkApi.rejectWithValue(err);
//   }
// });

// export const createProduct = createAsyncThunk('product/create-product', async (productData, thunkApi) => {
//   try {
//     return await productService.createProduct(productData);
//   } catch (err) {
//     return thunkApi.rejectWithValue(err);
//   }
// });


// export const updateProductThunk = createAsyncThunk('product/update-product', async (productData, thunkApi) => {
//   try {
//     const { id, ...updateFields } = productData;
//     const updatedProduct = await productService.updateProduct(id, updateFields);
//     return updatedProduct;
//   } catch (err) {
//     return thunkApi.rejectWithValue(err.response?.data || err.message);
//   }
// });


// export const deleteProduct = createAsyncThunk('product/delete-product', async (id, thunkApi) => {
//   try {
//     return await productService.deleteProduct(id);
//   } catch (err) {
//     return thunkApi.rejectWithValue(err);
//   }
// });
// export const editProduct = createAsyncThunk('product/getSigleProductData', async (id, thunkApi) => {
//   try {
//     return await productService.editProduct(id);
//   } catch (err) {
//     return thunkApi.rejectWithValue(err);
//   }
// });

// export const resetState = createAction('Reset_all');

// const initialState = {
//   products: [],
//   isError: false,
//   isLoading: false,
//   isSuccess: false,
//   message: ""
// };

// export const productSlice = createSlice({
//   name: 'products',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getProducts.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(getProducts.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isError = false;
//         state.isSuccess = true;
//         state.products = action.payload;
//       })
//       .addCase(getProducts.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.isSuccess = false;
//         state.message = action.error;
//       })
//       .addCase(createProduct.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(createProduct.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isError = false;
//         state.isSuccess = true;
//         state.products.push(action.payload);
//       })
//       .addCase(createProduct.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.isSuccess = false;
//         state.message = action.error;
//       })
//       .addCase(deleteProduct.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(deleteProduct.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isError = false;
//         state.isSuccess = true;
//         state.products = state.products.filter(product => product._id !== action.payload._id);
//       })
//       .addCase(deleteProduct.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.isSuccess = false;
//         state.message = action.error;
//       })
//       .addCase(editProduct.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(editProduct.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isError = false;
//         state.isSuccess = true;
//         state.products.push(action.payload);
//       })
//       .addCase(editProduct.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.isSuccess = false;
//         state.message = action.error;
//       })
//       .addCase(resetState, () => initialState);
//   }
// });

// export default productSlice.reducer;



import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import productService from './productService';

export const getProducts = createAsyncThunk('product/get-products', async (_, thunkApi) => {
  try {
    return await productService.getProducts();
  } catch (err) {
    return thunkApi.rejectWithValue(err.message || err);
  }
});

export const createProduct = createAsyncThunk('product/create-product', async (productData, thunkApi) => {
  try {
    return await productService.createProduct(productData);
  } catch (err) {
    return thunkApi.rejectWithValue(err.message || err);
  }
});

export const updateProduct = createAsyncThunk('product/update-product', async ({ id, productData }, thunkApi) => {
  try {
    return await productService.updateProduct(id, productData);
  } catch (err) {
    return thunkApi.rejectWithValue(err.message || err);
  }
});

export const deleteProduct = createAsyncThunk('product/delete-product', async (id, thunkApi) => {
  try {
    return await productService.deleteProduct(id);
  } catch (err) {
    return thunkApi.rejectWithValue(err.message || err);
  }
});

export const editProduct = createAsyncThunk('product/get-single-product', async (id, thunkApi) => {
  try {
    return await productService.editProduct(id);
  } catch (err) {
    return thunkApi.rejectWithValue(err.message || err);
  }
});

export const resetState = createAction('Reset_all');

const initialState = {
  products: [],
  singleProduct: null,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
  createdProduct: null,
  updatedProduct: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(createProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.createdProduct = action.payload;
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(updateProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.updatedProduct = action.payload;
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(deleteProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = state.products.filter(p => p._id !== action.payload._id);
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(editProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.singleProduct = action.payload;
      })
      .addCase(editProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(resetState, () => initialState);
  }
});

export default productSlice.reducer;
