import React from "react";
import { Button, Img, Input, Line, Text, TextArea } from "components";

function PaymentSummary() {
  return (
    <div className="bg-white-A700 border border-black-900_66 border-solid rounded-[10px] shadow-bs6 w-[85%] h-fit px-3 py-3 mt-9">
      <div>
        <Text
          className="md:ml-[0] ml-[30px] mt-[31px] text-black-900_cc text-xl "
          size="txtPoppinsBold20"
        >
          Payment Summary
        </Text>

        <div className="flex flex-row gap-[39px] items-start justify-between w-full my-6">
          <Text
            className="text-black-900_d3 text-xl"
            size="txtOpenSansRomanSemiBold20Black900d3"
          >
            Subtotal :{" "}
          </Text>
          <Text
            className="text-2xl md:text-[22px] text-black-900_d3 sm:text-xl"
            size="txtOpenSansRomanSemiBold24Black900d3"
          >
            Rs 8,000.00
          </Text>
        </div>
        <div className="flex flex-row gap-[38px] items-start justify-between w-full">
          <Text
            className="text-black-900_d3 text-xl"
            size="txtOpenSansRomanSemiBold20Black900d3"
          >
            Taxes & Fees :{" "}
          </Text>
          <Text
            className="text-2xl md:text-[22px] text-black-900_d3 sm:text-xl"
            size="txtOpenSansRomanSemiBold24Black900d3"
          >
            Rs 1,200.00
          </Text>
        </div>
        <Line className="bg-black-900_30 h-px mt-[52px] w-full" />
        <div className="flex flex-row gap-[37px] items-center justify-start md:ml-[0] ml-[9px] mt-[15px] w-[79%] md:w-full">
          <Text
            className="text-black-900_e2 text-xl"
            size="txtOpenSansRomanSemiBold20Black900e2"
          >
            Total Pay :{" "}
          </Text>
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-black-900_e2"
            size="txtOpenSansRomanSemiBold32"
          >
            Rs 9,200.00
          </Text>
        </div>
        <Text
          className="md:ml-[0] ml-[186px] mt-[9px] text-base text-black-900_e2"
          size="txtOpenSansRomanSemiBold16Black900e2"
        >
          (Incl. of all taxes)
        </Text>
      </div>
    </div>
  );
}

export default PaymentSummary;
