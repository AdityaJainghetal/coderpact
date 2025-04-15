import { Table } from 'antd'
import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { getProducts } from '../features/product/productSlice';
import { Link } from 'react-router-dom';
import {BiEdit} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'
import { deleteProduct } from '../features/product/productSlice';

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "title",
    sorter: (a, b) => a.title.length - b.title.length,
  },
  {
    title: "Brand",
    dataIndex: "brand",
    sorter: (a, b) => a.brand.length - b.brand.length,
  },
  {
    title: "Category",
    dataIndex: "category",
    sorter: (a, b) => a.category.length - b.category.length,
  },
  {
    title: "Color",
    dataIndex: "color",
  },
  {
    title: "Price",
    dataIndex: "price",
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const ProductList = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getProducts())
  },[])

  const deletedProduct = (id)=>{
    dispatch(deleteProduct(id))
  }


  const productState = useSelector((state)=> state.product.products)
  const data1 = [];
  for (let i = 0; i < productState.length; i++) {
    
      data1.push({
        key: i + 1,
        title: productState[i].title,
        brand: productState[i].brand,
        category: productState[i].category,
        // color: productState[i].color,
        price: `${productState[i].price}`,
        action: (
          <div className='text-xl text-red-500 flex gap-2'>
             <Link to={`/admin/product/${productState[i]._id}`}>
              <BiEdit/>
            </Link>
            <Link>
              <AiFillDelete onClick={()=> deletedProduct(productState[i]._id)}/>
            </Link>
          </div>
        ),
    
      });
    
  }
  return (
    <div>
        <h3 className="mb-4 text-2xl font-semibold">Products</h3>
        <div>
        <Table columns={columns} dataSource={data1} />
        </div>
    </div>
  )
}

export default ProductList



// import { Table } from 'antd';
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getProducts, deleteProduct } from '../features/product/productSlice';
// import { Link } from 'react-router-dom';
// import { BiEdit } from 'react-icons/bi';
// import { AiFillDelete } from 'react-icons/ai';
// import CustomModal from '../Component/CustomModal';

// const columns = [
//   {
//     title: "SNo",
//     dataIndex: "key",
//   },
//   {
//     title: "Title",
//     dataIndex: "title",
//     sorter: (a, b) => a.title.length - b.title.length,
//   },
//   {
//     title: "Brand",
//     dataIndex: "brand",
//     sorter: (a, b) => a.brand.length - b.brand.length,
//   },
//   {
//     title: "Category",
//     dataIndex: "category",
//     sorter: (a, b) => a.category.length - b.category.length,
//   },
//   {
//     title: "Color",
//     dataIndex: "color",
//   },
//   {
//     title: "Price",
//     dataIndex: "price",
//     sorter: (a, b) => a.price - b.price,
//   },
//   {
//     title: "Action",
//     dataIndex: "action",
//   },
// ];

// const ProductList = () => {
//   const dispatch = useDispatch();

//   const [open, setOpen] = useState(false);
//   const [productId, setProductId] = useState("");

//   const showModal = (id) => {
//     setOpen(true);
//     setProductId(id);
//   };

//   const hideModal = () => {
//     setOpen(false);
//   };

//   useEffect(() => {
//     dispatch(getProducts());
//   }, [dispatch]);

//   const delProduct = (id) => {
//     dispatch(deleteProduct(id));
//     setOpen(false);
//     setTimeout(() => {
//       dispatch(getProducts());
//     }, 100);
//   };

//   const productState = useSelector((state) => state.product.products);
//   const data1 = [];

//   for (let i = 0; i < productState.length; i++) {
//     data1.push({
//       key: i + 1,
//       title: productState[i].title,
//       brand: productState[i].brand,
//       category: productState[i].category,
//       color: Array.isArray(productState[i].color)
//         ? productState[i].color.join(", ")
//         : productState[i].color || "N/A",
//       price: `${productState[i].price}`,
//       action: (
//         <div className="text-xl text-red-500 flex gap-2">
//           <Link to={`/admin/product/${productState[i]._id}`}>
//             <BiEdit />
//           </Link>
//           <button onClick={() => showModal(productState[i]._id)}>
//             <AiFillDelete />
//           </button>
//         </div>
//       ),
//     });
//   }

//   return (
//     <div>
//       <h3 className="mb-4 text-2xl font-semibold">Products</h3>
//       <div>
//         <Table columns={columns} dataSource={data1} />
//       </div>
//       <CustomModal
//         hideModal={hideModal}
//         open={open}
//         title="Are you sure you want to delete this Product?"
//         performAction={() => delProduct(productId)}
//       />
//     </div>
//   );
// };

// export default ProductList;

// import { Table, Spin, message } from 'antd';
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getProducts, deleteProduct } from '../features/product/productSlice';
// import { Link, useNavigate } from 'react-router-dom';
// import { BiEdit } from 'react-icons/bi';
// import { AiFillDelete } from 'react-icons/ai';
// import CustomModal from '../Component/CustomModal';

// const columns = [
//   {
//     title: "SNo",
//     dataIndex: "key",
//   },
//   {
//     title: "Title",
//     dataIndex: "title",
//     sorter: (a, b) => a.title.length - b.title.length,
//   },
//   {
//     title: "Brand",
//     dataIndex: "brand",
//     sorter: (a, b) => a.brand.length - b.brand.length,
//   },
//   {
//     title: "Category",
//     dataIndex: "category",
//     sorter: (a, b) => a.category.length - b.category.length,
//   },
//   {
//     title: "Color",
//     dataIndex: "color",
//   },
//   {
//     title: "Price",
//     dataIndex: "price",
//     sorter: (a, b) => a.price - b.price,
//   },
//   {
//     title: "Action",
//     dataIndex: "action",
//   },
// ];

// const ProductList = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);
//   const [productId, setProductId] = useState("");

//   const productState = useSelector((state) => state.product.products);
//   const isLoading = useSelector((state) => state.product.isLoading);
//   const isError = useSelector((state) => state.product.isError);

//   useEffect(() => {
//     dispatch(getProducts());
//   }, [dispatch]);

//   const showModal = (id) => {
//     setOpen(true);
//     setProductId(id);
//   };

//   const hideModal = () => {
//     setOpen(false);
//   };

//   const delProduct = async (id) => {
//     try {
//       await dispatch(deleteProduct(id)).unwrap();
//       message.success('Product deleted successfully');
//     } catch (error) {
//       message.error('Failed to delete product');
//     } finally {
//       setOpen(false);
//     }
//   };

//   const editProduct = (id) => {
//     navigate(`/editproduct/${id}`);
//   };

//   const dataSource = productState.map((product, index) => ({
//     key: index + 1,
//     title: product.title,
//     brand: product.brand,
//     category: product.category,
//     color: Array.isArray(product.color) ? product.color.join(", ") : product.color || "N/A",
//     price: `${product.price}`,
//     action: (
//       <div className="text-xl text-red-500 flex gap-2">
//         <Link onClick={() => editProduct(product._id)} aria-label="Edit product">
//           <BiEdit />
//         </Link>
//         <button onClick={() => showModal(product._id)} aria-label="Delete product">
//           <AiFillDelete />
//         </button>
//       </div>
//     ),
//   }));

//   if (isLoading) {
//     return <Spin size="large" />;
//   }

//   if (isError) {
//     return <div>Error loading products. Please try again later.</div>;
//   }

//   if (dataSource.length === 0) {
//     return <div>No products available.</div>; // Handle empty state
//   }

//   return (
//     <div>
//       <h3 className="mb-4 text-2xl font-semibold">Products</h3>
//       <Table columns={columns} dataSource={ dataSource} />
//       <CustomModal
//         hideModal={hideModal}
//         open={open}
//         title="Are you sure you want to delete this Product?"
//         performAction={() => delProduct(productId)}
//       />
//     </div>
//   );
// };

// export default ProductList;


// import { Table, Spin, message } from 'antd';
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getProducts, deleteProduct } from '../features/product/productSlice';
// import { Link } from 'react-router-dom';
// import { BiEdit } from 'react-icons/bi';
// import { AiFillDelete } from 'react-icons/ai';
// import CustomModal from '../Component/CustomModal';

// const columns = [
//   {
//     title: "SNo",
//     dataIndex: "key",
//   },
//   {
//     title: "Title",
//     dataIndex: "title",
//     sorter: (a, b) => a.title.length - b.title.length,
//   },
//   {
//     title: "Brand",
//     dataIndex: "brand",
//     sorter: (a, b) => a.brand.length - b.brand.length,
//   },
//   {
//     title: "Category",
//     dataIndex: "category",
//     sorter: (a, b) => a.category.length - b.category.length,
//   },
//   {
//     title: "Color",
//     dataIndex: "color",
//   },
//   {
//     title: "Price",
//     dataIndex: "price",
//     sorter: (a, b) => a.price - b.price,
//   },
//   {
//     title: "Action",
//     dataIndex: "action",
//   },
// ];

// const ProductList = () => {
//   const dispatch = useDispatch();
//   const [open, setOpen] = useState(false);
//   const [productId, setProductId] = useState("");

//   const productState = useSelector((state) => state.product.products);
//   const isLoading = useSelector((state) => state.product.isLoading);
//   const isError = useSelector((state) => state.product.isError);

//   useEffect(() => {
//     dispatch(getProducts());
//   }, [dispatch]);

//   const showModal = (id) => {
//     setOpen(true);
//     setProductId(id);
//   };

//   const hideModal = () => {
//     setOpen(false);
//   };

//   const delProduct = async (id) => {
//     try {
//       await dispatch(deleteProduct(id)).unwrap();
//       message.success('Product deleted successfully');
//     } catch (error) {
//       message.error('Failed to delete product');
//     } finally {
//       setOpen(false);
//     }
//   };

//   const productData = productState.map((product, index) => ({
//     key: index + 1,
//     title: product.title,
//     brand: product.brand,
//     category: product.category,
//     color: Array.isArray(product.color) ? product.color.join(", ") : product.color || "N/A",
//     price: `${product.price}`,
//     action: (
//       <div className="text-xl text-red-500 flex gap-2">
//         <Link to={`/admin/product/${product._id}`} aria-label="Edit product">
//           <BiEdit />
//         </Link>
//         <button onClick={() => showModal(product._id)} aria-label="Delete product">
//           <AiFillDelete />
//         </button>
//       </div>
//     ),
//   }));

//   if (isLoading) {
//     return <Spin size="large" />;
//   }

//   if (isError) {
//     return <div>Error loading products. Please try again later.</div>;
//   }

//   return (
//     <div>
//       <h3 className="mb-4 text-2xl font-semibold">Products</h3>
//       <Table columns={columns} dataSource={productData} />
//       <CustomModal
//         hideModal={hideModal}
//         open={open}
//         title="Are you sure you want to delete this Product?"
//         performAction={() => delProduct(productId)}
//       />
//     </div>
//   );
// };

// export default ProductList;