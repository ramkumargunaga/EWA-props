import React from "react";
import { Button, Img, Text } from "components";
import { useNavigate } from "react-router-dom";

const topSellingData = [
  {
    imageSrc: "images/img_rectangle17.png",
    discount: "20% Off",
    details: [
      { iconSrc: "images/img_polygonaltent.png", text: "5 AC bedrooms" },
      { iconSrc: "images/img_shower.png", text: "5 attached" },
      { iconSrc: "images/img_account.png", text: "15 guests" },
    ],
  },
  {
    imageSrc: "images/img_rectangle818.png",
    discount: "20% Off",
    details: [
      { iconSrc: "images/img_polygonaltent.png", text: "5 AC bedrooms" },
      { iconSrc: "images/img_shower.png", text: "5 attached" },
      { iconSrc: "images/img_account.png", text: "15 guests" },
    ],
  },
  {
    imageSrc: "images/img_rectangle17.png",
    discount: "20% Off",
    details: [
      { iconSrc: "images/img_polygonaltent.png", text: "5 AC bedrooms" },
      { iconSrc: "images/img_shower.png", text: "5 attached" },
      { iconSrc: "images/img_account.png", text: "15 guests" },
    ],
  },
];
function TopSelling() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <Text
          className="ml-10 md:text-5xl text-[70px] text-indigo-900 sm:text-3xl"
          size="txtInterBold70"
        >
          Top Selling
        </Text>
        <div className="gap-[30px] flex flex-row md:flex-row md:gap-5 items-center justify-between w-full p-10 bg-white rounded-md sm:flex-col">
          {topSellingData.map((item, index) => (
            <div
              key={index}
              className=" relative md:w-[31%] lg:w-[31%] sm:w-full"
            >
              <Img
                className="w-full h-auto rounded-md"
                src={item.imageSrc}
                alt={`Top Selling ${index + 1}`}
              />
              <Button
                className="sm:block absolute cursor-pointer font-bold leading-[normal] min-w-[86px] right-[0] rounded-br-[25px] rounded-tl-[25px] text-center text-lg top-[0]"
                color="pink_A400"
                size="lg"
              >
                {item.discount}
              </Button>
              <div className="mt-5 flex flex-col justify-center">
                {item.details.map((detail, detailIndex) => (
                  <div
                    key={detailIndex}
                    className="mx-8 mt-3 flex items-center gap-5"
                  >
                    <Img
                      className="w-10 h-10"
                      src={detail.iconSrc}
                      alt={detail.text}
                    />
                    <Text size="txtInterMedium20">{detail.text}</Text>
                  </div>
                ))}
              </div>
              <Button
                className="ml-[20%] sm:ml-[28%] mt-3 border border-red-A400 border-solid cursor-pointer leading-[normal] mb-1 min-w-[91px] md:ml-[0] rounded-[12px] text-[10px] text-center sm:block"
                color="gray_50_01"
                size="sm"
              >
                View details
              </Button>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center h-full">
          <Button
            className="sm:block common-pointer cursor-pointer font-opensans font-semibold min-w-[250px] md:ml-[0] rounded-[40px] sm:text-[20px] md:text-[46px] text-[45px] text-center"
            onClick={() => navigate("/checkavailability")}
            color="red_A400"
            size="sm"
          >
            More
          </Button>
        </div>
      </div>
    </>
  );
}
export default TopSelling;
