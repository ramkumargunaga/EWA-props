import React from "react";
import { Button, Img, Input, Line, Text, TextArea } from "components";

function RoomSummary() {
  return (
    <div className="bg-white-A700 border border-black-900_66 border-solid rounded-[10px] shadow-bs6 w-[85%] h-fit px-3 py-3 mt-9">
      <div>
        <Text
          className="mt-3 text-black-900_cc text-xl pb-6"
          size="txtPoppinsBold20"
        >
          Room Summary
        </Text>

        <div className="flex flex-row items-center justify-between w-full">
          <Text
            className="text-2xl md:text-[22px] text-black-900_cc sm:text-xl"
            size="txtOpenSansRomanSemiBold24Black900cc"
          >
            Aug 2, 2023 - Aug 4, 2023
          </Text>
          <Text
            className="text-2xl md:text-[22px] text-black-900_cc sm:text-xl"
            size="txtOpenSansRomanSemiBold24Black900cc"
          >
            1 Night
          </Text>
        </div>

        <div className="flex flex-row items-center justify-between mt-[49px] w-full">
          <Text
            className="text-black-900_e2 text-xl"
            size="txtOpenSansRomanSemiBold20Black900e2"
          >
            Luxury Cottage Room * 2
          </Text>
          <Text
            className="text-blue-900 text-right text-sm underline"
            size="txtOpenSansRomanSemiBold14"
          >
            Change
          </Text>
        </div>
        <Line className="bg-black-900_1e h-px mt-[34px] w-full" />
        <div className="flex sm:flex-col flex-row gap-[31px] items-start justify-start mt-7 w-[89%] md:w-full">
          <div className="bg-blue_gray-100_01 flex flex-col items-center justify-start w-[48%] sm:w-full">
            <Img
              className="h-[174px] md:h-auto object-cover w-full"
              src="images/img_image12_174x179.png"
              alt="imageTwelve"
            />
          </div>
          <div className="flex flex-col items-start justify-start w-[45%] sm:w-full">
            <div className="flex flex-row gap-[15px] items-center justify-start w-full">
              <Img
                className="h-8 md:h-auto object-cover w-[18%]"
                src="images/img_image22.png"
                alt="imageTwentyTwo"
              />
              <Text
                className="sm:flex-1 leading-[20.00px] text-base text-gray-700 w-[74%] sm:w-full"
                size="txtOpenSansRomanSemiBold16Gray700"
              >
                2 Person Accomodation
              </Text>
            </div>
            <div className="flex flex-row gap-[15px] items-end justify-start mt-[23px] w-[87%] md:w-full">
              <Img
                className="h-8 md:h-auto object-cover w-[21%]"
                src="images/img_image23.png"
                alt="imageTwentyThree"
              />
              <Text
                className="mb-[3px] mt-1.5 text-base text-gray-700"
                size="txtOpenSansRomanSemiBold16Gray700"
              >
                King Size Bed
              </Text>
            </div>
            <div className="flex flex-row gap-[15px] items-end justify-start mt-[30px] w-[67%] md:w-full">
              <Img
                className="h-[30px] w-[30px]"
                src="images/img_wifi22.svg"
                alt="wifiTwentyTwo"
              />
              <div className="flex flex-col items-center justify-start mb-0.5 mt-[5px]">
                <Text
                  className="text-base text-gray-700"
                  size="txtOpenSansRomanSemiBold16Gray700"
                >
                  Free Wifi
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomSummary;
