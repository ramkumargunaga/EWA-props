import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Img, Text } from "components";
import NavBar from "pages/UpdatedHeader/Navbar";

const sections = [
  {
    title: "Tatasth beach villa",
    images: [
      "images/img_image11.png",
      "images/img_image12_1.png",
      "images/img_image12_2.png",
      "images/img_image12_3.png",
    ],
  },
  {
    title: "Villa lahari",
    images: [
      "images/img_image12_4.png",
      "images/img_image11.png",
      "images/img_image11.png",
      "images/img_image11.png",
    ],
  },
  {
    title: "SManglore beach stay",
    images: [
      "images/img_image12_3.png",
      "images/img_image12_2.png",
      "images/img_image12_1.png",
      "images/img_image11.png",
    ],
  },
  {
    title: "Seascape",
    images: [
      "images/img_image11.png",
      "images/img_image11.png",
      "images/img_image12_1.png",
      "images/img_image12_2.png",
    ],
  },
];

function Gallery() {
  return (
    <div>
      <NavBar />
      <div className="p-10 mt-[6%] sm:mt-[15%]">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <Text className="mt-10 mb-10 text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center">
              {section.title}
            </Text>
            <div className="grid gap-4 md:gap-8 lg:gap-12 grid-cols-4 md:grid-cols-2 lg:grid-cols-4">
              {section.images.map((image, imageIndex) => (
                <Img
                  key={imageIndex}
                  src={image}
                  className="w-full rounded-md"
                  alt=""
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
