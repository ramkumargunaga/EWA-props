import React from "react";

import { Img, Line, Text } from "components";

const VillaLahariFaq1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Line className="bg-gray-500 h-px w-full" />
        <div className="flex flex-row sm:gap-10 items-start justify-between max-w-[800px] px-2 py-4 w-full">
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
              {props?.peopletext}
            </Text>
          </div>
          <Img
            className="h-6 w-6"
            src="images/img_arrowup_gray_500.svg"
            alt="arrowup"
          />
        </div>
        <Line className="bg-gray-500 h-px w-full" />
      </div>
    </>
  );
};

VillaLahariFaq1.defaultProps = { peopletext: "Do you have jacuzzi ?" };

export default VillaLahariFaq1;
