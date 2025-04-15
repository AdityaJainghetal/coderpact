import React, { useEffect, useState } from 'react'
import Ratings from './Ratings';
import { useSelector } from 'react-redux';
import { IoMdMenu } from "react-icons/io";
import { MdGridView } from "react-icons/md";

const Filter = () => {

    const productState = useSelector(state => state.product?.products)
    const [brands,setBrands] = useState([])
    const [categories,setCategories] = useState([])
    const [colors,setColors] = useState([])
    const [tags,setTags] = useState([])

    // filter state
    const [category,setCategory] = useState(null)
    const [tag,setTag] = useState(null)
    const [brand,setBrand] = useState(null)
    const [minPrice,setMinPrice] = useState(null)
    const [maxPrice,setMaxPrice] = useState(null)

    useEffect(()=>{
        const newBrands = []
        const newCategory = []
        const newTags = []
        for(let i =0;i < productState?.length;i++){
            const elem = productState[i].brand
            const cat = productState[i].category
            const tag = productState[i].tags
            newBrands.push(elem)
            newCategory.push(cat)
            newTags.push(tag)
        }
    
        setBrands([...new Set(newBrands)])
        setCategories([...new Set(newCategory)])
        setTags([...new Set(newTags)])
    },[])

  return (
    <div className='flex flex-col gap-5'>
      <div className='w-full h-max md:w-[20vw] p-4 bg-white rounded-xl'>
    <h2 className='font-semibold'>Shop By Category</h2>
    <ul>
        {
            categories.map((cat,idx)=> (<li onClick={()=> setCategory(cat)} className='w-full p-2 text-gray-600 hover:bg-gray-100 cursor-pointer'>{cat}</li>))
        }
    </ul>
</div>
        <div className='w-full md:w-[20vw] p-4 bg-white rounded-xl flex flex-col gap-5'>
            <h2 className='font-semibold'>Filter By</h2>
            <div>
            <p>Availablity</p>
            <div className='flex justify-center items-center'>
                <input type="checkbox" className='w-4 h-4'/>
                <label htmlFor="" className='w-full p-2 text-gray-600'>In Stcok (1)</label>
            </div>
            <div className='flex justify-center items-center'>
                <input type="checkbox" className='w-4 h-4' />
                <label htmlFor="" className='w-full p-2 text-gray-600'>Out Of Stock (0)</label>
            </div>    
            </div>
            <div>
                <p>Price</p>
                <div className='flex gap-2 mt-2'>
                    <input type="Number"
                    placeholder='From'
                    className='w-full p-2 border'
                    onChange={(e)=> setMinPrice(e.target.value)}
                    />
                    <input type="Number"
                    placeholder='To'
                    className='w-full p-2 border'
                    onChange={(e)=> setMaxPrice(e.target.value)}
                    />
                </div>
            </div>
        </div>
        <div className='w-full md:w-[20vw] p-4 bg-white rounded-xl'>
            <h2 className='font-semibold'>Product Tags</h2>
            <div className='flex flex-wrap text-gray-600 font-light gap-2 mt-5'>
            {
            tags.map((t,idx)=> (<p onClick={()=> setTag(t)} className='capitalize px-2 py-1 bg-gray-200 rounded-md'>{t}</p>))
        }
            </div>
        </div>

        <div className='w-full h-max md:w-[20vw] p-4 bg-white rounded-xl'>
    <h2 className='font-semibold'>Shop By Brands</h2>
    <ul>
        {
            brands.map((b,idx)=> (<li onClick={()=> setBrand(b)} className='w-full p-2 text-gray-600 hover:bg-gray-100 cursor-pointer'>{b}</li>))
        }
    </ul>
</div>
       
    </div>
  )
}

export default Filter













 {/* <div className='w-full md:w-[20vw] p-4 bg-white rounded-xl'>
            <h2 className='font-semibold'>Random Product</h2>
            <div className='border-b flex mt-5 pb-5'>
                <img src="/images/smartwatch.png" alt="smart watch" className='w-[40%]' />
                <div>
                    <h2 className='text-sm font-semibold'>Kids Headphones Bulk 10 Pack Multi Colored For...</h2>
                    <Ratings/>
                    <p className='text-sm font-light'>$100.00</p>
                </div>
                
            </div>
            <div className='border-b flex mt-5 pb-5'>
                <img src="/images/smartwatch.png" alt="smart watch" className='w-[40%]' />
                <div>
                    <h2 className='text-sm font-semibold'>Kids Headphones Bulk 10 Pack Multi Colored For...</h2>
                    <Ratings/>
                    <p className='text-sm font-light'>$100.00</p>
                </div>
                
            </div>
        </div> */}





















 {/* <div>
                <p>Colors</p>
                <ul className='flex flex-wrap gap-2 mt-2'>
                    <li className='w-9 h-9 bg-red-300 rounded-full'></li>
                    <li className='w-9 h-9 bg-red-300 rounded-full'></li>
                    <li className='w-9 h-9 bg-red-300 rounded-full'></li>
                    <li className='w-9 h-9 bg-red-300 rounded-full'></li>
                    <li className='w-9 h-9 bg-red-300 rounded-full'></li>
                    <li className='w-9 h-9 bg-red-300 rounded-full'></li>
                    <li className='w-9 h-9 bg-red-300 rounded-full'></li>
                    <li className='w-9 h-9 bg-red-300 rounded-full'></li>
                    <li className='w-9 h-9 bg-red-300 rounded-full'></li>
                </ul>
            </div> */}

            {/* <div>
                <p>Size</p>
                <div className='flex justify-center items-center'>
                <input type="checkbox" className='w-4 h-4'/>
                <label htmlFor="" className='w-full p-2 text-gray-600'>S(2)</label>
                </div>
                <div className='flex justify-center items-center'>
                <input type="checkbox" className='w-4 h-4' />
                <label htmlFor="" className='w-full p-2 text-gray-600'>M(0)</label>
                </div>   
                <div className='flex justify-center items-center'>
                <input type="checkbox" className='w-4 h-4'/>
                <label htmlFor="" className='w-full p-2 text-gray-600'>L(0)</label>
                </div>
                <div className='flex justify-center items-center'>
                <input type="checkbox" className='w-4 h-4' />
                <label htmlFor="" className='w-full p-2 text-gray-600'>XL(0)</label>
                </div>  
                <div className='flex justify-center items-center'>
                <input type="checkbox" className='w-4 h-4' />
                <label htmlFor="" className='w-full p-2 text-gray-600'>XXL(0)</label>
                </div>    
            </div> */}