import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text, TextArea } from "components";
import Process from "./Process";
import BookingForm from "./BookingForm";
import RoomSummary from "./RoomSummary";
import PaymentSummary from "./PaymentSummary";

const RoombookingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col  font-opensans items-center justify-end  pt-4 w-[100%]">
        <div className="flex flex-col items-end justify-start w-full">
          <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between max-w-[1489px] mx-auto md:px-5 w-full">
            {/* <Img
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
            </div> */}
          </div>

          <div className="w-full h-fit items-center justify-center px-[10px]">
            <Process />
          </div>

          <div className="w-full h-fit py-[15px] flex flex-col items-center justify-center">
            <BookingForm />
            <div className="w-full h-fit py-[15px] flex flex-col items-center justify-center">
              <RoomSummary />
              <PaymentSummary />
            </div>
          </div>

          {/* <div className="font-opensans h-[1396px] sm:h-[1400px] md:h-[2263px] mt-1 md:px-5 relative w-full">
            <div className="flex flex-col h-full items-center justify-start m-auto w-full">
              <div className="flex flex-col gap-[23px] items-center justify-start w-full">
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
          </div> */}
        </div>
      </div>
    </>
  );
};

export default RoombookingPage;
