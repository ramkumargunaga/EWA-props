import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import NavBar from "pages/UpdatedHeader/Navbar";
import Footer from "./../UpdatedHeader/Footer";
const AboutusPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="">
        <NavBar />

        <div className="mt-36 flex mx-14 md:mx-5">
          <Img
            className="md:hidden h-[890px]   w-[860px]"
            src="images/img_aboutus1.png"
            alt="imageTwentyThree_One"
          />

          <div className="flex flex-col gap-[39px] justify-start md:mt-0  mt-[158px]">
            <div className="h-[178px] md:h-[97px] relative flex justify-center w-full">
              <Text
                className="absolute inset-x-[0] mx-auto md:text-4xl text-[80px] text-black-900 text-center top-[0] w-max"
                size="txtInterBold80Black900"
              >
                More About
              </Text>
              <Text
                className="absolute bottom-[0] inset-x-[0] mx-auto md:text-4xl text-[71px] text-center text-red-A400 w-max"
                size="txtInterBold71"
              >
                ewa properties
              </Text>
            </div>
            <Text
              className="md:ml-[0] ml-[27px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center w-[82%] sm:w-full"
              size="txtInterRegular30"
            >
              Our fine homes at EWA Properties are the gateways for your
              adventures with nature! Each of one homes are located in scenic
              locations surrounded with either lush green trees or never ending
              stretches of blue waters!
            </Text>
          </div>
        </div>
        <div className=" mx-14 md:mx-5`">
          <div>
            <Text
              className="mt-[100px] md:text-xl text-[80px] text-black-900 text-center"
              size="txtInterBold80Black900"
            >
              Why we are so special?
            </Text>
          </div>

          <div className="flex mt-20 gap-8 md:mx-5">
            <div className="mt-10 w-[38%]">
              <span className="text-indigo-900 font-inter text-[46px] md:text-xl text-left font-semibold">
                Our work process make your dream come true
              </span>
              <div className="mt-10 ml-7 flex gap-5">
                <div className="">
                  <div className="bg-white-A700 border border-black-900_99 border-solid h-8 w-8 p-7 flex items-center justify-center rounded-full shadow-bs  ">
                    <span className="font-bold">01</span>
                  </div>
                  <div className="relative left-7 w-1 h-24 bg-black-900 "></div>
                  <div className="bg-white-A700 border border-black-900_99 border-solid h-8 w-8 p-7 flex items-center justify-center rounded-full shadow-bs  ">
                    <span className="font-bold">02</span>
                  </div>
                  <div className="relative left-7 w-1 h-24 bg-black-900 "></div>
                  <div className="bg-white-A700 border border-black-900_99 border-solid h-8 w-8 p-7 flex items-center justify-center rounded-full shadow-bs  ">
                    <span className="font-bold">03</span>
                  </div>
                </div>
                <div>
                  <div>
                    <Text
                      className=" h-full justify-center  text-black-900 text-xl w-max"
                      size="txtInterBold20Black900"
                    >
                      Perfection in every inch
                    </Text>
                    <span>
                      Our fine homes at EWA Properties are the gateways for your
                      adventures with nature!
                    </span>
                  </div>
                  <div className="relative top-[90px]">
                    <Text
                      className=" h-full justify-center  text-black-900 text-xl w-max"
                      size="txtInterBold20Black900"
                    >
                      Best Serving & Hygienic
                    </Text>
                    <span>
                      Our fine homes at EWA Properties are the gateways for your
                      adventures with nature!
                    </span>
                  </div>
                  <div className="relative top-[180px]">
                    <Text
                      className=" h-full justify-center  text-black-900 text-xl w-max"
                      size="txtInterBold20Black900"
                    >
                      Comfortable support
                    </Text>
                    <span>
                      Our fine homes at EWA Properties are the gateways for your
                      adventures with nature!
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:hidden">
              <Img
                className=" h-[500px]   w-[860px]"
                src="images/img_aboutus2.png"
                alt="imageTwentyThree_One"
              />
            </div>
          </div>
        </div>
        <div className="flex mt-16 w-auto  justify-between">
          <Img
            className="h-[587px]"
            src="images/Component 35.png"
            alt="componentThirtyEight"
          />
          <div className="w-[30%]">
            <div className="flex w-full h-auto justify-center">
              <Text
                className="md:ml-[0] sm:text-[40px] md:text-[46px] text-[50px] text-black-900 pb-6"
                size="txtInterBold50"
              >
                Good to know!
              </Text>
            </div>

            <div className="flex flex-col h w-full items-center">
              <div className="bg-red-100 w-full flex justify-between py-[7px] px-6 mb-10">
                <span className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900">
                  {" "}
                  Value for money
                </span>
                <span className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900">
                  {" "}
                  8.0
                </span>
              </div>
              <div className="flex justify-center border border-black-900_7f border-solid w-full py-[7px] px-6  mb-10">
                <span className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900">
                  {" "}
                  Distance to city center
                </span>
                <span className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900">
                  {" "}
                  52 KM
                </span>
              </div>
              <div className="bg-red-100 w-full flex justify-between py-[7px] px-6">
                <span className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900">
                  {" "}
                  Location rating 9.0
                </span>
              </div>
            </div>
          </div>

          <Img
            className="relative h-[587px] "
            src="images/img_component38.png"
            alt="componentThirtyEight"
          />
        </div>

        <div className=" w-full h-auto flex items-center justify-center">
          <div className="w-[70%] flex flex-col justify-center">
            <Img
              className="h-[570px] m-auto object-cover w-full"
              src="images/img_rectangle55.png"
              alt="rectangleFiftyFive"
            />
            <div className="flex p-[30px] relative bottom-[480px]">
              <div className="">
                <div className="relative w-[680px] flex justify-center ">
                  <span className=" font-extrabold text-6xl text-center text-shadow-ts text-white-A700">
                    Explore culture, tradition and nature!
                  </span>
                </div>

                <div className="relative w-[520px] flex justify-center left-[50px] top-[25px]">
                  <span className="sm:text-[21px] md:text-[23px] text-[25px] text-center text-white-A700">
                    EWA is a nature based travel initiative which aims to
                    inspire people all over the world to explore culture,
                    tradition and nature.
                  </span>
                </div>
              </div>
              <div className="relative top-[140px] left-[50px]">
                <Img
                  className="h-[183px] md:h-auto object-cover rounded-[3px]"
                  src="images/img_rectangle56.png"
                  alt="rectangleFiftySix"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutusPage;
