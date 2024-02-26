import React from "react";

const CardComponent = ({
  title,
  dateRange,
  roomType,
  availabilityMessage,
  price,
  taxesIncluded,
  images,
}) => {
  return (
    <div className="bg-white-A700 border border-black-900_7f border-solid flex flex-col font-opensans items-center justify-start max-w-[1363px] mt-[53px] mx-auto p-[30px] md:px-5 rounded-[50px] shadow-bs w-full">
      <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-[97%] md:w-full">
        <img
          className="h-[330px] sm:h-auto object-cover rounded-[25px] w-[33%] md:w-full"
          src={images[0].src}
          alt={images[0].alt}
        />
        <div className="flex flex-col items-start justify-start mb-0.5 md:ml-[0] ml-[46px] md:mt-0 mt-[26px] w-[34%] md:w-full">
          <h2 className="sm:text-[35px] md:text-[41px] text-[45px] text-black-900">
            {title}
          </h2>
          <p className="md:ml-[0] ml-[5px] mt-4 text-2xl md:text-[22px] text-black-900_cc sm:text-xl">
            {dateRange}
          </p>
          <p className="md:ml-[0] ml-[7px] mt-[9px] text-black-900_e2 text-xl">
            {roomType}
          </p>
          <p className="md:ml-[0] ml-[7px] mt-[19px] text-base text-red-A700">
            {availabilityMessage}
          </p>
          {/* Additional JSX for other elements */}
        </div>
        {/* Additional JSX for other elements */}
      </div>
    </div>
  );
};

export default CardComponent;
