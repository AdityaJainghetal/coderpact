import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import {useFormik} from 'formik'
import * as Yup from 'yup';
import CustomInput from '../components/CustomInput'
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../features/user/userSlice';
import {FiEdit} from 'react-icons/fi'

let userSchema = Yup.object().shape({
    firstname: Yup.string().required("First Name is required"),
    lastname: Yup.string().required("Last Name is required"),
    mobile: Yup.number().required("Mobile Name is required"),
    email: Yup.string().email("Email should be valid").required("Email is required"),
  });

const Profile = () => {
    const dispatch = useDispatch()
    const userState = useSelector(state => state.auth.user)
    const [edit,setEdit] = useState(false)
    const formik = useFormik({
        initialValues: {
          firstname:userState?.firstname,
          lastname:userState?.lastname,
          mobile:userState?.mobile,
          email: userState?.email,
        },
        validationSchema:userSchema,
        onSubmit: values => {
            setEdit(false)
          dispatch(updateUser(values))

        },
      });
  return (
    <div>
        <BreadCrumb title='Profile'/>
        <div className='w-full py-20 px-[5%] flex justify-center items-center bg-[#F5F5F7]'>

        <form action="" onSubmit={formik.handleSubmit} className='w-full md:w-[80vw] p-5 bg-white rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='text-3xl'>Update Profile</h3>
                    <FiEdit className='text-3xl cursor-pointer' onClick={()=> setEdit(true)}/>
                </div>
                <CustomInput type="text" placeholder='First Name' name="firstname" 
                  onCh={formik.handleChange("firstname")}
                  val={formik.values.firstname}   />
                  <div className='text-red-400 ms-2 mt-2 text-sm'>
                  {formik.touched.firstname && formik.errors.firstname ? (
                    <div>{formik.errors.firstname}</div>
                  ) : null}
                </div>
                <CustomInput type="text" placeholder='Last Name' name="lastname" 
                  onCh={formik.handleChange("lastname")}
                  val={formik.values.lastname}   />
                  <div className='text-red-400 ms-2 mt-2 text-sm'>
                  {formik.touched.lastname && formik.errors.lastname ? (
                    <div>{formik.errors.lastname}</div>
                  ) : null}
                </div>
                <CustomInput type="email" placeholder='Email' name="email" 
                  onCh={formik.handleChange("email")}
                  val={formik.values.email}  />
                  <div className='text-red-400 ms-2 mt-2 text-sm'>
                  {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                  ) : null}
                </div>
                   <CustomInput type="number" placeholder='Mobile' name="mobile" 
                  onCh={formik.handleChange("mobile")}
                  val={formik.values.mobile}  />
                  <div className='text-red-400 ms-2 mt-2 text-sm'>
                  {formik.touched.mobile && formik.errors.mobile ? (
                    <div>{formik.errors.mobile}</div>
                  ) : null}
                </div>
                  {edit ?<div className='flex gap-2 justify-center my-5'>
                    <button type='submit' className='uppercase bg-[#232F3E] hover:bg-amber-500 text-white px-7 py-3 rounded-[30px] w-full'>Save</button>
                </div> :""}
            </form>
    </div>
    </div>
  )
}

export default Profile