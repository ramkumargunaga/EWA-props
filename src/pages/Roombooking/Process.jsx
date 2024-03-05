import React from "react";

import { Button, Img, Input, Line, Text, TextArea } from "components";

function Process() {
  return (
    <div className="bg-white-A700 w-[100%] h-fit flex items-center justify-center mt-3 mb-3 shadow-bs5 border-2">
      <div className=" flex flex-row px-[10px] py-[20px] w-[90%]">
        <div className="flex flex-col items-center w-20">
          <Text
            className="bg-light_green-600 flex h-16 items-center justify-center sm:px-5 rounded-[50%] text-[17.44px] text-center text-white-A700 w-16"
            size="txtSourceSansProSemiBold1744"
          >
            1
          </Text>
          <Text
            className="mb-[5px] text-base text-black-900 text-center md:w-[50%]"
            size="txtOpenSansRomanSemiBold16"
          >
            Your Information
          </Text>
        </div>
        <Line className="relative bg-light_green-600 bottom-[44%] h-1 left-[0x] w-[82%] md:w-[120%] top-8" />
        <div className=" relative flex flex-col items-center  w-20">
          <Text
            className="absolute bg-gray-500 flex h-16  items-center justify-center sm:px-5 rounded-[50%] text-[17.44px] text-center text-black-900_51  w-16"
            size="txtSourceSansProSemiBold1744Black90051"
          >
            2
          </Text>
          <Text
            className="sm:ml-[0]  sm:mt-0 mt-[5px] md:relative md:top-16 text-base text-center text-gray-700"
            size="txtOpenSansRomanSemiBold16Gray700"
          >
            Payment Information
          </Text>
        </div>
        <Line className="relative bg-gray-500 h-1 mb-7 md:mt-0 mt-8 w-[37%] md:w-[120%] top-8" />
        <div className="relative flex flex-col items-center w-20">
          <Text
            className="bg-gray-500 flex h-16 items-center justify-center sm:px-5 rounded-[50%] text-[17.44px] text-black-900_51 text-center w-16"
            size="txtSourceSansProSemiBold1744Black90051"
          >
            3
          </Text>
          <Text
            className="sm:ml-[0]  sm:mt-0 mt-[5px] md:relative md:top-0 text-base text-center text-gray-700"
            size="txtOpenSansRomanSemiBold16Gray700"
          >
            Booking Confirmation
          </Text>
        </div>
      </div>
    </div>
  );
}

export default Process;
