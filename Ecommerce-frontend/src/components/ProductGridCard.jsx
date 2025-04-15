import React from 'react'
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import { IoIosGitCompare } from 'react-icons/io';
import { IoEyeOutline } from 'react-icons/io5';
import ProgressBar from '@ramonak/react-progress-bar';
import Ratings from './Ratings';
import { addToWishList } from '../features/product/productSlice';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/user/userSlice';

const ProductGridCard = ({product}) => {
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
    <div>
    <Card onClick={() => navigate(`/product/${product?._id}`)}  shadow="lg" isPressable className='bg-white w-[70vw] flex flex-row gap-5 card-hover p-4'>
    <CardBody className="overflow-visible p-0 relative">
      <Image
        shadow="lg"
        radius="lg"
        width="100%"
        alt=''
        className="w-full object-cover h-[220px] rounded-xl"
        src={product?.images}
      />

    <CiHeart  onClick={()=> addtowishlist(product?._id)} className='absolute top-5 right-5 z-10 text-xl'/>
      <div className='absolute top-12 text-xl gap-2 flex flex-col icon-hover transition'>
       {/* <Link><IoIosGitCompare /></Link> */}
       <Link to={`/product/${product?._id}`}><IoEyeOutline /></Link>
       <Link onClick={()=> addProductToCart()}><CiShoppingCart /></Link>
      </div>
    </CardBody>
      <CardBody>
      <small className="text-tiny uppercase text-amber-800">{product?.brand}</small>
      <h4 className="font-bold text-large text-start">{product?.title}</h4>
      <Ratings rat={product?.totalrating} />
       <p className='text-tiny text-gray-400' dangerouslySetInnerHTML={{__html:product?.description}}></p>
      <h2 className='text-tiny uppercase my-5'>${product?.price}  </h2>
      </CardBody>
      
  </Card> 
</div>
  )
}

export default ProductGridCard