import React from 'react';
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

const FamousProductsCard = () => {
  return (
    <Card className="py-4 bg-black rounded-xl md:w-[20vw] w-full hover:shadow-2xl transition-shadow duration-300">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start text-white">
        <small className="uppercase text-gray-400 tracking-wide">Big Screen</small>
        <p className="text-2xl capitalize font-bold mt-1">Smart Watch Series 7</p>
        <h4 className="text-lg text-gray-200 mt-2">From $999 or $16/mo for 24 mo*</h4>
      </CardHeader>

      <CardBody className="overflow-visible py-4 flex w-full items-center justify-center">
        <Image
          alt="Smart Watch"
          className="object-contain rounded-xl w-[90%] h-auto"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxTCSM_xYGWvfgspNXmhuYIG0zVuD7HhhLSQ&s"
          width={270}
        />
      </CardBody>
    </Card>
  );
};

export default FamousProductsCard;
