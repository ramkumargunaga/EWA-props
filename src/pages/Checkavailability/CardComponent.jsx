import React from "react";
import { Button, Img, Input, Line, Text } from "components";

const CardComponent = ({ property }) => {
  const {
    id,
    src,
    alt,
    name,
    checkInDate,
    checkOutDate,
    roomType,
    roomsLeft,
    noOfGuestsAccommodated,
    roomSize,
    bedType,
    viewType,
    description,
    price,
  } = property;

  return (
    <>
      <div className="bg-white-A700 border border-black-900_7f border-solid flex flex-col font-opensans  justify-start max-w-[1363px] mt-[53px] mx-auto p-[30px] md:px-5 rounded-[50px] shadow-bs w-full">
        <div className="flex flex-row sm:flex-col gap-5">
          <div className="w-[33%] sm:w-full h-[100%]">
            <img className="h-80" src={src} alt={alt} />
          </div>

          <div className="w-[33%] sm:w-full">
            <Text
              className="sm:text-[35px] md:text-[41px] text-[45px] text-black-900 w-fit"
              size="txtOpenSansRomanBold45"
            >
              {name}
            </Text>
            <Text
              className="md:ml-[0] ml-[5px] mt-4 text-2xl md:text-[22px] text-black-900_cc sm:text-xl"
              size="txtOpenSansRomanSemiBold24Black900cc"
            >
              {checkInDate} - {checkOutDate}
            </Text>
            <Text
              className="md:ml-[0] ml-[7px] mt-[9px] text-black-900_e2 text-xl"
              size="txtOpenSansRomanSemiBold20Black900e2"
            >
              {roomType}
            </Text>
            <Text
              className="md:ml-[0] ml-[7px] mt-[19px] text-base text-red-A700"
              size="txtOpenSansRomanSemiBold16RedA700"
            >
              Only {roomsLeft} Rooms Left. Hurry!!!
            </Text>
            <Text
              className="md:ml-[0] ml-[7px] mt-[19px] mb-[19px] bg-green-400 font-bold w-fit"
              size="txtOpenSansRomanSemiBold16RedA700"
            >
              Break fast included
            </Text>
            <Button
              className=" md:block common-pointer cursor-pointer font-semibold leading-[normal] min-w-[123px] rounded-[16px] shadow-bs text-center text-xl"
              onClick={() => navigate("/roombooking")}
              color="red_A400"
              size="xs"
            >
              Book now
            </Button>
          </div>

          <div className="flex flex-col items-center justify-start md:mt-0 mt-[75px] w-[42%] md:w-full">
            <div className="flex flex-col gap-[42px] items-center justify-start w-full">
              <div className="flex flex-row gap-[29px] items-center justify-between w-full">
                <div className="flex flex-row gap-[15px] items-center justify-start w-[54%]">
                  <Img
                    className="h-8 md:h-auto object-cover w-[18%]"
                    src="images/img_image22.png"
                    alt="imageTwentyTwo_One"
                  />
                  <Text
                    className="leading-[20.00px] text-base text-gray-700 w-[74%] sm:w-full"
                    size="txtOpenSansRomanSemiBold16Gray700"
                  >
                    {noOfGuestsAccommodated} Person Accomodation
                  </Text>
                </div>
                <div className="flex flex-row gap-[15px] items-end justify-start w-[38%]">
                  <Img
                    className="h-8 md:h-auto object-cover w-[26%]"
                    src="images/img_image24.png"
                    alt="imageTwentyFour_One"
                  />
                  <Text
                    className="mb-0.5 mt-[7px] text-base text-gray-700"
                    size="txtOpenSansRomanSemiBold16Gray700"
                  >
                    {roomSize}
                  </Text>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between w-full">
                <div className="flex flex-row gap-[15px] items-end justify-start w-[47%]">
                  <Img
                    className="h-8 md:h-auto object-cover w-[21%]"
                    src="images/img_image23.png"
                    alt="imageTwentyThree_One"
                  />
                  <Text
                    className="mb-[3px] mt-1.5 text-base text-gray-700"
                    size="txtOpenSansRomanSemiBold16Gray700"
                  >
                    {bedType}
                  </Text>
                </div>
                <div className="flex flex-row gap-[15px] items-end justify-start w-[37%]">
                  <Img
                    className="h-8 md:h-auto object-cover w-[26%]"
                    src="images/img_image25.png"
                    alt="imageTwentyFive_One"
                  />
                  <Text
                    className="mb-0.5 mt-[7px] text-base text-gray-700"
                    size="txtOpenSansRomanSemiBold16Gray700"
                  >
                    {viewType}
                  </Text>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <Text
                className="mb-0.5 mt-[7px] text-2xl font-bold text-black-900"
                size="txtOpenSansRomanSemiBold16Gray700"
              >
                {price}
              </Text>
              <Text
                className="mb-0.5 text-base text-black-900"
                size="txtOpenSansRomanSemiBold16Gray700"
              >
                (incl. of all taxes)
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardComponent;
