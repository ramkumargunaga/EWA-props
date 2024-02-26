import React from "react";
import { Text } from "components";
import { Img } from "components";

function BookingConfirm() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[80%] bg-white-A700 border border-black-900 border-solid p-48 m-4">
        <div className="flex sm:flex-col flex-row font-poppins gap-4 items-start justify-start w-auto md:w-full mb-5">
          <Img
            className="h-[52px] md:h-auto object-cover w-[52px]"
            src="images/img_check13.png"
            alt="checkThirteen"
          />
          <Text
            className="sm:mt-0 mt-0.5 text-4xl sm:text-[32px] md:text-[34px] w-auto text-black-900_d1 text-center"
            size="txtPoppinsSemiBold36"
          >
            Booking Confirmed
          </Text>
        </div>

        <Text
          className="leading-[34.00px] md:ml-[0] ml-[59px] text-2xl md:text-[22px] text-black-900_d1 sm:text-xl w-[96%] sm:w-full"
          size="txtOpenSansRomanSemiBold24Black900d1"
        >
          You will receive a mail with the details of the room booking. Awaiting
          your presence. Thanks for booking with us!
        </Text>
      </div>
    </div>
  );
}

export default BookingConfirm;
