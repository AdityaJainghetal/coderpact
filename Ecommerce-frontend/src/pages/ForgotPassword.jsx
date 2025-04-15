import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import CustomInput from '../components/CustomInput'
import {useFormik} from 'formik'
import * as Yup from 'yup';
import { forgotPasswordToken } from '../features/user/userSlice'
import { useDispatch } from 'react-redux'


let userSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email should be valid")
    .required("Email is required"),
});

const ForgotPassword = () => {
  const dispatch =useDispatch()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      dispatch(forgotPasswordToken(values));
    },
  });
  return (
    <>
      <BreadCrumb title='forgot Password'/>
      <div className='w-full py-20 px-[5%] flex justify-center items-center bg-[#F5F5F7]'>
            <form action=""  onSubmit={formik.handleSubmit} className='w-dull md:w-[40vw] p-5 bg-white rounded-xl'>
                <h2 className='text-3xl font-semibold text-center'>Reset your Password</h2>
                <p className='text-center text-gray-400 mt-5 text-xl'>We will send you an email to reset your password</p>
                <CustomInput type="email" placeholder='Email'  name="email"
            onCh={formik.handleChange("email")}
            val={formik.values.email} />
            <div className="text-red-400 ms-2 mt-2 text-sm">
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>
                  <div className='flex flex-col items-center justify-center mt-5'>
                    <button className='uppercase bg-[#232F3E] hover:bg-amber-500 text-white px-7 py-3 rounded-[30px]'>Submit</button> <br />
                    <Link to='/login' className='text-xl'>Cancel</Link>
                  </div>
            </form>
        </div>
    </>
  )
}

export default ForgotPassword