
import React, { useEffect } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import ShopByCategories from '../components/ShopByCategories'
import BlogCard from '../components/BlogCard'
import {useDispatch, useSelector} from 'react-redux'
import { getAllBlogs } from '../features/blogs/blogsSlice'

const Blog = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAllBlogs())
  },[])

  const blogState = useSelector(state => state.blog.blogs)
  return (
    <div>
        <BreadCrumb title='Blog'/>
        <div className='w-full px-[5%] bg-[#F5F5F7] py-10 flex flex-col md:flex-row'>
            {/* <ShopByCategories/> */}
            <div className='flex gap-10 flex-col md:flex-row flex-wrap justify-center items-center'>
            {
              blogState?.allBlogs?.map((item)=>{
                return <BlogCard blogData={item}/>
              })
            }
        </div>
        </div>
    </div>
  )
}

export default Blog