import { Table } from 'antd';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyOrders } from '../features/user/userSlice';
import BreadCrumb from '../components/BreadCrumb';

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Order Id",
    dataIndex: "orderId",
  },
  {
    title: "Total Amount",
    dataIndex: "totalAmount",
  },
  {
    title: "Total Amount After Discount",
    dataIndex: "totalAmountAfter",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
];

const Orders = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyOrders());
  }, [dispatch]);

  const orderState = useSelector((state) => state.auth.myOrders);
  const data1 = [];

  for (let i = 0; i < orderState?.length; i++) {
    data1.push({
      key: i + 1,
      orderId: orderState[i]?._id,
      totalAmount: orderState[i]?.totalPrice,
      totalAmountAfter: orderState[i]?.totalPriceAfterDiscount,
      status: orderState[i]?.orderStatus,
      products: orderState[i]?.orderItems, 
    });
  }

  const expandedRowRender = (record) => {
    const productColumns = [
      {
        title: "SNo",
        dataIndex: "key",
      },
      {
        title: "Product Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Quantity",
        dataIndex: "quantity",
        key: "quantity",
      },
      {
        title: "Price",
        dataIndex: "price",
        key: "price",
      },
      {
        title: "Total",
        dataIndex: "total",
        key: "total",
        render: (_, record) => <span>{record.price * record.quantity}</span>,
      },
      {
        title: "Color",
        dataIndex: "color",
        key: "color",
      },
    ];

    const productData = record.products?.map((product, index) => ({
      key: index + 1,
      name: product.product.title,
      quantity: product.quantity,
      price: product.price,
      color:product.color.title
    }));

    return <Table columns={productColumns} dataSource={productData} pagination={false} />;
  };

  return (
    <div>
      <BreadCrumb title='Order'/>
      <h3 className="mb-4 text-2xl font-semibold">Orders</h3>
      <div>
        <Table
          columns={columns}
          dataSource={data1}
          expandedRowRender={expandedRowRender}
        />
      </div>
    </div>
  );
};

export default Orders;
