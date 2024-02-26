import React, { useState, useRef } from "react";
import { Text, Img, Input, Button } from "components";
import { useNavigate } from "react-router-dom";

function ContactUs() {
  const navigate = useNavigate();

  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const contactNumberRef = useRef("");
  const emailAddressRef = useRef("");
  const feedbackRef = useRef("");

  const handleSubmit = () => {
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const contactNumber = contactNumberRef.current.value;
    const emailAddress = emailAddressRef.current.value;
    const feedback = feedbackRef.current.value;

    if (
      !firstName ||
      !lastName ||
      !contactNumber ||
      !emailAddress ||
      !feedback
    ) {
      alert("Please fill in all fields.");
      return;
    }

    alert(
      `First Name: ${firstName}\nLast Name: ${lastName}\nContact Number: ${contactNumber}\nEmail Address: ${emailAddress}\nFeedback: ${feedback}`
    );

    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    contactNumberRef.current.value = "";
    emailAddressRef.current.value = "";
    feedbackRef.current.value = "";
  };

  return (
    <div className=" mx-10 mb-10">
      <div style={{ marginTop: "2%" }}>
        <Text
          style={{ fontSize: "30px" }}
          className="text-center ml-2.5 md:ml-[0] text-2xl md:text-[22px] text-red-A400 sm:text-xl tracking-[4.32px]"
          size="txtOpenSansRomanSemiBold24RedA400"
        >
          Contact US
        </Text>

        <Text
          className="text-center sm:text-xl mt-4  text-3xl"
          style={{
            color: "#0D2C5B",
            fontFamily: "Poppins",
            fontWeight: "400",
            lineHeight: "10px",
            letterSpacing: "0em",
          }}
        >
          Reach out to Hyge Royal
        </Text>
        <div className="flex flex-col font-opensans md:gap-10 gap-[71px] items-center justify-start mt-[40px] w-full">
          <div className="flex sm:flex-col flex-row sm:gap-[50px] items-center justify-between w-full">
            <Input
              name="firstName"
              placeholder="First Name"
              ref={firstNameRef}
              className="font-semibold p-0 placeholder:text-black-900_89 text-left text-xl w-full"
              wrapClassName="w-1/2 mx-10 border border-red-A400 border-solid sm:flex-1 sm:w-full"
              type="text"
              shape="round"
              color="white_A700"
            />
            <Input
              name="lastName"
              placeholder="Last Name"
              ref={lastNameRef}
              className="font-semibold p-0 placeholder:text-black-900_89 text-left text-xl w-full"
              wrapClassName="w-1/2 border border-red-A400 border-solid sm:flex-1 sm:w-full"
              type="text"
              shape="round"
              color="white_A700"
            />
          </div>
          <div className="mx-10 flex sm:flex-col flex-row sm:gap-[50px] items-center justify-between w-full">
            <Input
              name="contactNumber"
              placeholder="Contact Number"
              ref={contactNumberRef}
              className="font-semibold p-0 placeholder:text-black-900_89 text-left text-xl w-full"
              wrapClassName="w-1/2 mx-10 border border-red-A400 border-solid sm:flex-1 sm:w-full"
              type="text"
              shape="round"
              color="white_A700"
            />
            <Input
              name="emailAddress"
              placeholder="Email Address"
              ref={emailAddressRef}
              className="font-semibold p-0 placeholder:text-black-900_89 text-center text-xl w-full"
              wrapClassName="w-1/2 sm:flex-1 sm:w-full"
              type="email"
              shape="round"
              color="red_A400"
              variant="outline"
            />
          </div>
          <div className=" flex flex-col font-opensans items-start justify-start rounded-lg">
            <textarea
              className="border border-red-A400 border-solid w-full"
              placeholder="Feedback"
              name="feedback"
              ref={feedbackRef}
              rows={3}
              cols={50}
            />
          </div>
          <Button
            onClick={handleSubmit}
            className="border border-red-A400 border-solid cursor-pointer font-bold leading-[normal] min-w-[207px] text-base text-center block"
            shape="round"
            color="red_A400_66"
            size="lg"
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
