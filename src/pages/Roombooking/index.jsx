import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text, TextArea } from "components";
import Process from "./Process";
import BookingForm from "./BookingForm";
import RoomSummary from "./RoomSummary";
import PaymentSummary from "./PaymentSummary";
import BillingInfo from "./../Payment/BillingInfo";
import BookingConfirm from "./BookingConfirm";

const RoombookingPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  //   const [formData, setFormData] = useState({
  //     name: "",
  //     email: "",
  //     password: "",
  //   });

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData((prevState) => ({
  //       ...prevState,
  //       [name]: value,
  //     }));
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <>
      <div className="bg-white-A700 flex flex-col  font-opensans items-center justify-end  pt-4 w-[100%]">
        <div className="w-[95%] h-auto flex  items-center justify-center mb-8">
          <div className="w-full h-auto  flex flex-col justify-center items-center px-8 py-10 shadow-bs5 border-2 ">
            <div className="flex  justify-center h-auto ">
              <div>
                <div
                  className={`w-12 h-12 mr-1 rounded-full ${
                    step >= 1 ? "bg-green-700" : "bg-gray-200"
                  }`}
                >
                  <span className=" relative top-3 text-white text-sm flex items-center justify-center">
                    {step >= 1 ? "1" : "1"}
                  </span>
                </div>
              </div>
              <div
                className={`relative top-6 w-72 md:w-20 h-1 bg-gray-300 mr-1 ${
                  step >= 2 ? "bg-green-700" : ""
                }`}
              ></div>
              <div>
                <div
                  className={`w-12 h-12 mr-1 rounded-full ${
                    step >= 2 ? "bg-green-700" : "bg-gray-200"
                  }`}
                >
                  <span className="relative top-3 text-white text-sm flex items-center justify-center">
                    {step >= 2 ? "2" : "2"}
                  </span>
                </div>
              </div>
              <div
                className={`relative top-6 w-72 md:w-20  h-1 bg-gray-300 ${
                  step >= 3 ? "bg-green-700" : ""
                }`}
              ></div>
              <div>
                <div
                  className={`w-12 h-12 ml-1 rounded-full ${
                    step >= 3 ? "bg-green-700" : "bg-gray-200"
                  }`}
                >
                  <span className="relative top-3 text-white text-sm flex items-center justify-center">
                    {step >= 3 ? "3" : "3"}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <span
                className={`relative right-44 md:right-4 mr-2 ${
                  step >= 1 ? "text-green-700" : ""
                }`}
              >
                Your Information
              </span>
              <span
                className={`relative left-4 md:left-4 mr-2 ${
                  step >= 2 ? "text-green-700" : ""
                }`}
              >
                Payment Information
              </span>
              <span
                className={`relative left-48 md:left-7 ${
                  step >= 3 ? "text-green-700" : ""
                }`}
              >
                Booking Confirmation
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-row md:flex-col items-end justify-start w-[95%] mx-2  ">
          <div className="w-full h-auto flex items-center justify-center ">
            <div className="w-full flex flex-col items-center">
              {step === 1 && (
                <div className="w-[90%]">
                  <BookingForm nextStep={nextStep} />
                </div>
              )}

              {step === 2 && (
                <div className="w-[80%]">
                  <BillingInfo nextStep={nextStep} />
                </div>
              )}

              {step === 3 && (
                <div>
                  <BookingConfirm />
                </div>
              )}
            </div>
          </div>

          {step === 3 || (
            <div className="w-full h-fit py-[15px] flex flex-col  items-center justify-center">
              <RoomSummary />
              <PaymentSummary />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RoombookingPage;
