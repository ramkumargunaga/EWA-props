import React from "react";
import { Button, Img, Input, Line, Radio, RadioGroup, Text } from "components";

function BillingInfo() {
  return (
    <div className="w-full flex items-center justify-center ">
      <div className="w-[90%] flex flex-col">
        <Text
          className="text-black-900_cc text-xl w-full "
          size="txtPoppinsBold20"
        >
          Payment Details
        </Text>

        <div className="flex flex-col w-full items-center justify-center ">
          <Text
            className="md:ml-[0] ml-[3px] text-2xl md:text-[22px] text-black-900 text-center mt-5 sm:text-xl"
            size="txtPoppinsSemiBold24"
          >
            Billing Information
          </Text>

          <Text
            className="mt-[26px] text-amber-600 text-center text-xl"
            size="txtPoppinsBold20Amber600"
          >
            Make Payment by
          </Text>
          <RadioGroup
            selectedValue="Online"
            className="flex items-center justify-center mt-1.5 w-full"
            name="radiogrouponline"
          >
            <Radio
              value="Online"
              className="font-bold text-[15px] text-black-900_89 text-center"
              inputClassName="bg-blue_gray-100_02 border border-black-900_7f border-solid h-[15px] mr-[5px] rounded-lg w-[15px]"
              checked={true}
              name="radiogrouponline"
              label="Online"
              id="Online"
            ></Radio>
            <Radio
              value="Cash"
              className="font-bold ml-[31px] text-[15px] text-black-900_89 text-center"
              inputClassName="bg-blue_gray-100_02 border border-black-900_7f border-solid h-[15px] mr-[5px] w-[15px]"
              checked={false}
              name="radiogrouponline"
              label="Cash "
              id="Cash"
            ></Radio>
          </RadioGroup>

          <Line className="bg-black-900 h-px mt-[22px] w-full" />
          <div className=" flex flex-col items-center justify-center w-full">
            <Input
              name="frameSixtyNine"
              placeholder="Name"
              className="font-opensans font-semibold md:font-extrabold p-0 placeholder:text-black-900_a5  text-[13.08px] text-left w-full"
              wrapClassName="mt-[59px] w-[98%]"
              type="text"
              size="md"
            ></Input>
            <Input
              name="frameSixtyNine"
              placeholder="email"
              className="font-opensans font-semibold md:font-extrabold p-0 placeholder:text-black-900_a5  text-[13.08px] text-left w-full"
              wrapClassName="mt-[59px] w-[98%]"
              type="text"
              size="md"
            ></Input>
            <Input
              name="frameSixtyNine"
              placeholder="UPI id"
              className="font-opensans font-semibold md:font-extrabold p-0 placeholder:text-black-900_a5  text-[13.08px] text-left w-full"
              wrapClassName="mt-[59px] w-[98%]"
              type="text"
              size="md"
            ></Input>

            <Button
              className="common-pointer cursor-pointer font-bold font-sourcesanspro mb-[26px] min-w-[651px] md:min-w-full mt-20 outline outline-[0.5px] outline-black-900_1e rounded text-[17.44px] text-center"
              onClick={() => navigate("")}
              color="amber_600_01"
              size="xl"
            >
              Confirm Payment
            </Button>
          </div>
          <Line className="bg-black-900 h-px mt-[22px] w-full" />
        </div>
      </div>
    </div>
  );
}

export default BillingInfo;
