import React, { useEffect } from 'react'
import HomeCategories from '../components/HomeData/HomeCategories'
import HomeServices from '../components/HomeData/HomeServices'
import HomeMarquee from '../components/HomeData/HomeMarquee'
import BlogCard from '../components/BlogCard'
import HomeBlogs from '../components/HomeData/HomeBlogs'
import HomeFeaturedProducts from '../components/HomeData/HomeFeaturedProducts'
import HomeSpecialProduct from '../components/HomeData/HomeSpecialProduct'
import HomePopularProducts from '../components/HomeData/HomePopularProducts'
import HomeFamousProducts from '../components/HomeData/HomeFamousProducts'
import HomeBanner from '../components/HomeData/HomeBanner'
import { useDispatch } from 'react-redux'
import { getAllProducts } from '../features/product/productSlice'

const Home = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(getAllProducts())
    },[])
  return (
    <>
      <HomeBanner/>
      <HomeServices/>
      <HomeCategories/>
      <HomeFeaturedProducts/>
      <HomeFamousProducts/>
      <HomeSpecialProduct/>
      <HomePopularProducts/>
      <HomeMarquee/>
      {/* <HomeBlogs/> */}
    </>
    

  )
}

export default Home