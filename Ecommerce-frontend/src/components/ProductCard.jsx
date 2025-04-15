import React from 'react'
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import { IoIosGitCompare } from 'react-icons/io';
import { IoEyeOutline } from 'react-icons/io5';
import Ratings from './Ratings';
import {useDispatch} from 'react-redux'
import { addToWishList } from '../features/product/productSlice';
import { addToCart } from '../features/user/userSlice';

const ProductCard = ({product}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const addtowishlist = (id) => {
    dispatch(addToWishList(id))
  }

  const addProductToCart = ()=>{
    const cartData = {
      productId : product._id,
      quantity:product.quantity,
      price:product.price,
      color:product.color
    }
    dispatch(addToCart(cartData))
  }


  return (
    <Card onClick={() => navigate(`/product/${product?._id}`)} shadow="lg" isPressable className='bg-white w-full md:w-[20vw] gap-5 relative card-hover'>
     <CardBody className="overflow-visible p-0">
       <Image
       isZoomed
         shadow="lg"
         radius="lg"
         width="100%"
         alt=''
         className="w-full object-cover h-[200px] rounded-xl"
         src={product?.images}
       />
     </CardBody>
       <small className="text-tiny uppercase ms-5 text-amber-800">{product?.brand}</small>
       <h4 className="font-bold text-large ms-5 text-start" >{product?.title}</h4>
       <div className='ms-5'><Ratings rat={product?.totalrating}/></div>
       <h2 className='text-tiny uppercase ms-5 mb-5'>${product?.price}</h2>
       <CiHeart onClick={()=> addtowishlist(product?._id)} className='absolute top-5 right-5 z-10 text-xl'/>
       <div className='absolute top-12 text-xl gap-2 flex flex-col icon-hover transition'>
     
        <Link to={`/product/${product?._id}`}><IoEyeOutline /></Link>
        <Link onClick={()=> addProductToCart()}><CiShoppingCart /></Link>
       </div>
   </Card>
  )
}

export default ProductCard