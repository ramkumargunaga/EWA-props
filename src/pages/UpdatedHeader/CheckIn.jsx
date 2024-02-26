import React from "react";
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
function CheckIn() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex items-center justify-start">
        <div
          className="sm:hidden ml-[95px] mt-[38%] sm:mt-[100%]  common-pointer h-[128px] sm:h-[100px] relative w-[70%]"
          onClick={() => navigate("/checkavailability")}
        >
          <div className="absolute bg-white-A700 bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto p-5 rounded-[63px] shadow-bs1 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mb-[26px] md:ml-[0] ml-[26px] w-[69%] md:w-full">
              <div className="flex flex-col gap-2.5 justify-start md:mt-0 mt-1 w-[16%] md:w-full">
                <div className="flex flex-row font-opensans gap-2.5 items-center justify-start w-[83%] md:w-full">
                  <Img
                    className="h-6 md:h-auto object-cover w-6"
                    src="images/img_calendar1.png"
                    alt="calendarOne"
                  />
                  <Text
                    className="text-gray-900 text-xl"
                    size="txtOpenSansRegular20"
                  >
                    Email
                  </Text>
                </div>
                <Text
                  className="bg-gray-50 border border-red-A400_7f border-solid h-[17px] justify-center md:ml-[0] ml-[17px] px-[30px] rounded-lg text-[10px] text-gray-800 w-[86px]"
                  size="txtInterLight10"
                >
                  Email
                </Text>
              </div>
              <Line className="bg-red-A400 h-[60px] md:h-px md:ml-[0] ml-[35px] md:w-full w-px" />
              <Img
                className="h-6 md:h-auto md:ml-[0] ml-[17px] md:mt-0 mt-1.5 object-cover w-6"
                src="images/img_paydate.png"
                alt="paydate"
              />
              <div className="flex flex-col gap-2.5 items-center justify-start md:ml-[0] ml-[11px] md:mt-0 mt-1 w-[16%] md:w-full">
                <div className="flex flex-col font-opensans items-center justify-start w-full">
                  <Text
                    className="text-gray-900 text-xl"
                    size="txtOpenSansRegular20"
                  >
                    Arrival date
                  </Text>
                </div>
                <Button
                  className="border border-red-A400_7f border-solid cursor-pointer flex items-center justify-center min-w-[86px]"
                  rightIcon={
                    <div className="ml-[7px] bg-gray-700 my-[3px]">
                      <Img src="images/img_arrowdown.svg" alt="arrow_down" />
                    </div>
                  }
                  shape="round"
                  color="gray_50"
                  size="xs"
                >
                  <div className="font-inter font-light text-[10px] text-left">
                    Arrival date
                  </div>
                </Button>
              </div>
              <div className="h-[60px] md:ml-[0] ml-[22px] relative w-[1%] md:w-full">
                <Line className="absolute bg-gray-200 h-[60px] inset-y-[0] my-auto right-[0] w-px" />
                <Line className="absolute bg-red-A400 h-[60px] inset-y-[0] left-[0] my-auto w-px" />
              </div>
              <Img
                className="h-6 md:h-auto md:ml-[0] ml-[13px] md:mt-0 mt-1.5 object-cover w-6"
                src="images/img_schedule.png"
                alt="schedule"
              />
              <div className="flex flex-col sm:flex-row gap-2 items-center justify-start md:ml-[0] ml-[13px] md:mt-0 mt-1.5 w-[22%] md:w-full">
                <div className="flex flex-col font-opensans items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="text-gray-900 text-xl"
                      size="txtOpenSansRegular20"
                    >
                      Departure date
                    </Text>
                  </div>
                </div>
                <Button
                  className="border border-red-A400_7f border-solid cursor-pointer flex items-center justify-center min-w-[96px]"
                  rightIcon={
                    <div className="mt-0.5 mb-1 ml-1 bg-gray-700">
                      <Img src="images/img_arrowdown.svg" alt="arrow_down" />
                    </div>
                  }
                  shape="round"
                  color="gray_50"
                  size="xs"
                >
                  <div className="!text-gray-700 font-inter font-light text-[10px] text-left">
                    Departure date
                  </div>
                </Button>
              </div>
              <Line className="bg-red-A400 h-[60px] md:h-px ml-4 md:ml-[0] md:w-full w-px" />
              <div className="flex flex-col gap-2.5 justify-start md:ml-[0] ml-[29px] md:mt-0 mt-1 w-[16%] md:w-full">
                <div className="flex flex-col font-opensans items-center justify-start mr-[7px] w-[94%] md:w-full">
                  <div className="flex flex-row gap-2.5 items-start justify-start w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_lock.svg"
                      alt="lock"
                    />
                    <Text
                      className="text-gray-900 text-xl"
                      size="txtOpenSansRegular20"
                    >
                      Guests
                    </Text>
                  </div>
                </div>
                <Button
                  className="border border-red-A400_7f border-solid cursor-pointer flex items-center justify-center min-w-[96px] ml-2.5 md:ml-[0]"
                  rightIcon={
                    <div className="ml-2.5 bg-gray-700 my-[3px]">
                      <Img src="images/img_arrowdown.svg" alt="arrow_down" />
                    </div>
                  }
                  shape="round"
                  color="gray_50"
                  size="xs"
                >
                  <div className="!text-black-900 font-inter font-light text-[10px] text-left">
                    Guests
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute flex md:h-20 h-[103px] justify-end pt-[22px] right-[1%] top-[0] w-[23%]">
            <div className="bg-red-A400 h-20 mt-auto mx-auto rounded-[40px] w-full"></div>
            <Text
              className="absolute bottom-[22%] inset-x-[0] mx-auto text-center text-lg text-white-A700 w-max"
              size="txtOpenSansRomanBold18"
            >
              Check Availability
            </Text>
          </div>
        </div>
      </div>
      {/* <div className="">
        <button className="sm:block md:hidden bg-red-A400 h-20 mt-auto mx-auto rounded-[40px] absolute bottom-[20%] inset-x-[0] text-center text-2xl text-white-A700 w-[18%]">
          Check Availability
        </button>
      </div> */}
    </div>
  );
}

export default CheckIn;
