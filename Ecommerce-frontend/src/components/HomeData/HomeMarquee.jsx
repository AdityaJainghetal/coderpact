import { Card, CardBody } from '@nextui-org/react';
import React from 'react'
import Marquee from "react-fast-marquee";

const HomeMarquee = () => {
    const brandImages = [
        "/images/dell.png","/images/dell.png","/images/dell.png","/images/dell.png",
        "/images/dell.png","/images/dell.png","/images/dell.png","/images/dell.png",
    ]
  return (
    <div className='bg-[#F5F5F7] px-[5%] py-10'>
        <Card className='border bg-white px-10'>
            <Marquee className='flex'>
            {
                brandImages.map((img)=>(
                    <CardBody>
                        <img src={img} alt="" className='h-20 mx-10' />
                    </CardBody>
                ))
            }
            
            </Marquee>
        </Card>
    </div>
  )
}

export default HomeMarquee