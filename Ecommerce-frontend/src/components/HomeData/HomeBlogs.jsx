import React from 'react'
import BlogCard from '../BlogCard'

const HomeBlogs = () => {
  return (
    <div className='bg-[#F5F5F7] px-[5%] py-10'>
        <h2 className='text-xl font-semibold mb-5'>Our Latest News</h2>
        <div className='flex gap-10 flex-col md:flex-row'>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        </div>
    </div>
  )
}

export default HomeBlogs