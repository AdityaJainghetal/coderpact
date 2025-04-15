import React, { useEffect, useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import CartItem from '../components/CartItem'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUserCart, removeFromCart } from '../features/user/userSlice'

const Cart = () => {
  const dispatch = useDispatch()
  const [cartTotal,setCartTotal] = useState(null)
  useEffect(()=>{
    dispatch(getUserCart())
  },[])
  const cartState = useSelector(state => state.auth.userCart)

  useEffect(()=>{
    let tot = 0
    for(let idx = 0;idx < cartState?.length;idx++){
      tot += cartState[idx]?.price * cartState[idx]?.quantity
    }
    setCartTotal(tot)
  },[cartState])


  return (
    <>
        <BreadCrumb title='Cart'/>
        <div className='w-full px-[5%] bg-[#F5F5F7] py-10 flex flex-col gap-5'>
            <div className='uppercase bg-white text-md md:text-2xl text-gray-500 flex justify-between rounded-xl'>
                <h4 className='md:w-[40vw] px-5 py-2'>Product</h4>
                <h4  className='md:w-[10vw] px-5 py-2'>Price</h4>
                <h4  className='md:w-[10vw] px-5 py-2'>Quantity</h4>
                <h4  className='w-[10vw] hidden md:block px-5 py-2'>Total</h4>
            </div>

            {
              cartState?.map((cartItem,idx) => {
                return <CartItem key={idx} cartData={cartItem} />
              })
            }

            <Link to='/store' className='uppercase bg-[#232F3E] text-white px-7 py-4 rounded-[30px] w-max mt-10'>Continue Shoping</Link>

            <div className='text-end px-20'>
                <p className='text-xl'>Subtotal &nbsp;&nbsp; ${cartTotal}</p>
                <p className='mb-10'>Taxes and shipping calculated at checkout</p>
                <Link to='/checkout' className='uppercase bg-[#232F3E] text-white md:px-20 px-5 py-4 rounded-[30px] w-max'>Check Out</Link>
            </div>
        </div>
    </>
  )
}

export default Cart