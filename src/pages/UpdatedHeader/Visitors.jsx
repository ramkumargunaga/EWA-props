import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  Slider,
  Text,
} from "components";
function Visitors() {
  const navigate = useNavigate();

  return (
    <div className="mt-10">
      <div>
        <Text
          className="sm:text-2xl  md:text-5xl text-[70px] text-center text-indigo-900"
          size="txtInterBold70"
        >
          Our visitor stories
        </Text>
        <Text
          className="sm:text-xl mt-[7px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
          size="txtInterMedium30"
        >
          A collection of our best visitor stories
        </Text>
      </div>
      <div className="sm:px-5 flex md:flex-col flex-row font-inter md:gap-10 items-center justify-around md:ml-[0] mt-[77px] md:w-full">
        <div
          className="h-[400px] relative w-[400px] sm:w-full"
          onClick={() => {
            navigate("/visitors");
          }}
        >
          <Img
            className="h-[400px] m-auto object-cover rounded-[5px] w-[400px] cursor-pointer"
            src="images/img_rectangle50.png"
            alt="rectangleFifty"
          />

          <Text
            className="absolute bottom-[37%] right-[30%] md:text-5xl text-6xl text-center text-white-A700"
            size="txtInterBold60"
          >
            30+
          </Text>
        </div>
        <Img
          className="h-[400px] md:h-auto object-cover rounded-[5px] w-[400px] sm:w-full"
          src="images/img_rectangle51.png"
          alt="rectangleFiftyOne"
        />
        <Img
          className="h-[400px] md:h-auto object-cover rounded-[5px] w-[400px] sm:w-full"
          src="images/img_rectangle52.png"
          alt="rectangleFiftyTwo"
        />
      </div>
      <div className="flex flex-row font-inter gap-2 items-center justify-end md:ml-[0] ml-[1178px] mt-[13px] w-[14%] md:w-full">
        <div className="flex flex-col items-end justify-start">
          <Text className="text-black-900 text-xl" size="txtInterRegular20">
            Do follow us on
          </Text>
          <Text
            className="mt-0.5 text-[15px] text-black-900"
            size="txtInterExtraLight15"
          >
            @ewaprpperties
          </Text>
        </div>
        <Img
          className="h-[45px] md:h-auto object-cover w-[45px]"
          src="images/img_instagramicon.png"
          alt="instagramicon"
        />
      </div>
    </div>
  );
}

export default Visitors;
