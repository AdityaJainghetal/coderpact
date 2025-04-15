import React from 'react';
import { Card, CardHeader, Image } from "@nextui-org/react";

const HomeCategories = () => {
  const data = [
    {
      title: "Camera",
      quantity: 10,
      img: "https://www.patentlyapple.com/.a/6a0120a5580826970c013484baf9aa970c-pi"
    },
    {
      title: "Mobiles & Tablets",
      quantity: 10,
      img: "https://images.unsplash.com/photo-1426024084828-5da21e13f5dc?fm=jpg&q=60&w=3000"
    },
    {
      title: "Headphones",
      quantity: 10,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPgIcOYCtBSMfxQEvbgx49wm7oQTUDQGH9Hg&s"
    },
    {
      title: "Portable Speakers",
      quantity: 10,
      img: "https://m.media-amazon.com/images/I/816XBqHmrLL.jpg"
    }
  ];

  const fallbackImg = "https://via.placeholder.com/150";

  return (
    <div className="flex flex-wrap px-[5%] bg-[#F5F5F7] justify-center gap-6 py-10">
      {data.map((item, index) => (
        <Card
          key={index}
          className="py-6 md:w-[280px] w-[150px] border bg-white rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-center text-center">
            <Image
              alt={item.title}
              className="object-cover rounded-lg mb-3 transition-all duration-300 transform hover:scale-110"
              src={item.img || fallbackImg}
              width={120}
              height={120}
            />
            <p className="text-base font-bold text-[#333] transition-colors duration-300 hover:text-blue-600">{item.title}</p>
            <small className="text-gray-500">{item.quantity} Products</small>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default HomeCategories;
