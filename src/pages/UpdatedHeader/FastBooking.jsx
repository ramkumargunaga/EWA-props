import React, { useState } from "react";

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

const roomData = [
  {
    imageSrc: "images/img_image11.png",
    title: "Luxury Cottage Room",
    description:
      "Our spacious suites embody luxury and sophistication and enjoy the experience with a spacious sitting area, luxury bedding and free Wi-Fi.",
    viewMoreUrl: "/luxurycottage",
    bookRoomUrl: "/villalahari",
  },
  {
    imageSrc: "images/img_image11_483x572.png",
    title: "Luxury Cottage Room",
    description:
      "Our spacious suites embody luxury and sophistication and enjoy the experience with a spacious sitting area, luxury bedding and free Wi-Fi.",
    viewMoreUrl: "/luxurycottage",
    bookRoomUrl: "/villalahari",
  },
];

function FastBooking() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="mt-10 font-inter w-full">
        <Text
          className="sm:text-2xl md:text-5xl text-[60px] text-center text-indigo-900 top-[0]"
          size="txtInterBold70"
        >
          FAST BOOKING SECTION
        </Text>
        <div
          className=" bg-cover bg-no-repeat bottom-[0] flex flex-col font-opensans inset-x-[0] items-center justify-end mx-auto p-[17px] rounded-[1px] w-full"
          style={{ backgroundImage: "url('images/img_group67.svg')" }}
        >
          <div className="flex flex-col items-center justify-start mt-[30px] w-[97%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              {roomData.map((room, index) => (
                <div
                  key={index}
                  className="bg-gray-400 md:mt-0 mt-[3px] relative rounded-[10px] shadow-bs2 w-[43%] md:w-full"
                >
                  <img
                    className="h-[483px] m-auto object-cover rounded-[10px] w-full"
                    src={room.imageSrc}
                    alt={room.title}
                  />
                  <div className="absolute bg-black-900_89 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[15px] w-full">
                    <div className="flex flex-col items-start justify-start mt-[7px] w-[96%] md:w-full">
                      <h2 className="text-white-A700 text-xl">{room.title}</h2>
                      <p className="leading-[20.00px] mt-[9px] text-white-A700 text-xs w-full">
                        {room.description}
                      </p>
                      <div className="flex sm:flex-col flex-row gap-12 items-center justify-start mt-[33px] w-[92%] md:w-full">
                        <Button
                          className="sm:block common-pointer cursor-pointer font-bold min-w-[212px] text-center text-xs underline"
                          onClick={() => navigate(room.viewMoreUrl)}
                          shape="round"
                          color="white_A700"
                          size="lg"
                          variant="outline"
                        >
                          View More
                        </Button>

                        <Button
                          className="sm:block common-pointer cursor-pointer font-bold min-w-[212px] text-center text-xs underline"
                          onClick={() => navigate(room.bookRoomUrl)}
                          shape="round"
                          color="red_A400_7f"
                          size="lg"
                        >
                          Book Room
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FastBooking;
