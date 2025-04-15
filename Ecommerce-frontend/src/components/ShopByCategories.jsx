import React from 'react'

const ShopByCategories = () => {
  return (
    <div className='w-full h-max md:w-[20vw] p-4 bg-white rounded-xl'>
    <h2 className='font-semibold'>Shop By Categories</h2>
    <ul>
        <li className='w-full p-2 text-gray-600 hover:bg-gray-100 cursor-pointer'>Watch</li>
        <li className='w-full p-2 text-gray-600 hover:bg-gray-100 cursor-pointer'>Tv</li>
        <li className='w-full p-2 text-gray-600 hover:bg-gray-100 cursor-pointer'>LapTop</li>
        <li className='w-full p-2 text-gray-600 hover:bg-gray-100 cursor-pointer'>Camera</li>
    </ul>
</div>
  )
}

export default ShopByCategories