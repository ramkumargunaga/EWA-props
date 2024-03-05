import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import Nav from "pages/UpdatedHeader/Nav";
import NavBar from "pages/Navbar/Navbar";
import Footer from "./../UpdatedHeader/Footer";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    totalGuests: "",
    checkInDate: "",
    checkOutDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setFormData({
      name: "",
      contactNumber: "",
      email: "",
      totalGuests: "",
      checkInDate: "",
      checkOutDate: "",
    });
  };

  return (
    <>
      <NavBar />
      <div className="bg-white-A700 flex flex-col items-center justify-end mx-auto pt-[17px] w-full mb-12 ">
        <div className="flex flex-col items-center  justify-start w-[90%]">
          <Text
            className="mt-6 sm:text-[40px] md:text-[46px] text-[50px] text-indigo-900 text-shadow-ts"
            size="txtLexendDecaRegular50"
          >
            Registration
          </Text>
          {/* <Text
            className="bg-red-A400 h-[74px] justify-center max-w-[1305px] md:max-w-full rounded-[9px] mt-[22px] sm:px-5 px-[35px] py-1.5 sm:text-[40px] md:text-[20px] text-[50px] text-shadow-ts text-white-A700 w-full"
            size="txtInterSemiBold50"
          >
            Request Information
          </Text> */}
          <div className="bg-red-A400 h-[74px] justify-center max-w-[1305px] md:max-w-full rounded-[9px] mt-[22px] sm:px-5 px-[35px] py-3 sm:text-[40px] md:text-[20px] text-[50px] text-shadow-ts text-white-A700 w-full">
            <span className="font-bold md:text-2xl">Request Information</span>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-[90%] flex flex-col items-center"
          >
            <div className="w-[80%] flex flex-col items-center">
              <input
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Your Name*"
                className="font-semibold md:font-extrabold h-14 p-4 placeholder:text-black-900_a5 rounded-[9px] text-[13.08px] border-none  text-left w-[98%] mt-[55px] bg-gray-300"
                title="Please enter your name"
                required
              />

              <input
                type="text"
                name="contactNumber"
                onChange={handleChange}
                placeholder="Mobile Number*"
                className="font-semibold md:font-extrabold h-14 p-4 placeholder:text-black-900_a5  text-[13.08px] rounded-[9px] border-none  text-left w-[98%] mt-[55px] bg-gray-300"
                title="Please enter Mobile Number"
                required
              />

              <input
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="Email ID*"
                className="font-semibold md:font-extrabold h-14 p-4 placeholder:text-black-900_a5  text-[13.08px] rounded-[9px] border-none  text-left w-[98%] mt-[55px] bg-gray-300"
                title="Enter your email"
                required
              />

              <input
                type="number"
                name="totalGuests"
                onChange={handleChange}
                placeholder="No Of Guests*"
                className="font-semibold md:font-extrabold h-14 p-4 placeholder:text-black-900_a5 rounded-[9px]  text-[13.08px] border-none  text-left w-[98%] mt-[55px] bg-gray-300"
                title="Enter Number Of Guests"
                required
              />

              <input
                type="date"
                name="checkInDate"
                onChange={handleChange}
                placeholder="Check in Date*"
                className="font-semibold md:font-extrabold h-14 p-4 placeholder:text-black-900_a5 rounded-[9px] text-[13.08px] border-none  text-left w-[98%] mt-[55px] bg-gray-300"
                title="Enter Check in date"
                required
              />

              <input
                type="date"
                name="checkOutDate"
                onChange={handleChange}
                placeholder="Check out Date*"
                className="font-semibold md:font-extrabold h-14 p-4 placeholder:text-black-900_a5 rounded-[9px] text-[13.08px] border-none  text-left w-[98%] mt-[55px] bg-gray-300"
                title="Enter Check out date"
                required
              />

              <button
                className="bg-red-A400 mt-[55px] w-[98%] rounded-[9px] h-14"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterPage;
