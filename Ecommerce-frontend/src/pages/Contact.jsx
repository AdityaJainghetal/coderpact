import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import { IoHome, IoMail } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { PiTimerFill } from "react-icons/pi";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createEnquiry } from "../features/contact/contactSlice";

const contactSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Email should be valid")
    .required("Email is required"),
  mobile: Yup.number().required("Mobile is required"),
  comment: Yup.string().required("Comment is required"),
});

const Contact = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      comment: "",
    },
    validationSchema: contactSchema,
    onSubmit: (values) => {
      dispatch(createEnquiry(values));
      alert(JSON.stringify(values, null, 2));
    },
  });

  const { isLoading, isError, isSuccess } = useSelector(
    (state) => state.contact
  );

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isLoading, isError, isSuccess, navigate]);

  return (
    <div className="bg-[#F5F5F7] min-h-screen">
      <BreadCrumb title="Contact" />

      {/* Embedded Map */}
      <div className="w-full">
        <iframe
          className="w-full h-[400px] object-cover"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29319.99937279767!2d77.34636271282585!3d23.279452555620104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c67c17bb8f853%3A0xd813d253620bd949!2sLalghati%2C%20Bhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1722515001904!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        ></iframe>
      </div>

      <div className="max-w-7xl mx-auto my-10 px-5">
        <div className="bg-white shadow-lg rounded-3xl overflow-hidden flex flex-col md:flex-row">
          {/* Left: Contact Form */}
          <div className="w-full md:w-1/2 p-10 border-r border-gray-200">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Contact Us
            </h2>
            <p className="text-gray-500 mb-8">
              Have any questions? Let us know. We’re here to help!
            </p>
            <form onSubmit={formik.handleSubmit} className="space-y-6">
              <div>
                <CustomInput
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  onCh={formik.handleChange("name")}
                  val={formik.values.name}
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-400 text-sm mt-2">
                    {formik.errors.name}
                  </p>
                )}
              </div>
              <div>
                <CustomInput
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  onCh={formik.handleChange("email")}
                  val={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-400 text-sm mt-2">
                    {formik.errors.email}
                  </p>
                )}
              </div>
              <div>
                <CustomInput
                  type="text"
                  placeholder="Enter Your Number"
                  name="mobile"
                  onCh={formik.handleChange("mobile")}
                  val={formik.values.mobile}
                />
                {formik.touched.mobile && formik.errors.mobile && (
                  <p className="text-red-400 text-sm mt-2">
                    {formik.errors.mobile}
                  </p>
                )}
              </div>
              <div>
                <textarea
                  className="w-full h-[150px] border border-gray-300 p-3 text-lg outline-none rounded-xl focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="Comment"
                  name="comment"
                  onChange={formik.handleChange("comment")}
                  value={formik.values.comment}
                ></textarea>
                {formik.touched.comment && formik.errors.comment && (
                  <p className="text-red-400 text-sm mt-2">
                    {formik.errors.comment}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full uppercase bg-[#232F3E] hover:bg-gray-800 text-white py-4 rounded-full transition duration-300"
                disabled={isLoading}
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right: Contact Information */}
          <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Get In Touch With Us
            </h2>
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <IoHome className="text-2xl text-blue-600" />
                <p className="text-gray-600 text-sm">
                  33 New Mangomerry Street, 750 San Francisco, CA USA 94532
                </p>
              </div>
              <div className="flex items-center gap-3">
                <IoMdCall className="text-2xl text-blue-600" />
                <p className="text-gray-600 text-sm">(+91) 7654323456</p>
              </div>
              <div className="flex items-center gap-3">
                <IoMail className="text-2xl text-blue-600" />
                <p className="text-gray-600 text-sm">check@checkgmail.com</p>
              </div>
              <div className="flex items-center gap-3">
                <PiTimerFill className="text-2xl text-blue-600" />
                <p className="text-gray-600 text-sm">Monday - Friday 10AM - 8PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
