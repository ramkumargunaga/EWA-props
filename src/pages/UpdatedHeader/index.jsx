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

const UpdatedHeaderPage = () => {
  const navigate = useNavigate();

  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-white-A700 font-opensans h-[12283px] mx-auto relative w-full">
        <div className="absolute md:h-[1041px] h-[980px] inset-x-[0] mx-auto md:px-5 top-[0] w-full">
          <Img
            className="h-[980px] m-auto object-cover w-full"
            src="images/img_rectangle1.png"
            alt="rectangleOne"
          />
          <div className="absolute bottom-[16%] flex flex-col md:gap-10 gap-28 items-center justify-start left-[7%] w-[68%]">
            <div className="flex flex-col gap-[31px] justify-start">
              <Text
                className="md:text-5xl text-[80px] text-shadow-ts text-white-A700"
                size="txtInterBold80"
              >
                <>
                  Quality
                  <br />
                  Holidays With Us!
                </>
              </Text>
              <Text
                className="ml-2 md:ml-[0] text-[10px] text-center text-white-A700"
                size="txtOpenSansRegular10"
              >
                Our Villas offers a warm and inviting retreat, providing the
                perfect blend of comfort and hospitality for a memorable stay.
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div
                className="common-pointer sm:h-[126px] h-[138px] md:h-[672px] relative w-full"
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
                        className="bg-gray-50 border border-red-A400_7f border-solid h-[17px] justify-center md:ml-[0] ml-[17px] sm:px-5 px-[30px] rounded-lg text-[10px] text-gray-800 w-[86px]"
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
                            <Img
                              src="images/img_arrowdown.svg"
                              alt="arrow_down"
                            />
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
                    <div className="flex flex-col gap-2 items-center justify-start md:ml-[0] ml-[13px] md:mt-0 mt-1.5 w-[22%] md:w-full">
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
                            <Img
                              src="images/img_arrowdown.svg"
                              alt="arrow_down"
                            />
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
                            <Img
                              src="images/img_arrowdown.svg"
                              alt="arrow_down"
                            />
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
                    className="absolute bottom-[18%] inset-x-[0] mx-auto text-center text-lg text-white-A700 w-max"
                    size="txtOpenSansRomanBold18"
                  >
                    Check Availability
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <header className="absolute flex md:flex-col flex-row md:gap-5 items-center justify-center right-[0] top-[2%] w-full">
            <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-[74px] items-start justify-start mb-[15px] ml-7 md:ml-[0] md:mt-0 mt-[29px] w-auto md:w-full">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-auto"
                size="txtOpenSansRomanSemiBold30"
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
            <Button
              className="common-pointer cursor-pointer font-semibold min-w-[171px] ml-24 md:ml-[0] mr-[11px] md:mt-0 my-[19px] rounded-[23px] text-3xl sm:text-[26px] md:text-[28px] text-center"
              onClick={() => navigate("/register")}
              color="red_A400"
              size="xs"
            >
              Register
            </Button>
          </header>
          <Img
            className="absolute h-[116px] left-[1%] object-cover top-[2%] w-[19%]"
            src="images/img_ewablackmark.png"
            alt="ewablackmark"
          />
        </div>
        <div className="absolute md:h-[1296px] h-[1329px] sm:h-[1582px] inset-x-[0] max-w-[1455px] mx-auto md:px-5 top-[8%] w-full">
          <Text
            className="ml-[39px] mt-[57px] text-2xl md:text-[22px] text-pink-A400 sm:text-xl tracking-[4.32px]"
            size="txtOpenSansRomanSemiBold24"
          >
            Our Story
          </Text>
          <div className="absolute font-inter md:h-[1296px] h-[1329px] sm:h-[1582px] inset-[0] justify-center m-auto w-full">
            <div className="absolute sm:h-[1296px] h-[1329px] md:h-[849px] inset-[0] justify-center m-auto w-[98%] md:w-full">
              <div className="sm:h-[1296px] h-[1329px] md:h-[849px] m-auto w-full">
                <div className="absolute flex flex-col md:gap-10 gap-[487px] h-full inset-y-[0] justify-start left-[0] my-auto w-[94%]">
                  <div className="md:h-[556px] h-[589px] md:ml-[0] ml-[738px] relative w-[45%] md:w-full">
                    <Img
                      className="absolute bottom-[0] h-[556px] right-[0]"
                      src="images/img_group1927.svg"
                      alt="group1927"
                    />
                    <Img
                      className="absolute h-[333px] left-[0] object-cover top-[0] w-[72%]"
                      src="images/img_rectangle809.png"
                      alt="rectangle809"
                    />
                  </div>
                  <Img
                    className="h-[253px] rounded-[1px]"
                    src="images/img_vector13.svg"
                    alt="vectorThirteen"
                  />
                </div>
                <Img
                  className="absolute h-[333px] object-cover right-[0] top-[11%] w-[30%]"
                  src="images/img_rectangle810.png"
                  alt="rectangle810"
                />
              </div>
              <Img
                className="absolute h-[333px] object-cover right-[20%] top-[27%] w-[30%]"
                src="images/img_rectangle811.png"
                alt="rectangle811"
              />
            </div>
            <div className="absolute flex flex-col gap-[59px] h-max inset-y-[0] justify-start left-[2%] my-auto w-[70%]">
              <Img
                className="h-[15px] md:ml-[0] ml-[25px] rounded-[7px]"
                src="images/img_arrow1.svg"
                alt="arrowOne"
              />
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
                  <div className="bg-red-A400_7f h-3 mb-[278px] sm:mt-0 mt-[25px] rounded-md w-[31%]"></div>
                  <Text
                    className="leading-[45.00px] text-2xl md:text-[22px] text-gray-700 sm:text-xl w-[59%] sm:w-full"
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
                    <div
                      className="common-pointer absolute bg-white-A700_01 h-[30px] inset-[0] justify-center m-auto rounded-[16px] w-full"
                      onClick={() => navigate("/aboutus")}
                    ></div>
                    <Text
                      className="absolute h-full inset-[0] justify-center m-auto text-2xl md:text-[22px] text-black-900 sm:text-xl w-max"
                      size="txtOpenSansRomanExtraBold24"
                    >
                      <>&gt;</>
                    </Text>
                  </div>
                </div>
                <Text
                  className="ml-2.5 md:ml-[0] mt-[441px] md:text-5xl text-[70px] text-center text-indigo-900"
                  size="txtInterBold70"
                >
                  Premium Featured Properties
                </Text>
                <Text
                  className="ml-2.5 md:ml-[0] sm:text-4xl md:text-[38px] text-[40px] text-center text-red-A400"
                  size="txtIstokWebRegular40"
                >
                  Choose from our finest collection of properties
                </Text>
              </div>
            </div>
            <Img
              className="absolute bottom-[17%] h-[587px] object-cover right-[0]"
              src="images/img_component34.png"
              alt="componentThirtyFour"
            />
            <div className="absolute bottom-[2%] h-[83px] right-[2%] w-[6%]">
              <div className="bg-red-A400_7f h-[83px] m-auto rounded-[41px] w-full"></div>
              <Text
                className="absolute inset-x-[0] mx-auto rotate-[89deg] sm:text-4xl md:text-[38px] text-[40px] text-white-A700 top-[16%] w-max"
                size="txtInterRegular40"
              >
                <>-&gt;</>
              </Text>
            </div>
          </div>
        </div>
        <div className="absolute flex md:flex-col flex-row font-inter gap-[39px] items-start justify-center md:px-5 right-[4%] top-[21%] w-[43%]">
          <div className="flex flex-col items-start justify-start md:mt-0 mt-[42px] w-[43%] md:w-full">
            <div className="flex flex-row gap-[15px] items-center justify-between w-full">
              <Text
                className="sm:text-4xl md:text-[42px] text-[46px] text-black-900"
                size="txtInterBold46"
              >
                03
              </Text>
              <div className="bg-gray-800_7f h-2 mb-7 mt-[19px] rounded w-[72%]"></div>
            </div>
            <Text
              className="md:ml-[0] ml-[3px] mt-1 sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-800_01"
              size="txtInterBold35"
            >
              Tatasth villa
            </Text>
          </div>
          <div className="h-[253px] md:h-[54px] relative w-[52%] md:w-full">
            <div
              className="absolute bg-cover bg-no-repeat h-[253px] md:h-[54px] inset-[0] justify-center m-auto p-[51px] md:px-10 sm:px-5 rounded-[1px] w-full"
              style={{ backgroundImage: "url('images/img_group72.svg')" }}
            >
              <Text
                className="absolute left-[18%] sm:text-4xl md:text-[42px] text-[46px] text-black-900 top-[20%]"
                size="txtInterBold46"
              >
                04
              </Text>
              <Text
                className="absolute h-max inset-y-[0] left-[22%] my-auto sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-800_01"
                size="txtInterBold35"
              >
                Villa Lahri
              </Text>
            </div>
            <div className="absolute bg-gray-800_7f h-2 right-[0] rounded top-[28%] w-[59%]"></div>
          </div>
        </div>
        <div className="absolute flex md:flex-col flex-row md:gap-10 inset-x-[0] items-center justify-between max-w-[1392px] mx-auto md:px-5 top-[19%] w-full">
          <Img
            className="h-[280px] md:h-auto object-cover rounded-[5px] w-[280px]"
            src="images/img_rectangle6.png"
            alt="rectangleSix_One"
          />
          <Img
            className="h-[280px] md:h-auto object-cover rounded-[5px] w-[280px]"
            src="images/img_rectangle7.png"
            alt="rectangleSeven"
          />
          <Img
            className="h-[280px] md:h-auto object-cover rounded-[5px] w-[280px]"
            src="images/img_rectangle8.png"
            alt="rectangleEight"
          />
          <Img
            className="h-[280px] md:h-auto object-cover rounded-[5px] w-[280px]"
            src="images/img_rectangle9.png"
            alt="rectangleNine"
          />
        </div>
        <div className="absolute font-inter md:h-[636px] h-[640px] sm:h-[825px] left-[0] md:px-5 top-[22%] w-[49%] md:w-full">
          <Text
            className="ml-auto mr-[210px] mt-0.5 sm:text-4xl md:text-[42px] text-[46px] text-black-900"
            size="txtInterBold46"
          >
            02
          </Text>
          <div className="absolute md:h-[636px] h-[640px] sm:h-[825px] inset-[0] justify-center m-auto w-full">
            <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[0] w-[92%]">
              <div className="flex flex-col justify-start w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                  <Text
                    className="sm:text-4xl md:text-[42px] text-[46px] text-black-900"
                    size="txtInterBold46"
                  >
                    01
                  </Text>
                  <div className="bg-gray-800_7f h-2 mb-7 sm:ml-[0] ml-[15px] sm:mt-0 mt-[19px] rounded w-[29%]"></div>
                  <div className="bg-gray-800_7f h-2 mb-[22px] sm:ml-[0] ml-[221px] sm:mt-0 mt-[25px] rounded w-[29%]"></div>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between ml-2 md:ml-[0] mt-1 w-[85%] md:w-full">
                  <Text
                    className="sm:text-[31px] md:text-[33px] text-[35px] text-gray-800_01"
                    size="txtInterBold35"
                  >
                    Hummingbir
                  </Text>
                  <Text
                    className="sm:text-[31px] md:text-[33px] text-[35px] text-gray-800_01"
                    size="txtInterBold35"
                  >
                    Seascape
                  </Text>
                </div>
                <Text
                  className="md:ml-[0] ml-[43px] mt-[448px] md:text-5xl text-[70px] text-center text-indigo-900"
                  size="txtInterBold70"
                >
                  Top Selling
                </Text>
              </div>
            </div>
            <Img
              className="absolute bottom-[0] h-[587px] left-[0] object-cover"
              src="images/img_component35.png"
              alt="componentThirtyFive"
            />
          </div>
        </div>
        <div className="absolute bottom-[0] flex flex-col font-poppins inset-x-[0] items-center justify-end mx-auto w-full">
          <div className="flex flex-col gap-5 justify-start max-w-[1232px] md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-[46px] items-center justify-between w-full">
              <div className="md:h-[280px] h-[281px] relative w-[31%] md:w-full">
                <div className="absolute h-[280px] inset-[0] justify-center m-auto w-full">
                  <Img
                    className="h-[280px] m-auto object-cover w-full"
                    src="images/img_rectangle17.png"
                    alt="rectangleSeventeen"
                  />
                  <Text
                    className="absolute right-[4%] text-lg text-shadow-ts text-white-A700 top-[4%]"
                    size="txtPoppinsBold18"
                  >
                    20%Off
                  </Text>
                </div>
                <Button
                  className="absolute cursor-pointer font-bold leading-[normal] min-w-[86px] right-[0] rounded-br-[25px] rounded-tl-[25px] text-center text-lg top-[0]"
                  color="pink_A400"
                  size="lg"
                >
                  20%Off
                </Button>
              </div>
              <List
                className="md:flex-1 sm:flex-col flex-row gap-[46px] grid md:grid-cols-1 grid-cols-2 w-[66%] md:w-full"
                orientation="horizontal"
              >
                <div className="h-[280px] md:h-[282px] sm:ml-[0] sm:mt-0 mt-0.5 relative w-full">
                  <Img
                    className="h-[280px] m-auto object-cover w-full"
                    src="images/img_rectangle817.png"
                    alt="rectangle817"
                  />
                  <Button
                    className="absolute cursor-pointer font-bold leading-[normal] min-w-[86px] right-[0] rounded-br-[25px] rounded-tl-[25px] text-center text-lg top-[0]"
                    color="pink_A400"
                    size="lg"
                  >
                    20%Off
                  </Button>
                </div>
                <div className="md:h-[280px] h-[281px] sm:ml-[0] relative w-full">
                  <Img
                    className="absolute h-[280px] inset-[0] justify-center m-auto object-cover w-full"
                    src="images/img_rectangle818.png"
                    alt="rectangle818"
                  />
                  <Button
                    className="absolute cursor-pointer font-bold leading-[normal] min-w-[86px] right-[0] rounded-br-[25px] rounded-tl-[25px] text-center text-lg top-[0]"
                    color="pink_A400"
                    size="lg"
                  >
                    20%Off
                  </Button>
                </div>
              </List>
            </div>
            <div className="flex flex-col justify-start md:ml-[0] ml-[30px] w-[91%] md:w-full">
              <List
                className="flex flex-col font-inter gap-2.5 items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start my-0 w-full">
                  <Img
                    className="h-[30px] md:h-auto md:mt-0 mt-[5px] object-cover w-[30px]"
                    src="images/img_polygonaltent.png"
                    alt="polygonaltent"
                  />
                  <Text
                    className="ml-7 md:ml-[0] md:mt-0 mt-2.5 text-center text-gray-700_01 text-xl"
                    size="txtInterMedium20"
                  >
                    5 AC bedrooms
                  </Text>
                  <Img
                    className="h-[30px] md:h-auto mb-[5px] md:ml-[0] ml-[216px] object-cover w-[30px]"
                    src="images/img_polygonaltent.png"
                    alt="polygonaltent_One"
                  />
                  <Text
                    className="ml-3.5 md:ml-[0] md:mt-0 mt-[3px] text-gray-700_01 text-xl"
                    size="txtInterMedium20"
                  >
                    4 AC bedrooms
                  </Text>
                  <Img
                    className="h-[30px] md:h-auto md:ml-[0] ml-[305px] md:mt-0 mt-[5px] object-cover w-[30px]"
                    src="images/img_polygonaltent.png"
                    alt="polygonaltent_Two"
                  />
                  <Text
                    className="md:ml-[0] ml-[11px] md:mt-0 mt-[7px] text-gray-700_01 text-xl"
                    size="txtInterMedium20"
                  >
                    5 AC bedrooms
                  </Text>
                </div>
                <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-start justify-start mr-11 my-0 w-[97%] md:w-full">
                  <Img
                    className="h-[30px] md:h-auto md:mt-0 my-0.5 object-cover w-[30px]"
                    src="images/img_shower.png"
                    alt="shower"
                  />
                  <Text
                    className="ml-7 md:ml-[0] md:mt-0 mt-[5px] text-center text-gray-700_01 text-xl"
                    size="txtInterMedium20"
                  >
                    5 attached
                  </Text>
                  <Img
                    className="h-[30px] md:h-auto md:ml-[0] ml-[260px] md:mt-0 mt-1 object-cover w-[30px]"
                    src="images/img_shower.png"
                    alt="shower_One"
                  />
                  <Text
                    className="md:ml-[0] ml-[15px] md:mt-0 mt-[9px] text-gray-700_01 text-xl"
                    size="txtInterMedium20"
                  >
                    4 attached
                  </Text>
                  <Img
                    className="h-[30px] md:h-auto mb-1 md:ml-[0] ml-[350px] object-cover w-[30px]"
                    src="images/img_shower.png"
                    alt="shower_Two"
                  />
                  <Text
                    className="md:ml-[0] ml-[11px] md:mt-0 mt-[9px] text-gray-700_01 text-xl"
                    size="txtInterMedium20"
                  >
                    6 attached
                  </Text>
                </div>
                <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-end justify-start mr-[52px] my-0 w-[96%] md:w-full">
                  <Img
                    className="h-[30px] md:h-auto mb-2.5 object-cover w-[30px]"
                    src="images/img_account.png"
                    alt="account"
                  />
                  <Text
                    className="mb-[9px] ml-7 md:ml-[0] md:mt-0 mt-1.5 text-center text-gray-700_01 text-xl"
                    size="txtInterMedium20"
                  >
                    15 guests
                  </Text>
                  <Img
                    className="h-[30px] md:h-auto md:ml-[0] ml-[269px] md:mt-0 mt-[11px] object-cover w-[30px]"
                    src="images/img_account.png"
                    alt="account_One"
                  />
                  <Text
                    className="md:ml-[0] ml-[21px] md:mt-0 mt-[15px] text-gray-700_01 text-xl"
                    size="txtInterMedium20"
                  >
                    12 guests
                  </Text>
                  <Img
                    className="h-[30px] md:h-auto mb-[11px] md:ml-[0] ml-[358px] object-cover w-[30px]"
                    src="images/img_account.png"
                    alt="account_Two"
                  />
                  <Text
                    className="mb-[5px] md:ml-[0] ml-[11px] md:mt-0 mt-2.5 text-gray-700_01 text-xl"
                    size="txtInterMedium20"
                  >
                    20 guests
                  </Text>
                </div>
              </List>
              <div className="flex md:flex-col flex-row font-inter md:gap-5 items-start justify-start md:ml-[0] ml-[58px] mt-[7px] w-[91%] md:w-full">
                <Button
                  className="border border-red-A400 border-solid cursor-pointer leading-[normal] mb-1 min-w-[91px] rounded-[12px] text-[10px] text-center"
                  color="gray_50_01"
                  size="sm"
                >
                  View details
                </Button>
                <Button
                  className="border border-red-A400 border-solid cursor-pointer leading-[normal] min-w-[91px] md:ml-[0] ml-[317px] md:mt-0 mt-1 rounded-[12px] text-[10px] text-center"
                  color="gray_50_01"
                  size="sm"
                >
                  View details
                </Button>
                <Button
                  className="border border-red-A400 border-solid cursor-pointer leading-[normal] mb-1 min-w-[91px] md:ml-[0] ml-[419px] rounded-[12px] text-[10px] text-center"
                  color="gray_50_01"
                  size="sm"
                >
                  View details
                </Button>
              </div>
              <Button
                className="common-pointer cursor-pointer font-opensans font-semibold min-w-[310px] md:ml-[0] ml-[424px] mr-[375px] mt-20 rounded-[40px] sm:text-[40px] md:text-[46px] text-[50px] text-center"
                onClick={() => navigate("/checkavailability")}
                color="red_A400"
                size="sm"
              >
                More
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-start max-w-[1454px] mt-[45px] md:px-5 w-full">
            <div className="font-inter md:h-[1173px] sm:h-[650px] h-[721px] md:ml-[0] ml-[5px] relative w-full">
              <Text
                className="absolute left-[16%] md:text-5xl text-[70px] text-center text-indigo-900 top-[0]"
                size="txtInterBold70"
              >
                FAST BOOKING SECTION
              </Text>
              <div
                className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col font-opensans h-[650px] inset-x-[0] items-center justify-end mx-auto p-[17px] rounded-[1px] w-full"
                style={{ backgroundImage: "url('images/img_group67.svg')" }}
              >
                <div className="flex flex-col items-center justify-start mt-[130px] w-[97%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <div className="bg-gray-400 h-[483px] md:mt-0 mt-[3px] relative rounded-[10px] shadow-bs2 w-[43%] md:w-full">
                      <Img
                        className="h-[483px] m-auto object-cover rounded-[10px] w-full"
                        src="images/img_image11.png"
                        alt="imageEleven"
                      />
                      <div className="absolute bg-black-900_89 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[15px] w-full">
                        <div className="flex flex-col items-start justify-start mt-[7px] w-[96%] md:w-full">
                          <Text
                            className="text-white-A700 text-xl"
                            size="txtOpenSansRomanSemiBold20"
                          >
                            Luxury Cottage Room
                          </Text>
                          <Text
                            className="leading-[20.00px] mt-[9px] text-white-A700 text-xs w-full"
                            size="txtOpenSansRomanRegular12"
                          >
                            Our spacious suites embody luxury and sophistication
                            and enjoy the experience with a spacious sitting
                            area, luxury bedding and free Wi-Fi.
                          </Text>
                          <div className="flex sm:flex-col flex-row gap-12 items-center justify-start mt-[33px] w-[92%] md:w-full">
                            <Button
                              className="common-pointer cursor-pointer font-bold min-w-[212px] text-center text-xs underline"
                              onClick={() => navigate("/luxurycottage")}
                              shape="round"
                              color="white_A700"
                              size="lg"
                              variant="outline"
                            >
                              View More
                            </Button>
                            <Button
                              className="common-pointer cursor-pointer font-bold min-w-[212px] text-center text-xs underline"
                              onClick={() => navigate("/villalahari")}
                              shape="round"
                              color="red_A400_7f"
                              size="lg"
                            >
                              Book Room
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-400 h-[483px] md:h-[486px] mb-[3px] relative rounded-[10px] shadow-bs2 w-[43%] md:w-full">
                      <Img
                        className="h-[483px] m-auto object-cover rounded-[10px] w-full"
                        src="images/img_image11_483x572.png"
                        alt="imageEleven_One"
                      />
                      <div className="absolute h-[483px] inset-[0] justify-center m-auto rounded-[10px] w-full">
                        <Img
                          className="absolute h-[483px] inset-[0] justify-center m-auto object-cover rounded-[10px] w-full"
                          src="images/img_image12.png"
                          alt="imageTwelve"
                        />
                        <div className="absolute bg-black-900_89 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[15px] w-full">
                          <div className="flex flex-col items-start justify-start mt-1.5 w-[96%] md:w-full">
                            <Text
                              className="text-white-A700 text-xl"
                              size="txtOpenSansRomanSemiBold20"
                            >
                              Heritage Cottage Room
                            </Text>
                            <Text
                              className="leading-[20.00px] mt-2.5 text-white-A700 text-xs w-full"
                              size="txtOpenSansRomanRegular12"
                            >
                              Our spacious suites embody luxury and
                              sophistication and enjoy the experience with a
                              spacious sitting area, luxury bedding and free
                              Wi-Fi.
                            </Text>
                            <div className="flex sm:flex-col flex-row gap-12 items-center justify-start mt-[33px] w-[92%] md:w-full">
                              <div
                                className="common-pointer border border-solid border-white-A700 flex flex-col items-center justify-start p-2.5 rounded-lg"
                                onClick={() => navigate("/hertageroom")}
                              >
                                <a
                                  href="javascript:"
                                  className="text-center text-white-A700 text-xs"
                                >
                                  <Text size="txtOpenSansRomanBold12">
                                    View More
                                  </Text>
                                </a>
                              </div>
                              <div
                                className="common-pointer bg-blue-900 flex flex-col items-center justify-start p-2.5 rounded-lg"
                                onClick={() => navigate("/villalahari")}
                              >
                                <Text
                                  className="text-center text-white-A700 text-xs"
                                  size="txtOpenSansRomanBold12"
                                >
                                  Book Room
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bg-gray-400 h-[483px] inset-[0] justify-center m-auto rounded-[10px] shadow-bs2 w-full">
                          <Img
                            className="h-[483px] m-auto object-cover rounded-[10px] w-full"
                            src="images/img_image11_1.png"
                            alt="imageEleven_Two"
                          />
                          <div className="absolute bg-black-900_89 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[15px] w-full">
                            <div className="flex flex-col items-start justify-start mt-1.5 w-[96%] md:w-full">
                              <Text
                                className="text-white-A700 text-xl"
                                size="txtOpenSansRomanSemiBold20"
                              >
                                Heritage Cottage Room
                              </Text>
                              <Text
                                className="leading-[20.00px] mt-2.5 text-white-A700 text-xs w-full"
                                size="txtOpenSansRomanRegular12"
                              >
                                Our spacious suites embody luxury and
                                sophistication and enjoy the experience with a
                                spacious sitting area, luxury bedding and free
                                Wi-Fi.
                              </Text>
                              <div className="flex sm:flex-col flex-row gap-12 items-center justify-start mt-[33px] w-[92%] md:w-full">
                                <Button
                                  className="cursor-pointer font-bold min-w-[212px] text-center text-xs"
                                  shape="round"
                                  color="white_A700"
                                  size="lg"
                                  variant="outline"
                                >
                                  View More
                                </Button>
                                <Button
                                  className="cursor-pointer font-bold min-w-[212px] text-center text-xs"
                                  shape="round"
                                  color="red_A400_7f"
                                  size="lg"
                                >
                                  Book Room
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row font-opensans md:gap-10 items-start justify-between md:ml-[0] ml-[70px] mt-[126px] w-[91%] md:w-full">
              <div className="flex flex-col items-start justify-start md:mt-0 mt-[57px]">
                <Text
                  className="ml-2.5 md:ml-[0] text-2xl md:text-[22px] text-red-A400 sm:text-xl tracking-[4.32px]"
                  size="txtOpenSansRomanSemiBold24RedA400"
                >
                  Amenities
                </Text>
                <Text
                  className="leading-[75.00px] mt-[30px] md:text-5xl text-[64px] text-black-900_d1 w-full"
                  size="txtPoppinsRegular64"
                >
                  Your All-Inclusive Experience
                </Text>
                <Text
                  className="leading-[46.00px] ml-2.5 md:ml-[0] mt-[39px] text-2xl md:text-[22px] text-gray-700 sm:text-xl w-[85%] sm:w-full"
                  size="txtOpenSansRomanSemiBold24Gray700"
                >
                  Indulge in a world of luxury and comfort with our exclusive
                  resort amenities, designed to create unforgettable experiences
                  for you.
                </Text>
              </div>
              <div className="flex flex-col justify-start w-[47%] md:w-full">
                <div className="flex flex-row items-center justify-between md:ml-[0] ml-[41px] w-[54%] md:w-full">
                  <div className="bg-blue-900 h-[72px] rotate-[180deg] w-[3%]"></div>
                  <div className="bg-blue-900 h-[72px] rotate-[180deg] w-[3%]"></div>
                </div>
                <div className="flex md:flex-col flex-row gap-2.5 items-center justify-between mt-0.5 w-full">
                  <div className="flex md:flex-1 flex-col justify-start w-1/2 md:w-full">
                    <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col h-72 items-center justify-start mr-3 p-[21px] sm:px-5 rounded-[11px] w-72">
                      <div className="bg-blue-900 h-[25px] rounded-[12px] w-[25px]"></div>
                      <Img
                        className="h-[82px] mt-[30px] w-[82px]"
                        src="images/img_wifi21.svg"
                        alt="wifiTwentyOne"
                      />
                      <Text
                        className="mb-[57px] mt-[17px] sm:text-[19.88px] md:text-[21.88px] text-[23.88px] text-gray-900"
                        size="txtOpenSansRomanBold2388"
                      >
                        Free Wifi
                      </Text>
                    </div>
                    <div className="bg-blue-900 h-[72px] md:ml-[0] ml-[45px] mr-[248px] rotate-[180deg] w-[3%]"></div>
                    <div className="bg-white-A700 border border-gray-200 border-solid flex flex-row gap-2.5 h-72 items-start justify-start ml-3 md:ml-[0] p-6 sm:px-5 rounded-[11px] w-72">
                      <div className="bg-blue-900 h-[25px] mb-[204px] mt-[11px] rounded-[12px] w-[25px]"></div>
                      <div className="h-[163px] mb-[52px] mt-6 relative w-[77%]">
                        <Img
                          className="h-[132px] mb-[-1.06px] ml-[19px] object-cover w-[64%] z-[1]"
                          src="images/img_livingroom2.png"
                          alt="livingroomTwo"
                        />
                        <Text
                          className="mt-auto mx-auto sm:text-[19.88px] md:text-[21.88px] text-[23.88px] text-gray-900"
                          size="txtOpenSansRomanBold2388"
                        >
                          Fine Furnishing
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="md:h-[352px] sm:h-[626px] h-[648px] relative w-1/2 md:w-full">
                    <div className="absolute md:h-[285px] h-[360px] inset-x-[0] mx-auto top-[0] w-[96%]">
                      <div className="absolute bg-blue-900 bottom-[0] h-[72px] left-[15%] rotate-[180deg] w-[3%]"></div>
                      <div className="absolute bg-white-A700 border border-gray-200 border-solid flex flex-col gap-5 h-72 inset-x-[0] items-center justify-center mx-auto p-[42px] md:px-10 sm:px-5 rounded-[11px] top-[0] w-72">
                        <Img
                          className="h-[82px] mt-[33px] w-[82px]"
                          src="images/img_dumbell1.svg"
                          alt="dumbellOne"
                        />
                        <Text
                          className="mb-[33px] sm:text-[19.88px] md:text-[21.88px] text-[23.88px] text-gray-900"
                          size="txtOpenSansRomanBold2388"
                        >
                          Private Parking
                        </Text>
                      </div>
                    </div>
                    <div className="absolute flex flex-col md:gap-10 gap-[314px] h-max inset-[0] justify-center m-auto shadow-bs w-[96%]">
                      <div className="bg-blue-900 h-[25px] md:ml-[0] ml-[27px] mr-[236px] rounded-[12px] w-[25px]"></div>
                      <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col h-72 justify-center p-6 sm:px-5 rounded-[11px] w-72">
                        <div className="bg-blue-900 h-[25px] mr-[215px] mt-[11px] rounded-[12px] w-[25px]"></div>
                        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[52px] mr-9 mt-3.5 w-[64%] md:w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col items-end justify-start p-[3px] w-full">
                              <Img
                                className="h-[78px] md:h-auto mr-[7px] object-cover rounded-sm w-[81%]"
                                src="images/img_rectangle796.png"
                                alt="rectangle796"
                              />
                            </div>
                          </div>
                        </div>
                        <Text
                          className="mb-[52px] md:ml-[0] ml-[37px] mr-2 mt-5 sm:text-[19.88px] md:text-[21.88px] text-[23.88px] text-gray-900"
                          size="txtOpenSansRomanBold2388"
                        >
                          Air Conditioning
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="font-inter h-[911px] md:h-[973px] sm:h-[974px] mt-[71px] relative w-[96%] md:w-full">
              <div
                className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-center justify-center m-auto p-[53px] md:px-10 sm:px-5 rounded-[1px] w-full"
                style={{ backgroundImage: "url('images/img_group65.svg')" }}
              >
                <Text
                  className="mb-[711px] md:text-5xl text-[70px] text-indigo-900"
                  size="txtInterBold70"
                >
                  TESTNIMONIALS
                </Text>
              </div>
              <div
                className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-center justify-center m-auto p-[34px] sm:px-5 w-full"
                style={{ backgroundImage: "url('images/img_group66.svg')" }}
              >
                <div className="flex flex-col md:gap-10 gap-[91px] justify-start mb-[104px] mt-[174px] w-full">
                  <Slider
                    autoPlay
                    autoPlayInterval={2000}
                    activeIndex={sliderState}
                    responsive={{
                      0: { items: 1 },
                      550: { items: 1 },
                      1050: { items: 2 },
                    }}
                    onSlideChanged={(e) => {
                      setsliderState(e?.item);
                    }}
                    ref={sliderRef}
                    className="flex gap-[34px] w-full"
                    items={[...Array(12)].map(() => (
                      <React.Fragment key={Math.random()}>
                        <div className="h-[446px] mx-2.5 relative shadow-bs3">
                          <div className="flex flex-col h-[109px] items-center justify-start mb-[-54px] mx-auto w-[109px] z-[1]">
                            <Img
                              className="h-[109px] md:h-auto rounded-[50%] w-[109px]"
                              src="images/img_person1.png"
                              alt="personOne"
                            />
                          </div>
                          <div className="bg-white-A700 border border-black-900 border-solid flex flex-col gap-5 items-center justify-end mt-auto mx-auto p-[45px] md:px-10 sm:px-5 rounded-bl-[40px] rounded-br-[100px] rounded-tl-[100px] rounded-tr-[40px] w-full">
                            <Img
                              className="h-[53px] mt-2"
                              src="images/img_stars.svg"
                              alt="stars"
                            />
                            <div className="flex flex-col justify-start">
                              <Text
                                className="leading-[29.00px] text-base text-blue_gray-600 text-center w-full"
                                size="txtInterMedium16"
                              >
                                Lorem ipsum dolor sit amet consectetur. Tortor
                                massa nisl quam sit. Vitae congue ultrices neque
                                penatibus mi in quisque. Leo in cursus enim
                                magnis ante. Proin iaculis platea ipsum sagittis
                                ac eu aliquam quis. Ornare tincidunt tempus
                                semper{" "}
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[120px] mt-[21px] text-base text-center text-red-A400"
                                size="txtInterBold16"
                              >
                                Ama Ampomah
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[114px] mt-0.5 text-[15px] text-blue_gray-600 text-center"
                                size="txtInterRegular15"
                              >
                                CEO & Founder Inc{" "}
                              </Text>
                            </div>
                          </div>
                        </div>
                      </React.Fragment>
                    ))}
                    renderDotsItem={({ isActive }) => {
                      if (isActive) {
                        return (
                          <div className="inline-block cursor-pointer rounded-[50%] h-[7px] bg-red-A400 w-[7px]" />
                        );
                      }
                      return (
                        <div
                          className="inline-block cursor-pointer rounded-[50%] h-[7px] bg-gray-900_6c w-[7px]"
                          role="button"
                          tabIndex={0}
                        />
                      );
                    }}
                  />
                  <PagerIndicator
                    className="flex h-[7px] md:ml-[0] ml-[517px] w-[173px]"
                    count={6}
                    activeCss="inline-block cursor-pointer rounded-[50%] h-[7px] bg-red-A400 w-[7px]"
                    activeIndex={sliderState}
                    inactiveCss="inline-block cursor-pointer rounded-[50%] h-[7px] bg-gray-900_6c w-[7px]"
                    sliderRef={sliderRef}
                    selectedWrapperCss="inline-block md:ml-[0] mx-[11.50px] sm:ml-[0]"
                    unselectedWrapperCss="inline-block md:ml-[0] mx-[11.50px] sm:ml-[0]"
                  />
                </div>
              </div>
            </div>
            <Text
              className="md:ml-[0] ml-[405px] mt-[137px] md:text-5xl text-[70px] text-center text-indigo-900"
              size="txtInterBold70"
            >
              Our visitor stories
            </Text>
            <Text
              className="md:ml-[0] ml-[443px] mt-[7px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
              size="txtInterMedium30"
            >
              A collection of our best visitor stories
            </Text>
            <div className="flex md:flex-col flex-row font-inter md:gap-10 items-center justify-between md:ml-[0] ml-[27px] mt-[77px] w-[93%] md:w-full">
              <div className="h-[400px] relative w-[400px] sm:w-full">
                <Img
                  className="h-[400px] m-auto object-cover rounded-[5px] w-[400px]"
                  src="images/img_rectangle50.png"
                  alt="rectangleFifty"
                />
                <Text
                  className="absolute bottom-[37%] right-[30%] md:text-5xl text-6xl text-center text-white-A700"
                  size="txtInterBold60"
                >
                  30+
                </Text>
              </div>
              <Img
                className="h-[400px] md:h-auto object-cover rounded-[5px] w-[400px] sm:w-full"
                src="images/img_rectangle51.png"
                alt="rectangleFiftyOne"
              />
              <Img
                className="h-[400px] md:h-auto object-cover rounded-[5px] w-[400px] sm:w-full"
                src="images/img_rectangle52.png"
                alt="rectangleFiftyTwo"
              />
            </div>
            <div className="flex flex-row font-inter gap-2 items-center justify-end md:ml-[0] ml-[1178px] mt-[13px] w-[14%] md:w-full">
              <div className="flex flex-col items-end justify-start">
                <Text
                  className="text-black-900 text-xl"
                  size="txtInterRegular20"
                >
                  Do follow us on
                </Text>
                <Text
                  className="mt-0.5 text-[15px] text-black-900"
                  size="txtInterExtraLight15"
                >
                  @ewaprpperties
                </Text>
              </div>
              <Img
                className="h-[45px] md:h-auto object-cover w-[45px]"
                src="images/img_instagramicon.png"
                alt="instagramicon"
              />
            </div>
            <Text
              className="md:ml-[0] ml-[65px] mt-[60px] text-2xl md:text-[22px] text-red-A400 sm:text-xl tracking-[4.32px]"
              size="txtOpenSansRomanSemiBold24RedA400"
            >
              GALLERY
            </Text>
            <Text
              className="md:ml-[0] ml-[55px] mt-2 md:text-5xl text-[64px] text-indigo-900"
              size="txtPoppinsRegular64Indigo900"
            >
              A Pictorial Escape
            </Text>
            <div className="sm:h-[1031px] md:h-[738px] h-[767px] md:ml-[0] ml-[49px] mt-0.5 relative w-[89%] md:w-full">
              <div className="absolute bottom-[2%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-4/5">
                <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="bg-red-50 h-[357px] mb-[315px] rounded-[192px] w-[38%]"></div>
                  <div className="bg-pink-A100_2d h-[357px] sm:mt-0 mt-[315px] rounded-[192px] w-[38%]"></div>
                </div>
              </div>
              <div className="absolute bg-blue_gray-100 flex flex-col items-center justify-start left-[0] rounded-[10px] shadow-bs4 top-[0] w-[30%]">
                <Img
                  className="h-[348px] md:h-auto object-cover rounded-[10px] w-full"
                  src="images/img_image12_348x383.png"
                  alt="imageTwelve_One"
                />
              </div>
              <div className="absolute flex flex-col md:gap-10 gap-[71px] h-full inset-[0] items-center justify-center m-auto w-[30%]">
                <div className="bg-blue_gray-100 flex flex-col items-center justify-start rounded-[10px] shadow-bs4 w-full">
                  <Img
                    className="h-[348px] md:h-auto object-cover rounded-[10px] w-full"
                    src="images/img_image12_348x382.png"
                    alt="imageTwelve_Two"
                  />
                </div>
                <div className="bg-blue_gray-100 flex flex-col items-center justify-start rounded-[10px] shadow-bs4 w-full">
                  <Img
                    className="h-[348px] md:h-auto object-cover rounded-[10px] w-full"
                    src="images/img_image12_1.png"
                    alt="imageTwelve_Three"
                  />
                </div>
              </div>
              <div className="absolute bg-blue_gray-100 bottom-[0] flex flex-col items-center justify-start left-[0] rounded-[10px] shadow-bs4 w-[30%]">
                <Img
                  className="h-[348px] md:h-auto object-cover rounded-[10px] w-full"
                  src="images/img_image12_2.png"
                  alt="imageTwelve_Four"
                />
              </div>
              <div className="absolute bg-blue_gray-100 flex flex-col items-center justify-start right-[0] rounded-[10px] shadow-bs4 top-[0] w-[30%]">
                <Img
                  className="h-[348px] md:h-auto object-cover rounded-[10px] w-full"
                  src="images/img_image12_3.png"
                  alt="imageTwelve_Five"
                />
              </div>
              <div className="absolute bg-blue_gray-100 bottom-[0] flex flex-col items-center justify-start right-[0] rounded-[10px] shadow-bs4 w-[30%]">
                <Img
                  className="h-[348px] md:h-auto object-cover rounded-[10px] w-full"
                  src="images/img_image12_4.png"
                  alt="imageTwelve_Six"
                />
              </div>
            </div>
            <div className="flex md:flex-col flex-row font-opensans md:gap-10 items-center justify-between md:ml-[0] ml-[50px] mt-[259px] w-[96%] md:w-full">
              <div className="flex flex-col md:gap-10 gap-[248px] items-start justify-start w-[58%] md:w-full">
                <div className="h-[862px] relative w-full">
                  <Img
                    className="absolute h-[862px] inset-y-[0] left-[0] my-auto object-cover rounded-[5px] w-[78%]"
                    src="images/img_rectangle59.png"
                    alt="rectangleFiftyNine"
                  />
                  <div className="absolute h-[343px] inset-y-[0] my-auto right-[0] w-[66%] sm:w-full">
                    <Img
                      className="h-[343px] m-auto object-cover rounded-[5px] w-full"
                      src="images/img_rectangle60.png"
                      alt="rectangleSixty"
                    />
                    <div className="absolute h-[77px] inset-[0] justify-center m-auto w-[17%]">
                      <div className="bg-black-900_a3 h-[77px] m-auto rounded-[41px] w-full"></div>
                      <Img
                        className="absolute h-[30px] inset-[0] justify-center m-auto w-[30px]"
                        src="images/img_contrast.svg"
                        alt="contrast"
                      />
                    </div>
                  </div>
                </div>
                <Text
                  className="ml-1 md:ml-[0] text-2xl md:text-[22px] text-red-A400 sm:text-xl tracking-[4.32px]"
                  size="txtOpenSansRomanSemiBold24RedA400"
                >
                  LOCATION
                </Text>
              </div>
              <div className="flex flex-col font-inter items-start justify-start w-[39%] md:w-full">
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
                  className="md:ml-[0] ml-[5px] mt-[7px] text-black-900_e2 text-xl"
                  size="txtInterSemiBold20"
                >
                  <>
                    Get lost on the beautiful beaches of Mangaluru, or get
                    <br />
                    caught up in the wildness of the nature.its up to you.
                  </>
                </Text>
                <Button
                  className="border border-red-A400 border-solid cursor-pointer font-semibold leading-[normal] min-w-[144px] md:ml-[0] ml-[196px] mt-[22px] rounded-[17px] text-[15px] text-center"
                  color="white_A700_01"
                  size="sm"
                >
                  Read More
                </Button>
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start md:ml-[0] ml-[5px] mt-[220px] w-[92%] md:w-full">
                  <Text
                    className="sm:text-[41px] md:text-[47px] text-[55px] text-black-900"
                    size="txtInterSemiBold55"
                  >
                    01
                  </Text>
                  <div className="h-0.5 md:h-px ml-7 sm:ml-[0] relative w-[62%] sm:w-full">
                    <Line className="absolute bg-red-A400 bottom-[0] h-1 left-[0] rotate-[1deg] w-[47%]" />
                    <Line className="absolute bg-red-A400_38 h-1 right-[0] rotate-[1deg] top-[0] w-3/5" />
                  </div>
                  <Text
                    className="sm:ml-[0] ml-[22px] sm:text-[41px] md:text-[47px] text-[55px] text-black-900"
                    size="txtInterSemiBold55"
                  >
                    03
                  </Text>
                </div>
              </div>
            </div>
            <Text
              className="md:ml-[0] ml-[50px] mt-9 md:text-5xl text-[64px] text-indigo-900_e0"
              size="txtPoppinsRegular64Indigo900e0"
            >
              Unveiling the Location
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1440px] mt-[82px] pb-[15px] md:px-5 shadow-bs w-full">
            <Img
              className="h-[786px] md:h-auto object-cover w-full"
              src="images/img_image13.png"
              alt="imageThirteen"
            />
          </div>
          <div className="font-opensans md:h-[1302px] h-[1447px] sm:h-[880px] mt-8 md:px-5 relative w-full">
            <footer className="absolute bottom-[0] flex inset-x-[0] items-center justify-center mx-auto w-full">
              <div className="flex flex-col items-center justify-center w-full">
                <div className="bg-red-A400_23 flex flex-col items-center justify-start p-[58px] md:px-10 sm:px-5 w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-start justify-start mb-[61px] w-[90%] md:w-full">
                    <div className="flex flex-col gap-[11px] justify-start md:mt-0 mt-2 w-[26%] md:w-full">
                      <Img
                        className="h-[102px] md:h-auto mr-[67px] object-cover w-[79%]"
                        src="images/img_ewablackmark.png"
                        alt="ewablackmark_One"
                      />
                      <Text
                        className="leading-[28.00px] md:ml-[0] ml-[99px] text-black-900 text-center text-xl w-[69%] sm:w-full"
                        size="txtOpenSansRegular20Black900"
                      >
                        We catalyze your luxurious vacation
                      </Text>
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
              className="absolute h-[587px] left-[0] object-cover top-[21%]"
              src="images/img_component35.png"
              alt="componentThirtySeven"
            />
            <div className="absolute flex md:flex-col flex-row font-poppins md:gap-10 items-start justify-between right-[0] top-[0] w-[74%]">
              <div className="flex flex-col items-center justify-start md:mt-0 mt-[172px]">
                <div className="flex flex-col justify-start w-full">
                  <Text
                    className="md:ml-[0] ml-[241px] text-3xl sm:text-[26px] md:text-[28px] text-center text-red-A400"
                    size="txtPoppinsMedium30"
                  >
                    Contact Us
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[54px] mt-[54px] text-5xl sm:text-[38px] md:text-[44px] text-center text-indigo-900"
                    size="txtPoppinsSemiBold48"
                  >
                    Reach out to Hyge Royal
                  </Text>
                  <div className="flex flex-col font-opensans md:gap-10 gap-[71px] items-center justify-start mt-[30px] w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-[50px] items-center justify-between w-full">
                      <Text
                        className="border border-red-A400 border-solid pl-[19px] sm:pr-5 pr-[35px] py-[9px] rounded text-black-900_89 text-xl"
                        size="txtOpenSansRomanSemiBold20Black90089"
                      >
                        First Name
                      </Text>
                      <Text
                        className="border border-red-A400 border-solid pl-[18px] sm:pr-5 pr-[35px] py-[9px] rounded text-black-900_89 text-xl"
                        size="txtOpenSansRomanSemiBold20Black90089"
                      >
                        Last Name
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-[50px] items-center justify-between w-full">
                      <Input
                        name="frame2965_One"
                        placeholder="Contact Number"
                        className="font-semibold p-0 placeholder:text-black-900_89 text-left text-xl w-full"
                        wrapClassName="border border-red-A400 border-solid sm:flex-1 sm:w-full"
                        type="number"
                        shape="round"
                        color="white_A700"
                      ></Input>
                      <Input
                        name="frame2965_Two"
                        placeholder="Email Address"
                        className="font-semibold p-0 placeholder:text-black-900_89 text-center text-xl w-full"
                        wrapClassName="sm:flex-1 sm:w-full"
                        type="email"
                        shape="round"
                        color="red_A400"
                        variant="outline"
                      ></Input>
                    </div>
                  </div>
                </div>
                <div className="border border-red-A400 border-solid flex flex-col font-opensans items-start justify-start mt-[71px] p-[9px] rounded-lg">
                  <Text
                    className="mb-[100px] ml-2.5 md:ml-[0] text-black-900_89 text-center text-xl"
                    size="txtOpenSansRomanSemiBold20Black90089"
                  >
                    Feedback
                  </Text>
                </div>
                <Button
                  className="border border-red-A400 border-solid cursor-pointer font-bold leading-[normal] min-w-[207px] mt-10 text-base text-center"
                  shape="round"
                  color="red_A400_66"
                  size="lg"
                >
                  Submit
                </Button>
              </div>
              <Img
                className="h-[587px] md:h-auto object-cover"
                src="images/img_component38.png"
                alt="componentThirtyEight"
              />
            </div>
            <Img
              className="absolute bottom-[1%] h-[562px] object-cover right-[0]"
              src="images/img_component38.png"
              alt="componentThirtySeven_One"
            />
            <Img
              className="absolute bottom-[1%] h-[480px] left-[0] object-cover"
              src="images/img_component35.png"
              alt="componentThirtySix"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdatedHeaderPage;
