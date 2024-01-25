import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const HertageroomPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-end mx-auto pt-[13px] w-full">
        <div className="flex flex-col gap-[45px] justify-start w-full">
          <div className="flex flex-col justify-start md:ml-[0] ml-[87px] md:px-5 w-[94%] md:w-full">
            <div className="flex md:flex-col flex-row font-opensans md:gap-[46px] items-start justify-between w-full">
              <Img
                className="h-[78px] md:h-auto md:mt-0 mt-4 object-cover"
                src="images/img_ewablackmark.png"
                alt="ewablackmark"
              />
              <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-center justify-between mb-2 p-[11px] w-[83%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 gap-[74px] items-start justify-start md:ml-[0] ml-[17px] w-auto md:w-full">
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
                <Button
                  className="common-pointer cursor-pointer font-semibold min-w-[171px] md:mt-0 my-2 rounded-[23px] text-3xl sm:text-[26px] md:text-[28px] text-center"
                  onClick={() => navigate("/register")}
                  color="red_A400"
                  size="xs"
                >
                  Register
                </Button>
              </div>
            </div>
            <Img
              className="h-[822px] sm:h-auto md:ml-[0] ml-[5px] mt-7 object-cover w-[94%] md:w-full"
              src="images/img_rectangle859_822x1330.png"
              alt="rectangle859"
            />
            <Text
              className="md:ml-[0] ml-[66px] mt-[87px] md:text-5xl text-6xl text-black-900"
              size="txtInterBold60Black900"
            >
              Heritage Cottage Room
            </Text>
            <Text
              className="leading-[48.00px] md:ml-[0] ml-[67px] mt-1.5 sm:text-[31px] md:text-[33px] text-[35px] text-black-900 w-[83%] sm:w-full"
              size="txtOpenSansRomanRegular35Black900"
            >
              Our spacious suites embody luxury and sophistication and enjoy the
              experience with a spacious sitting area, luxury bedding and free
              Wi-Fi.
            </Text>
            <div className="border border-black-900_4f border-solid flex flex-col font-opensans items-start justify-start md:ml-[0] ml-[31px] mt-[30px] p-6 sm:px-5 rounded-[17px] w-[90%] md:w-full">
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
                  <div className="border border-red-A400_7f border-solid flex flex-row items-center justify-start mt-8 rounded-[20px] w-[88%] md:w-full">
                    <Text
                      className="ml-7 text-base text-black-900"
                      size="txtOpenSansRomanExtraBold16"
                    >
                      _
                    </Text>
                    <Button
                      className="cursor-pointer font-bold min-w-[54px] ml-[21px] text-base text-center"
                      shape="square"
                      color="red_A400_1e"
                    >
                      2
                    </Button>
                    <Text
                      className="ml-[19px] text-base text-black-900 text-center"
                      size="txtOpenSansRomanBold16Black900"
                    >
                      +
                    </Text>
                  </div>
                  <Text
                    className="mt-[19px] text-base text-red-A700"
                    size="txtOpenSansRomanSemiBold16RedA700"
                  >
                    Only 2 Rooms Left. Hurry!
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[582px] md:px-5 relative w-full">
            <footer className="absolute bottom-[0] flex font-opensans inset-x-[0] items-center justify-center mx-auto w-full">
              <div className="flex flex-col items-center justify-center w-full">
                <div className="bg-red-A400_23 flex flex-col items-center justify-start p-[58px] md:px-10 sm:px-5 w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mb-[61px] w-[90%] md:w-full">
                    <div className="flex flex-col justify-start md:mt-0 mt-2 w-[26%] md:w-full">
                      <Img
                        className="h-[102px] md:h-auto mr-[69px] object-cover w-[79%]"
                        src="images/img_ewablackmark.png"
                        alt="ewablackmark_One"
                      />
                      <Text
                        className="leading-[28.00px] md:ml-[0] ml-[101px] mt-1 text-black-900 text-center text-xl w-[69%] sm:w-full"
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
              className="absolute h-[582px] inset-y-[0] my-auto object-cover right-[0]"
              src="images/img_component38.png"
              alt="componentThirtySeven"
            />
            <Button
              className="common-pointer absolute cursor-pointer font-poppins font-semibold inset-x-[0] leading-[normal] min-w-[253px] mx-auto rounded-[35px] shadow-bs text-4xl sm:text-[32px] md:text-[34px] text-center top-[0]"
              onClick={() => navigate("/roombooking")}
              color="red_A400"
            >
              Book now
            </Button>
            <Img
              className="absolute bottom-[0] h-[512px] left-[0] object-cover"
              src="images/img_component35.png"
              alt="componentThirtySix"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HertageroomPage;
