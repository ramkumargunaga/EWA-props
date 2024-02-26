import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const RegisterPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-end mx-auto pt-[17px] w-full">
        <div className="flex flex-col items-center  justify-start w-[90%]">
          

          <Text
            className="mt-6 sm:text-[40px] md:text-[46px] text-[50px] text-indigo-900 text-shadow-ts"
            size="txtLexendDecaRegular50"
          >
            Registration
          </Text>
          <Text
            className="bg-red-A400 h-[74px] justify-center max-w-[1305px] md:max-w-full rounded-[9px] mt-[22px] sm:px-5 px-[35px] py-1.5 sm:text-[40px] md:text-[46px] text-[50px] text-shadow-ts text-white-A700 w-full"
            size="txtInterSemiBold50"
          >
            Request Information
          </Text>
          <input
            type="text"
            placeholder="Your Name*"
            className="font-semibold md:font-extrabold h-14 p-4 placeholder:text-black-900_a5 rounded-[9px] text-[13.08px] border-none  text-left w-[98%] mt-[55px] bg-gray-300"
            title="Please enter your name"
            required
          />

          <input
            type="text"
            placeholder="Mobile Number*"
            className="font-semibold md:font-extrabold h-14 p-4 placeholder:text-black-900_a5  text-[13.08px] rounded-[9px] border-none  text-left w-[98%] mt-[55px] bg-gray-300"
            title="Please enter Mobile Number"
            required
          />

          <input
            type="email"
            placeholder="Email ID*"
            className="font-semibold md:font-extrabold h-14 p-4 placeholder:text-black-900_a5  text-[13.08px] rounded-[9px] border-none  text-left w-[98%] mt-[55px] bg-gray-300"
            title="Enter your email"
            required
          />

          <input
            type="number"
            placeholder="No Of Guests*"
            className="font-semibold md:font-extrabold h-14 p-4 placeholder:text-black-900_a5 rounded-[9px]  text-[13.08px] border-none  text-left w-[98%] mt-[55px] bg-gray-300"
            title="Enter Number Of Guests"
            required
          />

          <input
            type="date"
            placeholder="Check in Date*"
            className="font-semibold md:font-extrabold h-14 p-4 placeholder:text-black-900_a5 rounded-[9px] text-[13.08px] border-none  text-left w-[98%] mt-[55px] bg-gray-300"
            title="Enter Check in date"
            required
          />

          <input
            type="date"
            placeholder="Check out Date*"
            className="font-semibold md:font-extrabold h-14 p-4 placeholder:text-black-900_a5 rounded-[9px] text-[13.08px] border-none  text-left w-[98%] mt-[55px] bg-gray-300"
            title="Enter Check out date"
            required
          />

          <button className="bg-red-A400 mt-[55px] w-[60%] rounded-[9px] h-14">
            Submit
          </button>

         
          <div className="font-inter h-[581px] md:h-[609px] mt-[29px] md:px-5 relative w-full">
            <div className="flex flex-col h-full items-center justify-start m-auto w-full">
              <div className="flex flex-col gap-[52px] items-center justify-start w-full">
               
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
