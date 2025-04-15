import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import CustomInput from '../components/CustomInput'
import {useFormik} from 'formik'
import * as Yup from 'yup';
import { useDispatch } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom';
import { resetPasswordToken } from '../features/user/userSlice';

let userSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password is required"),
});


const ResetPassword = () => {
  const params = useParams()
  console.log(params)
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      dispatch(resetPasswordToken({password:values.password,token:params.token}));
      Navigate('/login')
    },
  });

  return (
    <>
        <BreadCrumb title='Reset Password' />
        <div className='w-full py-20 px-[5%] flex justify-center items-center bg-[#F5F5F7]'>
            <form action="" onSubmit={formik.handleSubmit} className='w-full md:w-[40vw] p-5 bg-white rounded-xl'>
                <h2 className='text-3xl font-semibold text-center'>Reset your Password</h2>
                <CustomInput type="password" placeholder='Password'  
                name="password"
                onCh={formik.handleChange("password")}
                val={formik.values.password} />
                 <div className="text-red-400 ms-2 mt-2 text-sm">
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>
               
                  <div className='flex flex-col items-center justify-center mt-5'>
                    <button className='uppercase bg-[#232F3E] hover:bg-amber-500 text-white px-7 py-3 rounded-[30px]'>Reset Password</button> <br />
                  </div>
            </form>
        </div>
    </>
  )
}

export default ResetPassword