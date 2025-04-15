// import React, { useEffect } from 'react'
// import { Link, Navigate, useNavigate } from 'react-router-dom'
// import CustomInput from '../Component/CustomInput'
// import {useFormik} from 'formik'
// import * as Yup from 'yup';
// import {useDispatch,useSelector} from 'react-redux'
// import { login } from '../features/auth/authSlice';

// let userSchema = Yup.object().shape({
//   email: Yup.string().email("Email should be valid").required("Email is required"),
//   password: Yup.string().required("Password is required"),
// });

// const LogIn = () => {
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const formik = useFormik({
//     initialValues: {
//       email: '',
//       password:''
//     },
//     validationSchema:userSchema,
//     onSubmit: values => {
//       dispatch(login(values))
//       alert(JSON.stringify(values, null, 2));
//     },
//   });
//   const {user,isLoading,isError,isSuccess,message} = useSelector((state)=> state.auth)
//   useEffect(() => {
//     if(isSuccess){
//       navigate('admin')
//     }else{
//       navigate("")
//     }
//   },[user,isLoading,isError,isSuccess])

//   return (
//     <>
//         <div className='w-full min-h-[100vh] py-20 px-[5%] flex justify-center items-center bg-[#F5F5F7]'>
//             <form  onSubmit={formik.handleSubmit} className='w-full md:w-[40vw] p-5 bg-white rounded-xl'>
//                 <h2 className='text-3xl font-semibold text-center'>Login</h2>
//                 <h4 className='text-center mt-5'>Log in to your account to continue</h4>
//                 <div>
//                   {message.message == "Rejected" ? "You are not an Admin" : ""}
//                 </div>
//                 <CustomInput  type="email" placeholder="Email" name="email" 
//                   onCh={formik.handleChange("email")}
//                   val={formik.values.email}         
//                 />
//                 <div className='text-red-400 ms-2 mt-2 text-sm'>
//                   {formik.touched.email && formik.errors.email ? (
//                     <div>{formik.errors.email}</div>
//                   ) : null}
//                 </div>
//                 <CustomInput type="password" placeholder='Password' name='password' 
//                   onCh={formik.handleChange("password")}
//                   val={formik.values.password}         
//                 />
//                 <div className='text-red-400 ms-2 my-2 text-sm'>
//                 {formik.touched.password && formik.errors.password ? (
//                 <div>{formik.errors.password}</div>
//                 ) : null}
//                 </div>
                
//                 <Link to='/forgot-password' className='ms-2 text-blue-400 font-medium'>Forgot your password?</Link>
//                 <div className='flex gap-2 justify-center my-5'>
//                     <button className='uppercase bg-[#232F3E] hover:bg-amber-500 text-white px-7 py-3 rounded-[30px]'>Login</button>
//                     <Link to='/signup' className='uppercase hover:bg-amber-500 bg-[#232F3E] text-white px-7 py-3 rounded-[30px]'>Signup</Link>
//                 </div>
//             </form>
//         </div>
//     </>
//   )
// }

// export default LogIn



import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CustomInput from '../Component/CustomInput'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../features/auth/authSlice'

let userSchema = Yup.object().shape({
  email: Yup.string().email("Email should be valid").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LogIn = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: userSchema,
    onSubmit: values => {
      dispatch(login(values))
    },
  });

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

  useEffect(() => {
    if (isSuccess) {
      navigate('/admin')
    }
  }, [user, isLoading, isError, isSuccess, message])

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="card shadow-sm p-4" style={{ maxWidth: '500px', width: '100%' }}>
        <h2 className="text-center mb-3">Login</h2>
        <p className="text-center text-muted mb-4">Log in to your account to continue</p>

        {message.message === "Rejected" && (
          <div className="alert alert-danger py-2 text-center" role="alert">
            You are not an Admin
          </div>
        )}

        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <CustomInput
              type="email"
              placeholder="Email"
              name="email"
              onCh={formik.handleChange("email")}
              val={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-danger small mt-1">{formik.errors.email}</div>
            )}
          </div>

          <div className="mb-3">
            <CustomInput
              type="password"
              placeholder="Password"
              name="password"
              onCh={formik.handleChange("password")}
              val={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-danger small mt-1">{formik.errors.password}</div>
            )}
          </div>

          <div className="d-flex justify-content-end mb-3">
            <Link to="/forgot-password" className="text-decoration-none text-primary">
              Forgot your password?
            </Link>
          </div>

          <div className="d-grid mb-3">
            <button type="submit" className="btn btn-dark btn-lg">
              Login
            </button>
          </div>

          <div className="d-grid">
            <Link to="/signup" className="btn btn-outline-dark btn-lg">
              Signup
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LogIn
