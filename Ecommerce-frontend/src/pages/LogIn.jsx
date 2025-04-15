// import React, { useEffect } from "react";
// import BreadCrumb from "../components/BreadCrumb";
// import { Link, useNavigate } from "react-router-dom";
// import CustomInput from "../components/CustomInput";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUser  } from "../features/user/userSlice";

// const userSchema = Yup.object().shape({
//   email: Yup.string()
//     .email("Email should be valid")
//     .required("Email is required"),
//   password: Yup.string().required("Password is required"),
// });

// const LogIn = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { user, isLoading, isError, isSuccess, message } = useSelector(
//     (state) => state.auth
//   );

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validationSchema: userSchema,
//     onSubmit: (values) => {
//       dispatch(loginUser (values));
//     },
//   });

//   useEffect(() => {
//     if (isSuccess) {
//       navigate("/");
//     }
//     if (isError) {
//       // Optionally, you can display an error message to the user
//       alert(message); // Replace with a more user-friendly notification
//     }
//   }, [user, isLoading, isError, isSuccess, navigate, message]);

//   return (
//     <>
//       <BreadCrumb title="Login" />
//       <div className="w-full py-20 px-[5%] flex justify-center items-center bg-[#F5F5F7]">
//         <form
//           onSubmit={formik.handleSubmit}
//           className="w-full md:w-[40vw] p-5 bg-white rounded-xl"
//         >
//           <h2 className="text-3xl font-semibold text-center">Login</h2>
//           <CustomInput
//             type="email"
//             placeholder="Email"
//             name="email"
//             onCh={formik.handleChange("email")}
//             val={formik.values.email}
//           />
//           {formik.touched.email && formik.errors.email && (
//             <div className="text-red-400 ms-2 mt-2 text-sm">
//               {formik.errors.email}
//             </div>
//           )}
//           <CustomInput
//             type="password"
//             placeholder="Password"
//             name="password"
//             onCh={formik.handleChange("password")}
//             val={formik.values.password}
//             classname="mb-5"
//           />
//           {formik.touched.password && formik.errors.password && (
//             <div className="text-red-400 ms-2 my-2 text-sm">
//               {formik.errors.password}
//             </div>
//           )}
//           <Link
//             to="/forgot-password"
//             className="ms-2 text-blue-400 font-medium"
//           >
//             Forgot your password?
//           </Link>
//           <div className="flex gap-2 justify-center my-5">
//             <button
//               type="submit"
//               className="uppercase bg-[#232F3E] hover:bg-amber- 500 text-white px-7 py-3 rounded-[30px]"
//               disabled={isLoading}
//             >
//               {isLoading ? "Loading..." : "Login"}
//             </button>
//             <Link
//               to="/signup"
//               className="uppercase hover:bg-amber-500 bg-[#232F3E] text-white px-7 py-3 rounded-[30px]"
//             >
//               Signup
//             </Link>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default LogIn;




import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import { Link, useNavigate } from "react-router-dom";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/user/userSlice";

const userSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email should be valid")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
    if (isError) {
      alert(message); 
    }
  }, [user, isLoading, isError, isSuccess, navigate, message]);

  return (
    <>
      <BreadCrumb title="Login" />
      <div className="w-full py-20 px-[5%] flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500">
        <form style={{backgroundColor:"#2e91a3"}}
          onSubmit={formik.handleSubmit}
          className="w-full md:w-[40vw] p-8 bg-slate-500 rounded-xl shadow-lg"
        >
          <h2 className="text-3xl font-semibold text-center text-blue-600">Login</h2>
          <CustomInput
            type="email"
            placeholder="Email"
            name="email"
            onCh={formik.handleChange("email")}
            val={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-400 ms-2 mt-2 text-sm">{formik.errors.email}</div>
          )}
          <CustomInput
            type="password"
            placeholder="Password"
            name="password"
            onCh={formik.handleChange("password")}
            val={formik.values.password}
            classname="mb-5"
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-400 ms-2 my-2 text-sm">{formik.errors.password}</div>
          )}
          <Link
            to="/forgot-password"
            className="ms-2 text-blue-400 font-medium hover:underline"
          >
            Forgot your password?
          </Link>
          <div className="flex gap-2 justify-center my-5">
            <button
              type="submit"
              className="uppercase bg-gradient-to-r from-green-400 to-teal-500 hover:bg-gradient-to-r hover:from-teal-500 hover:to-green-400 text-white px-7 py-3 rounded-full shadow-lg"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
            <Link
              to="/signup"
              className="uppercase bg-gradient-to-r from-pink-400 to-red-500 hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-400 text-white px-7 py-3 rounded-full shadow-lg"
            >
              Signup
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default LogIn;
