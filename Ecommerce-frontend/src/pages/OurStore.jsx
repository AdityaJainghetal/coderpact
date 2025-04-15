import React, { useEffect, useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Filter from '../components/Filter'
// import OurStoreProducts from '../components/OurStoreProducts'
import {useDispatch, useSelector}  from 'react-redux'
import { getAllProducts} from '../features/product/productSlice'
import { IoMdMenu } from "react-icons/io";
import { MdGridView } from "react-icons/md";
import ProductCard from "../components/ProductCard";
import ProductGridCard from '../components/ProductGridCard'

const OurStore = () => {
  const dispatch = useDispatch()
 
  const [grid, setGrid] = useState(4);
  const [sort, setSort] = useState(null);
  const productState = useSelector(state => state.product?.products)
  const [brands,setBrands] = useState([])
  const [categories,setCategories] = useState([])
  // const [colors,setColors] = useState([])
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
  },[productState])

  useEffect(()=>{
    getProduct()
  },[sort,tag,brand,category,minPrice,maxPrice])
  const getProduct = ()=>{
    dispatch(getAllProducts({sort,tag,brand,category,minPrice,maxPrice}))
  }
 

  return (
    <div>
        <BreadCrumb title='Our Store'/>
        <div className='w-full bg-[#F5F5F7] px-[5%] py-5 flex flex-col md:flex-row gap-5'>
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

    <div className="w-full">
      <div className="w-full bg-white px-5 py-2 flex justify-between items-center rounded-xl">
        <div className="flex items-center capitalize">
          <h2 className="text-xl">Sort By:</h2>
          <select
            className="w-[20vw] px-2 py-2 outline-none bg-gray-100 ms-5 rounded-xl"
            onChange={(e) => setSort(e.target.value)}
          >
            <option className="bg-gray-200 rounded-xl outline-none" value="title">
              Alphabetically A-Z
            </option>
            <option className="bg-gray-200 rounded-xl" value="-title">
              Alphabetically Z-A
            </option>
            <option className="bg-gray-200 rounded-xl" value="price">
              Price low to high
            </option>
            <option className="bg-gray-200 rounded-xl" value="-price">
              Price high to low
            </option>
            <option className="bg-gray-200 rounded-xl" value="createdAt">
              Date new to old
            </option>
            <option className="bg-gray-200 rounded-xl" value="-createdAt">
              Date old to new
            </option>
          </select>
        </div>
        <div className="flex items-center gap-2 text-xl">
          <h2>21 Products</h2>
          <IoMdMenu className="hidden md:block" onClick={() => setGrid(1)} />
          <MdGridView onClick={() => setGrid(4)} />
        </div>
      </div>

      <div className="flex gap-10 flex-col md:flex-row flex-wrap items-center justify-center mt-5 w-full">
        {productState?.map((item, idx) =>
          grid == 1 ? (
            <ProductGridCard product={item} />
          ) : (
            <ProductCard product={item} />
          )
        )}
      </div>
    </div>
        </div>
    </div>
  )
}

export default OurStore