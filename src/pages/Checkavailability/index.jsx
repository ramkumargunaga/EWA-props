import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";

import NavBar from "./../UpdatedHeader/Navbar";
import Nav from "pages/UpdatedHeader/Nav";
import CardComponent from "./CardComponent";
import Footer from "./../UpdatedHeader/Footer";

const properties = [
  {
    id: 1,
    src: "images/img_rectangle865.png",
    alt: "rectangle865",
    name: "Tatasth beach villa",
    checkInDate: "Aug 2, 2023",
    checkOutDate: "Aug 3, 2023",
    roomType: "Luxury Cottage Room",
    roomsLeft: "2",
    noOfGuestsAccommodated: "2",
    roomSize: "244 Sq. Ft",
    bedType: "King Size Bed",
    viewType: "City View",
    description: "A stunning villa with panoramic views.",
    price: "Rs 9,200.00",
  },
  {
    id: 2,
    src: "images/img_rectangle865.png",
    alt: "rectangle865",
    name: "Villa Lahari",
    checkInDate: "Aug 2, 2023",
    checkOutDate: "Aug 3, 2023",
    roomType: "Heritage Cottage Room",
    roomsLeft: "2",
    noOfGuestsAccommodated: "2",
    roomSize: "244 Sq. Ft",
    bedType: "King Size Bed",
    viewType: "City View",
    description: "A stunning villa with panoramic views.",
    price: "Rs 7,200.00",
  },
  {
    id: 3,
    src: "images/img_rectangle869.png",
    alt: "rectangle865",
    name: "Mangalore Luxury stay",
    checkInDate: "Aug 2, 2023",
    checkOutDate: "Aug 3, 2023",
    roomType: "Luxury Cottage Room",
    roomsLeft: "1 ",
    noOfGuestsAccommodated: "2",
    roomSize: "244 Sq. Ft",
    bedType: "King Size Bed",
    viewType: "City View",
    description: "A stunning villa with panoramic views.",
    price: "Rs 11,200.00",
  },
  // Add more property objects as needed
];

const CheckavailabilityPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Nav />
      <div className="bg-white-A700 flex flex-col font-opensans items-center justify-end mx-auto w-full">
        <div className="mt-[108px] w-[95%] flex flex-col items-center ">
          <Text
            className="sm:text-2xl md:text-lg text-6xl text-gray-900_01"
            size="txtInterBold60Gray90001"
          >
            Check availability
          </Text>
          <div className="w-full h-auto flex items-center justify-center">
            <div className="w-[70%] h-auto flex items-center justify-center pt-10">
              <input
                type="text"
                className="w-[100%] sm:h-6 sm:pl-6 h-20 rounded-full pl-24 text-xl "
                placeholder="Search Availability"
              />
              <div>
                <button className=" relative  h-20 w-[88px] bg-red-A400 rounded-full right-20">
                  check
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="Flex flex-col font-opensans items-center justify-start max-w-[1363px] mt-[53px] mx-auto p-[30px] md:px-5 rounded-[50px]  w-full">
          {properties.map((property) => (
            <CardComponent key={property.id} property={property} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckavailabilityPage;
