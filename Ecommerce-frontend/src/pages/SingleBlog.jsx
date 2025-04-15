import React, { useEffect } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import ShopByCategories from '../components/ShopByCategories'
import { Image } from '@nextui-org/react'
import { Link, useParams } from 'react-router-dom'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { FaPinterest, FaTwitter } from 'react-icons/fa6'
import { FaFacebookSquare } from 'react-icons/fa'
import {useDispatch, useSelector} from 'react-redux'
import { getSingleBlog } from '../features/blogs/blogsSlice'
import moment from 'moment'

const SingleBlog = () => {
    const dispatch = useDispatch()
    const params = useParams()
    useEffect(()=>{
        dispatch(getSingleBlog(params.id))
    },[])

    const blogState = useSelector(state => state.blog.singleBlog)
  return (
    <>
        <BreadCrumb title={`Blog/${blogState?.title}`} />
        <div className='w-full px-[5%] bg-[#F5F5F7] py-10 flex flex-col md:flex-row justify-between'>
            {/* <ShopByCategories/> */}
            <div className='w-full md:w-[65vw] mt-10 md:mt-0'>
                <h1 className='text-3xl font-medium'>{blogState?.title}</h1>
                <Image
              shadow="sm"
              width="100%"
              alt=''
              className="w-full object-cover h-[500px] mt-5 rounded-xl"
              src={blogState?.images}
            />
            <p className='my-5 text-md text-gray-400' dangerouslySetInnerHTML={{__html:blogState?.description}}></p>
            <p><span>{moment(blogState?.createdAt).format("MMMM OD YYYY, h:mm a")}</span> <span>Kajal Rajpoot</span></p>
            <div className='mt-10 flex items-center justify-between text-gray-500'>
                <Link to='/blog' className=' flex gap-2 items-center'><IoIosArrowRoundBack className='text-3xl' /> Back To Blog</Link>
                <div className='flex gap-2 items-center'>
                    <Link to=''><FaTwitter className=''/></Link>
                    <Link to=''><FaFacebookSquare className=' '/></Link>
                    <Link to=''><FaPinterest className=''/></Link>
                </div>
            </div>
            <form action="" className='w-full bg-white p-5 my-10 rounded-md'>
                <h2 className='text-3xl captalize font-semibold'>Leave A Comment</h2>
                <div className='flex justify-between flex-col md:flex-row'>
                    <input type="text" placeholder='Name*' className='w-full md:w-[49%] p-3 text-xl outline-none border rounded-xl px-5 mt-5' />
                    <input type="email" placeholder='Email*' className='w-full md:w-[49%] p-3 text-xl outline-none border rounded-xl px-5 mt-5' />
                </div>
                <textarea className='w-full h-[100px] border rounded-xl my-5 p-5' placeholder='Comment*'></textarea>
                <button className='uppercase bg-[#232F3E] hover:bg-amber-500 text-white px-7 py-3 rounded-[30px]'>Post Comment</button>
            </form>
            </div>
        </div>
    </>
  )
}

export default SingleBlog