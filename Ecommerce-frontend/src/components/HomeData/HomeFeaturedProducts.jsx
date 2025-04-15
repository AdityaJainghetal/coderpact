import React from 'react'
import ProductCard from '../ProductCard'
import { useSelector } from 'react-redux'

const HomeFeaturedProducts = () => {
  const prodState = useSelector(state => state.product.products)
  return (
    <div className='bg-[#F5F5F7] px-[5%] py-10'>
        <h2 className='text-xl font-semibold mb-5'>Featured Products</h2>
        <div className='flex gap-10 flex-col md:flex-row'>
        {
          prodState?.map((item,idx)=>{
            return item.tags == "featured" ? <ProductCard key={idx} product={item}/> : null
          })
        }
        </div>
    </div>
  )
}

export default HomeFeaturedProducts