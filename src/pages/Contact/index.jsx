import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const ContactPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-opensans items-center justify-end mx-auto pt-[19px] w-full">
        <div className="flex flex-col md:gap-10 gap-16 items-center justify-start w-full">
          <div className="flex md:flex-col flex-row gap-[35px] items-start justify-between max-w-[1494px] mx-auto md:px-5 w-full">
            <Img
              className="h-[116px] md:h-auto object-cover"
              src="images/img_ewablackmark.png"
              alt="ewablackmark"
            />
            <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-center justify-between md:mt-0 mt-[5px] p-[11px] w-[79%] md:w-full">
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
                  className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-auto"
                  size="txtOpenSansRomanSemiBold30"
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
          <div className="h-[1176px] md:h-[1257px] sm:h-[662px] md:px-5 relative w-full">
            <footer className="absolute bottom-[0] flex inset-x-[0] items-center justify-center mx-auto w-full">
              <div className="flex flex-col items-center justify-center w-full">
                <div className="bg-red-A400_23 flex flex-col items-center justify-start p-[31px] sm:px-5 w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mb-[88px] w-[88%] md:w-full">
                    <div className="md:h-[102px] h-[156px] relative w-[26%] md:w-full">
                      <Text
                        className="absolute bottom-[0] leading-[28.00px] right-[0] text-black-900 text-center text-xl w-[69%] sm:w-full"
                        size="txtOpenSansRegular20Black900"
                      >
                        We catalyze your luxurious vacation
                      </Text>
                      <Img
                        className="absolute h-[102px] left-[0] object-cover top-[0] w-[79%]"
                        src="images/img_ewablackmark.png"
                        alt="ewablackmark_One"
                      />
                    </div>
                    <ul className="flex flex-col items-start justify-start md:mt-0 mt-[27px] w-[66%] md:w-full common-column-list">
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
              className="absolute h-[587px] object-cover right-[0] top-[0]"
              src="images/img_component38.png"
              alt="componentThirtyEight"
            />
            <Img
              className="absolute bottom-[0] h-[569px] object-cover right-[0]"
              src="images/img_component38.png"
              alt="componentThirtySeven"
            />
            <div className="absolute flex md:flex-col flex-row font-poppins md:gap-10 items-start justify-between left-[0] top-[0] w-[74%]">
              <Img
                className="h-[587px] md:h-auto md:mt-0 mt-[75px] object-cover"
                src="images/img_component35.png"
                alt="componentThirtyNine"
              />
              <div className="flex flex-col items-center justify-start mb-[11px]">
                <div className="flex flex-col justify-start w-full">
                  <Text
                    className="md:ml-[0] ml-[235px] sm:text-[31px] md:text-[33px] text-[35px] text-center text-red-A400"
                    size="txtPoppinsMedium35"
                  >
                    Contact Us
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[54px] mt-[22px] text-5xl sm:text-[38px] md:text-[44px] text-center text-indigo-900"
                    size="txtPoppinsSemiBold48"
                  >
                    Reach out to Hyge Royal
                  </Text>
                  <div className="flex flex-col font-opensans md:gap-10 gap-[71px] items-center justify-start mt-[30px] w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-[50px] items-center justify-between w-full">
                      <Text
                        className="border border-red-A400 border-solid pl-[19px] sm:pr-5 pr-[35px] py-[9px] rounded text-black-900_89 text-xl"
                        size="txtOpenSansRomanRegular20Black90089"
                      >
                        First Name
                      </Text>
                      <Text
                        className="border border-red-A400 border-solid pl-[18px] sm:pr-5 pr-[35px] py-[9px] rounded text-black-900_89 text-xl"
                        size="txtOpenSansRomanRegular20Black90089"
                      >
                        Last Name
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-[50px] items-center justify-between w-full">
                      <Input
                        name="frame2968"
                        placeholder="Contact Number"
                        className="p-0 placeholder:text-black-900_89 text-left text-xl w-full"
                        wrapClassName="border border-red-A400 border-solid sm:flex-1 sm:w-full"
                        type="number"
                        shape="round"
                        color="white_A700"
                      ></Input>
                      <Input
                        name="frame2967"
                        placeholder="Email Address"
                        className="p-0 placeholder:text-black-900_89 text-center text-xl w-full"
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
                    className="mb-[100px] ml-3 md:ml-[0] text-black-900_89 text-center text-xl"
                    size="txtOpenSansRomanRegular20Black90089"
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
            </div>
            <Img
              className="absolute bottom-[0] h-[505px] left-[0] object-cover"
              src="images/img_component35.png"
              alt="componentThirtySix"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
