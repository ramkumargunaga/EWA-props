import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const BookingconfirmationPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 font-sourcesanspro h-[1202px] mx-auto pt-4 relative w-full">
        
        <div className="flex flex-col gap-8 items-center justify-start mt-auto mx-auto w-full">
          <div className="h-[640px] sm:h-[742px] md:h-[767px] max-w-[1440px] mx-auto md:px-5 relative w-full">
            <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
              <div className="flex flex-col gap-[42px] items-center justify-start w-full">
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
        </div>
      </div>
    </>
  );
};

export default BookingconfirmationPage;
