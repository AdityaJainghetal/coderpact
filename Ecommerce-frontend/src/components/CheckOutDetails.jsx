// import React, { useEffect, useState } from 'react'
// import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/breadcrumbs";
// import { MdOutlineArrowBackIos } from 'react-icons/md';
// import { Link } from 'react-router-dom';
// import CustomInput from './CustomInput';
// import { useDispatch, useSelector } from 'react-redux';
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import axios from 'axios'
// import {config} from '../utils/config'
// import { createOrder } from '../features/user/userSlice';


// let shippingSchema = Yup.object().shape({
//   firstName: Yup.string().required("FirstName is required"),
//   lastName: Yup.string().required("LastName is required"),
//   address: Yup.string().required("Address is required"),
//   city: Yup.string().required("City is required"),
//   state: Yup.string().required("State is required"),
//   other: Yup.string(),
//   pincode: Yup.number().required("PinCode is required"),
//   country: Yup.string().required("country is required"),
 
// });

// const CheckOutDetails = () => {
//   const dispatch = useDispatch()
//   const cartState = useSelector(state => state.auth.userCart)
//   const [cartTotal,setCartTotal] = useState(null)
//   const [productDetail,setProductDetail] = useState([])

//   useEffect(()=>{
//     let tot = 0
//     let items= []
//     for(let idx = 0;idx < cartState?.length;idx++){
//       tot += cartState[idx]?.price * cartState[idx]?.quantity
//       items.push({
//         product:cartState[idx]?.productId._id,
//         quantity:cartState[idx]?.quantity,
//         color:cartState[idx]?.color._id,
//         price:cartState[idx]?.price
//       })
//     }
    
//     setProductDetail(items)
//     setCartTotal(tot)
//   },[cartState])
  
  
//   const formik = useFormik({
//     initialValues: {
//       firstName:"",
//       lastName:"",
//       address:"",
//       city:"",
//       state:"",
//       other:"",
//       country:"",
//       pincode:""
//     },
//     validationSchema: shippingSchema,
//     onSubmit: (values) => {
//       checkOutHandler(values)
        
//     },
//   });
//   const loadScript = (src)=>{
//     return new Promise((resolve)=>{
//       const script = document.createElement("script")
//       script.src = src
//       script.onload = ()=>{
//         resolve(true)
//       }
//       script.onerror = () =>{
//         resolve(false)
//       }

//       document.body.appendChild(script)
//     })
//   }

//   const checkOutHandler = async (shippingInfo)=>{
//     const response = await loadScript("https://checkout.razorpay.com/v1/checkout.js")
//     if(!response){
//       alert("razorPay SDK failed to load")
//       return
//     }

//     const result = await axios.post('http://localhost:5000/api/user/order/checkout',{amount:cartTotal},config)
//     if(!result){
//       alert("something went wrong")
//       return 
//     }

//     const {amount,id:order_id,currency} = result.data.order
//     console.log(amount)
//     const options = {
//       key: "rzp_test_o3vkPO5n8pMXdo", // Enter the Key ID generated from the Dashboard
//       amount: amount,
//       currency: currency,
//       name: "Digitic",
//       description: "Test Transaction",
     
//       order_id: order_id,
//       handler: async function (response) {
//           const data = {
//               orderCreationId: order_id,
//               razorpayPaymentId: response.razorpay_payment_id,
//               razorpayOrderId: response.razorpay_order_id,
//               // razorpaySignature: response.razorpay_signature,
//           };

//           const result = await axios.post("http://localhost:5000/api/user/order/paymentVerification", data,config);  

//             console.log(shippingInfo)

//             dispatch(createOrder({
//               totalPrice:cartTotal,
//               totalPriceAfterDiscount:cartTotal,
//               orderItems: productDetail,
//               shippingInfo,
//               paymentInfo:{
//                 razorpayPaymentId: response.razorpay_payment_id,
//                 razorpayOrderId: response.razorpay_order_id,
//               },
//             }));
//         },

//       prefill: {
//           name: "Digitic",
//           email: "digitic@example.com",
//           contact: "9999999999",
//       },
//       notes: {
//           address: "digitic Corporate Office",
//       },
//       theme: {
//           color: "#61dafb",
//       },
//   };

//     const paymentObject = new window.Razorpay(options)
//     paymentObject.open()
//   }
//   // console.log(paymentInfo)

//   return (
//     <div className='w-full md:w-[50%] bg-white border-2 py-10 px-5'>
//         <h2 className='text-3xl font-medium text-black'>Digitic</h2>
//         <Breadcrumbs className='mt-5'>
//             <BreadcrumbItem>Cart</BreadcrumbItem>
//             <BreadcrumbItem>Information</BreadcrumbItem>
//             <BreadcrumbItem>Shipping</BreadcrumbItem>
//             <BreadcrumbItem>Payment</BreadcrumbItem>
//         </Breadcrumbs>
//         <h2 className='text-2xl mt-5 text-black'>Contact Information</h2>
//         <p className='text-xl mt-2 text-gray-400'>adityajainghetal@gmail.com</p>
//         <h2 className='text-2xl mt-5 text-black'>Shipping Address</h2>
//         <form action="" onSubmit={formik.handleSubmit}  className='mb-10'>
//           <select className='w-full p-3 text-xl outline-none border rounded-xl px-5 mt-5'>
//             <option>Saved Address</option>
//           </select>
//           <select className='w-full p-3 text-xl outline-none border rounded-xl px-5 mt-5' name='country'
//               onChange={formik.handleChange("country")}
//               value={formik.values.country}>
//             <option value="India">India</option>
//             <option value="China" >China</option>
//           </select>
//           <div className="text-red-400 ms-2 mt-2 text-sm">
//             {formik.touched.country && formik.errors.country ? (
//               <div>{formik.errors.country}</div>
//             ) : null}
//           </div>
//           <div className='flex gap-2'>
//             <CustomInput type="text" placeholder='First Name'  name='firstName'
//               onCh={formik.handleChange("firstName")}
//               val={formik.values.firstName}  />
//                <div className="text-red-400 ms-2 mt-2 text-sm">
//             {formik.touched.firstName && formik.errors.firstName ? (
//               <div>{formik.errors.firstName}</div>
//             ) : null}
//           </div>
//             <CustomInput type="text" placeholder='Last Name' name='lastName'
//               onCh={formik.handleChange("lastName")}
//               val={formik.values.lastName} />
//                <div className="text-red-400 ms-2 mt-2 text-sm">
//             {formik.touched.lastName && formik.errors.lastName ? (
//               <div>{formik.errors.lastName}</div>
//             ) : null}
//           </div>
//           </div>
//           <CustomInput type="text" placeholder='Address' name='address'
//               onCh={formik.handleChange("address")}
//               val={formik.values.address} />
//                <div className="text-red-400 ms-2 mt-2 text-sm">
//             {formik.touched.address && formik.errors.address ? (
//               <div>{formik.errors.address}</div>
//             ) : null}
//           </div>
//           <CustomInput type="text" placeholder='Apartment City, etc,(optional'  name='other'
//               onCh={formik.handleChange("other")}
//               val={formik.values.other}/>
//                <div className="text-red-400 ms-2 mt-2 text-sm">
//             {formik.touched.other && formik.errors.other ? (
//               <div>{formik.errors.other}</div>
//             ) : null}
//           </div>
//           <div className='flex gap-2'>
//             <CustomInput type="text" placeholder='city' name='city'
//               onCh={formik.handleChange("city")}
//               val={formik.values.city}  />
//                <div className="text-red-400 ms-2 mt-2 text-sm">
//             {formik.touched.city && formik.errors.city ? (
//               <div>{formik.errors.city}</div>
//             ) : null}
//           </div>
//             <select className='w-full p-3 text-xl outline-none border rounded-xl px-5 mt-5' name='state'
//               onChange={formik.handleChange("state")}
//               value={formik.values.state} >
//             <option value="State">State</option>
//             <option value="MP">MP</option>
//             </select>
//             <div className="text-red-400 ms-2 mt-2 text-sm">
//             {formik.touched.state && formik.errors.state ? (
//               <div>{formik.errors.state}</div>
//             ) : null}
//           </div>
//             <CustomInput type="text" placeholder='Zip Code' name='pincode'
//               onCh={formik.handleChange("pincode")}
//               val={formik.values.pincode} />
//                <div className="text-red-400 ms-2 mt-2 text-sm">
//             {formik.touched.pincode && formik.errors.pincode ? (
//               <div>{formik.errors.pincode}</div>
//             ) : null}
//           </div>
//           </div>

//           <div className='flex justify-between md:items-center mt-10 flex-col md:flex-row gap-5 md:gap-0 items-start'>
//             <Link to='/cart' className='flex gap-2 items-center text-xl'> <MdOutlineArrowBackIos /> Return To Cart </Link>
        
//             <button className='uppercase hover:bg-amber-500 bg-[#232F3E] text-white px-7 py-4 rounded-[30px]' type='submit'>Buy Now</button>
//           </div>
//         </form>
//     </div>
//   )
// }

// export default CheckOutDetails
import React, { useEffect, useState } from 'react';
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { Link } from 'react-router-dom';
import CustomInput from './CustomInput';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import { config } from '../utils/config';
import { createOrder } from '../features/user/userSlice';

const shippingSchema = Yup.object().shape({
  firstName: Yup.string().required("FirstName is required"),
  lastName: Yup.string().required("LastName is required"),
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  other: Yup.string().notRequired(),
  pincode: Yup.number().required("PinCode is required"),
  country: Yup.string().required("Country is required"),
});

const CheckOutDetails = () => {
  const dispatch = useDispatch();
  const cartState = useSelector(state => state.auth.userCart);
  const [cartTotal, setCartTotal] = useState(0);
  const [productDetail, setProductDetail] = useState([]);

  useEffect(() => {
    let tot = 0;
    let items = [];
    for (let idx = 0; idx < cartState?.length; idx++) {
      tot += cartState[idx]?.price * cartState[idx]?.quantity;
      items.push({
        product: cartState[idx]?.productId.id,
        quantity: cartState[idx]?.quantity,
        color: cartState[idx]?.color,
        price: cartState[idx]?.price
      });
    }
    setProductDetail(items);
    setCartTotal(tot);
  }, [cartState]);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      other: "",
      country: "",
      pincode: ""
    },
    validationSchema: shippingSchema,
    onSubmit: (values) => {
      checkOutHandler(values);
    },
  });

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const checkOutHandler = async (shippingInfo) => {
    if (!cartTotal || cartTotal <= 0) {
      alert("Cart total must be greater than zero to proceed with checkout.");
      return;
    }

    const response = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
    if (!response) {
      alert("Razorpay SDK failed to load");
      return;
    }

    try {
      const result = await axios.post(
        'http://localhost:5000/api/user/order/checkout',
        { amount: cartTotal },
        config
      );

      if (!result || !result.data?.order) {
        alert("Something went wrong during checkout");
        return;
      }

      const { amount, id: order_id, currency } = result.data.order;

      const options = {
        key: "rzp_test_o3vkPO5n8pMXdo",
        amount,
        currency,
        name: "Digitic",
        description: "Test Transaction",
        order_id,
        handler: async function (response) {
          const data = {
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
          };

          await axios.post("http://localhost:5000/api/user/order/paymentVerification", data, config);

          dispatch(createOrder({
            totalPrice: cartTotal,
            totalPriceAfterDiscount: cartTotal,
            orderItems: productDetail,
            shippingInfo,
            paymentInfo: {
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
            },
          }));
        },
        prefill: {
          name: "Digitic",
          email: "digitic@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Digitic Corporate Office",
        },
        theme: {
          color: "#61dafb",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error("Checkout Error:", error);
      alert("Checkout failed. Please try again.");
    }
  };

  return (
    <div className='w-full md:w-[50%] bg-white border-2 py-10 px-5'>
      <h2 className='text-3xl font-medium text-black'>Digitic</h2>
      <Breadcrumbs className='mt-5'>
        <BreadcrumbItem>Cart</BreadcrumbItem>
        <BreadcrumbItem>Information</BreadcrumbItem>
        <BreadcrumbItem>Shipping</BreadcrumbItem>
        <BreadcrumbItem>Payment</BreadcrumbItem>
      </Breadcrumbs>

      <h2 className='text-2xl mt-5 text-black'>Contact Information</h2>
      <p className='text-xl mt-2 text-gray-400'>adityajainghetal@gmail.com</p>

      <h2 className='text-2xl mt-5 text-black'>Shipping Address</h2>
      <form onSubmit={formik.handleSubmit} className='mb-10'>

        <select className='w-full p-3 text-xl outline-none border rounded-xl px-5 mt-5'>
          <option>Saved Address</option>
        </select>

        <select
          className='w-full p-3 text-xl outline-none border rounded-xl px-5 mt-5'
          name='country'
          onChange={formik.handleChange}
          value={formik.values.country}>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="China">China</option>
        </select>
        {formik.touched.country && formik.errors.country && (
          <div className="text-red-400 ms-2 mt-2 text-sm">{formik.errors.country}</div>
        )}

        <div className='flex gap-2'>
          <CustomInput type="text" placeholder='First Name' name='firstName'
            onCh={formik.handleChange} val={formik.values.firstName} />
          {formik.touched.firstName && formik.errors.firstName && (
            <div className="text-red-400 ms-2 mt-2 text-sm">{formik.errors.firstName}</div>
          )}

          <CustomInput type="text" placeholder='Last Name' name='lastName'
            onCh={formik.handleChange} val={formik.values.lastName} />
          {formik.touched.lastName && formik.errors.lastName && (
            <div className="text-red-400 ms-2 mt-2 text-sm">{formik.errors.lastName}</div>
          )}
        </div>

        <CustomInput type="text" placeholder='Address' name='address'
          onCh={formik.handleChange} val={formik.values.address} />
        {formik.touched.address && formik.errors.address && (
          <div className="text-red-400 ms-2 mt-2 text-sm">{formik.errors.address}</div>
        )}

        <CustomInput type="text" placeholder='Apartment, suite, etc. (optional)' name='other'
          onCh={formik.handleChange} val={formik.values.other} />

        <div className='flex gap-2'>
          <CustomInput type="text" placeholder='City' name='city'
            onCh={formik.handleChange} val={formik.values.city} />
          {formik.touched.city && formik.errors.city && (
            <div className="text-red-400 ms-2 mt-2 text-sm">{formik.errors.city}</div>
          )}

          <select
            className='w-full p-3 text-xl outline-none border rounded-xl px-5 mt-5'
            name='state'
            onChange={formik.handleChange}
            value={formik.values.state}>
            <option value="">Select State</option>
            <option value="MP">MP</option>
          </select>
          {formik.touched.state && formik.errors.state && (
            <div className="text-red-400 ms-2 mt-2 text-sm">{formik.errors.state}</div>
          )}

          <CustomInput type="text" placeholder='Zip Code' name='pincode'
            onCh={formik.handleChange} val={formik.values.pincode} />
          {formik.touched.pincode && formik.errors.pincode && (
            <div className="text-red-400 ms-2 mt-2 text-sm">{formik.errors.pincode}</div>
          )}
        </div>

        <div className='flex justify-between md:items-center mt-10 flex-col md:flex-row gap-5 md:gap-0 items-start'>
          <Link to='/cart' className='flex gap-2 items-center text-xl'>
            <MdOutlineArrowBackIos /> Return To Cart
          </Link>

          <button className='uppercase hover:bg-amber-500 bg-[#232F3E] text-white px-7 py-4 rounded-[30px]' type='submit'>
            Buy Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckOutDetails;


// import React, { useEffect, useState } from 'react';
// import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
// import { MdOutlineArrowBackIos } from 'react-icons/md';
// import { Link } from 'react-router-dom';
// import CustomInput from './CustomInput';
// import { useDispatch, useSelector } from 'react-redux';
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import axios from 'axios';
// import { config } from '../utils/config';
// import { createOrder } from '../features/user/userSlice';

// const shippingSchema = Yup.object().shape({
//   firstName: Yup.string().required("First Name is required"),
//   lastName: Yup.string().required("Last Name is required"),
//   address: Yup.string().required("Address is required"),
//   city: Yup.string().required("City is required"),
//   state: Yup.string().required("State is required"),
//   other: Yup.string(),
//   pincode: Yup.number().required("Pin Code is required"),
//   country: Yup.string().required("Country is required"),
// });

// const CheckOutDetails = () => {
//   const dispatch = useDispatch();
//   const cartState = useSelector(state => state.auth.userCart);
//   const [cartTotal, setCartTotal] = useState(0);
//   const [productDetail, setProductDetail] = useState([]);
//   const [loading, setLoading] = useState(false);


//   console.log(cartState)
//   useEffect(() => {
//     let total = 0;
//     let items = [];
//     if (cartState){
//       cartState.forEach(item => {
//         total += item.price * item.quantity;
//         items.push({
//           product: item.productId.id,
//           quantity: item.quantity,
//           color: item.color.id,
//           price: item.price
//         });
//       });
//     }
//     setProductDetail(items);
//     setCartTotal(total);
//   }, [cartState]);

//   const formik = useFormik({
//     initialValues: {
//       firstName: "",
//       lastName: "",
//       address: "",
//       city: "",
//       state: "",
//       other: "",
//       country: "",
//       pincode: ""
//     },
//     validationSchema: shippingSchema,
//     onSubmit: (values) => {
//       checkOutHandler(values);
//     },
//   });

//   const loadScript = (src) => {
//     return new Promise((resolve) => {
//       const script = document.createElement("script");
//       script.src = src;
//       script.onload = () => resolve(true);
//       script.onerror = () => resolve(false);
//       document.body.appendChild(script);
//     });
//   };

//   const checkOutHandler = async (shippingInfo) => {
//     setLoading(true);
//     const response = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
//     if (!response) {
//       alert("Razorpay SDK failed to load");
//       setLoading(false);
//       return;
//     }

//     try {
//       const result = await axios.post('http://localhost:5000/api/user/order/checkout', { amount: cartTotal }, config);
//       const { amount, id: order_id, currency } = result.data.order;

//       const options = {
//         key: "rzp_test_o3vkPO5n8pMXdo", // Enter the Key ID generated from the Dashboard
//         amount: amount,
//         currency: currency,
//         name: "Digitic",
//         description: "Test Transaction",
//         order_id: order_id,
//         handler: async function (response) {
//           const data = {
//             orderCreationId: order_id,
//             razorpayPaymentId: response.razorpay_payment_id,
//             razorpayOrderId: response.razorpay_order_id,
//           };

//           await axios.post("http://localhost:5000/api/user/order/paymentVerification", data, config);
//           dispatch(createOrder({
//             totalPrice: cartTotal,
//             totalPriceAfterDiscount: cartTotal,
//             orderItems: productDetail,
//  shippingInfo,
//             paymentInfo: {
//               razorpayPaymentId: response.razorpay_payment_id,
//               razorpayOrderId: response.razorpay_order_id,
//             },
//           }));
//           setLoading(false);
//         },
//         prefill: {
//           name: "Digitic",
//           email: "digitic@example.com",
//           contact: "9999999999",
//         },
//         notes: {
//           address: "Digitic Corporate Office",
//         },
//         theme: {
//           color: "#61dafb",
//         },
//       };

//       const paymentObject = new window.Razorpay(options);
//       paymentObject.open();
//     } catch (error) {
//       alert("Something went wrong during checkout");
//       setLoading(false);
//     }
//   };

//   return (
//     <div className='w-full md:w-[50%] bg-white border-2 py-10 px-5'>
//       <h2 className='text-3xl font-medium text-black'>Digitic</h2>
//       <Breadcrumbs className='mt-5'>
//         <BreadcrumbItem>Cart</BreadcrumbItem>
//         <BreadcrumbItem>Information</BreadcrumbItem>
//         <BreadcrumbItem>Shipping</BreadcrumbItem>
//         <BreadcrumbItem>Payment</BreadcrumbItem>
//       </Breadcrumbs>
//       <h2 className='text-2xl mt-5 text-black'>Contact Information</h2>
//       <p className='text-xl mt-2 text-gray-400'>adityajainghetal@gmail.com</p>
//       <h2 className='text-2xl mt-5 text-black'>Shipping Address</h2>
//       <form onSubmit={formik.handleSubmit} className='mb-10'>
//         <select className='w-full p-3 text-xl outline-none border rounded-xl px-5 mt-5'>
//           <option>Saved Address</option>
//         </select>
//         <select className='w-full p-3 text-xl outline-none border rounded-xl px-5 mt-5' name='country'
//           onChange={formik.handleChange("country")}
//           value={formik.values.country}>
//           <option value="India">India</option>
//           <option value="China">China</option>
//         </select>
//         <div className="text-red-400 ms-2 mt-2 text-sm">
//           {formik.touched.country && formik.errors.country ? (
//             <div>{formik.errors.country}</div>
//           ) : null}
//         </div>
//         <div className='flex gap-2'>
//           <CustomInput type="text" placeholder='First Name' name='firstName'
//             onChange={formik.handleChange("firstName")}
//             value={formik.values.firstName} />
//           <div className="text-red-400 ms-2 mt-2 text-sm">
//             {formik.touched.firstName && formik.errors.firstName ? (
//               <div>{formik.errors.firstName}</div>
//             ) : null}
//           </div>
//           <CustomInput type="text" placeholder='Last Name' name='lastName'
//             onChange={formik.handleChange("lastName")}
//             value={formik.values.lastName} />
//           <div className="text-red-400 ms-2 mt-2 text-sm">
//             {formik.touched.lastName && formik.errors.lastName ? (
//               <div>{formik.errors.lastName}</div>
//             ) : null}
//           </div>
//         </div>
//         <CustomInput type="text" placeholder='Address' name='address'
//           onChange={formik.handleChange("address")}
//           value={formik.values.address} />
//         <div className="text-red-400 ms-2 mt-2 text-sm">
//           {formik.touched.address && formik.errors.address ? (
//             <div>{formik.errors.address}</div>
//           ) : null}
//         </div>
//         <CustomInput type="text" placeholder='Apartment, City, etc. (optional)' name='other'
//           onChange={formik.handleChange("other")}
//           value={formik.values.other} />
//         <div className="text-red-400 ms-2 mt-2 text-sm">
//           {formik.touched.other && formik.errors.other ? (
//             <div>{formik.errors.other}</div>
//           ) : null}
//         </div>
//         <div className='flex gap-2'>
//           <CustomInput type="text" placeholder='City' name='city'
//             onChange={formik.handleChange("city")}
//             value={formik.values.city} />
//           <div className="text-red-400 ms-2 mt-2 text-sm">
//             {formik.touched.city && formik.errors.city ? (
//               <div>{formik.errors.city}</div>
//             ) : null}
//           </div>
//           <select className='w-full p-3 text-xl outline-none border rounded-xl px-5 mt-5' name='state'
//             onChange={formik.handleChange("state")}
//             value ={formik.values.state}>
//             <option value="State">State</option>
//             <option value="MP">MP</option>
//           </select>
//           <div className="text-red-400 ms-2 mt-2 text-sm">
//             {formik.touched.state && formik.errors.state ? (
//               <div>{formik.errors.state}</div>
//             ) : null}
//           </div>
//           <CustomInput type="text" placeholder='Zip Code' name='pincode'
//             onChange={formik.handleChange("pincode")}
//             value={formik.values.pincode} />
//           <div className="text-red-400 ms-2 mt-2 text-sm">
//             {formik.touched.pincode && formik.errors.pincode ? (
//               <div>{formik.errors.pincode}</div>
//             ) : null}
//           </div>
//         </div>

//         <div className='flex justify-between md:items-center mt-10 flex-col md:flex-row gap-5 md:gap-0 items-start'>
//           <Link to='/cart' className='flex gap-2 items-center text-xl'> <MdOutlineArrowBackIos /> Return To Cart </Link>
//           <button className='uppercase hover:bg-amber-500 bg-[#232F3E] text-white px-7 py-4 rounded-[30px]' type='submit' disabled={loading}>
//             {loading ? 'Processing...' : 'Buy Now'}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default CheckOutDetails;