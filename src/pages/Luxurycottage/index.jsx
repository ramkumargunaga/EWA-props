import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Counter from "./Counter";
import NavBar from "./../Navbar/Navbar";
import Footer from "./../UpdatedHeader/Footer";

const LuxurycottagePage = () => {
  return (
    <>
      <NavBar />

      <div className="bg-white-A700 flex flex-col font-opensans items-center justify-end mx-auto pt-3.5  mt-12 w-full">
        <div className="flex flex-col items-center justify-start w-full my-12">
          <div className="w-[80%]">
            <div className="relative w-full flex flex-col ">
              <Img
                className="h-[822px] md:h-auto mt-5 mx-auto  w-70%"
                src="images/Frame2408.png"
                alt="rectangle859"
              />
              <Text
                className="relative md:text-xl md:left-11 md:bottom-16 text-6xl text-white-A700 bottom-52 left-28"
                size="txtInterBold60Black900"
              >
                Luxury Cottage Room
              </Text>
            </div>
          </div>

          <div className="border border-black-900_4f border-solid flex flex-col items-start justify-start max-w-[1276px] mt-[30px] mx-auto  p-6 md:px-5 rounded-[17px] w-full md:w-[90%]">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[90%] md:w-full">
              <div className="flex flex-col gap-[19px] items-start justify-start w-[34%] md:w-full">
                <div className="bg-gray-400_01 h-[339px] relative rounded-[11px] w-full">
                  <Img
                    className="h-[339px] m-auto object-cover rounded-[11px] w-full"
                    src="images/img_image12_339x368.png"
                    alt="imageTwelve"
                  />
                  <div className="absolute bg-black-900_93 bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto p-3 w-full">
                    <Text
                      className="ml-3 md:ml-[0] text-base text-white-A700"
                      size="txtOpenSansRomanSemiBold16WhiteA700"
                    >
                      +5 Photos
                    </Text>
                  </div>
                  <Img
                    className="absolute h-6 inset-y-[0] left-[0] my-auto w-6"
                    src="images/img_arrowleft.svg"
                    alt="arrowleft"
                  />
                  <Img
                    className="absolute h-6 inset-y-[0] my-auto right-[0] w-6"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-[87%] md:w-full">
                  <div className="flex flex-col gap-[42px] items-center justify-start w-full">
                    <div className="flex flex-row gap-[29px] items-center justify-between w-full">
                      <div className="flex flex-row gap-[15px] items-center justify-start w-[54%]">
                        <Img
                          className="h-8 md:h-auto object-cover w-[18%]"
                          src="images/img_image22.png"
                          alt="imageTwentyTwo"
                        />
                        <Text
                          className="leading-[20.00px] text-base text-gray-700 w-[74%] sm:w-full"
                          size="txtOpenSansRomanSemiBold16Gray700"
                        >
                          2 Person Accomodation
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[15px] items-end justify-start w-[38%]">
                        <Img
                          className="h-8 md:h-auto object-cover w-[26%]"
                          src="images/img_image24.png"
                          alt="imageTwentyFour"
                        />
                        <Text
                          className="mb-0.5 mt-[7px] text-base text-gray-700"
                          size="txtOpenSansRomanSemiBold16Gray700"
                        >
                          244 Sq. Ft
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="flex flex-row gap-[15px] items-end justify-start w-[47%]">
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
                      <div className="flex flex-row gap-[15px] items-end justify-start w-[37%]">
                        <Img
                          className="h-8 md:h-auto object-cover w-[26%]"
                          src="images/img_image25.png"
                          alt="imageTwentyFive"
                        />
                        <Text
                          className="mb-0.5 mt-[7px] text-base text-gray-700"
                          size="txtOpenSansRomanSemiBold16Gray700"
                        >
                          City View
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Line className="bg-black-900_30 h-[482px] md:h-px md:ml-[0] ml-[22px] md:w-full w-px" />
              <div className="flex flex-col gap-10 items-start justify-start md:ml-[0] ml-[22px] md:mt-0 mt-[19px] w-[33%] md:w-full">
                <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-black-900_d1"
                    size="txtOpenSansRomanSemiBold32Black900d1"
                  >
                    Luxury Cottage Room
                  </Text>
                  <Text
                    className="leading-[34.00px] text-black-900_d1 text-xl w-full"
                    size="txtOpenSansRomanRegular20Black900d1"
                  >
                    <span className="text-black-900_d1 font-opensans text-left font-semibold">
                      Our spacious suites embody luxury and sophistication and
                      enjoy the experience wit...{" "}
                    </span>
                    <span className="text-black-900_d1 font-opensans text-left font-extrabold">
                      {" "}
                    </span>
                    <a
                      href="javascript:"
                      className="text-black-900_c6 font-opensans text-left text-[17px] font-extrabold underline"
                    >
                      Read More
                    </a>
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-[49%] md:w-full">
                  <div className="flex flex-row gap-[17px] items-start justify-start w-[97%] md:w-full">
                    <Img
                      className="h-6 md:h-auto object-cover w-6"
                      src="images/img_check1.png"
                      alt="checkOne"
                    />
                    <Text
                      className="mt-0.5 text-base text-black-900_d1"
                      size="txtOpenSansRomanBold16Black900d1"
                    >
                      High-Speed Wifi
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[17px] items-center justify-start mt-[23px] w-[59%] md:w-full">
                    <Img
                      className="h-6 md:h-auto object-cover w-6"
                      src="images/img_check1.png"
                      alt="checkTwo"
                    />
                    <Text
                      className="text-base text-black-900_d1"
                      size="txtOpenSansRomanBold16Black900d1"
                    >
                      Shower
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[17px] items-start justify-start mt-6 w-full">
                    <Img
                      className="h-6 md:h-auto object-cover w-6"
                      src="images/img_check1.png"
                      alt="checkThree"
                    />
                    <Text
                      className="mt-0.5 text-base text-black-900_d1"
                      size="txtOpenSansRomanBold16Black900d1"
                    >
                      Air-Conditioning
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[17px] items-start justify-start mt-[23px] w-3/5 md:w-full">
                    <Img
                      className="h-6 md:h-auto object-cover w-6"
                      src="images/img_check1.png"
                      alt="checkFour"
                    />
                    <Text
                      className="mt-0.5 text-base text-black-900_d1"
                      size="txtOpenSansRomanBold16Black900d1"
                    >
                      Parking
                    </Text>
                  </div>
                  <Text
                    className="mt-8 text-black-900_d1 text-sm underline"
                    size="txtOpenSansRomanBold14"
                  >
                    View More Amenities
                  </Text>
                </div>
              </div>
              <Line className="bg-black-900_30 h-[482px] md:h-px md:ml-[0] ml-[82px] md:w-full w-px" />
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[45px] md:mt-0 mt-5 w-[19%] md:w-full">
                <div className="h-[34px] pr-[17px] relative w-[74%]">
                  <Img
                    className="h-[34px] my-auto"
                    src="images/img_vector15.svg"
                    alt="vectorFifteen"
                  />
                  <Text
                    className="absolute h-max inset-y-[0] left-[11%] my-auto text-base text-white-A700 tracking-[1.44px]"
                    size="txtOpenSansRomanSemiBold16WhiteA700"
                  >
                    20% OFF
                  </Text>
                </div>
                <Text
                  className="mt-[25px] text-2xl md:text-[22px] text-black-900_e2 sm:text-xl"
                  size="txtOpenSansRomanSemiBold24Black900e2"
                >
                  <span className="text-black-900_e2 font-opensans text-left font-semibold">
                    Rs{" "}
                  </span>
                  <span className="text-black-900_e2 font-opensans text-left font-bold">
                    3,000.00
                  </span>
                </Text>
                <Text
                  className="line-through mt-1.5 text-base text-black-900_e2 tracking-[1.44px]"
                  size="txtOpenSansRomanSemiBold16Black900e2"
                >
                  <span className="text-black-900_e2 font-opensans text-left font-normal">
                    Rs{" "}
                  </span>
                  <span className="text-black-900_e2 font-opensans text-left font-normal">
                    3,600.00
                  </span>
                </Text>
                <Text
                  className="mt-6 text-base text-black-900_e2 underline"
                  size="txtOpenSansRomanSemiBold16Black900e2"
                >
                  1 Room Per Night
                </Text>
                <Text
                  className="mt-[11px] text-base text-black-900_e2"
                  size="txtOpenSansRomanSemiBold16Black900e2"
                >
                  2 Adults, 0 Childern
                </Text>

                <Counter />

                <Text
                  className="mt-[19px] text-base text-red-A700"
                  size="txtOpenSansRomanSemiBold16RedA700"
                >
                  Only 2 Rooms Left. Hurry!
                </Text>
              </div>
            </div>
          </div>
          <button className=" relative mt-9 h-10 w-[130px] bg-red-A400 rounded-3xl right-20">
            Book Now
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LuxurycottagePage;
