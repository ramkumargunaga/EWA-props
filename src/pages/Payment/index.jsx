import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Radio, RadioGroup, Text } from "components";
import BillingInfo from "./BillingInfo";
import RoomSummary from "pages/Roombooking/RoomSummary";
import PaymentSummary from "pages/Roombooking/PaymentSummary";

const PaymentPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-opensans items-center justify-center pt-[19px] w-full">
        <div className="flex flex-col pt-3 px-6 justify-center w-full">
          <div>
            <BillingInfo />
          </div>
          <div className="flex flex-col w-full h-fit items-center justify-center my-10">
            <RoomSummary />
            <PaymentSummary />
          </div>
          {/* <div className="flex md:flex-col flex-row gap-[34px] items-start justify-between max-w-[1493px] mx-auto md:px-5 w-full">
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
          </div> */}
          {/* <div className="bg-white-A700 border-b border-black-900 border-solid flex flex-col font-sourcesanspro items-end justify-start max-w-[1410px] mt-[19px] mx-auto p-[66px] md:px-5 shadow-bs5 w-full">
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
          </div> */}

          {/* <div className="font-opensans h-[571px] md:px-5 relative w-full">
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
          </div> */}
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
