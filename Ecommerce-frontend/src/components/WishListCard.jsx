import { Card, CardBody,Image } from '@nextui-org/react'
import React from 'react'
import { RxCross2 } from 'react-icons/rx'

const WishListCard = ({product,removeProduct}) => {
 
  return (
    <Card shadow="lg" isPressable className='w-full md:w-[20vw] gap-5 relative card-hover border rounded-xl'>
    <CardBody className="overflow-visible p-0 relative">
      <Image
        shadow="lg"
        radius="lg"
        width="100%"
        alt=''
        className="w-full bg-white object-cover h-[310px] rounded-xl"
        src={product?.images}
      />
      <RxCross2 onClick={()=> removeProduct(product._id)} className='absolute top-5 right-5 z-10 text-2xl' />
    </CardBody>
      <div className='px-2 py-2 flex flex-col gap-5'>
       <h4 className="font-bold text-xl text-start">{product?.title}</h4>
       <div className='w-full flex justify-between items-center border-b'>
           <h2 className='text-xl capitalize font-medium'>${product?.price}</h2>
       </div>
      </div>
  </Card>

  )
}

export default WishListCard