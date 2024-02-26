import React, { useState, useRef } from "react";
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
function Testimonial() {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  return (
    <div>
      {" "}
      <div className="font-inter h-[911px] md:h-[993px] sm:h-[974px] mt-[71px] relative md:w-full">
        <div
          className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-center justify-center m-auto p-[53px] md:px-10 sm:px-5 rounded-[1px] w-full"
          style={{ backgroundImage: "url('images/testimonial bg.png')" }}
        >
          <Text
            className="sm:text-3xl mb-[711px] md:text-5xl text-[70px] text-indigo-900"
            size="txtInterBold70"
          >
            TESTNIMONIALS
          </Text>
        </div>
        <div className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-center justify-center m-auto p-[34px] sm:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[91px] justify-start mb-[104px] mt-[174px] w-full">
            <Slider
              autoPlay
              autoPlayInterval={3000}
              activeIndex={sliderState}
              responsive={{
                0: { items: 1 },
                550: { items: 1 },
                1050: { items: 2 },
              }}
              onSlideChanged={(e) => {
                setsliderState(e?.item);
              }}
              ref={sliderRef}
              className="flex gap-[34px] w-full"
              items={[...Array(12)].map(() => (
                <React.Fragment key={Math.random()}>
                  <div className="h-[446px] mx-2.5 relativ">
                    <div className="flex flex-col h-[109px] items-center justify-start mb-[-54px] mx-auto w-[109px] z-[1]">
                      <Img
                        className="h-[109px] md:h-auto rounded-[50%] w-[109px]"
                        src="images/img_person1.png"
                        alt="personOne"
                      />
                    </div>
                    <div className="bg-white-A700 border border-black-900 border-solid flex flex-col gap-5 items-center justify-end mt-auto mx-auto p-[45px] md:px-10 sm:px-5 rounded-bl-[40px] rounded-br-[100px] rounded-tl-[100px] rounded-tr-[40px] w-full">
                      <Img
                        className="h-[13px] mt-2"
                        src="images/img_stars.svg"
                        alt="stars"
                      />
                      <div className="flex flex-col justify-start">
                        <Text
                          className="leading-[29.00px] text-base text-blue_gray-600 text-center w-full"
                          size="txtInterMedium16"
                        >
                          Lorem ipsum dolor sit amet consectetur. Tortor massa
                          nisl quam sit. Vitae congue ultrices neque penatibus
                          mi in quisque. Leo in cursus enim magnis ante. Proin
                          iaculis platea ipsum sagittis ac eu aliquam quis.
                          Ornare tincidunt tempus semper{" "}
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[120px] mt-[21px] text-base text-center text-red-A400"
                          size="txtInterBold16"
                        >
                          Ama Ampomah
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[114px] mt-0.5 text-[15px] text-blue_gray-600 text-center"
                          size="txtInterRegular15"
                        >
                          CEO & Founder Inc{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
              renderDotsItem={({ isActive }) => {
                if (isActive) {
                  return (
                    <div className="inline-block cursor-pointer rounded-[50%] h-[7px] bg-red-A400 w-[7px]" />
                  );
                }
                return (
                  <div
                    className="inline-block cursor-pointer rounded-[50%] h-[7px] bg-gray-900_6c w-[7px]"
                    role="button"
                    tabIndex={0}
                  />
                );
              }}
            />
            <PagerIndicator
              className="flex h-[7px] md:ml-[0] ml-[517px] w-[173px]"
              count={6}
              activeCss="inline-block cursor-pointer rounded-[50%] h-[7px] bg-red-A400 w-[7px]"
              activeIndex={sliderState}
              inactiveCss="inline-block cursor-pointer rounded-[50%] h-[7px] bg-gray-900_6c w-[7px]"
              sliderRef={sliderRef}
              selectedWrapperCss="inline-block md:ml-[0] mx-[11.50px] sm:ml-[0]"
              unselectedWrapperCss="inline-block md:ml-[0] mx-[11.50px] sm:ml-[0]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
