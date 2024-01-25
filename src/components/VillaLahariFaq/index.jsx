import React from "react";

import { Img, Line, Text } from "components";

const VillaLahariFaq = (props) => {
  return (
    <>
      <div className={props.className}>
        <Line className="bg-gray-500 h-px w-full" />
        <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between max-w-[800px] pb-2 pt-4 px-2 w-full">
          <div className="flex flex-row gap-2 items-start justify-start w-auto">
            <Img
              className="h-6 w-6"
              src="images/img_evainfooutline.svg"
              alt="evainfooutline"
            />
            <Text
              className="text-blue_gray-800 text-center text-xl w-auto"
              size="txtPoppinsSemiBold20Bluegray800"
            >
              {props?.ticketquestion}
            </Text>
          </div>
          <Img className="h-6 w-6" src="images/img_arrowup.svg" alt="arrowup" />
        </div>
        <div className="flex flex-col items-start justify-start px-10 sm:px-5 py-4 w-auto md:w-full">
          <Text
            className="leading-[160.00%] max-w-[720px] md:max-w-full text-gray-700_02 text-xl"
            size="txtPoppinsRegular20"
          >
            {props?.answerone}
          </Text>
        </div>
        <Line className="bg-gray-500 h-px w-full" />
      </div>
    </>
  );
};

VillaLahariFaq.defaultProps = {
  ticketquestion: "Do we get breakfast and dinner ?",
  answerone:
    "Yes, we provide both breakfast and dinner. Our experienced chefs will provide you with the most amazing cousine.",
};

export default VillaLahariFaq;
