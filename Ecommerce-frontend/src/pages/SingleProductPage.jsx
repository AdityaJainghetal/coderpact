// import React, { useEffect, useState } from "react";
// import BreadCrumb from "../components/BreadCrumb";
// import { Card, CardBody,Image } from "@nextui-org/react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import HomeFeaturedProducts from "../components/HomeData/HomeFeaturedProducts";
// import Ratings from "../components/Ratings";
// import { CiHeart } from "react-icons/ci";
// import { IoIosGitCompare } from "react-icons/io";
// import { useDispatch, useSelector } from "react-redux";
// import { addRating, addToWishList, getSingleProduct } from "../features/product/productSlice";
// import { addToCart, getUserCart, resetState } from "../features/user/userSlice";
// import { toast } from "react-toastify";
// import ReactStars from "react-rating-stars-component";


// const SingleProductPage = () => {
//   const [color,setColor] = useState(null)
//   const [quantity,setQuantity] = useState(1)
//   const [inCart,setInCart] = useState(false)
//   const [totalRating,setTotaRating] = useState(0)
//   const [isActive, setIsActive] = useState(false);
//   const dispatch = useDispatch()
//   const params = useParams()
//   const navigate = useNavigate()
//   const [showReview,setShowReview] = useState(false)

//   const singleProduct = useSelector(state => state.product.singleProduct)
//   const cartState = useSelector(state => state.auth.userCart)

//   useEffect(()=>{
//     dispatch(getSingleProduct(params.id))
//     setTotaRating(parseFloat(singleProduct?.totalrating))
//     dispatch(getUserCart())
//   },[])

//   const addtowishlist = () => {
//     dispatch(addToWishList(params.id))
//     setIsActive(!isActive)
//   }

//   useEffect(()=>{
//     for(let i = 0;i < cartState?.length;i++){
//       if(params.id == cartState[i]?.productId?._id){
//         setInCart(true)
//       }
//     }
//   },[])

//   const addProductToCart = ()=>{
//     const cartData = {
//       productId : params.id,
//       quantity:quantity,
//       price:singleProduct.price,
//       color:color
//     }
//     // if(color == null) {toast.error("Please choose color")}
//     // else{
//       dispatch(addToCart(cartData))
//       navigate('/cart')
//     // }
//   }

//     const copyToClipboard = (text) => {
//         console.log('text', text)
//         var textField = document.createElement('textarea')
//         textField.innerText = text
//         document.body.appendChild(textField)
//         textField.select()
//         document.execCommand('copy')
//         textField.remove()
//       }


//       const [star,setStar] = useState(null)
//       const [comment,setComment] = useState(null)
      
//       const addRatingToProduct = (e)=>{
//         if(star== null) {
//           toast.error("Please Rate the product")
//           return false
//         }
//         else if(comment== null) {
//           toast.error("Please Write a review product")
//           return false
//         }else{
//           dispatch(addRating({star,comment,prodId:singleProduct?._id}))
//           dispatch(getSingleProduct(params.id))
//         }

//       }


//       console.log(singleProduct);
//   return (
//     <>
//       <BreadCrumb title={singleProduct?.title} />
//       <div className="w-full px-[5%] py-10 bg-[#F5F5F7]">
//         <Card
//           shadow="lg"
//           className="w-full flex md:flex-row flex-col gap-5 card-hover p-5"
//         >
//           <CardBody className="overflow-visible p-5 relative bg-white rounded-xl">
//           {singleProduct?.images.map(imsssage, index)=>{
//             <Image
//               shadow="lg"
//               radius="lg"
//               width="100%"
//               alt=""
//               className="w-full object-contain md:h-[70vh]  rounded-xl border"
//               src={imsssage}
//             />
//           }
//           }
            

//             <div className="mt-2 flex gap-2 justify-between w-full">
//               <Image
//                 shadow="lg"
//                 radius="lg"
//                 alt=""
//                 className="object-cover rounded-md border"
//                 src={singleProduct?.images}
//               />
//               <Image
//                 shadow="lg"
//                 radius="lg"
//                 alt=""
//                 className="object-cover rounded-md border"
//                 src={singleProduct?.images}
//               />
//             </div>  
//             <div className="mt-2 flex gap-2 justify-between w-full">
//               <Image
//                 shadow="lg"
//                 radius="lg"
//                 alt=""
//                 className="object-cover rounded-md border"
//                 src={singleProduct?.images}
//               />
//               <Image
//                 shadow="lg"
//                 radius="lg"
//                 alt=""
//                 className="object-cover rounded-md border"
//                 src={singleProduct?.images}
//               />
//             </div>           
//           </CardBody>
//           <CardBody className="text-gray-400 bg-white h-max pb-20 rounded-xl">
//             <h4 className="font-bold text-xl text-start text-black">
//             {singleProduct?.title}
//             </h4>
//             <h2 className="font-medium uppercase my-5 text-black">
//             ${singleProduct?.price}{" "}
//               <span className="text-gray-400 line-through">${singleProduct?.price +10}</span>
//             </h2>
//             <div className="flex items-center gap-2 text-gray-400">
//                 <Ratings rat={totalRating}/>
//                 <p>[{singleProduct?.ratings.length}]</p>
//             </div>
//             <a href='#review' className="mt-2 border-b pb-2">Write a Review</a>
//             <p className="mt-5"><span className="text-black font-medium">Type : </span>{singleProduct?.category}</p>
//             <p className="mt-5"><span className="text-black font-medium">Brand : </span>{singleProduct?.brand}</p>
//             <p className="mt-5"><span className="text-black font-medium">Categories : </span>Airpods, Computer and Laptops, Headphones, Smart Phones, Smart Watches, Computer, Telivision</p>
//             <p className="mt-5"><span className="text-black font-medium">Tags : </span>{singleProduct?.tags}</p>
//             <p className="mt-5"><span className="text-black font-medium">SKU : </span>SKU027</p>
//             <p className="mt-5"><span className="text-black font-medium">Availability : </span>{singleProduct?.quantity} In Stock</p>
//             <div className="mt-5">
//                 <p className="text-black font-medium mb-3">Size : </p>
//                 <span className="px-3 py-1 border-2 border-gray-300 me-2">S</span>
//                 <span className="px-3 py-1 border-2 border-gray-300">L</span>
//             </div>
//             <div className="mt-5">
//                 <p className="text-black font-medium mb-3">Color : </p>
//                 <ul className='flex flex-wrap gap-2 mt-2'>
//                     {singleProduct?.color?.map((col)=>{

//                       return <li onClick={()=> setColor(col._id)} className={`w-9 h-9 rounded-full`} style={{ backgroundColor: col.title }}></li>
//                     })}
//                 </ul>
//             </div>
//             <div className="mt-5 flex flex-col md:flex-row gap-5 md:items-center items-start">
//                 <p className="text-black font-medium">Quantity : </p>
//                 <input type="number"
//                     min={1}
//                     max={10}
//                     className="p-1 border-2 text-black outline-none"
//                     onChange={(e) => setQuantity(e.target.value)}
//                     value={quantity}
//                  />
//                  <button onClick={()=> inCart ? navigate('/cart') : addProductToCart()} className="uppercase bg-[#232F3E] text-white px-8 py-3 rounded-[30px] w-max">
//                      {inCart ? "Go To Cart" : "Add To Cart "}
//                 </button >
//                 <Link className="uppercase bg-amber-500 text-black px-8 py-3 rounded-[30px] w-max">
//                      Buy It Now
//                 </Link>
//             </div>
//             <div className="mt-5 flex gap-5 items-center text-black mt-12">
//                 <div className="flex gap-2 items-center">
//                     <CiHeart className={`text-2xl ${isActive? 'text-red-400' : ''}`} onClick={()=> addtowishlist()}/>
//                     <p className="capitalize">{isActive ? 'Remove from wishlist':'Add To Wishlist'}</p>
//                 </div>
//                 {/* <div className="flex gap-2 items-center">
//                     <IoIosGitCompare className="text-2xl"/>
//                     <p className="capitalize">Add to compare</p>
//                 </div> */}
                
//             </div>
//             <p className="my-6"> <span className="text-black font-medium">Shiping & Returns : &nbsp; </span>Free shiping and returns are available on all orders we ship all US Domestic orders with in <span className="text-black">5-10 business days!</span></p>
//             <div className="flex gap-5 items-center">
//                 <p className="text-black font-medium"> Product Link :</p>
//                 <a href="javascript:void(0)" onClick={()=> copyToClipboard(singleProduct?.images[0]?.url)}>Copy Product Link</a>
//             </div>

            
//           </CardBody>
//         </Card>
//         <h2 className="mt-10 mb-5 font-bold text-xl">Description</h2>
//         <p className="w-full bg-white p-5 text-gray-400" dangerouslySetInnerHTML={{__html:singleProduct?.description}}>
           
//         </p>
//         {/* <h2 className="mt-10 mb-5 font-bold text-xl" id="review">Reviews</h2>
//         <div className="w-full bg-white p-5 text-gray-400">
//             <p id="review">Customer Reviews</p>
//             <div className="flex items-center gap-2"><Ratings rat={totalRating}/> <p>Based on {singleProduct?.ratings?.length} review</p></div>
//             {showReview? <p className="text-end underline pb-3 cursor-pointer" onClick={()=> setShowReview(false)}>Hide review</p> : <p className="text-end underline pb-3 cursor-pointer" onClick={()=> setShowReview(true)}>Write A review</p>}
//             {showReview ? <form onSubmit={(e) => addRatingToProduct(e)} action="" className="w-full bg-gray-100 flex flex-col gap-2 px-[10%] py-5">
//              <ReactStars
//                 count={5}
//                 value={star}
//                 onChange={(e) => {setStar(e)}}
//                 size={24}
//                 edit={true}
//                 activeColor="#ffd700"
//               />
//             <textarea 
//               name="comment" 
//               id=""
//               rows='4'
//               placeholder="Comments"
//               className="w-full outline-none"
//               value={comment}
//               onChange={(e)=> setComment(e.target.value)}
//             ></textarea> <br />
//             <button className='uppercase bg-[#232F3E] hover:bg-amber-500 text-white px-7 py-3 rounded-[30px] w-max' type="submit">Submit</button>
//             </form> : ""}
            

//            { singleProduct?.ratings.map((items,idx)=>{
//             return  <div className="border-t py-3">
//             <Ratings rat={items.star}/>
//             <h2 className="text-black font-semibold">Good</h2>
//             <p className="text-black font-semibold">User <span className="text-gray-400 font-light">on</span> Aug 29, 2021</p>
//             <p className="mt-5 capitalize">{items.comment}</p>
//             <p  className="text-end underline">Report InAppropriate</p>
//         </div>
//            })
            
//            }

//             <div className="w-[97%] ms-10  bg-[#F5F5F7] p-5">
//                 <h2 className="text-black">-Digitic</h2>
//                 <p>Thank You For Your Purchase. Please let us know if we can do anything else for you.</p>
//             </div>
//         </div> */}
       
//       </div>
      
//       <HomeFeaturedProducts/>
    
    
//     </>
//   );
// };

// export default SingleProductPage;



import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import { Card, CardBody, Image } from "@nextui-org/react";
import { Link, useNavigate, useParams } from "react-router-dom";
import HomeFeaturedProducts from "../components/HomeData/HomeFeaturedProducts";
import Ratings from "../components/Ratings";
import { CiHeart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import {
  addRating,
  addToWishList,
  getSingleProduct,
} from "../features/product/productSlice";
import {
  addToCart,
  getUserCart,
} from "../features/user/userSlice";
import { toast } from "react-toastify";

const SingleProductPage = () => {
  const [color, setColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [inCart, setInCart] = useState(false);
  const [totalRating, setTotalRating] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [star, setStar] = useState(null);
  const [comment, setComment] = useState(null);

  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const singleProduct = useSelector((state) => state.product.singleProduct);
  const cartState = useSelector((state) => state.auth.userCart);

  useEffect(() => {
    dispatch(getSingleProduct(params.id));
    dispatch(getUserCart());
  }, [params.id]);

  useEffect(() => {
    if (singleProduct?.images?.length > 0) {
      setSelectedImage(singleProduct.images[0]);
      setTotalRating(parseFloat(singleProduct?.totalrating || 0));
    }
  }, [singleProduct]);

  useEffect(() => {
    for (let i = 0; i < cartState?.length; i++) {
      if (params.id === cartState[i]?.productId?._id) {
        setInCart(true);
      }
    }
  }, [cartState, params.id]);

  const addProductToCart = () => {
    const cartData = {
      productId: params.id,
      quantity: quantity,
      price: singleProduct.price,
      color: color,
    };
    dispatch(addToCart(cartData));
    navigate("/cart");
  };

  const addtowishlist = () => {
    dispatch(addToWishList(params.id));
    setIsActive(!isActive);
  };

  const copyToClipboard = (text) => {
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
    toast.success("Copied to clipboard!");
  };

  const addRatingToProduct = (e) => {
    e.preventDefault();
    if (star == null) {
      toast.error("Please rate the product");
      return;
    } else if (!comment?.trim()) {
      toast.error("Please write a review");
      return;
    } else {
      dispatch(addRating({ star, comment, prodId: singleProduct?._id }));
      dispatch(getSingleProduct(params.id));
      setStar(null);
      setComment("");
    }
  };

  return (
    <>
      <BreadCrumb title={singleProduct?.title} />
      <div className="w-full px-[5%] py-10 bg-[#F5F5F7]">
        <Card shadow="lg" className="w-full flex md:flex-row flex-col gap-5 card-hover p-5">
          <CardBody className="overflow-visible p-5 relative bg-white rounded-xl">
            {/* Main Image */}
            {selectedImage && (
              <Image
                shadow="lg"
                radius="lg"
                width="100%"
                alt="Selected"
                className="w-full object-contain md:h-[70vh] rounded-xl border"
                src={selectedImage}
              />
            )}

            {/* Thumbnails */}
            <div className="mt-4 grid grid-cols-4 gap-2">
              {singleProduct?.images?.map((img, index) => (
                <Image
                  key={index}
                  shadow="lg"
                  radius="lg"
                  alt={`Thumbnail ${index}`}
                  src={img}
                  onClick={() => setSelectedImage(img)}
                  className={`object-cover rounded-md border cursor-pointer transition-transform duration-200 hover:scale-105 ${
                    selectedImage === img ? "border-2 border-blue-500" : ""
                  }`}
                />
              ))}
            </div>
          </CardBody>

          {/* Product Info Section */}
          <CardBody className="text-gray-400 bg-white h-max pb-20 rounded-xl">
            <h4 className="font-bold text-xl text-start text-black">{singleProduct?.title}</h4>
            <h2 className="font-medium uppercase my-5 text-black">
              ${singleProduct?.price}{" "}
              <span className="text-gray-400 line-through">${singleProduct?.price + 10}</span>
            </h2>

            <div className="flex items-center gap-2 text-gray-400">
              <Ratings rat={totalRating} />
              <p>[{singleProduct?.ratings?.length}]</p>
            </div>

            <p className="mt-5"><span className="text-black font-medium">Type : </span>{singleProduct?.category}</p>
            <p className="mt-5"><span className="text-black font-medium">Brand : </span>{singleProduct?.brand}</p>
            <p className="mt-5"><span className="text-black font-medium">Tags : </span>{singleProduct?.tags}</p>
            <p className="mt-5"><span className="text-black font-medium">SKU : </span>SKU027</p>
            <p className="mt-5"><span className="text-black font-medium">Availability : </span>{singleProduct?.quantity} In Stock</p>

            {/* Color Picker */}
            <div className="mt-5">
              <p className="text-black font-medium mb-3">Color : </p>
              <ul className="flex flex-wrap gap-2 mt-2">
                {singleProduct?.color?.map((col) => (
                  <li
                    key={col._id}
                    onClick={() => setColor(col._id)}
                    className={`w-9 h-9 rounded-full border-2 cursor-pointer`}
                    style={{ backgroundColor: col.title }}
                  ></li>
                ))}
              </ul>
            </div>

            {/* Quantity and Cart Actions */}
            <div className="mt-5 flex flex-col md:flex-row gap-5 md:items-center items-start">
              <p className="text-black font-medium">Quantity : </p>
              <input
                type="number"
                min={1}
                max={10}
                className="p-1 border-2 text-black outline-none"
                onChange={(e) => setQuantity(e.target.value)}
                value={quantity}
              />
              <button
                onClick={() => (inCart ? navigate("/cart") : addProductToCart())}
                className="uppercase bg-[#232F3E] text-white px-8 py-3 rounded-[30px] w-max"
              >
                {inCart ? "Go To Cart" : "Add To Cart"}
              </button>
              <Link className="uppercase bg-amber-500 text-black px-8 py-3 rounded-[30px] w-max">
                Buy It Now
              </Link>
            </div>

            {/* Wishlist Button */}
            <div className="mt-5 flex gap-5 items-center text-black">
              <div className="flex gap-2 items-center">
                <CiHeart
                  className={`text-2xl cursor-pointer ${isActive ? "text-red-400" : ""}`}
                  onClick={() => addtowishlist()}
                />
                <p className="capitalize">
                  {isActive ? "Remove from wishlist" : "Add To Wishlist"}
                </p>
              </div>
            </div>

            <p className="my-6">
              <span className="text-black font-medium">Shipping & Returns : </span>Free shipping and returns on all orders. We ship all US Domestic orders within <span className="text-black">5-10 business days!</span>
            </p>

            {/* Copy Product Link */}
            <div className="flex gap-5 items-center">
              <p className="text-black font-medium">Product Link :</p>
              <button
                className="text-blue-500 underline"
                onClick={() => copyToClipboard(selectedImage)}
              >
                Copy Product Link
              </button>
            </div>
          </CardBody>
        </Card>

        {/* Description */}
        <h2 className="mt-10 mb-5 font-bold text-xl">Description</h2>
        <p className="w-full bg-white p-5 text-gray-400" dangerouslySetInnerHTML={{ __html: singleProduct?.description }} />

        <HomeFeaturedProducts />
      </div>
    </>
  );
};

export default SingleProductPage;
