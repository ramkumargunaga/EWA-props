import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  Slider,
  Text,
} from "components";
function Amenities() {
  return (
    <>
      <div className="flex md:flex-col flex-row font-opensans md:gap-10 items-start justify-between md:ml-[0] ml-[70px] mt-[126px] md:w-full">
        <div className="flex flex-col items-start justify-start md:mt-0 mt-[57px]">
          <Text
            className="ml-2.5 sm:ml-6  md:ml-[0] text-2xl md:text-[22px] text-red-A400 sm:text-xl tracking-[4.32px]"
            size="txtOpenSansRomanSemiBold24RedA400"
          >
            Amenities
          </Text>
          <Text
            className="sm:text-xl sm:ml-6 leading-[75.00px] mt-[20px] md:text-5xl text-[64px] text-black-900_d1"
            size="txtPoppinsRegular64"
          >
            Your All-Inclusive Experience
          </Text>
          <Text
            className="sm:text-[15px] leading-[46.00px]  md:ml-[0] ml-2.5 mt-[30px] text-2xl md:text-[22px] text-gray-700 sm:text-xl w-[85%] sm:w-full sm:p-4"
            size="txtOpenSansRomanSemiBold24Gray700"
          >
            Indulge in a world of luxury and comfort with our exclusive resort
            amenities, designed to create unforgettable experiences for you.
          </Text>
        </div>
        <div className="sm:px-3 flex flex-col justify-start md:w-full">
          <img
            src="images/facilities.png"
            className="w-full md:w-auto h-auto md:h-auto"
          />
        </div>
      </div>
    </>
  );
}

export default Amenities;
