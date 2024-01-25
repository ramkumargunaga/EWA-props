import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Radio, RadioGroup, Text } from "components";

const PaymentPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-opensans items-center justify-end mx-auto pt-[19px] w-full">
        <div className="flex flex-col items-end justify-start w-full">
          <div className="flex md:flex-col flex-row gap-[34px] items-start justify-between max-w-[1493px] mx-auto md:px-5 w-full">
            <Img
              className="h-[116px] md:h-auto object-cover"
              src="images/img_ewablackmark.png"
              alt="ewablackmark"
            />
            <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-center justify-between md:mt-0 mt-2 p-[11px] w-[79%] md:w-full">
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
          <div className="bg-white-A700 border-b border-black-900 border-solid flex flex-col font-sourcesanspro items-end justify-start max-w-[1410px] mt-[19px] mx-auto p-[66px] md:px-5 shadow-bs5 w-full">
            <div className="flex flex-col items-center justify-start mb-0.5 mr-[203px] w-[61%] md:w-full">
              <div className="flex flex-col gap-[11px] items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[89%] md:w-full">
                  <Text
                    className="bg-light_green-600_01 flex h-16 items-center justify-center sm:px-5 rounded-[50%] text-[17.44px] text-center text-white-A700 w-16"
                    size="txtSourceSansProSemiBold1744"
                  >
                    1
                  </Text>
                  <div className="h-16 relative w-[46%] md:w-full">
                    <Line className="absolute bg-lime-600 bottom-[44%] h-1 left-[0] w-[82%]" />
                    <Text
                      className="absolute bg-light_green-600_01 flex h-full inset-y-[0] items-center justify-center my-auto sm:px-5 right-[0] rounded-[50%] text-[17.44px] text-center text-white-A700 w-16"
                      size="txtSourceSansProSemiBold1744"
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
                <div className="flex sm:flex-col flex-row font-opensans sm:gap-10 items-start justify-between w-full">
                  <Text
                    className="text-base text-black-900 text-center"
                    size="txtOpenSansRomanSemiBold16"
                  >
                    Your Information
                  </Text>
                  <Text
                    className="text-base text-black-900 text-center"
                    size="txtOpenSansRomanSemiBold16"
                  >
                    Payment Information
                  </Text>
                  <Text
                    className="text-base text-center text-gray-700"
                    size="txtOpenSansRomanSemiBold16Gray700"
                  >
                    Booking Confirmation
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-poppins items-start justify-start mt-[43px] md:px-5 w-[77%] md:w-full">
            <div className="flex flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[3px] w-[73%] md:w-full">
              <Text
                className="text-black-900_cc text-xl"
                size="txtPoppinsBold20"
              >
                Payment Details
              </Text>
              <Text
                className="text-black-900_cc text-xl"
                size="txtPoppinsBold20"
              >
                Room Summary
              </Text>
            </div>
            <div className="flex md:flex-col flex-row gap-[21px] items-center justify-between mt-4 w-full">
              <div className="flex md:flex-1 flex-col items-start justify-start w-[55%] md:w-full">
                <Text
                  className="md:ml-[0] ml-[3px] text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                  size="txtPoppinsSemiBold24"
                >
                  Billing Information
                </Text>
                <Text
                  className="mt-[26px] text-amber-600 text-center text-xl"
                  size="txtPoppinsBold20Amber600"
                >
                  Make Payment by
                </Text>
                <RadioGroup
                  selectedValue="Online"
                  className="flex mt-1.5 w-[27%]"
                  name="radiogrouponline"
                >
                  <Radio
                    value="Online"
                    className="font-bold text-[15px] text-black-900_89 text-center"
                    inputClassName="bg-blue_gray-100_02 border border-black-900_7f border-solid h-[15px] mr-[5px] rounded-lg w-[15px]"
                    checked={true}
                    name="radiogrouponline"
                    label="Online"
                    id="Online"
                  ></Radio>
                  <Radio
                    value="Cash"
                    className="font-bold ml-[31px] text-[15px] text-black-900_89 text-center"
                    inputClassName="bg-blue_gray-100_02 border border-black-900_7f border-solid h-[15px] mr-[5px] w-[15px]"
                    checked={false}
                    name="radiogrouponline"
                    label="Cash "
                    id="Cash"
                  ></Radio>
                </RadioGroup>
                <Line className="bg-black-900 h-px mt-[22px] w-full" />
                <div className="h-14 md:h-[90px] md:ml-[0] ml-[3px] mt-[34px] relative w-[67%] sm:w-full">
                  <Text
                    className="ml-4 text-[15px] text-center text-gray-500"
                    size="txtPoppinsRegular15"
                  >
                    Name
                  </Text>
                  <div className="absolute bg-gray-300 h-14 inset-[0] justify-center m-auto w-full"></div>
                </div>
                <div className="h-[60px] md:h-[78px] md:ml-[0] ml-[3px] mt-[22px] relative w-[67%] sm:w-full">
                  <Line className="absolute bg-gray-400_38 h-[30px] left-[16%] top-[0] w-px" />
                  <Text
                    className="ml-5 mt-1.5 text-[15px] text-center text-gray-500"
                    size="txtPoppinsRegular15"
                  >
                    Email
                  </Text>
                  <div className="absolute bg-gray-300 bottom-[0] h-14 inset-x-[0] mx-auto w-full"></div>
                </div>
                <div className="h-14 md:h-[78px] md:ml-[0] ml-[3px] mt-[22px] relative w-[66%] sm:w-full">
                  <Text
                    className="ml-[18px] mt-[7px] text-[15px] text-center text-gray-500"
                    size="txtPoppinsRegular15"
                  >
                    UPI number
                  </Text>
                  <div className="absolute bg-gray-300 h-14 inset-[0] justify-center m-auto w-full"></div>
                </div>
              </div>
              <div className="bg-white-A700 border border-black-900_66 border-solid flex md:flex-1 flex-col font-opensans items-center justify-end pt-7 sm:px-5 px-7 rounded-[10px] shadow-bs6 w-[44%] md:w-full">
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
                          size="txtOpenSansRegular16"
                        >
                          2 Person Accomodation
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[15px] items-end justify-start mt-[23px] w-[85%] md:w-full">
                        <Img
                          className="h-8 md:h-auto object-cover w-[21%]"
                          src="images/img_image23.png"
                          alt="imageTwentyThree"
                        />
                        <Text
                          className="mb-[3px] mt-1.5 text-base text-gray-700"
                          size="txtOpenSansRegular16"
                        >
                          King Size Bed
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[15px] items-end justify-start mt-[30px] w-[66%] md:w-full">
                        <Img
                          className="h-[30px] w-[30px]"
                          src="images/img_wifi22.svg"
                          alt="wifiTwentyTwo"
                        />
                        <div className="flex flex-col items-center justify-start mb-0.5 mt-[5px]">
                          <Text
                            className="text-base text-gray-700"
                            size="txtOpenSansRegular16"
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
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[42px] w-[76%] md:w-full">
              <div className="h-12 md:h-[47px] relative w-[51%] md:w-full">
                <div
                  className="common-pointer absolute bg-amber-600 h-[47px] inset-[0] justify-center m-auto shadow-bs w-full"
                  onClick={() => navigate("/bookingconfirmation")}
                ></div>
                <Text
                  className="absolute bottom-[0] left-[21%] sm:text-[21px] md:text-[23px] text-[25px] text-center text-white-A700"
                  size="txtPoppinsBold25WhiteA700"
                >
                  Confirm payment
                </Text>
              </div>
              <Text
                className="text-black-900_cc text-xl"
                size="txtPoppinsBold20"
              >
                Payment Summary
              </Text>
            </div>
            <div className="flex md:flex-col flex-row font-opensans gap-[26px] items-start justify-between md:ml-[0] ml-[7px] mt-3 w-full">
              <Line className="bg-black-900 h-px mb-[290px] md:mt-0 mt-[29px] w-[55%]" />
              <div className="bg-white-A700 border border-black-900_66 border-solid flex flex-col items-center justify-start p-5 rounded-[10px] shadow-bs6">
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
          <div className="font-opensans h-[571px] md:px-5 relative w-full">
            <footer className="absolute bottom-[0] flex inset-x-[0] items-center justify-center mx-auto w-full">
              <div className="flex flex-col items-center justify-center w-full">
                <div className="bg-red-A400_23 flex flex-col items-center justify-start p-[37px] sm:px-5 w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 gap-[82px] items-start justify-start mb-[82px] w-[86%] md:w-full">
                    <div className="flex flex-col justify-start w-[26%] md:w-full">
                      <Img
                        className="h-[102px] md:h-auto mr-[63px] object-cover w-4/5"
                        src="images/img_ewablackmark.png"
                        alt="ewablackmark_One"
                      />
                      <Text
                        className="leading-[28.00px] md:ml-[0] ml-[95px] text-black-900 text-center text-xl w-[70%] sm:w-full"
                        size="txtOpenSansRegular20Black900"
                      >
                        We catalyze your luxurious vacation
                      </Text>
                    </div>
                    <ul className="flex flex-col items-start justify-start md:mt-0 mt-[21px] w-[68%] md:w-full common-column-list">
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
              className="absolute h-[571px] inset-y-[0] my-auto object-cover right-[0]"
              src="images/img_component38.png"
              alt="componentThirtyEight"
            />
            <Img
              className="absolute bottom-[0] h-[512px] left-[0] object-cover"
              src="images/img_component35.png"
              alt="componentThirtySeven"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
