import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import CheckOutDetails from '../components/CheckOutDetails'
import CheckOutProductDetails from '../components/CheckOutProductDetails'

const CheckOut = () => {
  return (
    <>
        <BreadCrumb title='product/checkout'/>
        <div className='w-full px-[5%] py-10 bg-[#F5F5F7] flex flex-col md:flex-row gap-10'>
            <CheckOutDetails/>
            <CheckOutProductDetails/>
        </div>
    </>
  )
}

export default CheckOut