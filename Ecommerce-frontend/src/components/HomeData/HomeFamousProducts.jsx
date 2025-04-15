import React from 'react'
import FamousProductsCard from '../FamousProductsCard'

const HomeFamousProducts = () => {
  return (
    <div className='bg-[#F5F5F7] px-[5%] py-10'>
    <h2 className='text-xl font-semibold mb-5'>Our Famous Products</h2>
    <div className='flex gap-10 flex-col md:flex-row'>
    <FamousProductsCard/>
    <FamousProductsCard/>
    <FamousProductsCard/>
    <FamousProductsCard/>
    </div>
</div>
  )
}

export default HomeFamousProducts