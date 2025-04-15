import React from 'react'
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { IoIosGitCompare } from 'react-icons/io';
import { IoEyeOutline } from 'react-icons/io5';
import {useDispatch} from 'react-redux'
import ProgressBar from "@ramonak/react-progress-bar";
import Ratings from './Ratings';
import { addToWishList } from '../features/product/productSlice';

const SpecialProduct = ({product}) => {
  const dispatch = useDispatch()
  const addtowishlist = (id) => {
    dispatch(addToWishList(id))
  }
  return (
    <Card shadow="lg" isPressable className='bg-white w-full md:w-[28vw] h-[400px] flex flex-row gap-5 card-hover'>
    <CardBody className="overflow-visible p-0 relative">
      <Image
        shadow="lg"
        radius="lg"
        width="100%"
        alt=''
        className="w-full object-cover h-[220px] rounded-xl"
        src={product?.images}
      />

        <div className='mt-2 flex gap-2 justify-between w-full'>
            <Image
            shadow="lg"
            radius="lg"
            alt=''
            className="w-full object-cover h-[150px] md:w-[7vw] rounded-md"
            src={product?.images}
            />
            <Image
            shadow="lg"
            radius="lg"
            alt=''
            className="w-full object-cover h-[150px] md:w-[7vw] rounded-md"
            src={product?.images}
            />
        </div>


    <CiHeart className='absolute top-5 right-5 z-10 text-xl' onClick={()=> addtowishlist(product?._id)}/>
      <div className='absolute top-12 text-xl gap-2 flex flex-col icon-hover transition'>
       <Link><IoIosGitCompare /></Link>
       <Link><IoEyeOutline /></Link>
       <Link><CiShoppingCart /></Link>
      </div>
    </CardBody>
      <CardBody>
      <small className="text-tiny uppercase text-amber-800">{product?.brand}</small>
      <h4 className="font-bold text-large text-start">{product?.title}</h4>
      <Ratings rat={product?.totalrating}/>
      <h2 className='text-tiny uppercase mb-5'>$100.00  <span className='text-gray-400 line-through'>${product?.price}</span></h2>
        <div className='flex items-center gap-2'>
            <h2>7 Days</h2>
            <div className='flex gap-2 items-center'>
                <span className='w-8 h-8 flex items-center justify-center rounded-full bg-[#FBBF24]'>1</span> :
                <span className='w-8 h-8 flex items-center justify-center rounded-full bg-[#FBBF24]'>1</span> :
                <span className='w-8 h-8 flex items-center justify-center rounded-full bg-[#FBBF24]'>1</span>
            </div>
        </div>
        <div className="w-full mt-10 ">
          <p className='mb-2'>Products : {product?.quantity}</p>
        <ProgressBar completed={(product?.sold/product?.quantity) * 100} bgColor='#006FEE' />
      </div>
      <Link className='uppercase bg-[#232F3E] text-white px-7 py-4 rounded-[30px] w-max mt-10'>Buy Now</Link>
      </CardBody>
      
  </Card> 
  )
}

export default SpecialProduct

