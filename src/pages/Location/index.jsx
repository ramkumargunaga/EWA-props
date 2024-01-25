import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const LocationPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-opensans items-center justify-end mx-auto pt-[51px] w-full">
        <div className="flex flex-col items-end justify-start w-full">
          <div className="flex md:flex-col flex-row gap-9 items-start justify-between max-w-[1495px] mx-auto md:px-5 w-full">
            <Img
              className="h-[116px] md:h-auto md:mt-0 mt-[3px] object-cover"
              src="images/img_ewablackmark.png"
              alt="ewablackmark"
            />
            <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-center justify-between p-[11px] w-[79%] md:w-full">
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
                  className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-auto"
                  size="txtOpenSansRomanSemiBold30"
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
          <div className="h-[117px] md:h-[135px] mt-[39px] md:px-5 relative w-[47%] md:w-full">
            <Text
              className="absolute left-[0] text-2xl md:text-[22px] text-red-A400 sm:text-xl top-[0] tracking-[4.32px]"
              size="txtOpenSansRomanSemiBold24RedA400"
            >
              LOCATION
            </Text>
            <Text
              className="absolute bottom-[0] inset-x-[0] mx-auto md:text-5xl text-[64px] text-indigo-900_e0 w-max"
              size="txtPoppinsRegular64Indigo900e0"
            >
              Unveiling the Location
            </Text>
          </div>
          <div className="md:h-[1229px] h-[1300px] sm:h-[1303px] mt-[3px] md:px-5 relative w-full">
            <div className="flex flex-col h-full items-center justify-start m-auto w-full">
              <div className="flex flex-col md:gap-10 gap-[114px] items-center justify-start w-full">
                <Img
                  className="h-[731px] md:h-auto object-cover w-[93%]"
                  src="images/img_image13_731x1403.png"
                  alt="imageThirteen"
                />
                <footer className="flex items-center justify-center w-full">
                  <div className="flex flex-col items-center justify-center w-full">
                    <div className="bg-red-A400_23 flex flex-col items-center justify-start p-9 sm:px-5 w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 gap-[95px] items-start justify-start mb-[83px] w-[87%] md:w-full">
                        <div className="md:h-[102px] h-[153px] relative w-[26%] md:w-full">
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
                        <ul className="flex flex-col items-start justify-start md:mt-0 mt-[22px] w-[67%] md:w-full common-column-list">
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
              className="absolute bottom-[0] h-[565px] object-cover right-[0]"
              src="images/img_component38.png"
              alt="componentThirtySeven"
            />
            <Img
              className="absolute bottom-[0] h-[491px] left-[0] object-cover"
              src="images/img_component35.png"
              alt="componentThirtySix"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationPage;
