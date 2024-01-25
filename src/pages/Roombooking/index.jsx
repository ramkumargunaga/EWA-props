import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text, TextArea } from "components";

const RoombookingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-opensans items-center justify-end mx-auto pt-4 w-full">
        <div className="flex flex-col items-end justify-start w-full">
          <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between max-w-[1489px] mx-auto md:px-5 w-full">
            <Img
              className="h-[116px] md:h-auto object-cover"
              src="images/img_ewablackmark.png"
              alt="ewablackmark"
            />
            <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-center justify-between md:mt-0 mt-1 p-[11px] w-[79%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[74px] items-start justify-start md:ml-[0] ml-[17px] w-auto md:w-full">
                <Text
                  className="common-pointer text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-auto"
                  size="txtOpenSansRomanSemiBold30"
                  onClick={() => navigate("/")}
                >
                  Home
                </Text>
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-auto"
                  size="txtOpenSansRomanSemiBold30"
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
          <div className="bg-white-A700 flex flex-col font-sourcesanspro items-center justify-start max-w-[1397px] mt-[21px] mx-auto p-[60px] md:px-5 shadow-bs5 w-full">
            <div className="flex flex-col items-center justify-start mb-1 w-[62%] md:w-full">
              <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[89%] md:w-full">
                  <Text
                    className="bg-light_green-600 flex h-16 items-center justify-center sm:px-5 rounded-[50%] text-[17.44px] text-center text-white-A700 w-16"
                    size="txtSourceSansProSemiBold1744"
                  >
                    1
                  </Text>
                  <div className="h-16 relative w-[46%] md:w-full">
                    <Line className="absolute bg-light_green-600 bottom-[44%] h-1 left-[0] w-[82%]" />
                    <Text
                      className="absolute bg-gray-500 flex h-full inset-y-[0] items-center justify-center my-auto sm:px-5 right-[0] rounded-[50%] text-[17.44px] text-black-900_51 text-center w-16"
                      size="txtSourceSansProSemiBold1744Black90051"
                    >
                      2
                    </Text>
                  </div>
                  <Line className="bg-gray-500 h-1 mb-7 md:mt-0 mt-8 w-[37%]" />
                  <Text
                    className="bg-gray-500 flex h-16 items-center justify-center sm:px-5 rounded-[50%] text-[17.44px] text-black-900_51 text-center w-16"
                    size="txtSourceSansProSemiBold1744Black90051"
                  >
                    3
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row font-opensans sm:gap-5 items-start justify-start w-full">
                  <Text
                    className="mb-[5px] text-base text-black-900 text-center"
                    size="txtOpenSansRomanSemiBold16"
                  >
                    Your Information
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[170px] sm:mt-0 mt-1 text-base text-center text-gray-700"
                    size="txtOpenSansRomanSemiBold16Gray700"
                  >
                    Payment Information
                  </Text>
                  <Text
                    className="ml-36 sm:ml-[0] sm:mt-0 mt-[5px] text-base text-center text-gray-700"
                    size="txtOpenSansRomanSemiBold16Gray700"
                  >
                    Booking Confirmation
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row font-poppins sm:gap-10 items-end justify-between max-w-[969px] mt-[19px] mx-auto md:px-5 w-full">
            <Text
              className="mb-1 sm:text-[21px] md:text-[23px] text-[25px] text-black-900_cc"
              size="txtPoppinsBold25"
            >
              Booking Form
            </Text>
            <Text
              className="mt-3 text-black-900_cc text-xl"
              size="txtPoppinsBold20"
            >
              Room Summary
            </Text>
          </div>
          <div className="font-opensans h-[1396px] sm:h-[1400px] md:h-[2263px] mt-1 md:px-5 relative w-full">
            <div className="flex flex-col h-full items-center justify-start m-auto w-full">
              <div className="flex flex-col gap-[23px] items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-10 gap-[89px] items-start justify-start w-[87%] md:w-full">
                  <div className="bg-white-A700 border border-black-900_66 border-solid flex flex-col items-start justify-start p-[26px] sm:px-5 rounded-[10px] shadow-bs6 w-[55%] md:w-full">
                    <Text
                      className="mt-[21px] text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                      size="txtPoppinsSemiBold24"
                    >
                      Please fill your information
                    </Text>
                    <Input
                      name="frameSixtyNine"
                      placeholder="Name"
                      className="font-opensans font-semibold p-0 placeholder:text-black-900_a5 text-[13.08px] text-left w-full"
                      wrapClassName="mt-[59px] w-[98%]"
                      type="text"
                      size="md"
                    ></Input>
                    <div className="bg-gray-300 flex flex-row font-opensans items-start justify-start mt-12 p-[9px] w-[98%] md:w-full">
                      <Text
                        className="ml-[9px] mt-[5px] text-[13.08px] text-black-900_a5"
                        size="txtOpenSansSemiBold1308"
                      >
                        +91
                      </Text>
                      <Line className="bg-gray-400_38 h-[30px] mb-[7px] ml-[23px] w-px" />
                      <Text
                        className="ml-[7px] mt-1.5 text-[13.08px] text-black-900_a5"
                        size="txtOpenSansSemiBold1308"
                      >
                        Mobile Number
                      </Text>
                    </div>
                    <Input
                      name="frameSeventyOne"
                      placeholder="Email ID"
                      className="font-opensans font-semibold p-0 placeholder:text-black-900_a5 text-[13.08px] text-left w-full"
                      wrapClassName="mt-12 w-[98%]"
                      type="email"
                      size="md"
                    ></Input>
                    <Input
                      name="frameSeventyTwo"
                      placeholder="Address"
                      className="font-opensans font-semibold p-0 placeholder:text-black-900_a5 text-[13.08px] text-left w-full"
                      wrapClassName="mt-12 w-[98%]"
                      size="md"
                    ></Input>
                    <TextArea
                      className="bg-gray-300 border-0 font-opensans font-semibold mt-12 pb-[35px] pl-[17px] sm:pr-5 pr-[35px] pt-[18px] text-[13.08px] placeholder:text-black-900_a5 text-black-900_a5 text-left w-[98%] sm:w-full"
                      name="frameSeventyFour"
                      placeholder="Additional Requirements"
                    ></TextArea>
                    <Button
                      className="common-pointer cursor-pointer font-bold font-sourcesanspro mb-[26px] min-w-[651px] md:min-w-full mt-20 outline outline-[0.5px] outline-black-900_1e rounded text-[17.44px] text-center"
                      onClick={() => navigate("/payment")}
                      color="amber_600_01"
                      size="xl"
                    >
                      Submit
                    </Button>
                  </div>
                  <div className="flex flex-col items-start justify-start md:mt-0 mt-1 w-[39%] md:w-full">
                    <div className="bg-white-A700 border border-black-900_66 border-solid flex flex-col font-opensans items-center justify-start pt-7 sm:px-5 px-7 rounded-[10px] shadow-bs6 w-full">
                      <div className="flex flex-col items-start justify-start mt-[22px] w-[96%] md:w-full">
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
                        <Line className="bg-black-900_1e h-px mt-[33px] w-full" />
                      </div>
                    </div>
                    <Text
                      className="md:ml-[0] ml-[30px] mt-[31px] text-black-900_cc text-xl"
                      size="txtPoppinsBold20"
                    >
                      Payment Summary
                    </Text>
                    <div className="bg-white-A700 border border-black-900_66 border-solid flex flex-col font-opensans items-center justify-start ml-1 md:ml-[0] mt-[15px] p-5 rounded-[10px] shadow-bs6 w-full">
                      <div className="flex flex-col items-start justify-start my-[25px] w-[97%] md:w-full">
                        <div className="flex flex-col gap-[18px] items-center justify-start md:ml-[0] ml-[9px] w-[69%] md:w-full">
                          <div className="flex flex-row gap-[39px] items-start justify-between w-full">
                            <Text
                              className="text-black-900_d3 text-xl"
                              size="txtOpenSansRomanSemiBold20Black900d3"
                            >
                              Subtotal :{" "}
                            </Text>
                            <Text
                              className="text-2xl md:text-[22px] text-black-900_d3 sm:text-xl"
                              size="txtOpenSansRomanSemiBold24Black900d3"
                            >
                              Rs 8,000.00
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[38px] items-start justify-between w-full">
                            <Text
                              className="text-black-900_d3 text-xl"
                              size="txtOpenSansRomanSemiBold20Black900d3"
                            >
                              Taxes & Fees :{" "}
                            </Text>
                            <Text
                              className="text-2xl md:text-[22px] text-black-900_d3 sm:text-xl"
                              size="txtOpenSansRomanSemiBold24Black900d3"
                            >
                              Rs 1,200.00
                            </Text>
                          </div>
                        </div>
                        <Line className="bg-black-900_30 h-px mt-[52px] w-full" />
                        <div className="flex flex-row gap-[37px] items-center justify-start md:ml-[0] ml-[9px] mt-[15px] w-[79%] md:w-full">
                          <Text
                            className="text-black-900_e2 text-xl"
                            size="txtOpenSansRomanSemiBold20Black900e2"
                          >
                            Total Pay :{" "}
                          </Text>
                          <Text
                            className="md:text-3xl sm:text-[28px] text-[32px] text-black-900_e2"
                            size="txtOpenSansRomanSemiBold32"
                          >
                            Rs 9,200.00
                          </Text>
                        </div>
                        <Text
                          className="md:ml-[0] ml-[186px] mt-[9px] text-base text-black-900_e2"
                          size="txtOpenSansRomanSemiBold16Black900e2"
                        >
                          (Incl. of all taxes)
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <footer className="flex items-center justify-center w-full">
                  <div className="flex flex-col items-center justify-center w-full">
                    <div className="bg-red-A400_23 flex flex-col items-center justify-start p-[58px] md:px-10 sm:px-5 w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mb-[61px] w-[90%] md:w-full">
                        <div className="flex flex-col justify-start md:mt-0 mt-2 w-[26%] md:w-full">
                          <Img
                            className="h-[102px] md:h-auto mr-[62px] object-cover w-[81%]"
                            src="images/img_ewablackmark.png"
                            alt="ewablackmark_One"
                          />
                          <Text
                            className="leading-[28.00px] md:ml-[0] ml-[94px] mt-0.5 text-black-900 text-center text-xl w-[71%] sm:w-full"
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
                                    <Img
                                      src="images/img_trash.svg"
                                      alt="trash"
                                    />
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
              </div>
            </div>
            <Img
              className="absolute bottom-[0] h-[582px] object-cover right-[0]"
              src="images/img_component38.png"
              alt="componentThirtySeven"
            />
            <Img
              className="absolute bottom-[0] h-[496px] left-[0] object-cover"
              src="images/img_component35.png"
              alt="componentThirtySeven_One"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RoombookingPage;
