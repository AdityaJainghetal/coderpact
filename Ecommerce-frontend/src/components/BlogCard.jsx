import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const BlogCard = ({blogData}) => {
  return (
    <div>
         <Card shadow="sm" isPressable className='bg-white w-full md:w-[28vw] gap-5'>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt=''
              className="w-full object-cover h-[200px] rounded-xl"
              src={blogData?.images}
            />
          </CardBody>
            <small className="text-tiny uppercase ms-5">{moment(blogData?.createdAt).format("MMMM OD YYYY, h:mm a")}</small>
            <h4 className="font-bold text-large ms-5">{blogData?.title}</h4>
            <small className="text-start mx-5" dangerouslySetInnerHTML={{__html:blogData?.description}}></small>
            <Link to={`/blog/${blogData?._id}`} className='uppercase bg-[#232F3E] text-white px-5 py-2 rounded-[30px] ms-5 mb-5'>Read More</Link>
        </Card>
    </div>
  )
}

export default BlogCard