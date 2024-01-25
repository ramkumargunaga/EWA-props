import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const RegisterPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-end mx-auto pt-[17px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex md:flex-col flex-row font-opensans gap-[33px] items-start justify-between max-w-[1492px] mx-auto md:px-5 w-full">
            <Img
              className="h-[116px] md:h-auto object-cover"
              src="images/img_ewablackmark.png"
              alt="ewablackmark"
            />
            <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-center justify-between md:mt-0 mt-1.5 p-[11px] w-[79%] md:w-full">
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
              <Text
                className="bg-red-A400 h-[47px] justify-center md:mt-0 my-2 pt-1 sm:px-5 px-[26px] rounded-[23px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-[171px]"
                size="txtOpenSansRomanSemiBold30WhiteA700"
              >
                Register
              </Text>
            </div>
          </div>
          <Text
            className="mt-6 sm:text-[40px] md:text-[46px] text-[50px] text-indigo-900 text-shadow-ts"
            size="txtLexendDecaRegular50"
          >
            Registration
          </Text>
          <Text
            className="bg-red-A400 h-[74px] justify-center max-w-[1305px] md:max-w-full mt-[22px] sm:px-5 px-[35px] py-1.5 sm:text-[40px] md:text-[46px] text-[50px] text-shadow-ts text-white-A700 w-full"
            size="txtInterSemiBold50"
          >
            Request Information
          </Text>
          <div className="flex flex-col font-lexenddeca items-start justify-start max-w-[1234px] mt-[88px] mx-auto md:px-5 w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
              size="txtLexendDecaRegular40"
            >
              <span className="text-gray-900_02 font-lexenddeca text-left font-light">
                Your Name
              </span>
              <span className="text-red-900 font-lexenddeca text-left font-light">
                {" "}
                *
              </span>
            </Text>
            <Text
              className="bg-gray-50_02 border border-black-900_7f border-solid h-[69px] justify-center max-w-[1234px] md:max-w-full mt-3 sm:px-5 px-[35px] py-[15px] rounded-[9px] text-3xl sm:text-[26px] md:text-[28px] text-gray-700 w-full"
              size="txtLexendDecaLight30"
            >
              Your Name
            </Text>
            <Text
              className="mt-12 sm:text-4xl md:text-[38px] text-[40px] text-black-900"
              size="txtLexendDecaRegular40"
            >
              <span className="text-gray-900_02 font-lexenddeca text-left font-light">
                Your Number{" "}
              </span>
              <span className="text-red-900 font-lexenddeca text-left font-light">
                *
              </span>
            </Text>
            <Text
              className="bg-gray-50_02 border border-black-900_7f border-solid h-[69px] justify-center max-w-[1234px] md:max-w-full mt-[13px] sm:px-5 px-[35px] py-[15px] rounded-[9px] text-3xl sm:text-[26px] md:text-[28px] text-gray-700 w-full"
              size="txtLexendDecaLight30"
            >
              Your Number
            </Text>
            <Text
              className="mt-[68px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
              size="txtLexendDecaRegular40"
            >
              <span className="text-gray-900_02 font-lexenddeca text-left font-light">
                Your Email
              </span>
              <span className="text-red-900 font-lexenddeca text-left font-light">
                {" "}
                *
              </span>
            </Text>
            <Text
              className="bg-gray-50_02 border border-black-900_7f border-solid h-[69px] justify-center max-w-[1234px] md:max-w-full mt-[13px] pb-[17px] pt-[13px] sm:px-5 px-[35px] rounded-[9px] text-3xl sm:text-[26px] md:text-[28px] text-gray-700 w-full"
              size="txtLexendDecaLight30"
            >
              Your Email
            </Text>
            <Text
              className="mt-[61px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
              size="txtLexendDecaRegular40"
            >
              <span className="text-gray-900_02 font-lexenddeca text-left font-light">
                No of guests{" "}
              </span>
              <span className="text-red-900 font-lexenddeca text-left font-light">
                *
              </span>
            </Text>
            <Text
              className="bg-gray-50_02 border border-black-900_7f border-solid h-[69px] justify-center max-w-[1234px] md:max-w-full mt-[9px] pb-[13px] pt-[17px] sm:px-5 px-[35px] rounded-[9px] text-3xl sm:text-[26px] md:text-[28px] text-gray-700 w-full"
              size="txtLexendDecaLight30"
            >
              No of guests
            </Text>
            <Text
              className="mt-[77px] sm:text-4xl md:text-[38px] text-[40px] text-gray-900_02"
              size="txtLexendDecaLight40"
            >
              <span className="text-gray-900_02 font-lexenddeca text-left font-light">
                Check in date{" "}
              </span>
              <span className="text-red-900 font-lexenddeca text-left font-light">
                *
              </span>
            </Text>
            <Text
              className="bg-gray-50_02 border border-black-900_7f border-solid h-[69px] justify-center max-w-[1234px] md:max-w-full mt-[13px] pb-[17px] pt-[13px] sm:px-5 px-[35px] rounded-[9px] text-3xl sm:text-[26px] md:text-[28px] text-gray-700 w-full"
              size="txtLexendDecaLight30"
            >
              Check in date
            </Text>
            <Text
              className="mt-[85px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
              size="txtLexendDecaRegular40"
            >
              <span className="text-gray-900_02 font-lexenddeca text-left font-light">
                Check out date{" "}
              </span>
              <span className="text-red-900 font-lexenddeca text-left font-light">
                *
              </span>
            </Text>
            <Text
              className="bg-gray-50_02 border border-black-900_7f border-solid h-[69px] justify-center max-w-[1234px] md:max-w-full mt-[13px] sm:px-5 px-[35px] py-[15px] rounded-[9px] text-3xl sm:text-[26px] md:text-[28px] text-gray-700 w-full"
              size="txtLexendDecaLight30"
            >
              Check out date
            </Text>
          </div>
          <div className="font-inter h-[581px] md:h-[609px] mt-[29px] md:px-5 relative w-full">
            <div className="flex flex-col h-full items-center justify-start m-auto w-full">
              <div className="flex flex-col gap-[52px] items-center justify-start w-full">
                <div className="bg-red-A400 flex flex-col items-center justify-start p-[11px] shadow-bs">
                  <Text
                    className="mb-0.5 sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                    size="txtInterSemiBold40"
                  >
                    Submit
                  </Text>
                </div>
                <footer className="flex font-opensans items-center justify-center w-full">
                  <div className="flex flex-col items-center justify-center w-full">
                    <div className="bg-red-A400_23 flex flex-col items-center justify-start p-[58px] md:px-10 sm:px-5 w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mb-[61px] w-[90%] md:w-full">
                        <div className="md:h-[102px] h-[150px] md:mt-0 mt-2 relative w-[26%] md:w-full">
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
              className="absolute h-[577px] inset-y-[0] my-auto object-cover right-[0]"
              src="images/img_component38.png"
              alt="componentThirtySeven"
            />
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

export default RegisterPage;
