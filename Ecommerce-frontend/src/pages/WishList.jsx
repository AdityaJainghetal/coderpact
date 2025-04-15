import React, { useEffect } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import WishListCard from '../components/WishListCard'
import {useDispatch, useSelector} from 'react-redux'
import { getUserWishList } from '../features/user/userSlice'
import { addToWishList } from '../features/product/productSlice';

const WishList = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getUserWishList())
  },[])

  const removeFromWIshList =(id)=>{
    dispatch(addToWishList(id))
    setTimeout(()=>{
      dispatch(getUserWishList())
    },300)
  }

  const wishListState = useSelector(state => state.auth.userWishList)
  return (
    <>
        <BreadCrumb title='WishList'/>
        <div className='w-full px-[5%] bg-[#F5F5F7] py-10 flex gap-10 flex-wrap'>
          {wishListState?.wishList.length == 0 && <h2 className='w-max m-auto text-3xl'>No Data</h2> }
          {
            wishListState?.wishList?.map((item)=>{
              return <WishListCard product={item} removeProduct={removeFromWIshList}/>
            })
          }
        </div>
    </>
  )
}

export default WishList