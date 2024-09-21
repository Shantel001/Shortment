import React, { useState } from "react";
import logo from "../assets/logo.svg";
import flag from "../assets/flag.svg";
import mark from "../assets/mark.svg";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logos from "../assets/logos2.svg";
import quest from "../assets/quest.svg";
import google from "../assets/google.svg";
import { FaMessage } from "react-icons/fa6";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import Request from "../lib/requests";
import { useFormik } from "formik";
import { LoginSchema } from "../schemas";
import { Axios } from "../config";
import { toast } from "react-toastify";
import useAuthStore from "../store/authStore";

const Loginpg = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const setToken = useAuthStore((state) => state.setToken);
  const user = useAuthStore((state) => state.user);
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = async (payload, actions) => {
    try {
      const res = await Axios.post(Request.login, payload);
      console.log(res);
      if (res.data.data.token) {
        setToken(res.data.data.token);
      }
      toast.success("Login Successful");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data);
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };
  const {
    handleChange,
    values,
    handleBlur,
    handleSubmit,
    isSubmitting,
    errors,
    touched,
  } = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit,
  });
  const getError = (key) => {
    return touched[key] && errors[key];
  };
  return (
    <div>
      <nav className="bg-[#FFFFFF] md:bg-[#4C4989] flex justify-center h-[90px] border-b-[3px]">
        <div className="container flex justify-between items-center">
          <img src={logos} alt="logo" className="block md:hidden" />
          <img src={logo} alt="logo" className="hidden md:block" />
          <div className="flex gap-[20px] md:gap-[50px]">
            <img src={flag} alt="flag" />
            <img src={quest} alt="icon" />
            <img src={mark} alt="mark" className="hidden md:block" />
          </div>
        </div>
      </nav>

      <div className="items-center flex flex-col text-center">
        <h2 className="text-[1.25rem] md:text-[1.5rem] font-bold text-[#2B3F58] pb-[15px] md:pb-[21px] pt-[15px] md:pt-[21px]">
          Sign in or create an account
        </h2>
      </div>

      <div className="container flex flex-col items-center border-4 md:border-8 rounded-[20px] md:rounded-[50px] border-darkgray h-auto md:h-[700px] w-[90%] md:w-[700px] mt-[10px] pt-[15px] bg-white gap-[12px] md:gap-[16px] p-4">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full md:w-[600px] text-left gap-2 md:gap-0"
        >
          <div>
            <label
              htmlFor="email"
              className="text-[#2B3F58] text-[16px] md:text-[18px] font-normal mb-[15px]"
            >
              Email
            </label>
            <input
              id="email"
              type="text"
              placeholder="Enter your email"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              className={`w-full h-[45px] md:h-[55px] border-2 border-darkgray rounded-[12px] pl-[12px] text-[14px] mt-0 ${
                getError("email") ? "border border-red-500" : ""
              }`}
              aria-label="Enter your email"
            />
          </div>
          <p className="text-red-500 text-sm font-medium">
            {getError("email")}
          </p>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2 m-[10px]"
            >
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaLock className="text-gray-400" />
              </span>
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                name="password"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                className={`w-full pl-10 pr-12 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring focus:border-blue-300 ${
                  getError("password") ? "border border-red-500" : ""
                }`}
                placeholder="Enter your password"
              />
              <span
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? (
                  <FaEyeSlash className="text-gray-500" />
                ) : (
                  <FaEye className="text-gray-500" />
                )}
              </span>
            </div>
            <p className="text-red-500 text-sm font-medium">
              {getError("password")}
            </p>
          </div>

          <div className="flex w-full md:w-auto pb-[20px] md:pb-[50px] text-left">
            <p className="pt-[10px] md:pt-[25px] flex items-center">
              <input
                type="checkbox"
                className="mr-2 accent-green-500"
                checked={isChecked}
                onChange={handleCheckboxChange}
                aria-label="Remind me"
              />
              Remind me
            </p>
          </div>

          <p className="text-left text-[14px] md:text-[16px] font-normal">
            By creating an account, you agree to the{" "}
            <Link to="/terms" className="text-blue-600 underline">
              Terms of Use
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="text-blue-600 underline">
              Privacy Policy
            </Link>
          </p>
          <button
            type="submit"
            disabled={isSubmitting}
            className="border-2 border-[#4C4898] bg-[#4C4898] text-white py-2 px-4 rounded-[10px] text-[18px] md:text-[20px] font-medium w-full md:w-[580px] h-[50px] md:h-[60px] text-center disabled:opacity-75 disabled:cursor-not-allowed"
          >
            Sign in
          </button>
        </form>

        {/* 
        <button type ="submit" className="border-2 border-[#4C4898] bg-[#4C4898] text-white py-2 px-4 rounded-[10px] text-[18px] md:text-[20px] font-medium w-full md:w-[580px] h-[50px] md:h-[60px] text-center disabled:opacity-75 disabled:cursor-not-allowed">
          Sign in 
        </button> */}

        <Link to="/privacy" className="text-blue-600 underline mt-2 md:mt-0">
          Forget your password
        </Link>

        <p className="text-left text-[14px] md:text-[16px] font-normal">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 underline">
            Sign up
          </Link>
        </p>

        <div className="flex flex-col md:flex-row items-center w-full justify-center gap-2 md:gap-4 mt-4 container">
          <hr className="w-[100px] md:w-[200px] h-[1px] md:h-[2px] border-2 border-darkgray" />
          <p className="font-bold text-[14px] md:text-[16px] text-[#2B3F58]">
            Or{" "}
          </p>
          <hr className="w-[100px] md:w-[200px] h-[1px] md:h-[2px] border-2 border-darkgray" />
        </div>

        <p className="text-[#2B3F58] border-2 border-darkgray rounded-[20px] md:rounded-[32px] px-[16px] md:px-[26px] py-[8px] md:py-[12px] flex gap-[5px] md:gap-[10px] justify-center w-full md:w-[600px] h-[40px] md:h-[44px] items-center">
          <img src={google} alt="google" />
          Sign up with Google
        </p>
      </div>

      <footer className="bg-[#12082D] md:block hidden mt-[25px]">
        <div className="relative z-10 flex justify-center pt-20 lg:pt-24">
          <div className="mx-auto container">
            <div className="flex flex-wrap -mx-4">
              <div className="flex justify-center px-4 w-full md:w-1/2 lg:w-5/12 xl:w-4/12">
                <div className="mb-10 sm:mb-16 max-w-[310px]">
                  <a href="/#" className="inline-block mb-8">
                    <img src={logo} alt="logo" className="w-60" />
                  </a>
                  <p className="flex items-center gap-2 mb-4 sm:mb-9 font-semibold text-lg text-white">
                    <FaMessage className="text-2xl" />
                    Contact Us:
                  </p>
                  <p className="flex mb-4 text-[#cacbcf] text-base">
                    <span>+2349069994348</span>
                  </p>
                  <p className="flex text-[#cacbcf] text-base">
                    <span>Facilities</span>
                  </p>
                </div>
              </div>

              <LinkGroup header="What we offer">
                <NavLink link="/#" name="Reserve a space" />
                <NavLink link="/#" name="Function as a host" />
              </LinkGroup>
              <LinkGroup header="Help">
                <NavLink link="/#" name="About us" />
                <NavLink link="/#" name="Refund Policy" />
                <NavLink link="/#" name="Privacy Policy" />
                <NavLink link="/#" name="FAQs" />
                <NavLink link="/#" name="Order Track" />
              </LinkGroup>

              <div className="px-4 w-full md:w-1/2 lg:w-5/12 xl:w-4/12">
                <div className="mb-16">
                  <h3 className="pb-5 font-semibold text-white text-xl">
                    Newsletter
                  </h3>
                  <span className="block bg-white mb-8 rounded w-10 h-[3px]"></span>

                  <div>
                    <p className="mb-8 text-[#cacbcf] text-base">
                      Kindly subscribe to our news letter to get latest deals on
                      our rooms and vacation discounts.
                    </p>
                    <form className="relative">
                      <input
                        type="email"
                        placeholder="Email address"
                        className="bg-[#1f2735] pr-[125px] pl-5 rounded-md w-full h-[50px] text-[#CACBCF] placeholder:text-[#CACBCF] outline-none"
                      />
                      <button className="top-1/2 right-2 absolute bg-primary hover:bg-blue-dark px-5 py-2 rounded-md font-medium text-sm text-white -translate-y-1/2">
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="bottom-0 left-0 -z-10 absolute">
              <svg
                width={138}
                height={220}
                viewBox="0 0 138 220"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx={-2.5}
                  cy={140.5}
                  rx={140.5}
                  ry={140.5}
                  transform="rotate(180 -2.5 140.5)"
                  fill="url(#paint0_linear_2089_516)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2089_516"
                    x1={-2.5}
                    y1={-0.0000152588}
                    x2={-2.5}
                    y2={281}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity={0.22} />
                    <stop offset={1} stopColor="white" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="top-5 right-5 -z-10 absolute">
              <svg
                width={53}
                height={69}
                viewBox="0 0 53 69"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.88244 32.7854C2.92209 32.7854 3.76488 33.6194 3.76488 34.6483C3.76488 35.6771 2.92209 36.5111 1.88244 36.5111C0.84279 36.5111 4.54444e-08 35.6771 0 34.6483C-4.54444e-08 33.6194 0.84279 32.7854 1.88244 32.7854Z"
                  fill="white"
                  fillOpacity={0.3}
                />
                <path
                  d="M1.88244 16.3932C2.92209 16.3932 3.76488 17.2272 3.76488 18.256C3.76488 19.2849 2.92209 20.1189 1.88244 20.1189C0.84279 20.1189 4.54444e-08 19.2849 0 18.256C-4.54444e-08 17.2272 0.84279 16.3932 1.88244 16.3932Z"
                  fill="white"
                  fillOpacity={0.3}
                />
                <path
                  d="M1.88244 0.000350049C2.92209 0.000350004 3.76488 0.834362 3.76488 1.86317C3.76488 2.89199 2.92209 3.726 1.88244 3.726C0.84279 3.726 4.54444e-08 2.89199 0 1.86317C-4.54444e-08 0.834362 0.84279 0.000350094 1.88244 0.000350049Z"
                  fill="white"
                  fillOpacity={0.3}
                />
                <path
                  d="M17.9867 32.7861C19.0263 32.7861 19.8691 33.6201 19.8691 34.6489C19.8691 35.6777 19.0263 36.5118 17.9867 36.5118C16.947 36.5118 16.1042 35.6777 16.1042 34.6489C16.1042 33.6201 16.947 32.7861 17.9867 32.7861Z"
                  fill="white"
                  fillOpacity={0.3}
                />
                <path
                  d="M34.5522 32.7861C35.5918 32.7861 36.4346 33.6201 36.4346 34.6489C36.4346 35.6777 35.5918 36.5118 34.5522 36.5118C33.5125 36.5118 32.6698 35.6777 32.6698 34.6489C32.6698 33.6201 33.5125 32.7861 34.5522 32.7861Z"
                  fill="white"
                  fillOpacity={0.3}
                />
                <path
                  d="M51.1176 32.7861C52.1572 32.7861 53 33.6201 53 34.6489C53 35.6777 52.1572 36.5118 51.1176 36.5118C50.0779 36.5118 49.2351 35.6777 49.2351 34.6489C49.2351 33.6201 50.0779 32.7861 51.1176 32.7861Z"
                  fill="white"
                  fillOpacity={0.3}
                />
                <path
                  d="M17.9867 16.3932C19.0263 16.3932 19.8691 17.2272 19.8691 18.256C19.8691 19.2849 19.0263 20.1189 17.9867 20.1189C16.947 20.1189 16.1042 19.2849 16.1042 18.256C16.1042 17.2272 16.947 16.3932 17.9867 16.3932Z"
                  fill="white"
                  fillOpacity={0.3}
                />
                <path
                  d="M34.5522 16.3932C35.5918 16.3932 36.4346 17.2272 36.4346 18.256C36.4346 19.2849 35.5918 20.1189 34.5522 20.1189C33.5125 20.1189 32.6698 19.2849 32.6698 18.256C32.6698 17.2272 33.5125 16.3932 34.5522 16.3932Z"
                  fill="white"
                  fillOpacity={0.3}
                />
                <path
                  d="M51.1176 16.3932C52.1572 16.3932 53 17.2272 53 18.256C53 19.2849 52.1572 20.1189 51.1176 20.1189C50.0779 20.1189 49.2351 19.2849 49.2351 18.256C49.2351 17.2272 50.0779 16.3932 51.1176 16.3932Z"
                  fill="white"
                  fillOpacity={0.3}
                />
                <path
                  d="M17.9867 1.52195e-05C19.0263 1.51746e-05 19.8691 0.834042 19.8691 1.86285C19.8691 2.89167 19.0263 3.72568 17.9867 3.72568C16.947 3.72568 16.1042 2.89167 16.1042 1.86285C16.1042 0.834042 16.947 1.52645e-05 17.9867 1.52195e-05Z"
                  fill="white"
                  fillOpacity={0.3}
                />
                <path
                  d="M34.5522 0C35.5918 -4.49708e-08 36.4346 0.834042 36.4346 1.86285C36.4346 2.89167 35.5918 3.72568 34.5522 3.72568C33.5125 3.72568 32.6698 2.89167 32.6698 1.86285C32.6698 0.834042 33.5125 4.49708e-08 34.5522 0Z"
                  fill="white"
                  fillOpacity={0.3}
                />
                <path
                  d="M51.1176 0C52.1572 -4.49708e-08 53 0.834042 53 1.86285C53 2.89167 52.1572 3.72568 51.1176 3.72568C50.0779 3.72568 49.2351 2.89167 49.2351 1.86285C49.2351 0.834042 50.0779 4.49708e-08 51.1176 0Z"
                  fill="white"
                  fillOpacity={0.3}
                />
                <path
                  d="M1.88244 65.274C2.92209 65.274 3.76488 66.108 3.76488 67.1369C3.76488 68.1657 2.92209 68.9997 1.88244 68.9997C0.84279 68.9997 4.54444e-08 68.1657 0 67.1369C-4.54444e-08 66.108 0.84279 65.274 1.88244 65.274Z"
                  fill="white"
                  fillOpacity={0.3}
                />
                <path
                  d="M1.88244 48.8815C2.92209 48.8815 3.76488 49.7155 3.76488 50.7443C3.76488 51.7731 2.92209 52.6071 1.88244 52.6071C0.84279 52.6071 4.54444e-08 51.7731 0 50.7443C-4.54444e-08 49.7155 0.84279 48.8815 1.88244 48.8815Z"
                  fill="white"
                  fillOpacity={0.3}
                />
                <path
                  d="M17.9867 65.274C19.0263 65.274 19.8691 66.108 19.8691 67.1369C19.8691 68.1657 19.0263 68.9997 17.9867 68.9997C16.947 68.9997 16.1042 68.1657 16.1042 67.1369C16.1042 66.108 16.947 65.274 17.9867 65.274Z"
                  fill="white"
                  fillOpacity={0.3}
                />
                <path
                  d="M34.5522 65.2744C35.5918 65.2744 36.4346 66.1084 36.4346 67.1372C36.4346 68.166 35.5918 69 34.5522 69C33.5125 69 32.6698 68.166 32.6698 67.1372C32.6698 66.1084 33.5125 65.2744 34.5522 65.2744Z"
                  fill="white"
                  fillOpacity={0.3}
                />
                <path
                  d="M51.1176 65.2744C52.1572 65.2744 53 66.1084 53 67.1372C53 68.166 52.1572 69 51.1176 69C50.0779 69 49.2351 68.166 49.2351 67.1372C49.2351 66.1084 50.0779 65.2744 51.1176 65.2744Z"
                  fill="white"
                  fillOpacity={0.3}
                />
                <path
                  d="M17.9867 48.8811C19.0263 48.8811 19.8691 49.7151 19.8691 50.744C19.8691 51.7728 19.0263 52.6068 17.9867 52.6068C16.947 52.6068 16.1042 51.7728 16.1042 50.744C16.1042 49.7151 16.947 48.8811 17.9867 48.8811Z"
                  fill="white"
                  fillOpacity={0.3}
                />
                <path
                  d="M34.5522 48.8811C35.5918 48.8811 36.4346 49.7151 36.4346 50.744C36.4346 51.7728 35.5918 52.6068 34.5522 52.6068C33.5125 52.6068 32.6698 51.7728 32.6698 50.744C32.6698 49.7151 33.5125 48.8811 34.5522 48.8811Z"
                  fill="white"
                  fillOpacity={0.3}
                />
                <path
                  d="M51.1176 48.8811C52.1572 48.8811 53 49.7151 53 50.744C53 51.7728 52.1572 52.6068 51.1176 52.6068C50.0779 52.6068 49.2351 51.7728 49.2351 50.744C49.2351 49.7151 50.0779 48.8811 51.1176 48.8811Z"
                  fill="white"
                  fillOpacity={0.3}
                />
              </svg>
            </span>
            <span className="top-0 right-0 -z-10 absolute">
              <svg
                width={98}
                height={94}
                viewBox="0 0 98 94"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx={98.5}
                  cy={-4.5}
                  rx={98.5}
                  ry={98.5}
                  transform="rotate(90 98.5 -4.5)"
                  fill="url(#paint0_linear_2089_517)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2089_517"
                    x1={98.5}
                    y1={-103}
                    x2={98.5}
                    y2={94}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity={0.22} />
                    <stop offset={1} stopColor="white" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </div>
        </div>

        <div className="bg-[#2E3842] py-7">
          <div className="mx-auto container">
            <div className="flex flex-wrap justify-center items-center -mx-4">
              <div className="order-last lg:order-first px-4 w-full md:w-1/2 lg:w-5/12 xl:w-1/3">
                <p className="font-medium text-[#CACBCF] text-base text-center lg:text-left">
                  &copy; {new Date().getFullYear()} Shortment. All Rights
                  Reserved.
                </p>
              </div>
              <div className="px-4 w-full md:w-1/2 lg:w-3/12 xl:w-1/3">
                <div className="flex justify-center md:justify-end items-center space-x-[18px] mb-5 lg:mb-0">
                  <span className="font-medium text-base text-white">
                    Follow Us:
                  </span>

                  <a href="/#" className="text-white/50 hover:text-white">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current"
                    >
                      <path d="M16.294 8.86875H14.369H13.6815V8.18125V6.05V5.3625H14.369H15.8128C16.1909 5.3625 16.5003 5.0875 16.5003 4.675V1.03125C16.5003 0.653125 16.2253 0.34375 15.8128 0.34375H13.3034C10.5878 0.34375 8.69714 2.26875 8.69714 5.12187V8.1125V8.8H8.00964H5.67214C5.19089 8.8 4.74402 9.17812 4.74402 9.72812V12.2031C4.74402 12.6844 5.12214 13.1313 5.67214 13.1313H7.94089H8.62839V13.8188V20.7281C8.62839 21.2094 9.00652 21.6562 9.55652 21.6562H12.7878C12.994 21.6562 13.1659 21.5531 13.3034 21.4156C13.4409 21.2781 13.544 21.0375 13.544 20.8312V13.8531V13.1656H14.2659H15.8128C16.2596 13.1656 16.6034 12.8906 16.6721 12.4781V12.4438V12.4094L17.1534 10.0375C17.1878 9.79688 17.1534 9.52187 16.9471 9.24687C16.8784 9.075 16.569 8.90312 16.294 8.86875Z" />
                    </svg>
                  </a>

                  <a href="/#" className="text-white/50 hover:text-white">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current"
                    >
                      <path d="M20.1236 5.91252C20.2461 5.76968 20.0864 5.58302 19.9051 5.64988C19.5004 5.79912 19.1307 5.89757 18.5838 5.95833C19.2564 5.58378 19.5693 5.04844 19.8237 4.39275C19.8851 4.23459 19.7 4.09108 19.5406 4.16663C18.8931 4.47362 18.1946 4.70137 17.4599 4.83594C16.7338 4.11633 15.6988 3.66666 14.5539 3.66666C12.3554 3.66666 10.5726 5.3247 10.5726 7.36924C10.5726 7.65949 10.6081 7.94222 10.6752 8.21292C7.51489 8.06567 4.69683 6.71375 2.73899 4.64072C2.6048 4.49864 2.36131 4.5175 2.27775 4.69079C2.05486 5.15312 1.93059 5.666 1.93059 6.20598C1.93059 7.4903 2.63323 8.62347 3.70135 9.28748C3.22244 9.27309 2.76444 9.17977 2.34237 9.02141C2.13687 8.94432 1.9013 9.0798 1.92891 9.28702C2.14088 10.8783 3.42918 12.191 5.09208 12.5012C4.75814 12.5862 4.40642 12.6313 4.04256 12.6313C3.95434 12.6313 3.86688 12.6285 3.78022 12.6232C3.5597 12.6096 3.38047 12.8068 3.47502 12.9956C4.09882 14.2406 5.44578 15.1098 7.01323 15.1368C5.6508 16.1301 3.93421 16.7219 2.06885 16.7219C1.83885 16.7219 1.74018 17.0176 1.94423 17.1179C3.52019 17.8926 5.3149 18.3333 7.22185 18.3333C14.545 18.3333 18.549 12.6915 18.549 7.79859C18.549 7.63843 18.545 7.47827 18.5378 7.31961C19.1321 6.92028 19.6664 6.44544 20.1236 5.91252Z" />
                    </svg>
                  </a>

                  <a href="/#" className="text-white/50 hover:text-white">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current"
                    >
                      <path d="M11.0297 14.4303C12.9241 14.4303 14.4598 12.8946 14.4598 11.0002C14.4598 9.1058 12.9241 7.57008 11.0297 7.57008C9.13526 7.57008 7.59955 9.1058 7.59955 11.0002C7.59955 12.8946 9.13526 14.4303 11.0297 14.4303Z" />
                      <path d="M14.7554 1.83334H7.2446C4.25804 1.83334 1.83331 4.25807 1.83331 7.24463V14.6962C1.83331 17.7419 4.25804 20.1667 7.2446 20.1667H14.6962C17.7419 20.1667 20.1666 17.7419 20.1666 14.7554V7.24463C20.1666 4.25807 17.7419 1.83334 14.7554 1.83334ZM11.0295 15.4946C8.51611 15.4946 6.53493 13.4543 6.53493 11C6.53493 8.5457 8.54568 6.50538 11.0295 6.50538C13.4838 6.50538 15.4946 8.5457 15.4946 11C15.4946 13.4543 13.5134 15.4946 11.0295 15.4946ZM17.2392 6.91936C16.9435 7.24463 16.5 7.42205 15.9973 7.42205C15.5537 7.42205 15.1102 7.24463 14.7554 6.91936C14.4301 6.59409 14.2527 6.18011 14.2527 5.67742C14.2527 5.17473 14.4301 4.79033 14.7554 4.43549C15.0806 4.08065 15.4946 3.90323 15.9973 3.90323C16.4408 3.90323 16.914 4.08065 17.2392 4.40592C17.5349 4.79032 17.7419 5.23387 17.7419 5.70699C17.7123 6.18011 17.5349 6.59409 17.2392 6.91936Z" />
                      <path d="M16.0276 4.96753C15.6432 4.96753 15.3179 5.2928 15.3179 5.67721C15.3179 6.06162 15.6432 6.38688 16.0276 6.38688C16.412 6.38688 16.7373 6.06162 16.7373 5.67721C16.7373 5.2928 16.4416 4.96753 16.0276 4.96753Z" />
                    </svg>
                  </a>

                  <a href="/#" className="text-white/50 hover:text-white">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current"
                    >
                      <path d="M18.8064 1.83334H3.16396C2.42471 1.83334 1.83331 2.42473 1.83331 3.16398V18.836C1.83331 19.5457 2.42471 20.1667 3.16396 20.1667H18.7473C19.4865 20.1667 20.0779 19.5753 20.0779 18.836V3.13441C20.1371 2.42473 19.5457 1.83334 18.8064 1.83334ZM7.24461 17.4167H4.55375V8.69355H7.24461V17.4167ZM5.8844 7.48119C4.9973 7.48119 4.31718 6.77151 4.31718 5.91398C4.31718 5.05645 5.02687 4.34678 5.8844 4.34678C6.74193 4.34678 7.4516 5.05645 7.4516 5.91398C7.4516 6.77151 6.80107 7.48119 5.8844 7.48119ZM17.4462 17.4167H14.7554V13.1882C14.7554 12.1828 14.7258 10.8522 13.336 10.8522C11.9167 10.8522 11.7097 11.9758 11.7097 13.0995V17.4167H9.01881V8.69355H11.6505V9.90592H11.6801C12.0645 9.19624 12.922 8.48656 14.2527 8.48656C17.0027 8.48656 17.5054 10.2608 17.5054 12.6855V17.4167H17.4462Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Loginpg;

const LinkGroup = ({ children, header }) => {
  return (
    <div className="flex justify-center px-4 w-1/2 md:w-1/2 lg:w-4/12 xl:w-2/12">
      <div className="mb-16">
        <h3 className="pb-5 font-semibold text-white text-xl">{header}</h3>
        <span className="block bg-white mb-8 rounded w-10 h-[3px]"></span>
        <ul className="space-y-3">{children}</ul>
      </div>
    </div>
  );
};

const NavLink = ({ name, link }) => {
  return (
    <li>
      <a
        href={link}
        className="text-[#cacbcf] text-base hover:text-white hover:underline transition-all"
      >
        {name}
      </a>
    </li>
  );
};

const SocialIcon = ({ link }) => (
  <a
    href={link}
    className="text-[#8A8F9C] hover:text-primary"
    aria-label="Social Media Icon"
  >
    <svg width="24" height="24" fill="currentColor">
      {/* Placeholder for the actual icon */}
    </svg>
  </a>
);

// import React from "react";
// import logo from "../assets/logo.svg";
// import flag from "../assets/flag.svg";
// import mark from "../assets/mark.svg";
// import { FaRegEyeSlash } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import logos from "../assets/logos2.svg";
// import quest from "../assets/quest.svg";
// import google from "../assets/google.svg";
// import { FaMessage } from "react-icons/fa6";

// const Loginpg = () => {
//   return (
//     <div>
//       <nav className="bg-[#FFFFFF] md:bg-[#4C4989] flex justify-center h-[90px] border-b-[3px]">
//         <div className="container flex justify-between items-center">
//           <img src={logos} alt="logo" className="block md:hidden" />
//           <img src={logo} alt="logo" className="hidden md:block" />

//           <div className="flex gap-[20px] md:gap-[50px]">
//             <img src={flag} alt="flag" />
//             <img src={quest} alt="icon" />
//             <img src={mark} alt="mark" className="hidden md:block" />
//           </div>
//         </div>
//       </nav>
//       <div className="items-center flex flex-col text-center">
//         <h2 className="text-[1.25rem] md:text-[1.5rem] font-bold text-[#2B3F58] pb-[15px] md:pb-[21px] pt-[15px] md:pt-[21px]">
//           Sign in or create an account
//         </h2>
//       </div>
//       <div className="container flex flex-col items-center border-4 md:border-8 rounded-[20px] md:rounded-[50px] border-darkgray h-auto md:h-[700px] w-[90%] md:w-[700px] mt-[10px] pt-[15px] bg-white gap-[12px] md:gap-[16px] p-4">
//         <form className="flex flex-col w-full md:w-[600px] text-left gap-2 md:gap-0">
//           <label
//             for="email"
//             className="text-[#2B3F58] text-[16px] md:text-[18px] font-normal"
//           >
//             Email
//           </label>
//           <input
//             type="text"
//             placeholder="Enter your email"
//             className="w-full h-[45px] md:h-[55px] border-2 border-darkgray rounded-[12px] pl-[12px] text-[14px] mt-0"
//           />
//           <label
//             for="password"
//             className="text-[#2B3F58] text-[16px] md:text-[18px] font-normal flex justify-between mt-4"
//           >
//             Password
//             <span className="flex items-center ml-auto gap-2 md:gap-3">
//               <FaRegEyeSlash className="text-[#666666]" />
//               Hide
//             </span>
//           </label>
//           <input
//             type="password"
//             placeholder="Enter your password"
//             className="w-full h-[45px] md:h-[55px] border-2 border-darkgray rounded-[12px] pl-[24px] text-[14px] mt-0"
//           />
//         </form>

//         <div className="flex w-full md:w-auto pb-[20px] md:pb-[50px] text-left">
//           <p className="pt-[10px] md:pt-[25px]">
//             <input
//               type="checkbox"
//               className="mr-2 accent-green-500"
//               onChange={(e) => {
//                 e.target.style.accentColor = e.target.checked
//                   ? "green"
//                   : "#E5E5E5";
//               }}
//             />
//             Remind me
//           </p>
//         </div>

//         <p className="text-left text-[14px] md:text-[16px] font-normal">
//           By creating an account, you agree to the{" "}
//           <Link to="/terms" className="text-blue-600 underline">
//             Terms of Use
//           </Link>{" "}
//           and{" "}
//           <Link to="/privacy" className="text-blue-600 underline">
//             Privacy Policy
//           </Link>
//         </p>
//         <button className="border-2 border-[#4C4898] bg-[#4C4898] text-white py-2 px-4 rounded-[10px] text-[18px] md:text-[20px] font-medium w-full md:w-[580px] h-[50px] md:h-[60px] text-center">
//           <Link to="/signin"> Sign in </Link>
//         </button>
//         <Link to="/privacy" className="text-blue-600 underline mt-2 md:mt-0">
//           Forget your password
//         </Link>
//         <p className="text-left text-[14px] md:text-[16px] font-normal">
//           Don't have an account?{" "}
//           <Link to="/terms" className="text-blue-600 underline">
//             Sign up
//           </Link>
//         </p>
//         <div className="flex flex-col md:flex-row items-center w-full justify-center gap-2 md:gap-4 mt-4 container">
//           <hr className="w-[100px] md:w-[200px] h-[1px] md:h-[2px] border-2 border-darkgray" />
//           <p className="font-bold text-[14px] md:text-[16px] text-[#2B3F58]">
//             Or{" "}
//           </p>
//           <hr className="w-[100px] md:w-[200px] h-[1px] md:h-[2px] border-2 border-darkgrey" />
//         </div>
//         <p className="text-[#2B3F58] border-2 border-darkgrey rounded-[20px] md:rounded-[32px] px-[16px] md:px-[26px] py-[8px] md:py-[12px] flex gap-[5px] md:gap-[10px] justify-center w-full md:w-[600px] h-[40px] md:h-[44px] items-center">
//           <img src={google} alt="flag" />
//           Sign up with Google
//         </p>
//       </div>

//       <footer className="bg-[#12082D]">
//         <div className="relative z-10 flex justify-center pt-20 lg:pt-24">
//           <div className="mx-auto container">
//             <div className="flex flex-wrap -mx-4">
//               <div className="flex justify-center px-4 w-full md:w-1/2 lg:w-5/12 xl:w-4/12">
//                 <div className="mb-10 sm:mb-16 max-w-[310px]">
//                   <a href="/#" className="inline-block mb-8">
//                     <img src={logo} alt="logo" className="w-60" />
//                   </a>
//                   <p className="flex items-center gap-2 mb-4 sm:mb-9 font-semibold text-lg text-white">
//                     <FaMessage className="text-2xl" />
//                     Contact Us:
//                   </p>
//                   <p className="flex mb-4 text-[#cacbcf] text-base">
//                     <span>+2349069994348</span>
//                   </p>
//                   <p className="flex text-[#cacbcf] text-base">
//                     <span>Facilities</span>
//                   </p>
//                 </div>
//               </div>

//               <LinkGroup header="What we offer">
//                 <NavLink link="/#" name="Reserve a space" />
//                 <NavLink link="/#" name="Function as a host" />
//               </LinkGroup>
//               <LinkGroup header="Help">
//                 <NavLink link="/#" name="About us" />
//                 <NavLink link="/#" name="Refund Policy" />
//                 <NavLink link="/#" name="Privacy Policy" />
//                 <NavLink link="/#" name="FAQs" />
//                 <NavLink link="/#" name="Order Track" />
//               </LinkGroup>

//               <div className="px-4 w-full md:w-1/2 lg:w-5/12 xl:w-4/12">
//                 <div className="mb-16">
//                   <h3 className="pb-5 font-semibold text-white text-xl">
//                     Newsletter
//                   </h3>
//                   <span className="block bg-white mb-8 rounded w-10 h-[3px]"></span>

//                   <div>
//                     <p className="mb-8 text-[#cacbcf] text-base">
//                       Kindly subscribe to our news letter to get latest deals on
//                       our rooms and vacation discounts.
//                     </p>
//                     <form className="relative">
//                       <input
//                         type="email"
//                         placeholder="Email address"
//                         className="bg-[#1f2735] pr-[125px] pl-5 rounded-md w-full h-[50px] text-[#CACBCF] placeholder:text-[#CACBCF] outline-none"
//                       />
//                       <button className="top-1/2 right-2 absolute bg-primary hover:bg-blue-dark px-5 py-2 rounded-md font-medium text-sm text-white -translate-y-1/2">
//                         Subscribe
//                       </button>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div>
//             <span className="bottom-0 left-0 -z-10 absolute">
//               <svg
//                 width={138}
//                 height={220}
//                 viewBox="0 0 138 220"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <ellipse
//                   cx={-2.5}
//                   cy={140.5}
//                   rx={140.5}
//                   ry={140.5}
//                   transform="rotate(180 -2.5 140.5)"
//                   fill="url(#paint0_linear_2089_516)"
//                 />
//                 <defs>
//                   <linearGradient
//                     id="paint0_linear_2089_516"
//                     x1={-2.5}
//                     y1={-0.0000152588}
//                     x2={-2.5}
//                     y2={281}
//                     gradientUnits="userSpaceOnUse"
//                   >
//                     <stop stopColor="white" stopOpacity={0.22} />
//                     <stop offset={1} stopColor="white" stopOpacity={0} />
//                   </linearGradient>
//                 </defs>
//               </svg>
//             </span>
//             <span className="top-5 right-5 -z-10 absolute">
//               <svg
//                 width={53}
//                 height={69}
//                 viewBox="0 0 53 69"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M1.88244 32.7854C2.92209 32.7854 3.76488 33.6194 3.76488 34.6483C3.76488 35.6771 2.92209 36.5111 1.88244 36.5111C0.84279 36.5111 4.54444e-08 35.6771 0 34.6483C-4.54444e-08 33.6194 0.84279 32.7854 1.88244 32.7854Z"
//                   fill="white"
//                   fillOpacity={0.3}
//                 />
//                 <path
//                   d="M1.88244 16.3932C2.92209 16.3932 3.76488 17.2272 3.76488 18.256C3.76488 19.2849 2.92209 20.1189 1.88244 20.1189C0.84279 20.1189 4.54444e-08 19.2849 0 18.256C-4.54444e-08 17.2272 0.84279 16.3932 1.88244 16.3932Z"
//                   fill="white"
//                   fillOpacity={0.3}
//                 />
//                 <path
//                   d="M1.88244 0.000350049C2.92209 0.000350004 3.76488 0.834362 3.76488 1.86317C3.76488 2.89199 2.92209 3.726 1.88244 3.726C0.84279 3.726 4.54444e-08 2.89199 0 1.86317C-4.54444e-08 0.834362 0.84279 0.000350094 1.88244 0.000350049Z"
//                   fill="white"
//                   fillOpacity={0.3}
//                 />
//                 <path
//                   d="M17.9867 32.7861C19.0263 32.7861 19.8691 33.6201 19.8691 34.6489C19.8691 35.6777 19.0263 36.5118 17.9867 36.5118C16.947 36.5118 16.1042 35.6777 16.1042 34.6489C16.1042 33.6201 16.947 32.7861 17.9867 32.7861Z"
//                   fill="white"
//                   fillOpacity={0.3}
//                 />
//                 <path
//                   d="M34.5522 32.7861C35.5918 32.7861 36.4346 33.6201 36.4346 34.6489C36.4346 35.6777 35.5918 36.5118 34.5522 36.5118C33.5125 36.5118 32.6698 35.6777 32.6698 34.6489C32.6698 33.6201 33.5125 32.7861 34.5522 32.7861Z"
//                   fill="white"
//                   fillOpacity={0.3}
//                 />
//                 <path
//                   d="M51.1176 32.7861C52.1572 32.7861 53 33.6201 53 34.6489C53 35.6777 52.1572 36.5118 51.1176 36.5118C50.0779 36.5118 49.2351 35.6777 49.2351 34.6489C49.2351 33.6201 50.0779 32.7861 51.1176 32.7861Z"
//                   fill="white"
//                   fillOpacity={0.3}
//                 />
//                 <path
//                   d="M17.9867 16.3932C19.0263 16.3932 19.8691 17.2272 19.8691 18.256C19.8691 19.2849 19.0263 20.1189 17.9867 20.1189C16.947 20.1189 16.1042 19.2849 16.1042 18.256C16.1042 17.2272 16.947 16.3932 17.9867 16.3932Z"
//                   fill="white"
//                   fillOpacity={0.3}
//                 />
//                 <path
//                   d="M34.5522 16.3932C35.5918 16.3932 36.4346 17.2272 36.4346 18.256C36.4346 19.2849 35.5918 20.1189 34.5522 20.1189C33.5125 20.1189 32.6698 19.2849 32.6698 18.256C32.6698 17.2272 33.5125 16.3932 34.5522 16.3932Z"
//                   fill="white"
//                   fillOpacity={0.3}
//                 />
//                 <path
//                   d="M51.1176 16.3932C52.1572 16.3932 53 17.2272 53 18.256C53 19.2849 52.1572 20.1189 51.1176 20.1189C50.0779 20.1189 49.2351 19.2849 49.2351 18.256C49.2351 17.2272 50.0779 16.3932 51.1176 16.3932Z"
//                   fill="white"
//                   fillOpacity={0.3}
//                 />
//                 <path
//                   d="M17.9867 1.52195e-05C19.0263 1.51746e-05 19.8691 0.834042 19.8691 1.86285C19.8691 2.89167 19.0263 3.72568 17.9867 3.72568C16.947 3.72568 16.1042 2.89167 16.1042 1.86285C16.1042 0.834042 16.947 1.52645e-05 17.9867 1.52195e-05Z"
//                   fill="white"
//                   fillOpacity={0.3}
//                 />
//                 <path
//                   d="M34.5522 0C35.5918 -4.49708e-08 36.4346 0.834042 36.4346 1.86285C36.4346 2.89167 35.5918 3.72568 34.5522 3.72568C33.5125 3.72568 32.6698 2.89167 32.6698 1.86285C32.6698 0.834042 33.5125 4.49708e-08 34.5522 0Z"
//                   fill="white"
//                   fillOpacity={0.3}
//                 />
//                 <path
//                   d="M51.1176 0C52.1572 -4.49708e-08 53 0.834042 53 1.86285C53 2.89167 52.1572 3.72568 51.1176 3.72568C50.0779 3.72568 49.2351 2.89167 49.2351 1.86285C49.2351 0.834042 50.0779 4.49708e-08 51.1176 0Z"
//                   fill="white"
//                   fillOpacity={0.3}
//                 />
//                 <path
//                   d="M1.88244 65.274C2.92209 65.274 3.76488 66.108 3.76488 67.1369C3.76488 68.1657 2.92209 68.9997 1.88244 68.9997C0.84279 68.9997 4.54444e-08 68.1657 0 67.1369C-4.54444e-08 66.108 0.84279 65.274 1.88244 65.274Z"
//                   fill="white"
//                   fillOpacity={0.3}
//                 />
//                 <path
//                   d="M1.88244 48.8815C2.92209 48.8815 3.76488 49.7155 3.76488 50.7443C3.76488 51.7731 2.92209 52.6071 1.88244 52.6071C0.84279 52.6071 4.54444e-08 51.7731 0 50.7443C-4.54444e-08 49.7155 0.84279 48.8815 1.88244 48.8815Z"
//                   fill="white"
//                   fillOpacity={0.3}
//                 />
//                 <path
//                   d="M17.9867 65.274C19.0263 65.274 19.8691 66.108 19.8691 67.1369C19.8691 68.1657 19.0263 68.9997 17.9867 68.9997C16.947 68.9997 16.1042 68.1657 16.1042 67.1369C16.1042 66.108 16.947 65.274 17.9867 65.274Z"
//                   fill="white"
//                   fillOpacity={0.3}
//                 />
//                 <path
//                   d="M34.5522 65.2744C35.5918 65.2744 36.4346 66.1084 36.4346 67.1372C36.4346 68.166 35.5918 69 34.5522 69C33.5125 69 32.6698 68.166 32.6698 67.1372C32.6698 66.1084 33.5125 65.2744 34.5522 65.2744Z"
//                   fill="white"
//                   fillOpacity={0.3}
//                 />
//                 <path
//                   d="M51.1176 65.2744C52.1572 65.2744 53 66.1084 53 67.1372C53 68.166 52.1572 69 51.1176 69C50.0779 69 49.2351 68.166 49.2351 67.1372C49.2351 66.1084 50.0779 65.2744 51.1176 65.2744Z"
//                   fill="white"
//                   fillOpacity={0.3}
//                 />
//                 <path
//                   d="M17.9867 48.8811C19.0263 48.8811 19.8691 49.7151 19.8691 50.744C19.8691 51.7728 19.0263 52.6068 17.9867 52.6068C16.947 52.6068 16.1042 51.7728 16.1042 50.744C16.1042 49.7151 16.947 48.8811 17.9867 48.8811Z"
//                   fill="white"
//                   fillOpacity={0.3}
//                 />
//                 <path
//                   d="M34.5522 48.8811C35.5918 48.8811 36.4346 49.7151 36.4346 50.744C36.4346 51.7728 35.5918 52.6068 34.5522 52.6068C33.5125 52.6068 32.6698 51.7728 32.6698 50.744C32.6698 49.7151 33.5125 48.8811 34.5522 48.8811Z"
//                   fill="white"
//                   fillOpacity={0.3}
//                 />
//                 <path
//                   d="M51.1176 48.8811C52.1572 48.8811 53 49.7151 53 50.744C53 51.7728 52.1572 52.6068 51.1176 52.6068C50.0779 52.6068 49.2351 51.7728 49.2351 50.744C49.2351 49.7151 50.0779 48.8811 51.1176 48.8811Z"
//                   fill="white"
//                   fillOpacity={0.3}
//                 />
//               </svg>
//             </span>
//             <span className="top-0 right-0 -z-10 absolute">
//               <svg
//                 width={98}
//                 height={94}
//                 viewBox="0 0 98 94"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <ellipse
//                   cx={98.5}
//                   cy={-4.5}
//                   rx={98.5}
//                   ry={98.5}
//                   transform="rotate(90 98.5 -4.5)"
//                   fill="url(#paint0_linear_2089_517)"
//                 />
//                 <defs>
//                   <linearGradient
//                     id="paint0_linear_2089_517"
//                     x1={98.5}
//                     y1={-103}
//                     x2={98.5}
//                     y2={94}
//                     gradientUnits="userSpaceOnUse"
//                   >
//                     <stop stopColor="white" stopOpacity={0.22} />
//                     <stop offset={1} stopColor="white" stopOpacity={0} />
//                   </linearGradient>
//                 </defs>
//               </svg>
//             </span>
//           </div>
//         </div>

//         <div className="bg-[#2E3842] py-7">
//           <div className="mx-auto container">
//             <div className="flex flex-wrap justify-center items-center -mx-4">
//               <div className="order-last lg:order-first px-4 w-full md:w-1/2 lg:w-5/12 xl:w-1/3">
//                 <p className="font-medium text-[#CACBCF] text-base text-center lg:text-left">
//                   &copy; {new Date().getFullYear()} Shortment. All Rights
//                   Reserved.
//                 </p>
//               </div>
//               <div className="px-4 w-full md:w-1/2 lg:w-3/12 xl:w-1/3">
//                 <div className="flex justify-center md:justify-end items-center space-x-[18px] mb-5 lg:mb-0">
//                   <span className="font-medium text-base text-white">
//                     Follow Us:
//                   </span>

//                   <a href="/#" className="text-white/50 hover:text-white">
//                     <svg
//                       width="22"
//                       height="22"
//                       viewBox="0 0 22 22"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="fill-current"
//                     >
//                       <path d="M16.294 8.86875H14.369H13.6815V8.18125V6.05V5.3625H14.369H15.8128C16.1909 5.3625 16.5003 5.0875 16.5003 4.675V1.03125C16.5003 0.653125 16.2253 0.34375 15.8128 0.34375H13.3034C10.5878 0.34375 8.69714 2.26875 8.69714 5.12187V8.1125V8.8H8.00964H5.67214C5.19089 8.8 4.74402 9.17812 4.74402 9.72812V12.2031C4.74402 12.6844 5.12214 13.1313 5.67214 13.1313H7.94089H8.62839V13.8188V20.7281C8.62839 21.2094 9.00652 21.6562 9.55652 21.6562H12.7878C12.994 21.6562 13.1659 21.5531 13.3034 21.4156C13.4409 21.2781 13.544 21.0375 13.544 20.8312V13.8531V13.1656H14.2659H15.8128C16.2596 13.1656 16.6034 12.8906 16.6721 12.4781V12.4438V12.4094L17.1534 10.0375C17.1878 9.79688 17.1534 9.52187 16.9471 9.24687C16.8784 9.075 16.569 8.90312 16.294 8.86875Z" />
//                     </svg>
//                   </a>

//                   <a href="/#" className="text-white/50 hover:text-white">
//                     <svg
//                       width="22"
//                       height="22"
//                       viewBox="0 0 22 22"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="fill-current"
//                     >
//                       <path d="M20.1236 5.91252C20.2461 5.76968 20.0864 5.58302 19.9051 5.64988C19.5004 5.79912 19.1307 5.89757 18.5838 5.95833C19.2564 5.58378 19.5693 5.04844 19.8237 4.39275C19.8851 4.23459 19.7 4.09108 19.5406 4.16663C18.8931 4.47362 18.1946 4.70137 17.4599 4.83594C16.7338 4.11633 15.6988 3.66666 14.5539 3.66666C12.3554 3.66666 10.5726 5.3247 10.5726 7.36924C10.5726 7.65949 10.6081 7.94222 10.6752 8.21292C7.51489 8.06567 4.69683 6.71375 2.73899 4.64072C2.6048 4.49864 2.36131 4.5175 2.27775 4.69079C2.05486 5.15312 1.93059 5.666 1.93059 6.20598C1.93059 7.4903 2.63323 8.62347 3.70135 9.28748C3.22244 9.27309 2.76444 9.17977 2.34237 9.02141C2.13687 8.94432 1.9013 9.0798 1.92891 9.28702C2.14088 10.8783 3.42918 12.191 5.09208 12.5012C4.75814 12.5862 4.40642 12.6313 4.04256 12.6313C3.95434 12.6313 3.86688 12.6285 3.78022 12.6232C3.5597 12.6096 3.38047 12.8068 3.47502 12.9956C4.09882 14.2406 5.44578 15.1098 7.01323 15.1368C5.6508 16.1301 3.93421 16.7219 2.06885 16.7219C1.83885 16.7219 1.74018 17.0176 1.94423 17.1179C3.52019 17.8926 5.3149 18.3333 7.22185 18.3333C14.545 18.3333 18.549 12.6915 18.549 7.79859C18.549 7.63843 18.545 7.47827 18.5378 7.31961C19.1321 6.92028 19.6664 6.44544 20.1236 5.91252Z" />
//                     </svg>
//                   </a>

//                   <a href="/#" className="text-white/50 hover:text-white">
//                     <svg
//                       width="22"
//                       height="22"
//                       viewBox="0 0 22 22"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="fill-current"
//                     >
//                       <path d="M11.0297 14.4303C12.9241 14.4303 14.4598 12.8946 14.4598 11.0002C14.4598 9.1058 12.9241 7.57008 11.0297 7.57008C9.13526 7.57008 7.59955 9.1058 7.59955 11.0002C7.59955 12.8946 9.13526 14.4303 11.0297 14.4303Z" />
//                       <path d="M14.7554 1.83334H7.2446C4.25804 1.83334 1.83331 4.25807 1.83331 7.24463V14.6962C1.83331 17.7419 4.25804 20.1667 7.2446 20.1667H14.6962C17.7419 20.1667 20.1666 17.7419 20.1666 14.7554V7.24463C20.1666 4.25807 17.7419 1.83334 14.7554 1.83334ZM11.0295 15.4946C8.51611 15.4946 6.53493 13.4543 6.53493 11C6.53493 8.5457 8.54568 6.50538 11.0295 6.50538C13.4838 6.50538 15.4946 8.5457 15.4946 11C15.4946 13.4543 13.5134 15.4946 11.0295 15.4946ZM17.2392 6.91936C16.9435 7.24463 16.5 7.42205 15.9973 7.42205C15.5537 7.42205 15.1102 7.24463 14.7554 6.91936C14.4301 6.59409 14.2527 6.18011 14.2527 5.67742C14.2527 5.17473 14.4301 4.79033 14.7554 4.43549C15.0806 4.08065 15.4946 3.90323 15.9973 3.90323C16.4408 3.90323 16.914 4.08065 17.2392 4.40592C17.5349 4.79032 17.7419 5.23387 17.7419 5.70699C17.7123 6.18011 17.5349 6.59409 17.2392 6.91936Z" />
//                       <path d="M16.0276 4.96753C15.6432 4.96753 15.3179 5.2928 15.3179 5.67721C15.3179 6.06162 15.6432 6.38688 16.0276 6.38688C16.412 6.38688 16.7373 6.06162 16.7373 5.67721C16.7373 5.2928 16.4416 4.96753 16.0276 4.96753Z" />
//                     </svg>
//                   </a>

//                   <a href="/#" className="text-white/50 hover:text-white">
//                     <svg
//                       width="22"
//                       height="22"
//                       viewBox="0 0 22 22"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="fill-current"
//                     >
//                       <path d="M18.8064 1.83334H3.16396C2.42471 1.83334 1.83331 2.42473 1.83331 3.16398V18.836C1.83331 19.5457 2.42471 20.1667 3.16396 20.1667H18.7473C19.4865 20.1667 20.0779 19.5753 20.0779 18.836V3.13441C20.1371 2.42473 19.5457 1.83334 18.8064 1.83334ZM7.24461 17.4167H4.55375V8.69355H7.24461V17.4167ZM5.8844 7.48119C4.9973 7.48119 4.31718 6.77151 4.31718 5.91398C4.31718 5.05645 5.02687 4.34678 5.8844 4.34678C6.74193 4.34678 7.4516 5.05645 7.4516 5.91398C7.4516 6.77151 6.80107 7.48119 5.8844 7.48119ZM17.4462 17.4167H14.7554V13.1882C14.7554 12.1828 14.7258 10.8522 13.336 10.8522C11.9167 10.8522 11.7097 11.9758 11.7097 13.0995V17.4167H9.01881V8.69355H11.6505V9.90592H11.6801C12.0645 9.19624 12.922 8.48656 14.2527 8.48656C17.0027 8.48656 17.5054 10.2608 17.5054 12.6855V17.4167H17.4462Z" />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Loginpg;

// const LinkGroup = ({ children, header }) => {
//   return (
//     <div className="flex justify-center px-4 w-1/2 md:w-1/2 lg:w-4/12 xl:w-2/12">
//       <div className="mb-16">
//         <h3 className="pb-5 font-semibold text-white text-xl">{header}</h3>
//         <span className="block bg-white mb-8 rounded w-10 h-[3px]"></span>
//         <ul className="space-y-3">{children}</ul>
//       </div>
//     </div>
//   );
// };

// const NavLink = ({ name, link }) => {
//   return (
//     <li>
//       <a
//         href={link}
//         className="text-[#cacbcf] text-base hover:text-white hover:underline transition-all"
//       >
//         {name}
//       </a>
//     </li>
//   );
// };