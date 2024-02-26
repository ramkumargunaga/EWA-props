import React from "react";
import { useNavigate } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

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
const images = [
  {
    src: "images/img_image11.png",
    alt: "Image 1",
    title: "Hummingbir",
  },
  {
    src: "images/img_image12_1.png",
    alt: "Image 2",
    title: "Seascape",
  },
  {
    src: "images/img_image12_2.png",
    alt: "Image 3",
    title: "Top Selling",
  },
  {
    src: "images/img_image12_3.png",
    alt: "Image 4",
    title: "Villa Vihari",
  },
];

function Properties() {
  const navigate = useNavigate();

  return (
    <div className="" style={{ marginTop: "10%", position: "relative" }}>
      <div>
        <Img
          className="triangle-bg h-[400px] absolute top-[-44%] right-0 sm:h-[200px] sm:top-[-18%]"
          src="images/img_component34.png"
          alt="componentThirtyFour"
        />
      </div> 
      <div>
        <div>
          <div style={{ position: "absolute", top: "40px", left: 0 }}>
            <Text
              className="ml-10 md:text-5xl text-[70px] sm:text-center text-indigo-900 sm:text-[22px]"
              size="txtInterBold70"
            >
              Premium Featured Properties
            </Text>
            <Text
              className="ml-10 sm:text-[12px] md:text-[38px] sm:text-center sm:ml-[0] text-[40px] text-red-A400 sm:mt-5"
              size="txtIstokWebRegular40"
            >
              Choose from our finest collection of properties
            </Text>
          </div>
          <Img
            className="vector13 h-[258px] object-cover sm:h-[106px]"
            src="images/Vector 13.png"
            alt="componentThirtyFour"
          />
        </div>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 4 }}>
          <Masonry>
            {images.map((image, i) => (
              <div key={i} className="mx-3 image-wrapper sm:mt-10">
                <img
                  src={image.src}
                  className="p-8 sm:p-0 sm:w-full sm:gap-[10px] ml-0 sm:mx-0"
                  style={{
                    width: "100%",
                    display: "block",
                    borderRadius: "4px",
                  }}
                  alt={image.alt}
                />
                <div className="mx-10 sm:mx-0">
                  <div className="flex flex-start">
                    <Text
                      className="w-0 ml-auto mr-[210px] mt-0.5 sm:text-3xl md:text-[42px] text-[46px] text-black-900"
                      size="txtInterBold46"
                    >
                      <span>0</span>
                      {i + 1}
                    </Text>
                    <div className="bg-gray-800_7f h-2 mb-7 sm:ml-[0] ml-[15px] sm:mt-0 mt-[19px] rounded w-full"></div>
                  </div>
                  <Text
                    className="sm:text-[20px] mb-5 md:text-[33px] text-[35px] text-gray-800_01"
                    size="txtInterBold35"
                  >
                    {image.title}
                  </Text>
                </div>
              </div>
            ))}
          </Masonry>
          <div className="float-right">
            <Img
              className="h-[258px] absolute top-[59%] right-0 object-cover sm:h-[97px] sm:top-[78%]"
              src="images/Vector 14.png"
              alt="componentThirtyFour"
            />
          </div>
        </ResponsiveMasonry>
      </div>
      <div>
        <Img
          className=" h-[300px] sm:h-[106px]"
          src="images/Component 35.png"
          alt="componentThirtyFour"
        />
      </div>
    </div>
  );
}

export default Properties;
