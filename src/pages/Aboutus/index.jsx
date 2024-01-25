import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";

const AboutusPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-end mx-auto pt-4 w-full">
        <div className="flex flex-col items-center justify-end w-full">
          <div className="flex md:flex-col flex-row font-opensans gap-[35px] items-start justify-between max-w-[1494px] mx-auto md:px-5 w-full">
            <Img
              className="h-[116px] md:h-auto object-cover"
              src="images/img_ewablackmark.png"
              alt="ewablackmark"
            />
            <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-center justify-between md:mt-0 mt-[9px] p-[11px] w-[79%] md:w-full">
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
                  className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-auto"
                  size="txtOpenSansRomanSemiBold30"
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
          <div className="flex md:flex-col flex-row font-inter md:gap-10 items-start justify-between max-w-[1438px] mt-[109px] mx-auto md:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-[63px] items-end justify-start mb-[146px]">
              <div className="h-[629px] mr-[3px] relative w-full">
                <div className="h-[629px] m-auto w-full">
                  <div className="absolute h-[629px] inset-y-[0] my-auto right-[0] w-[68%] sm:w-full">
                    <Img
                      className="absolute h-[629px] inset-y-[0] my-auto object-cover right-[0] w-3/4"
                      src="images/img_rectangle835.png"
                      alt="rectangle835"
                    />
                    <Img
                      className="absolute h-[326px] inset-y-[0] left-[0] my-auto object-cover w-[42%]"
                      src="images/img_rectangle836.png"
                      alt="rectangle836"
                    />
                  </div>
                  <Img
                    className="absolute bottom-[28%] h-[177px] left-[0] object-cover w-[47%]"
                    src="images/img_rectangle837.png"
                    alt="rectangle837"
                  />
                </div>
                <div className="absolute flex flex-col md:gap-10 gap-[105px] h-max inset-y-[0] justify-start left-[9%] my-auto w-[45%]">
                  <Img
                    className="h-[304px] md:h-auto object-cover w-[59%]"
                    src="images/img_rectangle838.png"
                    alt="rectangle838"
                  />
                  <Img
                    className="h-48 md:h-auto md:ml-[0] ml-[29px] object-cover w-[92%]"
                    src="images/img_rectangle839.png"
                    alt="rectangle839"
                  />
                </div>
              </div>
              <div className="bg-indigo-900 h-4 rotate-[90deg] rounded-lg w-[76%]"></div>
            </div>
            <div className="bg-indigo-900 h-[606px] md:mt-0 mt-[249px] rounded-md w-[1%]"></div>
            <div className="flex flex-col gap-[39px] justify-start md:mt-0 mt-[158px]">
              <div className="h-[178px] md:h-[97px] relative w-full">
                <Text
                  className="absolute inset-x-[0] mx-auto md:text-5xl text-[80px] text-black-900 text-center top-[0] w-max"
                  size="txtInterBold80Black900"
                >
                  More About
                </Text>
                <Text
                  className="absolute bottom-[0] inset-x-[0] mx-auto md:text-5xl text-[71px] text-center text-red-A400 w-max"
                  size="txtInterBold71"
                >
                  ewa properties
                </Text>
              </div>
              <Text
                className="md:ml-[0] ml-[27px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center w-[82%] sm:w-full"
                size="txtInterRegular30"
              >
                Our fine homes at EWA Properties are the gateways for your
                adventures with nature! Each of one homes are located in scenic
                locations surrounded with either lush green trees or never
                ending stretches of blue waters!
              </Text>
            </div>
          </div>
          <Text
            className="mt-[100px] md:text-5xl text-[80px] text-black-900 text-center"
            size="txtInterBold80Black900"
          >
            Why we are so special?
          </Text>
          <div className="flex flex-col font-inter items-center justify-start mt-14 w-full">
            <div className="h-[1534px] md:h-[587px] md:px-5 relative w-full">
              <div className="h-[1534px] m-auto w-full">
                <Img
                  className="h-[413px] mb-[-193px] mx-auto object-cover w-[22%] z-[1]"
                  src="images/img_rectangle871.png"
                  alt="rectangle871"
                />
                <Img
                  className="h-[321px] mb-[-153px] ml-auto mr-[343px] mt-[52px] object-cover w-[18%] z-[1]"
                  src="images/img_rectangle872.png"
                  alt="rectangle872"
                />
                <Img
                  className="h-[321px] mb-[-153px] ml-auto mr-[59px] mt-[52px] object-cover w-[18%] z-[1]"
                  src="images/img_rectangle873.png"
                  alt="rectangle873"
                />
                <Text
                  className="mb-[undefinedpx] ml-[63px] mt-11 sm:text-4xl md:text-[38px] text-[40px] text-black-900 z-[1]"
                  size="txtInterBold40"
                >
                  <span className="text-indigo-900 font-inter text-left font-semibold">
                    Our work process
                  </span>
                  <span className="text-black-900 font-inter text-left font-semibold">
                    <>
                      {" "}
                      make
                      <br />
                      your dream come true
                    </>
                  </span>
                </Text>
                <div className="md:h-[220px] h-[58px] mb-[-25px] ml-[86px] mt-[187px] w-[5%] z-[1]">
                  <div className="bg-white-A700 border border-black-900_99 border-solid h-[58px] m-auto rounded-[31px] shadow-bs w-full"></div>
                  <Text
                    className="absolute h-max inset-y-[0] left-[29%] my-auto text-indigo-900 text-xl"
                    size="txtInterBold20"
                  >
                    01
                  </Text>
                </div>
                <List
                  className="flex flex-col gap-[69px] mb-[undefinedpx] ml-[86px] mt-[315px] w-[23%] z-[1]"
                  orientation="vertical"
                >
                  <div className="flex flex-row gap-[42px] items-start justify-start w-full">
                    <div className="h-[58px] relative w-[19%]">
                      <div className="bg-white-A700 border border-black-900_99 border-solid h-[58px] m-auto rounded-[31px] shadow-bs w-full"></div>
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-indigo-900 text-xl w-max"
                        size="txtInterBold20"
                      >
                        02
                      </Text>
                    </div>
                    <Text
                      className="mt-2.5 text-black-900 text-xl"
                      size="txtInterBold20Black900"
                    >
                      {" "}
                      Best Serving & Hygienic{" "}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[42px] items-center justify-start w-[92%] md:w-full">
                    <div className="h-[58px] relative w-1/5">
                      <div className="bg-white-A700 border border-black-900_99 border-solid h-[58px] m-auto rounded-[31px] shadow-bs w-full"></div>
                      <Text
                        className="absolute inset-x-[0] mx-auto text-indigo-900 text-xl top-[26%] w-max"
                        size="txtInterBold20"
                      >
                        03
                      </Text>
                    </div>
                    <Text
                      className="text-black-900 text-xl"
                      size="txtInterBold20Black900"
                    >
                      Comfortable support
                    </Text>
                  </div>
                </List>
                <div className="h-[25px] md:h-[NaNpx] mb-[undefinedpx] ml-[190px] mt-48 w-[16%] z-[1]">
                  <Text
                    className="m-auto text-black-900 text-xl"
                    size="txtInterBold20Black900"
                  >
                    Perfection in every inch
                  </Text>
                  <Text
                    className="absolute h-full inset-[0] justify-center m-auto text-black-900 text-xl w-max"
                    size="txtInterBold20Black900"
                  >
                    Perfection in every inch
                  </Text>
                </div>
                <div className="flex flex-col gap-[49px] justify-start mb-[undefinedpx] mt-auto mx-auto w-[34%] z-[1]">
                  <Text
                    className="md:ml-[0] ml-[87px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900"
                    size="txtInterBold50"
                  >
                    Good to know!
                  </Text>
                  <div className="flex flex-col font-opensans gap-[45px] items-center justify-start w-full">
                    <div className="bg-red-100 h-[39px] w-full"></div>
                    <div className="bg-white-A700 border border-black-900_7f border-solid h-[39px] w-full"></div>
                    <Text
                      className="bg-red-100 h-[39px] justify-center pl-7 pr-[35px] sm:px-5 py-0.5 sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-[507px]"
                      size="txtOpenSansRomanRegular25"
                    >
                      <span className="text-black-900 font-opensans text-left font-normal">
                        Location rating{" "}
                      </span>
                      <span className="text-black-900 font-opensans text-left font-bold">
                        9.0
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="h-[1314px] md:h-[587px] mt-auto mx-auto w-full">
                  <div className="absolute bottom-[0] h-[1064px] md:h-[587px] left-[0] w-[88%] md:w-full">
                    <div className="absolute bottom-[0] h-[570px] right-[0] w-[88%] md:w-full">
                      <Img
                        className="h-[570px] m-auto object-cover w-full"
                        src="images/img_rectangle55.png"
                        alt="rectangleFiftyFive"
                      />
                      <div className="absolute flex flex-col gap-[26px] h-max inset-y-[0] justify-start left-[0] my-auto w-[93%]">
                        <Text
                          className="md:text-5xl text-6xl text-center text-shadow-ts text-white-A700"
                          size="txtInterExtraBold60"
                        >
                          <>
                            Explore culture,
                            <br />
                            tradition and nature!
                          </>
                        </Text>
                        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[47px] w-[96%] md:w-full">
                          <Text
                            className="md:mt-0 mt-2.5 sm:text-[21px] md:text-[23px] text-[25px] text-center text-white-A700"
                            size="txtInterMedium25"
                          >
                            EWA is a nature based travel initiative which aims
                            to inspire people all over the world to explore
                            culture, tradition and nature.
                          </Text>
                          <Img
                            className="h-[183px] md:h-auto object-cover rounded-[3px]"
                            src="images/img_rectangle56.png"
                            alt="rectangleFiftySix"
                          />
                        </div>
                      </div>
                    </div>
                    <Img
                      className="absolute h-[587px] left-[0] object-cover top-[0]"
                      src="images/img_component35.png"
                      alt="componentThirtyNine"
                    />
                  </div>
                  <Img
                    className="absolute h-[587px] object-cover right-[0] top-[10%]"
                    src="images/img_component38.png"
                    alt="componentThirtyEight"
                  />
                  <div className="absolute flex flex-col gap-[42px] items-center justify-start left-[8%] top-[0] w-[19%]">
                    <div className="flex flex-row gap-[67px] items-start justify-start w-[99%] md:w-full">
                      <Line className="bg-indigo-900 h-[71px] mt-[23px] rounded-[1px] w-px" />
                      <Text
                        className="text-[10px] text-black-900 text-center w-[76%] sm:w-full"
                        size="txtInterRegular10"
                      >
                        Our fine homes at EWA Properties are the gateways for
                        your adventures with nature!
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[71px] items-start justify-start w-full">
                      <Line className="bg-indigo-900 h-[71px] mt-[17px] rounded-[1px] w-px" />
                      <Text
                        className="sm:flex-1 text-[10px] text-black-900 text-center w-3/4 sm:w-full"
                        size="txtInterRegular10"
                      >
                        Our fine homes at EWA Properties are the gateways for
                        your adventures with nature!
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="absolute left-[12%] text-[10px] text-black-900 text-center top-[20%] w-[14%] sm:w-full"
                    size="txtInterRegular10"
                  >
                    Our fine homes at EWA Properties are the gateways for your
                    adventures with nature!
                  </Text>
                </div>
              </div>
              <div className="absolute flex flex-col font-opensans gap-[47px] h-max inset-[0] items-start justify-center m-auto">
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                  size="txtOpenSansRomanRegular25"
                >
                  <span className="text-black-900 font-opensans text-left font-normal">
                    Value for money{" "}
                  </span>
                  <span className="text-black-900 font-opensans text-left font-bold">
                    8.0
                  </span>
                </Text>
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                  size="txtOpenSansRomanRegular25"
                >
                  <span className="text-black-900 font-opensans text-left font-normal">
                    Distance to city center{" "}
                  </span>
                  <span className="text-black-900 font-opensans text-left font-bold">
                    {" "}
                    52 km
                  </span>
                </Text>
              </div>
            </div>
            <div className="font-lato md:h-[563px] h-[569px] md:px-5 relative w-full">
              <footer className="absolute bottom-[0] flex inset-x-[0] items-center justify-center mx-auto w-full">
                <div className="flex flex-col items-center justify-center w-full">
                  <div className="bg-red-A400_23 flex flex-col items-end justify-start p-[58px] md:px-10 sm:px-5 w-full">
                    <ul className="flex flex-col items-start justify-start mb-[61px] mr-[89px] w-[82%] md:w-full common-column-list">
                      <li>
                        <a href="javascript:">
                          <div className="flex flex-row font-lato sm:gap-10 items-center justify-between md:ml-[0] ml-[314px]">
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
                            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[64%] md:w-full">
                              <Text
                                className="leading-[28.00px] text-black-900 text-xl"
                                size="txtOpenSansRegular20Black900"
                              >
                                We catalyze your luxurious vacation
                              </Text>
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
                            </div>
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
                          className="md:ml-[0] ml-[314px] mt-9 text-black-900 text-xl"
                        >
                          <Text size="txtOpenSansRomanRegular20">
                            support@ewaproperties.com
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-red-A400 flex flex-col items-center justify-start p-[19px] w-full">
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
                className="absolute h-[563px] inset-y-[0] my-auto object-cover right-[0]"
                src="images/img_component38.png"
                alt="componentThirtySeven"
              />
              <Img
                className="absolute bottom-[1%] h-[490px] left-[0] object-cover"
                src="images/img_component35.png"
                alt="componentThirtySix"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutusPage;
