import React from "react";
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
function WhyUs() {
  return (
    <div>
      <div className="mx-10 sm:mx-5 flex md:flex-col-reverse flex-row font-opensans md:gap-10 items-start justify-between mt-[126px]">
        <div className=" flex flex-col justify-start w-1/2 md:w-full">
          <img
            src="images/whyUs.png"
            className="w-full md:w-auto h-auto md:h-auto"
          />
        </div>
        <div className=" flex flex-col items-start justify-start mt-[57px]">
          <div className="flex flex-col font-inter items-start justify-start">
            <Text
              className="md:text-5xl text-6xl text-indigo-900"
              size="txtInterSemiBold60"
            >
              <>
                Why
                <br />
                Choose Us
              </>
            </Text>
            <Text
              className="sm:text-sm mt-[7px] text-black-900_e2 text-xl"
              size="txtInterSemiBold20"
            >
              <>
                Get lost on the beautiful beaches of Mangaluru, or get
                <br />
                caught up in the wildness of the nature.its up to you.
              </>
            </Text>
            <Button
              className="sm:block border border-red-A400 border-solid cursor-pointer font-semibold leading-[normal] min-w-[144px] mt-[22px] rounded-[17px] text-[15px] text-center"
              color="white_A700_01"
              size="sm"
            >
              Read More
            </Button>
            <div className="mt-3 flex flex-row sm:gap-5 items-center justify-start md:ml-[0] ml-[5px] w-[90%]">
              <Text
                className="sm:text-[31px] md:text-[47px] text-[55px] text-black-900"
                size="txtInterSemiBold55"
              >
                01
              </Text>
              <div className="h-0.5 md:h-px ml-7 sm:ml-[0] relative w-[62%] sm:w-full">
                <Line className="absolute bg-red-A400 bottom-[0] h-1 left-[0] rotate-[0deg] w-[47%]" />
                <Line className="absolute bg-red-A400_38 h-1 right-[0] rotate-[0deg] top-[0] w-3/5" />
              </div>
              <Text
                className="sm:ml-[0] ml-[22px] sm:text-[31px] md:text-[47px] text-[55px] text-black-900"
                size="txtInterSemiBold55"
              >
                03
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
