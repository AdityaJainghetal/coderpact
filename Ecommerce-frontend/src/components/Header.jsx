import React, { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import HeaderOptions from './HeaderOptions';
import { useDispatch, useSelector } from 'react-redux';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css'; // Ensure this is properly imported
import { getSingleProduct } from '../features/product/productSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [productOpt, setProductOpt] = useState([]);
  const [paginate, setPaginate] = useState(true);
  const [cartTotal, setCartTotal] = useState(0);
  const cartState = useSelector((state) => state.auth.userCart);
  const authState = useSelector((state) => state.auth);
  const productState = useSelector((state) => state?.product?.products);
  const [cartLength, setCartLength] = useState(0);

  useEffect(() => {
    let tot = 0;
    for (let idx = 0; idx < cartState?.length; idx++) {
      tot += cartState[idx]?.price * cartState[idx]?.quantity;
    }
    setCartLength(cartState?.length);
    setCartTotal(tot);
  }, [cartState]);

  useEffect(() => {
    const data = [];
    for (let i = 0; i < productState?.length; i++) {
      const elem = productState[i];
      data.push({ id: i, prod: elem?._id, name: elem?.title });
    }
    setProductOpt(data);
  }, [productState]);

  const handleLogOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      {/* <header className='w-full py-2 px-4 md:py-4 md:px-[5%] flex justify-between bg-gray-950 font-light text-xs md:text-sm gap-2 md:gap-10 text-slate-50 border-b border-gray-800'> */}
        {/* <p>Free Shipping Over $100 & Free Returns</p> */}
        {/* <p>HotLine <a href="tel:+91 8976543457">+91 8976543457</a></p> */}
      {/* </header> */}
      <header className='w-full py-4 px-4 md:py-6 md:px-[5%] flex flex-col md:flex-row items-center bg-gray-950 text-slate-50 font-light text-sm gap-4 md:gap-0 justify-between'>
        <Link to='/' className='text-2xl md:text-3xl font-semibold'>Digittic</Link>
        <div className='flex justify-between w-full md:w-auto bg-white rounded-xl'>
          <Typeahead
            id="pagination-example"
            onPaginate={() => console.log('Results paginated')}
            options={productOpt}
            paginate={paginate}
            labelKey={'name'}
            onChange={(selected) => {
              if (selected[0]) {
                navigate(`/product/${selected[0].prod}`);
                dispatch(getSingleProduct(selected[0].prod))
              }
            }}
            placeholder="Search For Products Here"
            className='custom-typeahead'
            inputProps={{
              className: 'custom-input px-8 py-3 rounded-xl text-black bg-white outline-none',
            }}
            renderMenuItemChildren={(option, props) => (
              <div className="px-3 py-2 text-black hover:bg-gray-100">
                {option.name}
              </div>
            )}
            menuStyle={{ backgroundColor: 'white', color: 'black', borderRadius: '8px', padding: '0.5rem 0' }}
          />
          <span className='bg-amber-400 px-4 text-black text-sm md:text-xl rounded-sm flex justify-center items-center'>
            <BsSearch/>
          </span>
        </div>
        <div className='flex w-full md:w-auto justify-around md:justify-between md:gap-10 text-xs md:text-sm'>
          {/* <Link to='/compare-product' className='flex gap-2 items-center'>
            <img src="/images/compare.png" alt="Compare" className='w-6 h-6 md:w-10 md:h-10 object-cover' />
            <p className='md:block'>Compare <br /> Products</p>
          </Link> */}
          <Link to='/wishlist' className='flex gap-2 items-center'>
            <img src="/images/wishlist.png" alt="Wishlist" className='w-6 h-6 md:w-10 md:h-10 object-cover' />
            <p className='md:block'>Favourite <br /> Wishlist</p>
          </Link>
          <Link to={authState.user == null ? '/login' : '/profile'} className='flex gap-2 items-center'>
            <img src="/images/user.png" alt="User" className='w-6 h-6 md:w-10 md:h-10 object-cover' />
            {
              !authState.user ? <p className='md:block'>Login <br /> My Account</p> 
              : <p className='md:block'>Welcome <br /> {authState?.user?.firstname}</p>
            }
          </Link>
          <Link to='/cart' className='flex gap-2 items-center'>
            <img src="/images/cart.png" alt="Cart" className='w-6 h-6 md:w-10 md:h-10 object-cover' />
            <div>
              <span className='px-2 md:px-4 rounded-xl text-black bg-white'>{cartLength}</span>
              <p className='md:block'>${cartTotal}</p>
            </div>
          </Link>
        </div>
      </header>
      <header className='bg-[#232F3E] text-white px-4 py-2 md:px-[5%] md:py-4 uppercase flex justify-between flex-col md:flex-row md:gap-10'>
        {/* <HeaderOptions /> */}
       
        <div className='flex justify-between items-center w-full md:w-[80%]'>
          <div className='flex gap-4 md:gap-10 items-center md:text-xl text-[13px]'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/store'>Our Store</NavLink>
            <NavLink to='/orders'>My Orders</NavLink>
            <NavLink to='/blog'>Blogs</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
          </div>
        </div>
        {authState.user && (
            <button onClick={handleLogOut} className='bg-white text-black px-4 py-1 rounded-md md:mt-0 mt-4' type='button'>Log Out</button>
          )}
      </header>
    </>
  );
};

export default Header;
