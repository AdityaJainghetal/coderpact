// import React, { useEffect, useState } from "react";
// import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
// import { Column } from "@ant-design/plots";
// import { Table } from "antd";
// import {useDispatch,useSelector} from 'react-redux'
// import { getMonthlyOrderDetails, getOrders, getYearlyStats } from "../features/auth/authSlice";

// const columns = [
//   {
//     title: "SNo",
//     dataIndex: "key",
//   },
//   {
//     title: "Name",
//     dataIndex: "name",
//   },
//   {
//     title: "Product Count",
//     dataIndex: "product",
//   },
//   {
//     title: "Total Price",
//     dataIndex: "price",
//   },
//   {
//     title: "Total Price After Discount",
//     dataIndex: "dprice",
//   },
// ];


// const DashBoard = () => {

//   const dispatch = useDispatch()
//   const monthlyData = useSelector(state => state?.auth?.monthlyOrderDetails)
//   const yearlyDataState = useSelector(state => state?.auth?.YearltOrderDetails)
//   const orderState = useSelector(state => state?.auth?.orders)
//   const [orderData,setOrderData] = useState(null)

 
//   const [dataMonthly,setDataMonthly] = useState([])
//   const [dataMonthlySales,setDataMonthlySales] = useState([])

//   useEffect(()=>{
//     dispatch(getMonthlyOrderDetails())
//     dispatch(getYearlyStats())
//     dispatch(getOrders())
//   },[])

//   useEffect(()=>{
//     const monthNames = [
//       "January", "February", "March", "April", "May", "June", 
//       "July", "August", "September", "October", "November", "December"
//     ];
//     let data =[]
//     let monthlyOrderCount = [] 
//     for(let i =0;i < monthlyData?.length;i++){
//       const elem = monthlyData[i]
//       data.push({
//         type:monthNames[elem?._id?.month],
//         income:elem?.amount
//       })

//       monthlyOrderCount.push(
//         {
//           type:monthNames[elem?._id?.month],
//           sales:elem?.count
//         }
//       )
//     }
//     setDataMonthly(data)
//     setDataMonthlySales(monthlyOrderCount)

//    const data1 = [];
//     for (let i = 0; i < orderState?.length; i++) {
//       data1.push({
//         key:i+1,
//         name: orderState[i]?.user?.firstname + " " + orderState[i]?.user?.lastname,
//         product: orderState[i]?.orderItems?.length,
//         price: orderState[i]?.totalPrice,
//         dprice: orderState[i]?.totalPriceAfterDiscount,
//       });
//     }

//     setOrderData(data1)


//   },[monthlyData,orderState])
  
//       const config = {
//         data:dataMonthly,
//         xField: "type",
//         yField: "income",
//         color: ({ type }) => {
//           return "#ffd333";
//         },
//         label: {
//           position: "top",
//           style: {
//             fill: "#FFFFFF",
//             opacity: 1,
//           },
//         },
//         xAxis: {
//           label: {
//             autoHide: true,
//             autoRotate: false,
//           },
//         },
//         meta: {
//           type: {
//             alias: "Month",
//           },
//           sales: {
//             alias: "Income",
//           },
//         },
//       };
//       const config2 = {
//         data:dataMonthlySales,
//         xField: "type",
//         yField: "sales",
//         color: ({ type }) => {
//           return "#ffd333";
//         },
//         label: {
//           position: "top",
//           style: {
//             fill: "#FFFFFF",
//             opacity: 1,
//           },
//         },
//         xAxis: {
//           label: {
//             autoHide: true,
//             autoRotate: false,
//           },
//         },
//         meta: {
//           type: {
//             alias: "Month",
//           },
//           sales: {
//             alias: "Income",
//           },
//         },
//       };
//       return (
//         <div>
//           <h3 className="mb-4 text-2xl font-semibold">Dashboard</h3>
//           <div className="flex flex-col md:flex-row justify-between items-center gap-3">
//             <div className="flex w-full justify-between items-end bg-white p-3 py-5 md:w-[30vw] rounded-xl">
//               <div>
//                 <p className="text-xl text-gray-400">Total</p>
//                 <h4 className="text-3xl font-semibold">{yearlyDataState?yearlyDataState[0]?.amount :""}</h4>
//               </div>
//               <div className="flex flex-col items-end">
//                 <p className="text-gray-400">Yearly Total Income </p>
//               </div>
//             </div>
//             <div className="flex w-full justify-between items-end bg-white p-3 py-5 md:w-[30vw] rounded-xl">
//               <div>
//                 <p className="text-xl text-gray-400">Total</p>
//                 <h4 className="text-3xl font-semibold">{yearlyDataState?yearlyDataState[0]?.count :""}</h4>
//               </div>
//               <div className="flex flex-col items-end">
//                 <p className="text-gray-400">Yearly Total Sales</p>
//               </div>
//             </div>
//           </div>
//           <div className="mt-4">
//             <h3 className="mb-4 text-2xl font-semibold">Income Statics</h3>
//             <div>
//               <Column {...config} />
//             </div>
//           </div>
//           <div className="mt-4">
//             <h3 className="mb-4 text-2xl font-semibold">Sales Statics</h3>
//             <div>
//               <Column {...config2} />
//             </div>
//           </div>
//           <div className="mt-4">
//             <h3 className="mb-4 text-2xl font-semibold">Recent Orders</h3>
//             <div>
//               <Table columns={columns} dataSource={orderData} />
//             </div>
//           </div>
//         </div>
//       );
    
// }

// export default DashBoard



import React, { useEffect, useState } from "react";
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import { Column } from "@ant-design/plots";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  getMonthlyOrderDetails,
  getOrders,
  getYearlyStats,
} from "../features/auth/authSlice";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Product Count",
    dataIndex: "product",
  },
  {
    title: "Total Price",
    dataIndex: "price",
  },
  {
    title: "Total Price After Discount",
    dataIndex: "dprice",
  },
];

const DashBoard = () => {
  const dispatch = useDispatch();
  const monthlyData = useSelector((state) => state?.auth?.monthlyOrderDetails);
  const yearlyDataState = useSelector(
    (state) => state?.auth?.YearltOrderDetails
  );
  const orderState = useSelector((state) => state?.auth?.orders);

  const [orderData, setOrderData] = useState(null);
  const [dataMonthly, setDataMonthly] = useState([]);
  const [dataMonthlySales, setDataMonthlySales] = useState([]);

  useEffect(() => {
    dispatch(getMonthlyOrderDetails());
    dispatch(getYearlyStats());
    dispatch(getOrders());
  }, []);

  useEffect(() => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let data = [];
    let monthlyOrderCount = [];
    for (let i = 0; i < monthlyData?.length; i++) {
      const elem = monthlyData[i];
      data.push({
        type: monthNames[elem?._id?.month],
        income: elem?.amount,
      });

      monthlyOrderCount.push({
        type: monthNames[elem?._id?.month],
        sales: elem?.count,
      });
    }
    setDataMonthly(data);
    setDataMonthlySales(monthlyOrderCount);

    const data1 = [];
    for (let i = 0; i < orderState?.length; i++) {
      data1.push({
        key: i + 1,
        name:
          orderState[i]?.user?.firstname +
          " " +
          orderState[i]?.user?.lastname,
        product: orderState[i]?.orderItems?.length,
        price: orderState[i]?.totalPrice,
        dprice: orderState[i]?.totalPriceAfterDiscount,
      });
    }

    setOrderData(data1);
  }, [monthlyData, orderState]);

  const config = {
    data: dataMonthly,
    xField: "type",
    yField: "income",
    color: "#ffd333",
    label: {
      position: "top",
      style: {
        fill: "#000",
        opacity: 0.8,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: { alias: "Month" },
      income: { alias: "Income" },
    },
  };

  const config2 = {
    data: dataMonthlySales,
    xField: "type",
    yField: "sales",
    color: "#36cfc9",
    label: {
      position: "top",
      style: {
        fill: "#000",
        opacity: 0.8,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: { alias: "Month" },
      sales: { alias: "Sales" },
    },
  };

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      <h3 className="text-3xl font-bold mb-6">📊 Dashboard</h3>

      {/* Stats Cards */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex-grow p-6 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-2xl shadow-md transition-transform hover:scale-[1.02]">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-white text-lg">Yearly Income</p>
              <h4 className="text-white text-3xl font-bold">
                ₹ {yearlyDataState ? yearlyDataState[0]?.amount : "0"}
              </h4>
            </div>
            <BsArrowUpRight className="text-white text-4xl" />
          </div>
        </div>
        <div className="flex-grow p-6 bg-gradient-to-br from-green-400 to-green-300 rounded-2xl shadow-md transition-transform hover:scale-[1.02]">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-white text-lg">Yearly Sales</p>
              <h4 className="text-white text-3xl font-bold">
                {yearlyDataState ? yearlyDataState[0]?.count : "0"}
              </h4>
            </div>
            <BsArrowDownRight className="text-white text-4xl" />
          </div>
        </div>
      </div>

      {/* Income Chart */}
      <div className="mt-8 bg-white p-6 rounded-2xl shadow-sm">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">
          📈 Income Statistics
        </h3>
        <Column {...config} />
      </div>

      {/* Sales Chart */}
      <div className="mt-8 bg-white p-6 rounded-2xl shadow-sm">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">
          📦 Sales Statistics
        </h3>
        <Column {...config2} />
      </div>

      {/* Orders Table */}
      <div className="mt-8 bg-white p-6 rounded-2xl shadow-sm">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">
          🧾 Recent Orders
        </h3>
        <Table
          columns={columns}
          dataSource={orderData}
          pagination={{ pageSize: 5 }}
          bordered
          rowClassName={() => "hover:bg-gray-100"}
        />
      </div>
    </div>
  );
};

export default DashBoard;
