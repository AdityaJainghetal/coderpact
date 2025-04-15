import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CheckOutProductDetails = () => {
    const cartState = useSelector(state => state.auth.userCart);
    const [cartTotal, setCartTotal] = useState(0);
    const shippingCost = 30;

    useEffect(() => {
        if (cartState) {
            const total = cartState.reduce((acc, item) => {
                return acc + (item?.price * item?.quantity);
            }, 0);
            setCartTotal(total);
        }
    }, [cartState]);

    return (
        <div className='w-full md:w-[50%] bg-white border-2 py-10 px-5 h-max'>
            {cartState?.length > 0 ? (
                cartState.map((item, idx) => (
                    <div key={idx} className='w-full flex justify-between items-center gap-10 mb-10'>
                        <div className='w-[80%] flex items-center gap-5 relative'>
                            <img src={item?.productId?.images[0]?.url} alt={item?.productId?.title} className='h-16' />
                            <p className='absolute left-20 -top-2 hidden md:flex w-5 h-5 rounded-full bg-black text-white items-center justify-center'>{item?.quantity}</p>
                            <div>
                                <h2>{item?.productId?.title}</h2>
                                <p>S / #1456w1</p>
                            </div>
                        </div>
                        <h4>${item?.price}</h4>
                    </div>
                ))
            ) : (
                <p>Your cart is empty.</p>
            )}

            <div className='w-full flex justify-between items-center gap-10 border-t pt-10'>
                <h2>Sub Total</h2>
                <h4>${cartTotal}</h4>
            </div>
            <div className='w-full flex justify-between items-center gap-10 mt-5 mb-10'>
                <h2>Shipping</h2>
                <h4>${shippingCost}</h4>
            </div>
            <div className='w-full flex justify-between items-center gap-10 pt-5 border-t'>
                <h2>Total</h2>
                <h4 className='text-3xl text-black'>${cartTotal + shippingCost}</h4>
            </div>
        </div>
    );
};

export default CheckOutProductDetails;