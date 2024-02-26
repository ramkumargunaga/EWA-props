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
function OurStory() {
  const navigate = useNavigate();

  return (
    <>
      {/* <div className="mx-auto md:px-5 w-full">
        <div className="flex flex-row items-center">
          <div className="ourstory-text">
            <Img
              className="h-[15px] md:ml-[0] ml-[25px] rounded-[7px]"
              src="images/img_arrow1.svg"
              alt="arrowOne"
            />
            <Text
              className="ml-[39px] mt-[57px] text-2xl md:text-[22px] text-pink-A400 sm:text-xl tracking-[4.32px]"
              size="txtOpenSansRomanSemiBold24"
            >
              Our Story
            </Text>
            <div className="flex flex-col justify-start w-full">
              <Text
                className="md:text-5xl text-[64px] text-black-900_d1"
                size="txtPoppinsRegular64"
              >
                <span className="text-indigo-900 font-poppins text-left font-normal">
                  About
                </span>
                <span className="text-black-900_d1 font-poppins text-left font-semibold">
                  {" "}
                </span>
                <span className="text-red-A400 font-poppins text-left font-semibold">
                  ewa
                </span>
                <span className="text-black-900_d1 font-poppins text-left font-normal">
                  {" "}
                </span>
                <span className="text-indigo-900 font-poppins text-left font-semibold">
                  Properties
                </span>
              </Text>
              <div className="flex sm:flex-col flex-row font-opensans sm:gap-10 gap-[65px] items-start justify-start ml-0.5 md:ml-[0] mt-[30px] w-[57%] md:w-full">
                <div className="bg-red-A400_7f h-3  sm:mt-0 mt-[25px] rounded-md w-[31%]"></div>
                <Text
                  className="leading-[45.00px] text-2xl md:text-[22px] text-gray-700 sm:text-xl w-[69%] sm:w-full"
                  size="txtOpenSansRegular24"
                >
                  Zenvilla is designed to meet the requirements of modern day
                  travelers. We understand each trip is different and have
                  thoughtfully balanced the scapes of a peaceful home and a
                  luxury hotel.{" "}
                </Text>
              </div>
              <div className="bg-red-A400_b2 flex md:flex-col flex-row font-opensans gap-[15px] items-center justify-start md:ml-[0] ml-[238px] mr-[495px] mt-[90px] p-[13px] rounded-[31px] shadow-bs w-[28%] md:w-full">
                <Text
                  className="ml-1.5 md:ml-[0] md:mt-0 mt-0.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtOpenSansRomanSemiBold24WhiteA700"
                >
                  Learn More Now
                </Text>
                <div className="h-[33px] relative w-8">
                  <div className="common-pointer absolute bg-white-A700_01 h-[30px] inset-[0] justify-center m-auto rounded-[16px] w-full"></div>
                  <Text
                    className="absolute h-full inset-[0] justify-center m-auto text-2xl md:text-[22px] text-black-900 sm:text-xl w-max"
                    size="txtOpenSansRomanExtraBold24"
                  >
                    <>&gt;</>
                  </Text>
                </div>
              </div>
            </div>
          </div>

          <div className="about-img">
            <img
              className="w-full h-auto"
              src="images/about.png"
              alt="about image"
            />
          </div>
        </div>
      </div> */}

      <div className="mt-5 mx-10 sm:mx-4 flex mb-4 md:flex-row sm:flex-col">
        <div className="story-text w-1/2 sm:w-full">
          <div>
            <Img
              className="hidden  h-[20px] md:ml-[0] mt-3 rounded-[7px]"
              src="images/img_arrow1.svg"
              alt="arrowOne"
            />
            <Text
              className="mt-[10px] text-2xl md:text-[22px] text-pink-A400 sm:text-xl tracking-[4.32px]"
              size="txtOpenSansRomanSemiBold24"
            >
              Our Story
            </Text>
          </div>

          <div className="sm:mt-[20px]">
            <Text
              className="sm:text-[24px] md:text-5xl text-[64px] text-black-900_d1"
              size="txtPoppinsRegular64"
            >
              <span className="text-indigo-900 font-poppins text-left font-normal">
                About
              </span>
              <span className="text-black-900_d1 font-poppins text-left font-semibold">
                {" "}
              </span>
              <span className="text-red-A400 font-poppins text-left font-semibold">
                ewa
              </span>
              <span className="text-black-900_d1 font-poppins text-left font-normal">
                {" "}
              </span>
              <span className="text-indigo-900 font-poppins text-left font-semibold">
                Properties
              </span>
            </Text>
          </div>

          <div>
            <div className="flex sm:flex-col flex-row font-opensans sm:gap-10 gap-[65px] items-start justify-start ml-0.5 md:ml-[0] mt-[30px] sm:mt-[10px] md:w-full">
              <div className="bg-red-A400_7f h-2 sm:mt-0 mt-[25px] rounded-md w-[29%]"></div>
              <Text
                className="leading-[45.00px] text-2xl md:text-[22px] text-gray-700 sm:text-sm w-[51%] sm:w-full"
                size="txtOpenSansRegular24"
              >
                Zenvilla is designed to meet the requirements of modern day
                travelers. We understand each trip is different and have
                thoughtfully balanced the scapes of a peaceful home and a luxury
                hotel.{" "}
              </Text>
            </div>
            <div
              className="bg-red-A400_b2 flex flex-row font-opensans gap-[15px] items-center justify-center md:ml-[0] ml-[238px] mr-[495px] mt-[90px] p-[13px] rounded-[31px] shadow-bs w-[38%] md:w-full"
              onClick={() => navigate("/aboutus")}
            >
              <Text
                className="ml-1.5 md:ml-[0] md:mt-0 mt-0.5 text-2xl md:text-[22px] text-white-A700 text-center sm:text-xl"
                size="txtOpenSansRomanSemiBold24WhiteA700"
              >
                Learn More Now
              </Text>
              <div className="h-[33px] relative w-8">
                <div className="common-pointer absolute bg-white-A700_01 h-[30px] inset-[0] justify-center m-auto rounded-[16px] w-full"></div>
                <Text
                  className="absolute h-full inset-[0] justify-center m-auto text-2xl md:text-[22px] text-black-900 sm:text-xl w-max"
                  size="txtOpenSansRomanExtraBold24"
                >
                  <>&gt;</>
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="story-img w-1/2 sm:w-full">
          <div className="sm:mt-5 about-img">
            <img
              className="w-full h-auto"
              src="images/about.png"
              alt="about image"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default OurStory;
