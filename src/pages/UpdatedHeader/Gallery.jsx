import React from "react";
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
  "images/img_image11.png",
  "images/img_image12_1.png",
  "images/img_image12_2.png",
  "images/img_image12_3.png",
  "images/img_image12_4.png",
  "images/img_image11.png",
];

function Gallery() {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 3 }}>
      <div style={{ marginTop: "2%", marginLeft: "4%" }}>
        <Text
          className="ml-2.5 md:ml-[0] text-2xl md:text-[22px] text-red-A400 sm:text-xl tracking-[4.32px]"
          size="txtOpenSansRomanSemiBold24RedA400"
        >
          Gallery
        </Text>

        <Text
          style={{
            marginTop: "2%",
            marginLeft: "1%",
            color: "#0D2C5B",
            fontFamily: "Poppins",
            fontSize: "24px",
            fontWeight: "400",
            lineHeight: "10px",
            letterSpacing: "0em",
          }}
        >
          A Pictorial Escape
        </Text>
      </div>
      <Masonry>
        {images.map((image, i) => (
          <img
            key={i}
            src={image}
            style={{
              width: "100%%",
              display: "block",
              margin: "10%",
              borderRadius: "10px",
            }}
            alt=""
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
}

export default Gallery;
