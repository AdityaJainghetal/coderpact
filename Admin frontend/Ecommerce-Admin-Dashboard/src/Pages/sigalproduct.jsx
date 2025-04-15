import React, { useEffect, useState } from 'react';
import { TbGitCompare } from "react-icons/tb";
import { useLocation } from "react-router-dom";
import Container from "../Component/CustomInput";
import { useDispatch, useSelector } from 'react-redux';
import { getAProduct } from "../features/product/productSlice";
import { Breadcrumb } from 'antd';
import ReactImageZoom from 'react-image-zoom';


const SingleProduct = () => {
    const [color, setColor] = useState('');
    const [quantity, setQuantity] = useState(1);

    const location = useLocation();
    const productId = location.pathname.split("/")[2];

    const dispatch = useDispatch();
    const productState = useSelector(state => state.product.singleproduct);

    useEffect(() => {
        if (productId) {
            dispatch(getAProduct(productId));
        }
    }, [dispatch, productId]);

    const uploadCart = () => {
        alert("Added to cart");
    };

    const props = {
        width: 594,
        height: 600,
        zoomWidth: 600,
        img: productState?.images?.[0]?.url || ''
    };

    return (
        <Container class1="main-product-wrapper py-5 home-wrapper-2">
            <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Products</Breadcrumb.Item>
                <Breadcrumb.Item>{productState?.title || "Loading..."}</Breadcrumb.Item>
            </Breadcrumb>

            <div className='row'>
                <div className='col-6'>
                    <div className='main-product-image'>
                        {productState?.images?.[0]?.url && (
                            <ReactImageZoom {...props} />
                        )}
                    </div>

                    <div className='other-product-images d-flex flex-wrap gap-15 mt-3'>
                        {productState?.images?.map((item, index) => (
                            <img key={index} src={item.url} alt={`product-${index}`} width={100} />
                        ))}
                    </div>
                </div>

                <div className='col-6'>
                    <h2>{productState?.title}</h2>
                    <p>{productState?.description}</p>
                    <p>Price: ₹{productState?.price}</p>
                    <button className='btn btn-primary' onClick={uploadCart}>Add to Cart</button>
                </div>
            </div>
        </Container>
    );
};

export default SingleProduct;
