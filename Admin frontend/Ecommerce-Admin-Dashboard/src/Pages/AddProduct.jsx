// import React, { useEffect, useState } from "react";
// import "react-widgets/styles.css";
// import CustomInput from "../Component/CustomInput";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import { message, Upload } from "antd";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { useDispatch, useSelector } from "react-redux";
// import { getBrands } from "../features/brand/brandSlice";
// import { getProductCategory } from "../features/pcategory/pcategorySlice";
// import { getColors } from "../features/color/colorSlice";
// import {Select} from 'antd'
// import Dropzone from "react-dropzone";
// import { delImg, uploadImg } from "../features/upload/uploadSlice";
// import { RxCross2 } from "react-icons/rx";
// import { createProduct,editProduct,resetState } from "../features/product/productSlice";
// import { useNavigate } from "react-router-dom";
// import { toast } from 'react-toastify';
// import { useParams } from "react-router-dom";
// let userSchema = Yup.object().shape({
//   title: Yup.string().required("Title is required"),
//   description: Yup.string().required("Description is required"),
//   price: Yup.number().required("Price is required"),
//   brand: Yup.string().required("Brand is required"),
//   category: Yup.string().required("Category is required"),
//   tags: Yup.string().required("Tag is required"),
//   color: Yup.array().min(1,"Pick atleast one color").required("Color is required"),
//   quantity: Yup.number().required("Quantity is required"),
// });
//   console.log("dsjfhhdfmslkdfknsdkfljsdfjl")
// const AddProduct = () => {
//   const {id} = useParams()
//   const dispatch = useDispatch();
//   const navigate = useNavigate()
//   const [color, setColor] = useState([]);
//   // const [images, setImages] = useState([]);

//   useEffect(() => {
//     dispatch(getBrands());
//     dispatch(getProductCategory());
//     dispatch(getColors());
//   }, []);

//   const brandState = useSelector((state) => state.brand.brands);
//   const singleProduct = useSelector((state) => state.brand.brands);
//   const categoryState = useSelector((state) => state.pCategory.pCategories);
//   const colorState = useSelector((state) => state.color.colors);
//   const imgState = useSelector((state) => state.upload.images[0]);
//   const newProduct = useSelector((state) => state.product);
//   const {isSuccess,isError,isLoading} = newProduct
//   const createdProduct = newProduct.createProduct
//   useEffect(()=>{
//     if(isSuccess && createdProduct){
//       console.log('product successfully added')
//       toast.success('Product successfully added', {});
//     }
//     if(isError){
//       toast.error('Something went wrong', {});
//     }
//   },[isSuccess,isError,isLoading])

//     console.log(newProduct)



//   useEffect(()=>{
//     dispatch(editProduct(id))
//   },[dispatch])
  


//   useEffect(()=>{
//     const formik = useFormik({
//       enableReinitialize: true,
//       initialValues: {
//         title: productDetails?.title || "",
//         description: productDetails?.description || "",
//         price: productDetails?.price || "",
//         brand: productDetails?.brand || "",
//         category: productDetails?.category || "",
//         tags: productDetails?.tags || "",
//         color: productDetails?.color || [],
//         quantity: productDetails?.quantity || "",
//         images: productDetails?.images || [],
//       },
//   })
//   },[newProduct])



//   const coloropt = [];
//   colorState.forEach((i) => {
//     coloropt.push({
//       label: i.title,
//       value: i._id,
//     });
//   });

//   // const img = [];
//   // imgState?.forEach((i) => {
//   //   img.push({
//   //     public_id: i.public_id,
//   //     url: i.url,
//   //   });
//   // });

//   console.log(imgState)
//   useEffect(() => {
//     formik.values.color = color || [];
//     // formik.values.images = imgState.length > 0 ? imgState.map(img => img.url) : [];  // Array of URLs
//   }, [color, imgState, dispatch]);

//   const formik = useFormik({
//     initialValues: {
//       title: "",
//       description: "",
//       price: "",
//       brand: "",
//       category: "",
//        tags:"",
//       color: [],
//       quantity: "",
//       images:[],
     
//     },
//     validationSchema: userSchema,
//     onSubmit: (values) => {
//       dispatch(createProduct({...values,images:imgState}));
//       formik.resetForm();
//       setColor(null);
      

//       setTimeout(() => {
//         dispatch(resetState())
//         navigate('/admin/list-product')
//       }, 3000);
//     },
//   });

//   const handleColors = (e) => {
//     setColor(e);
//   };


//   return (
//     <div>
//       <h3 className="mb-4 text-2xl font-semibold">Add Product</h3>
//       <form action="" onSubmit={formik.handleSubmit}>
//         <CustomInput
//           type="text"
//           placeholder="Enter Product title"
//           name="title"
//           onCh={formik.handleChange("title")}
//           val={formik.values.title}
//         />

//         <div className="text-red-500 mt-2 ">
//           {formik.touched.title && formik.errors.title}
//         </div>

//         <ReactQuill
//           theme="snow"
//           className="mt-3"
//           name="description"
//           onChange={formik.handleChange("description")}
//           value={formik.values.description}
//         />

//         <div className="text-red-500 mt-2 ">
//           {formik.touched.description && formik.errors.description}
//         </div>

//         <CustomInput
//           type="number"
//           placeholder="Enter Product Price "
//           name="price"
//           onCh={formik.handleChange("price")}
//           val={formik.values.price}
//         />

//         <div className="text-red-500 mt-2 ">
//           {formik.touched.price && formik.errors.price}
//         </div>

//         <select
//           className="w-full py-3 text-xl outline-none border rounded-xl px-5 mt-5 pe-5"
//           id=""
//           name="brand"
//           onChange={formik.handleChange("brand")}
//           value={formik.values.brand}
//         >
//           <option>Select a brand</option>
//           {brandState.map((item, j) => {
//             return (
//               <option key={j} value={item.title}>
//                 {item.title}
//               </option>
//             );
//           })}
//         </select>
//         <div className="text-red-500 mt-2 ">
//           {formik.touched.brand && formik.errors.brand}
//         </div>

//         <select
//           className="w-full py-3 text-xl outline-none border rounded-xl px-5 mt-5 pe-5"
//           id=""
//           name="category"
//           onChange={formik.handleChange("category")}
//           value={formik.values.category}
//         >
//           <option>Select a Category</option>
//           {categoryState.map((item, j) => {
//             return (
//               <option key={j} value={item.title}>
//                 {item.title}
//               </option>
//             );
//           })}
//         </select>

//         <div className="text-red-500 mt-2 ">
//           {formik.touched.category && formik.errors.category}
//         </div>

//         <select
//           className="w-full py-3 text-xl outline-none border rounded-xl px-5 mt-5 pe-5"
//           id=""
//           name="tags"
//           onChange={formik.handleChange("tags")}
//           value={formik.values.tags}
//         >
//           <option disabled>Select a Tag</option>
//           <option value="featured">Featured</option>
//           <option value="popular">Popular</option>
//           <option value="special">Special</option>
          
//         </select>

//         <div className="text-red-500 mt-2 ">
//           {formik.touched.tags && formik.errors.tags}
//         </div>

//         <Select
//             mode="multiple"
//             allowClear
//             className="w-full"
//             placeholder="Select colors"
//             defaultValue={color}
//             onChange={(i) => handleColors(i)}
//             options={coloropt}
//           />
//         <div className="text-red-500 mt-2 ">
//           {formik.touched.color && formik.errors.color}
//         </div>

//         <CustomInput
//           type="number"
//           placeholder="Enter Quantity"
//           classname="mb-2"
//           name="quantity"
//           onCh={formik.handleChange("quantity")}
//           val={formik.values.quantity}
//         />

//         <div className="text-red-500 mt-2 ">
//           {formik.touched.quantity && formik.errors.quantity}
//         </div>

//         <div className="bg-white border py-10 text-center">
//           <Dropzone onDrop={(acceptedFiles) => dispatch(uploadImg(acceptedFiles))}>
//             {({ getRootProps, getInputProps }) => (
//               <section>
//                 <div {...getRootProps()}>
//                   <input {...getInputProps()} />
//                   <p>Drag 'n' drop some files here, or click to select files</p>
//                 </div>
//               </section>
//             )}
//           </Dropzone>
//         </div>
//         <div className="flex gap-2 mt-5">
//   {imgState && imgState.length > 0 ? (
//     imgState.map((img, index) => (
//       <div key={index} className="relative">
//         <img
//           src={img}
//           className="w-[200px] h-[200px] object-cover"
//           alt={`Uploaded ${index}`}
//         />
//         <button
//           type="button"
//           onClick={() => dispatch(delImg(img.fileId))}  // Use fileId for deletion
//           className="absolute text-white text-3xl font-bold right-2 top-2"
//         >
//           <RxCross2 />
//         </button>
//       </div>
//     ))
//   ) : (
//     <p>No images uploaded yet</p>
//   )}
// </div>
//         <button
//           className=" border rounded-xl my-5 px-4 py-2 bg-green-400"
//           type="submit"
//         >
//           Add Product
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;



// import React, { useEffect, useState } from "react";
// import "react-widgets/styles.css";
// import CustomInput from "../Component/CustomInput";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import { message, Upload } from "antd";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { useDispatch, useSelector } from "react-redux";
// import { getBrands } from "../features/brand/brandSlice";
// import { getProductCategory } from "../features/pcategory/pcategorySlice";
// import { getColors } from "../features/color/colorSlice";
// import {Select} from 'antd'
// import Dropzone from "react-dropzone";
// import { delImg, uploadImg } from "../features/upload/uploadSlice";
// import { RxCross2 } from "react-icons/rx";
// import { createProduct,editProduct,resetState } from "../features/product/productSlice";
// import { useNavigate } from "react-router-dom";
// import { toast } from 'react-toastify';
// import { useParams } from "react-router-dom";
// // import { createProduct, editProduct, updateProduct, resetState } from "../features/product/productSlice";
// // import { useNavigate, useParams } from "react-router-dom";
// // import { toast } from "react-toastify";

// const validationSchema = Yup.object().shape({
//   title: Yup.string().required("Title is required"),
//   description: Yup.string().required("Description is required"),
//   price: Yup.number().required("Price is required"),
//   brand: Yup.string().required("Brand is required"),
//   category: Yup.string().required("Category is required"),
//   tags: Yup.string().required("Tag is required"),
//   color: Yup.array().min(1, "Pick at least one color").required("Color is required"),
//   quantity: Yup.number().required("Quantity is required"),
// });

// const AddProduct = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [color, setColor] = useState([]);

//   const brandState = useSelector((state) => state.brand.brands);
//   const categoryState = useSelector((state) => state.pCategory.pCategories);
//   const colorState = useSelector((state) => state.color.colors);
//   const imgState = useSelector((state) => state.upload.images);
//   const { singleProduct, isSuccess, isError, isLoading, updatedProduct, createProduct: createdProduct } = useSelector((state) => state.product);

//   const isEdit = Boolean(id);

//   useEffect(() => {
//     dispatch(getBrands());
//     dispatch(getProductCategory());
//     dispatch(getColors());

//     if (isEdit) {
//       dispatch(editProduct(id));
//     }
//   }, [id]);

//   const formik = useFormik({
//     enableReinitialize: true,
//     initialValues: {
//       title: singleProduct?.title || "",
//       description: singleProduct?.description || "",
//       price: singleProduct?.price || "",
//       brand: singleProduct?.brand || "",
//       category: singleProduct?.category || "",
//       tags: singleProduct?.tags || "",
//       color: singleProduct?.color || [],
//       quantity: singleProduct?.quantity || "",
//       images: singleProduct?.images || [],
//     },
//     validationSchema,
//     onSubmit: (values) => {
//       const payload = { ...values, images: imgState };

//       if (isEdit) {
//         dispatch(updateProduct({ id, productData: payload }));
//       } else {
//         dispatch(createProduct(payload));
//       }

//       formik.resetForm();
//       setColor([]);
//       setTimeout(() => {
//         dispatch(resetState());
//         navigate("/admin/list-product");
//       }, 3000);
//     },
//   });

//   useEffect(() => {
//     if (isSuccess && createdProduct && !isEdit) {
//       toast.success("Product successfully added");
//     }

//     if (isSuccess && updatedProduct && isEdit) {
//       toast.success("Product successfully updated");
//     }

//     if (isError) {
//       toast.error("Something went wrong");
//     }
//   }, [isSuccess, isError, isLoading]);

//   const colorOptions = colorState.map((c) => ({
//     label: c.title,
//     value: c._id,
//   }));

//   const handleColors = (e) => {
//     setColor(e);
//     formik.setFieldValue("color", e);
//   };

//   return (
//     <div>
//       <h3 className="mb-4 text-2xl font-semibold">{isEdit ? "Edit Product" : "Add Product"}</h3>
//       <form onSubmit={formik.handleSubmit}>
//         <CustomInput
//           type="text"
//           placeholder="Enter Product title"
//           name="title"
//           onCh={formik.handleChange("title")}
//           val={formik.values.title}
//         />
//         <div className="text-red-500 mt-2">{formik.touched.title && formik.errors.title}</div>

//         <ReactQuill
//           theme="snow"
//           className="mt-3"
//           onChange={(value) => formik.setFieldValue("description", value)}
//           value={formik.values.description}
//         />
//         <div className="text-red-500 mt-2">{formik.touched.description && formik.errors.description}</div>

//         <CustomInput
//           type="number"
//           placeholder="Enter Product Price"
//           name="price"
//           onCh={formik.handleChange("price")}
//           val={formik.values.price}
//         />
//         <div className="text-red-500 mt-2">{formik.touched.price && formik.errors.price}</div>

//         <select
//           className="w-full py-3 text-xl outline-none border rounded-xl px-5 mt-5 pe-5"
//           name="brand"
//           onChange={formik.handleChange("brand")}
//           value={formik.values.brand}
//         >
//           <option>Select a brand</option>
//           {brandState.map((item, j) => (
//             <option key={j} value={item.title}>{item.title}</option>
//           ))}
//         </select>
//         <div className="text-red-500 mt-2">{formik.touched.brand && formik.errors.brand}</div>

//         <select
//           className="w-full py-3 text-xl outline-none border rounded-xl px-5 mt-5 pe-5"
//           name="category"
//           onChange={formik.handleChange("category")}
//           value={formik.values.category}
//         >
//           <option>Select a Category</option>
//           {categoryState.map((item, j) => (
//             <option key={j} value={item.title}>{item.title}</option>
//           ))}
//         </select>
//         <div className="text-red-500 mt-2">{formik.touched.category && formik.errors.category}</div>

//         <select
//           className="w-full py-3 text-xl outline-none border rounded-xl px-5 mt-5 pe-5"
//           name="tags"
//           onChange={formik.handleChange("tags")}
//           value={formik.values.tags}
//         >
//           <option disabled>Select a Tag</option>
//           <option value="featured">Featured</option>
//           <option value="popular">Popular</option>
//           <option value="special">Special</option>
//         </select>
//         <div className="text-red-500 mt-2">{formik.touched.tags && formik.errors.tags}</div>

//         <Select
//           mode="multiple"
//           allowClear
//           className="w-full mt-5"
//           placeholder="Select colors"
//           value={formik.values.color}
//           onChange={handleColors}
//           options={colorOptions}
//         />
//         <div className="text-red-500 mt-2">{formik.touched.color && formik.errors.color}</div>

//         <CustomInput
//           type="number"
//           placeholder="Enter Quantity"
//           name="quantity"
//           onCh={formik.handleChange("quantity")}
//           val={formik.values.quantity}
//         />
//         <div className="text-red-500 mt-2">{formik.touched.quantity && formik.errors.quantity}</div>

//         <div className="bg-white border py-10 text-center mt-5">
//           <Dropzone onDrop={(acceptedFiles) => dispatch(uploadImg(acceptedFiles))}>
//             {({ getRootProps, getInputProps }) => (
//               <section>
//                 <div {...getRootProps()}>
//                   <input {...getInputProps()} />
//                   <p>Drag 'n' drop some files here, or click to select files</p>
//                 </div>
//               </section>
//             )}
//           </Dropzone>
//         </div>

//         <div className="flex gap-2 mt-5 flex-wrap">
//           {imgState && imgState.length > 0 ? (
//             imgState.map((img, index) => (
//               <div key={index} className="relative">
//                 <img src={img.url} className="w-[200px] h-[200px] object-cover" alt={`Uploaded ${index}`} />
//                 <button
//                   type="button"
//                   onClick={() => dispatch(delImg(img.public_id))}
//                   className="absolute text-white text-3xl font-bold right-2 top-2"
//                 >
//                   <RxCross2 />
//                 </button>
//               </div>
//             ))
//           ) : (
//             <p>No images uploaded yet</p>
//           )}
//         </div>

//         <button className="border rounded-xl my-5 px-4 py-2 bg-green-400" type="submit">
//           {isEdit ? "Update Product" : "Add Product"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;


import React, { useEffect, useState } from "react";
import "react-widgets/styles.css";
import CustomInput from "../Component/CustomInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { message, Upload } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../features/brand/brandSlice";
import { getProductCategory } from "../features/pcategory/pcategorySlice";
import { getColors } from "../features/color/colorSlice";
import { Select } from "antd";
import Dropzone from "react-dropzone";
import { delImg, uploadImg } from "../features/upload/uploadSlice";
import { RxCross2 } from "react-icons/rx";
import { createProduct, editProduct, updateProduct, resetState } from "../features/product/productSlice";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  price: Yup.number().required("Price is required"),
  brand: Yup.string().required("Brand is required"),
  category: Yup.string().required("Category is required"),
  tags: Yup.string().required("Tag is required"),
  color: Yup.array().min(1, "Pick at least one color").required("Color is required"),
  quantity: Yup.number().required("Quantity is required"),
});

const AddProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [color, setColor] = useState([]);

  const brandState = useSelector((state) => state.brand.brands);
  const categoryState = useSelector((state) => state.pCategory.pCategories);
  const colorState = useSelector((state) => state.color.colors);
  const imgState = useSelector((state) => state.upload.images);

  const {
    singleProduct,
    isSuccess,
    isError,
    isLoading,
    updatedProduct,
    createdProduct,
  } = useSelector((state) => state.product);

  const isEdit = Boolean(id);

  useEffect(() => {
    dispatch(getBrands());
    dispatch(getProductCategory());
    dispatch(getColors());
    if (isEdit) {
      dispatch(editProduct(id));
    }
  }, [id]);

  // Pre-fill image state when editing
  useEffect(() => {
    if (isEdit && singleProduct?.images) {
      dispatch({ type: "upload/uploadImages/fulfilled", payload: singleProduct.images });
    }
  }, [singleProduct]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: singleProduct?.title || "",
      description: singleProduct?.description || "",
      price: singleProduct?.price || "",
      brand: singleProduct?.brand || "",
      category: singleProduct?.category || "",
      tags: singleProduct?.tags || "",
      color: singleProduct?.color || [],
      quantity: singleProduct?.quantity || "",
      images: singleProduct?.images || [],
    },
    validationSchema,
    onSubmit: (values) => {
      const payload = { ...values, images: imgState };
      if (isEdit) {
        dispatch(updateProduct({ id, productData: payload }));
      } else {
        dispatch(createProduct(payload));
      }
    },
  });

  useEffect(() => {
    if (isSuccess && createdProduct && !isEdit) {
      toast.success("Product successfully added");
      formik.resetForm();
      setColor([]);
      setTimeout(() => {
        dispatch(resetState());
        navigate("/admin/list-product");
      }, 2000);
    }

    if (isSuccess && updatedProduct && isEdit) {
      toast.success("Product successfully updated");
      setTimeout(() => {
        dispatch(resetState());
        navigate("/admin/list-product");
      }, 2000);
    }

    if (isError) {
      toast.error("Something went wrong");
    }
  }, [isSuccess, isError, isLoading]);

  const colorOptions = colorState.map((c) => ({
    label: c.title,
    value: c._id,
  }));

  const handleColors = (e) => {
    setColor(e);
    formik.setFieldValue("color", e);
  };

  return (
    <div>
      <h3 className="mb-4 text-2xl font-semibold">{isEdit ? "Edit Product" : "Add Product"}</h3>
      <form onSubmit={formik.handleSubmit}>
        <CustomInput
          type="text"
          placeholder="Enter Product title"
          name="title"
          onCh={formik.handleChange("title")}
          val={formik.values.title}
        />
        <div className="text-red-500 mt-2">{formik.touched.title && formik.errors.title}</div>

        <ReactQuill
          theme="snow"
          className="mt-3"
          onChange={(value) => formik.setFieldValue("description", value)}
          value={formik.values.description}
        />
        <div className="text-red-500 mt-2">{formik.touched.description && formik.errors.description}</div>

        <CustomInput
          type="number"
          placeholder="Enter Product Price"
          name="price"
          onCh={formik.handleChange("price")}
          val={formik.values.price}
        />
        <div className="text-red-500 mt-2">{formik.touched.price && formik.errors.price}</div>

        <select
          className="w-full py-3 text-xl outline-none border rounded-xl px-5 mt-5"
          name="brand"
          onChange={formik.handleChange("brand")}
          value={formik.values.brand}
        >
          <option>Select a brand</option>
          {brandState.map((item, j) => (
            <option key={j} value={item.title}>{item.title}</option>
          ))}
        </select>
        <div className="text-red-500 mt-2">{formik.touched.brand && formik.errors.brand}</div>

        <select
          className="w-full py-3 text-xl outline-none border rounded-xl px-5 mt-5"
          name="category"
          onChange={formik.handleChange("category")}
          value={formik.values.category}
        >
          <option>Select a Category</option>
          {categoryState.map((item, j) => (
            <option key={j} value={item.title}>{item.title}</option>
          ))}
        </select>
        <div className="text-red-500 mt-2">{formik.touched.category && formik.errors.category}</div>

        <select
          className="w-full py-3 text-xl outline-none border rounded-xl px-5 mt-5"
          name="tags"
          onChange={formik.handleChange("tags")}
          value={formik.values.tags}
        >
          <option disabled>Select a Tag</option>
          <option value="featured">Featured</option>
          <option value="popular">Popular</option>
          <option value="special">Special</option>
        </select>
        <div className="text-red-500 mt-2">{formik.touched.tags && formik.errors.tags}</div>

        <Select
          mode="multiple"
          allowClear
          className="w-full mt-5"
          placeholder="Select colors"
          value={formik.values.color}
          onChange={handleColors}
          options={colorOptions}
        />
        <div className="text-red-500 mt-2">{formik.touched.color && formik.errors.color}</div>

        <CustomInput
          type="number"
          placeholder="Enter Quantity"
          name="quantity"
          onCh={formik.handleChange("quantity")}
          val={formik.values.quantity}
        />
        <div className="text-red-500 mt-2">{formik.touched.quantity && formik.errors.quantity}</div>

        <div className="bg-white border py-10 text-center mt-5">
          <Dropzone onDrop={(acceptedFiles) => dispatch(uploadImg(acceptedFiles))}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p>Drag 'n' drop some files here, or click to select files</p>
                </div>
              </section>
            )}
          </Dropzone>
        </div>

        <div className="flex gap-2 mt-5 flex-wrap">
          {imgState && imgState.length > 0 ? (
            imgState.map((img, index) => (
              <div key={index} className="relative">
                <img src={img.url} className="w-[200px] h-[200px] object-cover" alt={`Uploaded ${index}`} />
                <button
                  type="button"
                  onClick={() => dispatch(delImg(img.public_id))}
                  className="absolute text-white text-3xl font-bold right-2 top-2"
                >
                  <RxCross2 />
                </button>
              </div>
            ))
          ) : (
            <p>No images uploaded yet</p>
          )}
        </div>

        <button className="border rounded-xl my-5 px-4 py-2 bg-green-400" type="submit">
          {isEdit ? "Update Product" : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;

