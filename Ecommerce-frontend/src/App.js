import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import OurStore from './pages/OurStore'
import Blog from './pages/Blog'
import CompareProduct from './pages/CompareProduct'
import WishList from './pages/WishList'
import LogIn from './pages/LogIn'
import ForgotPassword from './pages/ForgotPassword'
import Signup from './pages/Signup'
import ResetPassword from './pages/ResetPassword'
import SingleBlog from './pages/SingleBlog'
import RefundPolicy from './pages/RefundPolicy'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfServices from './pages/TermsOfServices'
import ShipingPolicy from './pages/ShipingPolicy'
import SingleProductPage from './pages/SingleProductPage'
import Cart from './pages/Cart'
import CheckOut from './pages/CheckOut'
import { PrivateRoutes } from './routing/privateRoutes'
import { OpenRoutes } from './routing/openRoutes'
import Orders from './pages/Orders'
import Profile from './pages/Profile'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='store' element={<OurStore/>}/>
            <Route path='product/:id' element={<SingleProductPage/>}/>
            <Route path='blog' element={<Blog/>}/>
            <Route path='blog/:id' element={<SingleBlog/>}/>
            <Route path='compare-product' element={<CompareProduct/>}/>
            <Route path='wishlist' element={<PrivateRoutes><WishList/></PrivateRoutes>}/>
            <Route path='login' element={<OpenRoutes><LogIn/></OpenRoutes>}/>
            <Route path='profile' element={<PrivateRoutes><Profile/></PrivateRoutes>}/>
            <Route path='forgot-password' element={<ForgotPassword/>}/>
            <Route path='signup' element={<OpenRoutes><Signup/></OpenRoutes>}/>
            <Route path='reset-password/:token' element={<ResetPassword/>}/>
            <Route path='refund-policy' element={<RefundPolicy/>}/>
            <Route path='privacy-policy' element={<PrivacyPolicy/>}/>
            <Route path='terms-of-services' element={<TermsOfServices/>}/>
            <Route path='shiping-policy' element={<ShipingPolicy/>}/>
            <Route path='cart' element={<PrivateRoutes><Cart/></PrivateRoutes>}/>
            <Route path='orders' element={<PrivateRoutes><Orders/></PrivateRoutes>}/>
            <Route path='/checkout' element={<PrivateRoutes><CheckOut/></PrivateRoutes>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App