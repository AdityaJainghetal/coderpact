import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { getUserCart, removeFromCart, updateCartWithQuantity } from '../features/user/userSlice';
import { toast } from 'react-toastify';

const CartItem = ({cartData}) => {
    const [quantity,setQuantity] = useState(cartData?.quantity)
    const [prodTotal,setProdTotal] = useState(cartData?.price * quantity)
    const dispatch = useDispatch()

    const deleteCartProduct = (id)=>{
        dispatch(removeFromCart(id))
    
        setTimeout(()=>{
          dispatch(getUserCart())
        },200)
      }
      
    useEffect(()=>{
        dispatch(updateCartWithQuantity({id:cartData?.productId?._id,quantity}))
        setProdTotal(cartData?.price * quantity)
        setTimeout(()=>{
            dispatch(getUserCart())
        },200)
    },[quantity])
       
   

  return (
    <div className='bg-white text-gray-500 flex justify-between items-center rounded-xl'>
                <div className=' md:w-[40vw] px-5 py-2 flex items-center gap-10'>
                    <img src={cartData?.productId?.images} alt="" className='w-20 hidden md:block' />
                    <div>
                        <h2>{cartData?.productId?.title}</h2>
                        <p>Size: S</p>
                        Color :{cartData?.color?.title}
                    </div>
                </div>
                <h4  className='md:w-[10vw] px-5 py-2'>${cartData?.price}</h4>
                <div className='md:w-[10vw] px-5 py-2 flex items-center gap-2'>
                    <input type="number"
                        defaultValue={1}
                        min={1}
                        max={10}
                        className="p-1 border-2 text-black outline-none"
                        onChange={(e)=> setQuantity(e.target.value) }
                        value={quantity}
                    />
                    <MdDelete onClick={()=> deleteCartProduct(cartData?.productId?._id)}  className='text-xl text-black'/>
                </div>
                <h4  className='hidden md:block w-[10vw] px-5 py-2'>${prodTotal}</h4>
                
            </div>
  )
}

export default CartItem