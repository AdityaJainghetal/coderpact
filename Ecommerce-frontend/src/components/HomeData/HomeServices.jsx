import { Card } from '@nextui-org/react'
import React from 'react'

const HomeServices = () => {
  return (
    <div className='w-full flex flex-wrap gap-5 items-center justify-between px-[5%] bg-[#F5F5F7] py-10'>
        <div className='flex gap-3'>
          <img src="/images/shipping.png" alt="" className='w-10 h-10 object-cover' />
          <div>
            <h2 className='font-semibold'>Free Shiping</h2>
            <p className='text-sm'>From All Orders Over $100</p>
          </div>
        </div>
        <div className='flex gap-3'>
          <img src="/images/surpriseOffer.png" alt="" className='w-10 h-10 object-cover' />
          <div>
            <h2 className='font-semibold'>Daily Surprise Offers</h2>
            <p className='text-sm'>Save Upto 25% off</p>
          </div>
        </div>
        <div className='flex gap-3'>
          <img src="/images/247support.png" alt="" className='w-10 h-10 object-cover' />
          <div>
            <h2 className='font-semibold'>Support 24/7</h2>
            <p className='text-sm'>Shop WIth an Expert</p>
          </div>
        </div>
        <div className='flex gap-3'>
          <img src="/images/discount.png" alt="" className='w-10 h-10 object-cover' />
          <div>
            <h2 className='font-semibold'>Affordable Prices</h2>
            <p className='text-sm'>Get Factory Direct Price</p>
          </div>
        </div>
        <div className='flex gap-3'>
          <img src="/images/secure-payments.png" alt="" className='w-10 h-10 object-cover' />
          <div>
            <h2 className='font-semibold'>Secure Payments</h2>
            <p className='text-sm'>100% protected payments</p>
          </div>
        </div>
      </div>
  )
}

export default HomeServices