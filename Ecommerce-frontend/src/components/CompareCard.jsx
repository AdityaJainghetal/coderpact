import React from 'react'
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import { RxCross2 } from 'react-icons/rx';

const CompareCard = () => {
  return (
<Card shadow="lg" isPressable className='w-full md:w-[20vw] gap-5 relative card-hover border rounded-xl'>
     <CardBody className="overflow-visible p-0 relative">
       <Image
         shadow="lg"
         radius="lg"
         width="100%"
         alt=''
         className="w-full bg-white object-contain h-[310px] rounded-xl"
         src='/images/smartwatch.png'
       />
       <RxCross2 className='absolute top-5 right-5 z-10 text-2xl' />
     </CardBody>
       <div className='px-2 py-2 flex flex-col gap-5'>
        <h4 className="font-bold text-xl text-start underline">A Beautiful Sunday Morning Renaissance</h4>
        <div className='w-full flex justify-between items-center border-b'>
            <h2 className='text-xl capitalize font-medium'>$100.00</h2>
        </div>
        <div className='w-full flex justify-between items-center border-b'>
            <h2 className='text-xl capitalize font-medium'>Brand : </h2>
            <p className='uppercase text-gray-500'>Boat</p>
        </div>
        <div className='w-full flex justify-between items-center border-b'>
            <h2 className='text-xl capitalize font-medium'>Type : </h2>
            <p className='uppercase text-gray-500'>Tablet Computers</p>
        </div>
        <div className='w-full flex justify-between items-center border-b'>
            <h2 className='text-xl capitalize font-medium'>SKU : </h2>
            <p className='uppercase text-gray-500'>SKU033</p>
        </div>
        <div className='w-full flex justify-between items-center border-b'>
            <h2 className='text-xl capitalize font-medium'>Availability : </h2>
            <p className='uppercase text-gray-500'>In Stock</p>
        </div>
        <div className='w-full flex justify-between items-center border-b'>
            <h2 className='text-xl capitalize font-medium'>Color : </h2>
            <ul className='flex gap-1'>
                <li className='w-6 h-6 rounded-full bg-red-300'></li>
                <li className='w-6 h-6 rounded-full bg-blue-300'></li>
                <li className='w-6 h-6 rounded-full bg-green-300'></li>
            </ul>
        </div>
        <div className='w-full flex justify-between items-center border-b'>
            <h2 className='text-xl capitalize font-medium'>BranSize : </h2>
            <p className='uppercase text-gray-500'>S M L</p>
        </div>
       
       </div>
   </Card>

  )
}

export default CompareCard