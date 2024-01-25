import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const BookingconfirmationPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 font-sourcesanspro h-[1202px] mx-auto pt-4 relative w-full">
        <Img
          className="h-[569px] mb-[undefinedpx] ml-auto mt-auto object-cover z-[1]"
          src="images/img_component38.png"
          alt="componentThirtyEight"
        />
        <div className="flex md:flex-col flex-row font-opensans md:gap-10 items-center justify-between max-w-[1172px] mb-[-32px] ml-auto mr-2 mt-[7px] p-[11px] md:px-5 w-full z-[1]">
          <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-[74px] items-start justify-start md:ml-[0] ml-[17px] w-auto md:w-full">
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
        <Img
          className="h-[116px] mb-[-55.23px] ml-[13px] object-cover w-[19%] z-[1]"
          src="images/img_ewablackmark.png"
          alt="ewablackmark_One"
        />
        <Img
          className="h-[494px] mb-[undefinedpx] mt-auto object-cover z-[1]"
          src="images/img_component35.png"
          alt="componentThirtySeven"
        />
        <div className="flex flex-col gap-8 items-center justify-start mt-auto mx-auto w-full">
          <div className="h-[640px] sm:h-[742px] md:h-[767px] max-w-[1440px] mx-auto md:px-5 relative w-full">
            <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
              <div className="flex flex-col gap-[42px] items-center justify-start w-full">
                <div className="bg-white-A700 border-b border-black-900 border-solid flex flex-col items-center justify-end p-[30px] sm:px-5 shadow-bs5 w-full">
                  <div className="flex flex-col items-center justify-start mt-[17px] w-[57%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col gap-[11px] items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[89%] md:w-full">
                          <div className="bg-light_green-600_02 flex flex-col h-16 items-start justify-end p-5 rounded-[50%] w-16">
                            <Text
                              className="md:ml-[0] ml-[5px] text-[17.44px] text-center text-white-A700"
                              size="txtSourceSansProSemiBold1744"
                            >
                              1
                            </Text>
                          </div>
                          <div className="h-16 md:h-[62px] relative w-[46%] md:w-full">
                            <Line className="absolute bg-light_green-600_01 bottom-[44%] h-1 left-[0] w-[82%]" />
                            <div className="absolute bg-light_green-600_01 flex flex-col h-full inset-y-[0] items-start justify-end my-auto p-5 right-[0] rounded-[50%] w-16">
                              <Text
                                className="ml-1 md:ml-[0] text-[17.44px] text-center text-white-A700"
                                size="txtSourceSansProSemiBold1744"
                              >
                                2
                              </Text>
                            </div>
                          </div>
                          <Line className="bg-light_green-600_01 h-1 mb-7 md:mt-0 mt-8 w-[37%]" />
                          <div className="bg-light_green-600_01 flex flex-col h-16 items-start justify-end p-5 rounded-[50%] w-16">
                            <Text
                              className="ml-1 md:ml-[0] text-[17.44px] text-center text-white-A700"
                              size="txtSourceSansProSemiBold1744"
                            >
                              3
                            </Text>
                          </div>
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
                            className="text-base text-black-900 text-center"
                            size="txtOpenSansRomanSemiBold16"
                          >
                            Booking Confirmation
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border border-black-900 border-solid flex flex-col items-start justify-start p-[26px] sm:px-5 shadow-bs7 w-[97%] md:w-full">
                  <div className="flex flex-col gap-12 justify-start mb-[70px] mt-[38px] w-[89%] md:w-full">
                    <div className="flex sm:flex-col flex-row font-poppins gap-4 items-start justify-start w-[36%] md:w-full">
                      <Img
                        className="h-[52px] md:h-auto object-cover w-[52px]"
                        src="images/img_check13.png"
                        alt="checkThirteen"
                      />
                      <Text
                        className="sm:mt-0 mt-0.5 text-4xl sm:text-[32px] md:text-[34px] text-black-900_d1 text-center"
                        size="txtPoppinsSemiBold36"
                      >
                        Booking Confirmed
                      </Text>
                    </div>
                    <Text
                      className="leading-[34.00px] md:ml-[0] ml-[59px] text-2xl md:text-[22px] text-black-900_d1 sm:text-xl w-[96%] sm:w-full"
                      size="txtOpenSansRomanSemiBold24Black900d1"
                    >
                      You will receive a mail with the details of the room
                      booking. Awaiting your presence. Thanks for booking with
                      us!
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Img
              className="absolute h-[314px] inset-x-[0] mx-auto object-cover top-[0] w-[61%]"
              src="images/img_rectangle830.png"
              alt="rectangle830"
            />
          </div>
          <footer className="flex font-opensans items-center justify-center md:px-5 w-full">
            <div className="flex flex-col items-center justify-center w-full">
              <div className="bg-red-A400_23 flex flex-col items-center justify-start p-8 sm:px-5 w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mb-[87px] w-[88%] md:w-full">
                  <div className="md:h-[102px] h-[155px] relative w-[26%] md:w-full">
                    <Text
                      className="absolute bottom-[0] leading-[28.00px] right-[0] text-black-900 text-center text-xl w-[70%] sm:w-full"
                      size="txtOpenSansRegular20Black900"
                    >
                      We catalyze your luxurious vacation
                    </Text>
                    <Img
                      className="absolute h-[102px] left-[0] object-cover top-[0] w-4/5"
                      src="images/img_ewablackmark.png"
                      alt="ewablackmark"
                    />
                  </div>
                  <ul className="flex flex-col items-start justify-start md:mt-0 mt-[26px] w-[66%] md:w-full common-column-list">
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
        </div>
      </div>
    </>
  );
};

export default BookingconfirmationPage;
