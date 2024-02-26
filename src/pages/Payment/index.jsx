import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Radio, RadioGroup, Text } from "components";
import BillingInfo from "./BillingInfo";
import RoomSummary from "pages/Roombooking/RoomSummary";
import PaymentSummary from "pages/Roombooking/PaymentSummary";

const PaymentPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-opensans items-center justify-center pt-[19px] w-full">
        <div className="flex flex-col pt-3 px-6 justify-center w-full">
          <div>
            <BillingInfo />
          </div>
          <div className="flex flex-col w-full h-fit items-center justify-center my-10">
            <RoomSummary />
            <PaymentSummary />
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
