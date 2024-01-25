import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";

const CheckavailabilityPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-opensans items-center justify-end mx-auto w-full">
        <div className="md:h-[1060px] h-[861px] md:px-5 relative w-full">
          <Img
            className="h-[861px] m-auto object-cover w-full"
            src="images/img_rectangle1_861x1512.png"
            alt="rectangleOne"
          />
          <div className="absolute md:h-[1060px] h-[861px] inset-[0] justify-center m-auto w-full">
            <Img
              className="h-[861px] m-auto object-cover w-full"
              src="images/img_rectangle1.png"
              alt="rectangle877"
            />
            <div className="absolute bottom-[20%] flex flex-col justify-start left-[6%] w-[68%]">
              <Text
                className="ml-2.5 md:ml-[0] md:text-5xl text-[80px] text-shadow-ts text-white-A700"
                size="txtInterBold80"
              >
                <>
                  Quality
                  <br />
                  Holidays With Us!
                </>
              </Text>
              <Text
                className="ml-4 md:ml-[0] mt-2.5 text-[10px] text-center text-white-A700"
                size="txtOpenSansRegular10"
              >
                Our Villas offers a warm and inviting retreat, providing the
                perfect blend of comfort and hospitality for a memorable stay.
              </Text>
              <div
                className="common-pointer font-opensans h-[129px] sm:h-[133px] md:h-[843px] mt-5 relative w-full"
                onClick={() => navigate("/")}
              >
                <div className="absolute bg-white-A700 bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto p-[5px] rounded-[57px] shadow-bs1 w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[94%] md:w-full">
                    <div className="bg-red-A400 h-[103px] rounded-[51px] w-1/4"></div>
                    <div className="flex flex-col gap-2.5 justify-start md:ml-[0] ml-[5px] w-[10%] md:w-full">
                      <div className="flex flex-row font-opensans gap-[11px] items-center justify-start mr-[5px] w-[94%] md:w-full">
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
                        className="bg-gray-50 border border-red-A400_7f border-solid h-[17px] justify-center ml-1.5 md:ml-[0] sm:px-5 px-[30px] rounded-lg text-[10px] text-gray-800 w-[86px]"
                        size="txtInterLight10"
                      >
                        Email
                      </Text>
                    </div>
                    <Line className="bg-red-A400 h-[60px] md:h-px mb-7 md:ml-[0] ml-[39px] md:mt-0 mt-3.5 md:w-full w-px" />
                    <Img
                      className="h-6 md:h-auto md:ml-[0] ml-[34px] object-cover w-6"
                      src="images/img_paydate.png"
                      alt="paydate"
                    />
                    <div className="flex flex-col gap-2.5 items-center justify-start md:ml-[0] ml-[13px] w-[12%] md:w-full">
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
                          <div className="mt-1 mb-0.5 ml-1 bg-gray-700">
                            <Img src="images/img_vector.svg" alt="Vector" />
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
                    <Line className="bg-red-A400 h-[60px] md:h-px mb-7 md:ml-[0] ml-[52px] md:mt-0 mt-3.5 md:w-full w-px" />
                    <Img
                      className="h-6 md:h-auto md:ml-[0] ml-[23px] object-cover w-6"
                      src="images/img_schedule.png"
                      alt="schedule"
                    />
                    <div className="flex flex-col gap-2 items-center justify-start ml-3 md:ml-[0] w-[16%] md:w-full">
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
                          <div className="ml-0.5 bg-gray-700 my-[3px]">
                            <Img src="images/img_vector.svg" alt="Vector" />
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
                    <Line className="bg-red-A400 h-[60px] md:h-px mb-7 md:ml-[0] ml-[27px] md:mt-0 mt-3.5 md:w-full w-px" />
                    <div className="flex flex-col gap-2.5 items-end justify-start md:ml-[0] ml-[13px] w-[11%] md:w-full">
                      <div className="flex flex-col font-opensans items-center justify-start mr-1 w-[96%] md:w-full">
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
                        className="border border-red-A400_7f border-solid cursor-pointer flex items-center justify-center min-w-[96px]"
                        rightIcon={
                          <div className="mt-1 mb-0.5 ml-2 bg-gray-700">
                            <Img src="images/img_vector.svg" alt="Vector" />
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
                <div className="absolute flex flex-col items-center justify-end left-[0] p-[19px] top-[0]">
                  <Text
                    className="mt-[39px] text-center text-lg text-white-A700"
                    size="txtOpenSansRomanBold18"
                  >
                    Back to home page
                  </Text>
                </div>
              </div>
            </div>
            <header className="absolute flex md:flex-col flex-row md:gap-5 items-center justify-center right-[0] top-[2%] w-full">
              <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-[74px] items-start justify-start mb-[15px] ml-7 md:ml-[0] md:mt-0 mt-[29px] w-auto md:w-full">
                <Text
                  className="common-pointer text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-auto"
                  size="txtOpenSansRomanSemiBold30"
                  onClick={() => navigate("/")}
                >
                  Home
                </Text>
                <Text
                  className="common-pointer text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-auto"
                  size="txtOpenSansRomanSemiBold30"
                  onClick={() => navigate("/roombooking")}
                >
                  Book{" "}
                </Text>
                <Text
                  className="common-pointer text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-auto"
                  size="txtOpenSansRomanSemiBold30"
                  onClick={() => navigate("/aboutus")}
                >
                  About us
                </Text>
                <Text
                  className="common-pointer text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-auto"
                  size="txtOpenSansRomanSemiBold30"
                  onClick={() => navigate("/location")}
                >
                  Location
                </Text>
                <Text
                  className="common-pointer text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-auto"
                  size="txtOpenSansRomanSemiBold30"
                  onClick={() => navigate("/contact")}
                >
                  Contact us
                </Text>
              </div>
              <Text
                className="bg-red-A400 h-[47px] justify-center ml-24 md:ml-[0] mr-[11px] md:mt-0 my-[19px] pt-1 sm:px-5 px-[26px] rounded-[23px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-[171px]"
                size="txtOpenSansRomanSemiBold30WhiteA700"
              >
                Register
              </Text>
            </header>
            <Img
              className="absolute h-[116px] left-[1%] object-cover top-[2%] w-[19%]"
              src="images/img_ewablackmark.png"
              alt="ewablackmark"
            />
          </div>
        </div>
        <div className="flex flex-col font-inter items-end mt-[108px] md:px-10 sm:px-5 px-[455px] w-full">
          <Text
            className="md:text-5xl text-6xl text-gray-900_01"
            size="txtInterBold60Gray90001"
          >
            Check availability
          </Text>
        </div>
        <div className="font-opensans md:h-[165px] sm:h-[220px] h-[69px] mt-24 md:px-5 relative w-[54%] md:w-full">
          <div className="absolute bg-white-A700 border border-black-900_7f border-solid flex sm:flex-col flex-row sm:gap-5 h-max inset-[0] items-start justify-center m-auto p-[5px] rounded-[34px] shadow-bs w-full">
            <Img
              className="sm:flex-1 h-[46px] md:h-auto sm:ml-[0] ml-[59px] sm:mt-0 mt-1 object-cover w-[8%] sm:w-full"
              src="images/img_search.png"
              alt="search"
            />
            <Text
              className="sm:mt-0 mt-[9px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900_91"
              size="txtOpenSansRomanRegular35"
            >
              Search Availability
            </Text>
          </div>
          <div className="absolute h-[69px] inset-y-[0] my-auto right-[0] w-[9%]">
            <div className="bg-red-A400 h-[69px] m-auto rounded-[36px] w-full"></div>
            <div className="absolute bottom-[29%] flex flex-col gap-[19px] inset-x-[0] items-center justify-start mx-auto w-[45%]">
              <Img
                className="h-0.5"
                src="images/img_arrow2.svg"
                alt="arrowTwo"
              />
              <Img
                className="h-0.5"
                src="images/img_arrow3.svg"
                alt="arrowThree"
              />
            </div>
          </div>
        </div>
        <div className="bg-white-A700 border border-black-900_7f border-solid flex flex-col font-opensans items-center justify-start max-w-[1363px] mt-[53px] mx-auto p-[30px] md:px-5 rounded-[50px] shadow-bs w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-[97%] md:w-full">
            <Img
              className="h-[330px] sm:h-auto object-cover rounded-[25px] w-[33%] md:w-full"
              src="images/img_rectangle865.png"
              alt="rectangle865"
            />
            <div className="flex flex-col items-start justify-start mb-0.5 md:ml-[0] ml-[46px] md:mt-0 mt-[26px] w-[34%] md:w-full">
              <Text
                className="sm:text-[35px] md:text-[41px] text-[45px] text-black-900"
                size="txtOpenSansRomanBold45"
              >
                Tatasth beach villa
              </Text>
              <Text
                className="md:ml-[0] ml-[5px] mt-4 text-2xl md:text-[22px] text-black-900_cc sm:text-xl"
                size="txtOpenSansRomanSemiBold24Black900cc"
              >
                Aug 2, 2023 - Aug 4, 2023
              </Text>
              <Text
                className="md:ml-[0] ml-[7px] mt-[9px] text-black-900_e2 text-xl"
                size="txtOpenSansRomanSemiBold20Black900e2"
              >
                Luxury Cottage Room
              </Text>
              <Text
                className="md:ml-[0] ml-[7px] mt-[19px] text-base text-red-A700"
                size="txtOpenSansRomanSemiBold16RedA700"
              >
                Only 2 Rooms Left. Hurry!
              </Text>
              <div className="font-inter md:h-[62px] h-[68px] md:ml-[0] ml-[5px] mt-[9px] relative w-[39%]">
                <Img
                  className="absolute bottom-[0] h-[53px] left-[5%]"
                  src="images/img_stars.svg"
                  alt="stars"
                />
                <Button
                  className="absolute cursor-pointer font-black inset-x-[0] min-w-[165px] mx-auto text-[13px] text-center top-[0]"
                  shape="square"
                  color="green_500_8c"
                  size="xs"
                >
                  Break fast included
                </Button>
              </div>
              <div className="font-poppins h-[33px] md:ml-[0] ml-[7px] relative w-[30%]">
                <div className="absolute bg-red-A400 h-[33px] inset-[0] justify-center m-auto rounded-[16px] shadow-bs w-full"></div>
                <Text
                  className="common-pointer absolute inset-x-[0] mx-auto text-white-A700 text-xl top-[0] w-max"
                  size="txtPoppinsSemiBold20"
                  onClick={() => navigate("/roombooking")}
                >
                  Book now
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[51px] items-end justify-start mb-[26px] md:ml-[0] ml-[90px] md:mt-0 mt-[87px] w-[24%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-9 items-center justify-start w-full">
                  <div className="flex flex-row gap-[26px] items-center justify-between w-full">
                    <div className="flex flex-row gap-[13px] items-center justify-start w-[52%]">
                      <Img
                        className="h-7 md:h-auto object-cover w-[27px]"
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
                    <div className="flex flex-row gap-[13px] items-end justify-start w-2/5">
                      <Img
                        className="h-7 md:h-auto object-cover w-[27px]"
                        src="images/img_image24.png"
                        alt="imageTwentyFour"
                      />
                      <Text
                        className="mt-[5px] text-base text-gray-700"
                        size="txtOpenSansRomanSemiBold16Gray700"
                      >
                        244 Sq. Ft
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-9 items-center justify-between w-[99%] md:w-full">
                    <div className="flex flex-row gap-[13px] items-end justify-start w-[49%]">
                      <Img
                        className="h-7 md:h-auto object-cover w-[27px]"
                        src="images/img_image23.png"
                        alt="imageTwentyThree"
                      />
                      <Text
                        className="mt-[5px] text-base text-gray-700"
                        size="txtOpenSansRomanSemiBold16Gray700"
                      >
                        King Size Bed
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[13px] items-end justify-start w-[39%]">
                      <Img
                        className="h-7 md:h-auto object-cover w-[27px]"
                        src="images/img_image25.png"
                        alt="imageTwentyFive"
                      />
                      <Text
                        className="mt-[5px] text-base text-gray-700"
                        size="txtOpenSansRomanSemiBold16Gray700"
                      >
                        City View
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                  size="txtInterBold30"
                >
                  Rs 9,200.00
                </Text>
                <Text
                  className="mt-0.5 text-base text-black-900_e2"
                  size="txtOpenSansRomanBold16"
                >
                  (Incl. of all taxes)
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 border border-black-900_7f border-solid flex flex-col font-opensans items-center justify-start max-w-[1363px] mt-[29px] mx-auto p-6 md:px-5 rounded-[50px] shadow-bs w-full">
          <div className="flex md:flex-col flex-row md:gap-[51px] items-start justify-between mb-0.5 w-[96%] md:w-full">
            <Img
              className="h-[330px] md:h-auto mb-[9px] object-cover rounded-[25px]"
              src="images/img_rectangle867.png"
              alt="rectangle867"
            />
            <div className="flex flex-col items-center justify-start md:mt-0 mt-[33px]">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[98%] md:w-full">
                <div className="flex flex-col items-start justify-start w-[37%] md:w-full">
                  <Text
                    className="ml-0.5 md:ml-[0] sm:text-[35px] md:text-[41px] text-[45px] text-black-900"
                    size="txtOpenSansRomanBold45"
                  >
                    Villa Lahari
                  </Text>
                  <Text
                    className="mt-[11px] text-2xl md:text-[22px] text-black-900_cc sm:text-xl"
                    size="txtOpenSansRomanSemiBold24Black900cc"
                  >
                    Aug 2, 2023 - Aug 4, 2023
                  </Text>
                  <Text
                    className="mt-[18px] text-black-900_e2 text-xl"
                    size="txtOpenSansRomanSemiBold20Black900e2"
                  >
                    Heritage Cottage Room{" "}
                  </Text>
                  <div className="font-inter md:h-[71px] h-[77px] ml-0.5 md:ml-[0] mt-[18px] relative w-[58%]">
                    <Img
                      className="absolute bottom-[0] h-[53px] left-[2%]"
                      src="images/img_stars_amber_600.svg"
                      alt="stars_One"
                    />
                    <Button
                      className="absolute cursor-pointer font-black inset-x-[0] min-w-[165px] mx-auto text-[13px] text-center top-[0]"
                      shape="square"
                      color="green_500_8c"
                      size="xs"
                    >
                      Break fast included
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start md:mt-0 mt-[75px] w-[42%] md:w-full">
                  <div className="flex flex-col gap-[42px] items-center justify-start w-full">
                    <div className="flex flex-row gap-[29px] items-center justify-between w-full">
                      <div className="flex flex-row gap-[15px] items-center justify-start w-[54%]">
                        <Img
                          className="h-8 md:h-auto object-cover w-[18%]"
                          src="images/img_image22.png"
                          alt="imageTwentyTwo_One"
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
                          alt="imageTwentyFour_One"
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
                          alt="imageTwentyThree_One"
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
                          alt="imageTwentyFive_One"
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
              <div className="flex flex-row font-poppins sm:gap-10 items-start justify-between w-full">
                <Button
                  className="common-pointer cursor-pointer font-semibold leading-[normal] mb-[25px] min-w-[123px] rounded-[16px] shadow-bs text-center text-xl"
                  onClick={() => navigate("/roombooking")}
                  color="red_A400"
                  size="xs"
                >
                  Book now
                </Button>
                <div className="md:h-9 h-[57px] relative w-[23%]">
                  <Text
                    className="absolute bottom-[0] left-[0] text-base text-black-900_e2"
                    size="txtOpenSansRomanSemiBold16Black900e2"
                  >
                    (Incl. of all taxes)
                  </Text>
                  <Text
                    className="absolute inset-x-[0] mx-auto text-3xl sm:text-[26px] md:text-[28px] text-black-900 top-[0] w-max"
                    size="txtInterBold30"
                  >
                    Rs 7,200.00
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 border border-black-900_7f border-solid flex flex-col font-opensans items-center justify-end max-w-[1363px] mt-[29px] mx-auto p-5 md:px-5 rounded-[50px] shadow-bs w-full">
          <div className="flex md:flex-col flex-row md:gap-[51px] items-start justify-between mt-1 w-[96%] md:w-full">
            <Img
              className="h-[330px] md:h-auto mb-4 object-cover rounded-[25px]"
              src="images/img_rectangle869.png"
              alt="rectangle869"
            />
            <div className="flex flex-col gap-[11px] justify-start md:mt-0 mt-[45px]">
              <Text
                className="ml-1.5 md:ml-[0] sm:text-[35px] md:text-[41px] text-[45px] text-black-900"
                size="txtOpenSansRomanBold45"
              >
                Manglore Luxury stay
              </Text>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-0.5 w-[36%] md:w-full">
                  <Text
                    className="ml-1.5 md:ml-[0] text-2xl md:text-[22px] text-black-900_cc sm:text-xl"
                    size="txtOpenSansRomanSemiBold24Black900cc"
                  >
                    Aug 2, 2023 - Aug 4, 2023
                  </Text>
                  <Text
                    className="ml-1 md:ml-[0] mt-[11px] text-black-900_e2 text-xl"
                    size="txtOpenSansRomanSemiBold20Black900e2"
                  >
                    Luxury Cottage Room{" "}
                  </Text>
                  <Text
                    className="ml-1.5 md:ml-[0] mt-[13px] text-base text-red-A700"
                    size="txtOpenSansRomanSemiBold16RedA700"
                  >
                    Only 1 Room Left. Hurry!
                  </Text>
                  <div className="h-[103px] md:h-[66px] mt-[13px] relative w-[59%]">
                    <div className="absolute bottom-[0] font-poppins md:h-[53px] h-[82px] left-[0] w-[84%]">
                      <Button
                        className="common-pointer absolute bottom-[0] cursor-pointer font-semibold leading-[normal] left-[0] min-w-[123px] rounded-[16px] shadow-bs text-center text-xl"
                        onClick={() => navigate("/roombooking")}
                        color="red_A400"
                        size="xs"
                      >
                        Book now
                      </Button>
                      <Img
                        className="absolute h-[53px] inset-x-[0] mx-auto top-[0]"
                        src="images/img_stars.svg"
                        alt="stars_Two"
                      />
                    </div>
                    <Input
                      name="groupFive"
                      placeholder="Break fast included"
                      className="font-black font-inter p-0 placeholder:text-green-900 text-[13px] text-left w-full"
                      wrapClassName="absolute inset-x-[0] mx-auto top-[0] w-[98%]"
                      color="green_500_8c"
                      size="xs"
                    ></Input>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col gap-[41px] justify-start w-[46%] md:w-full">
                  <div className="flex flex-col items-center justify-start mr-[50px] w-[87%] md:w-full">
                    <div className="flex flex-col gap-[42px] items-center justify-start w-full">
                      <div className="flex flex-row gap-[29px] items-center justify-between w-full">
                        <div className="flex flex-row gap-[15px] items-center justify-start w-[54%]">
                          <Img
                            className="h-8 md:h-auto object-cover w-[18%]"
                            src="images/img_image22.png"
                            alt="imageTwentyTwo_Two"
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
                            alt="imageTwentyFour_Two"
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
                            alt="imageTwentyThree_Two"
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
                            alt="imageTwentyFive_Two"
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
                  <div className="flex flex-col gap-[5px] items-start justify-start md:ml-[0] ml-[179px]">
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                      size="txtInterBold30"
                    >
                      Rs 11,200.00
                    </Text>
                    <Text
                      className="text-base text-black-900_e2"
                      size="txtOpenSansRomanSemiBold16Black900e2"
                    >
                      (Incl. of all taxes)
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="font-opensans h-[573px] md:h-[576px] mt-4 md:px-5 relative w-full">
          <footer className="absolute bottom-[0] flex inset-x-[0] items-center justify-center mx-auto w-full">
            <div className="flex flex-col items-center justify-center w-full">
              <div className="bg-red-A400_23 flex flex-col items-center justify-start p-[58px] md:px-10 sm:px-5 w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mb-[61px] w-[90%] md:w-full">
                  <div className="md:h-[102px] h-[155px] md:mt-0 mt-2 relative w-[26%] md:w-full">
                    <Text
                      className="absolute bottom-[0] leading-[28.00px] right-[0] text-black-900 text-center text-xl w-[70%] sm:w-full"
                      size="txtOpenSansRegular20Black900"
                    >
                      We catalyze your luxurious vacation
                    </Text>
                    <Img
                      className="absolute h-[102px] left-[0] object-cover top-[0] w-4/5"
                      src="images/img_ewablackmark.png"
                      alt="ewablackmark_One"
                    />
                  </div>
                  <ul className="flex flex-col items-start justify-start w-[67%] md:w-full common-column-list">
                    <li>
                      <a href="javascript:">
                        <div className="flex flex-row font-lato sm:gap-10 items-center justify-between">
                          <Text
                            className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                            size="txtLatoSemiBold24"
                          >
                            Address
                          </Text>
                          <Text
                            className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                            size="txtLatoSemiBold24"
                          >
                            Follow Us
                          </Text>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <div className="flex md:flex-col flex-row font-opensans md:gap-10 items-start justify-between mt-[22px]">
                          <Text
                            className="leading-[32.00px] text-black-900 text-xl"
                            size="txtOpenSansRomanRegular20"
                          >
                            <>
                              D’Souza Complex, next to Shri Veera Maruti
                              <br />
                              Mandir, Hosabettu, Kulai, Mangaluru, <br />
                              Karnataka 575019
                            </>
                          </Text>
                          <div className="flex flex-row gap-8 items-start justify-start md:mt-0 mt-2 w-auto">
                            <Button
                              className="flex h-8 items-center justify-center w-8"
                              shape="circle"
                            >
                              <Img
                                className="h-3"
                                src="images/img_info.svg"
                                alt="info"
                              />
                            </Button>
                            <Button
                              className="flex h-8 items-center justify-center w-8"
                              shape="circle"
                            >
                              <Img
                                className="h-3.5"
                                src="images/img_link.svg"
                                alt="link"
                              />
                            </Button>
                            <Button
                              className="flex h-8 items-center justify-center w-8"
                              shape="circle"
                            >
                              <Img
                                src="images/img_facebook.svg"
                                alt="facebook"
                              />
                            </Button>
                            <Button
                              className="flex h-8 items-center justify-center w-8"
                              shape="circle"
                            >
                              <Img src="images/img_trash.svg" alt="trash" />
                            </Button>
                            <Button
                              className="flex h-8 items-center justify-center w-8"
                              shape="circle"
                              size="sm"
                            >
                              <Img
                                src="images/img_socialicon.svg"
                                alt="socialicon"
                              />
                            </Button>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-9 text-black-900 text-xl"
                      >
                        <Text size="txtOpenSansRomanRegular20">
                          support@ewaproperties.com
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-red-A400 flex flex-col font-lato items-center justify-start p-[19px] w-full">
                <Text
                  className="mb-[3px] text-center text-white-A700 text-xl"
                  size="txtLatoBold20"
                >
                  © Ewa properties. All Rights Reserved.
                </Text>
              </div>
            </div>
          </footer>
          <Img
            className="absolute h-[560px] inset-y-[0] my-auto object-cover right-[0]"
            src="images/img_component38.png"
            alt="componentThirtyEight"
          />
          <Img
            className="absolute bottom-[2%] h-[491px] left-[0] object-cover"
            src="images/img_component35.png"
            alt="componentThirtySeven"
          />
        </div>
      </div>
    </>
  );
};

export default CheckavailabilityPage;
