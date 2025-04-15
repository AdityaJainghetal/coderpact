import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa6";
import { FaFacebookSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-[#232F3E] text-white pb-5'>
      <footer className='flex flex-col md:flex-row justify-between items-center md:px-[5%] py-8 md:py-16 gap-4 px-4'>
        <div className='flex gap-2 items-center'>
          <img src="/images/newsletter.png" alt="newsletter" className='w-6 h-6 object-cover' />
          <p className='text-lg md:text-xl'>Sign Up For Newsletter</p>
        </div>
        <div className='flex w-full md:w-auto bg-white p-1 rounded-sm shadow-inherit'>
          <input
            type="text"
            placeholder='Enter Your Email'
            className='px-4 w-full md:w-[30vw] text-black outline-none bg-transparent'
          />
          <button className='bg-[#232F3E] px-4 rounded-sm py-1 text-white'>Subscribe</button>
        </div>
      </footer>


      <footer className='border-t border-gray-600 px-[5%] py-10 flex flex-col md:flex-row justify-between gap-8'>
        <div className='flex flex-col mb-2'>
          <h4 className='text-xl font-bold'>Contact Us</h4>
          <address className='py-1'>
            Hno: 20 Block square, Sonipat, Haryana <br />
            PinCode: 145263
          </address>
          <a href="tel:+91 62543817269" className='py-1'>+91 9399882934</a>
          <a href="mailto:devanshibilthare54@gmail.com" className='py-1'>adityajainghetal@gmail.com</a>
          <div className='flex gap-2 mt-6'>
            <Link to=''><FaTwitter className='w-10 h-10 bg-[#384351] p-3 rounded-full '/></Link>
            <Link to=''><FaFacebookSquare className='w-10 h-10 bg-[#384351] p-3 rounded-full '/></Link>
            <Link to=''><FaPinterest className='w-10 h-10 bg-[#384351] p-3 rounded-full '/></Link>
            <Link to=''><FaYoutube className='w-10 h-10 bg-[#384351] p-3 rounded-full '/></Link>
            <Link to=''><FaInstagram className='w-10 h-10 bg-[#384351] p-3 rounded-full '/></Link>
          </div>
        </div>
        <div className='flex flex-col'>
          <h4 className='text-xl font-bold mb-2'>Information</h4>
          <Link to='privacy-policy' className='py-1'>Privacy Policy</Link>
          <Link to='refund-policy' className='py-1'>Refund Policy</Link>
          <Link to='shiping-policy' className='py-1'>Shipping Policy</Link>
          <Link to='terms-of-services' className='py-1'>Terms Of Services</Link>
        </div>
        <div className='flex flex-col'>
          <h4 className='text-xl font-bold mb-2'>Account</h4>
          <Link className='py-1'>About Us</Link>
          <Link className='py-1'>FAQ</Link>
          <Link className='py-1'>Contact</Link>
          <Link className='py-1'>Blogs</Link>
        </div>
        <div className='flex flex-col'>
          <h4 className='text-xl font-bold mb-2'>Quick Links</h4>
          <Link className='py-1'>Laptops</Link>
          <Link className='py-1'>Headphones</Link>
          <Link className='py-1'>Tablets</Link>
          <Link className='py-1'>Watch</Link>
        </div>
      </footer>


      <footer className='border-t border-gray-600 pt-4 md:px-[5%]'>
        <p className='text-center text-sm capitalize'> &copy; {new Date().getFullYear()} Powered By Digitics</p>
      </footer>
    </div>
  );
}

export default Footer;
