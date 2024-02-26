import React from "react";
import { Img, Text, Button } from "components";
function Footer() {
  return (
    <div className="bg-red-A400_23 pt-10">
      <footer className=" flex justify-between  sm:flex-col  md:columns-3 mx-10">
        <div className="company-logo sm:mt-5">
          <Img
            className="h-[102px] md:h-auto mr-[67px] object-cover w-[79%]"
            src="images/img_ewablackmark.png"
            alt="ewablackmark_One"
          />
          <Text
            className="sm:text-center leading-[28.00px] md:ml-[0] ml-[99px] text-black-900 text-center text-xl w-[69%] sm:w-full"
            size="txtOpenSansRegular20Black900"
          >
            We catalyze your luxurious vacation
          </Text>
        </div>
        <div className="address sm:mt-10">
          <Text
            className="sm:text-center text-2xl md:text-[22px] text-black-900 text-start sm:text-xl"
            size="txtLatoSemiBold24"
          >
            Address
          </Text>

          <Text
            className="sm:text-center leading-[32.00px] text-black-900 text-xl"
            size="txtOpenSansRomanRegular20"
          >
            <>
              D’Souza Complex, next to Shri Veera Maruti
              <br />
              Mandir, Hosabettu, Kulai, Mangaluru, <br />
              Karnataka 575019
            </>
          </Text>
          <br />
          <a href="javascript:" className="mt-9 text-black-900 text-xl">
            <Text size="txtOpenSansRomanRegular20">
              support@ewaproperties.com
            </Text>
          </a>
        </div>
        <div className="socials sm:mt-10">
          <Text
            className="sm:text-center text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
            size="txtLatoSemiBold24"
          >
            Follow Us
          </Text>
          <div className="sm:mt-5 flex flex-row gap-8 items-start justify-start md:mt-0 mt-8 w-auto">
            <Button
              className="flex h-8 items-center justify-center w-8"
              shape="circle"
            >
              <Img className="h-3" src="images/img_info.svg" alt="info" />
            </Button>
            <Button
              className="flex h-8 items-center justify-center w-8"
              shape="circle"
            >
              <Img className="h-3.5" src="images/img_link.svg" alt="link" />
            </Button>
            <Button
              className="flex h-8 items-center justify-center w-8"
              shape="circle"
            >
              <Img src="images/img_facebook.svg" alt="facebook" />
            </Button>
            <Button
              className="flex h-8 items-center justify-center w-8"
              shape="circle"
            >
              <Img src="images/img_trash.svg" alt="trash" />
            </Button>
            <Button
              className="flex h-8 items-center justify-center w-8"
              shape="circle"
              size="sm"
            >
              <Img src="images/img_socialicon.svg" alt="socialicon" />
            </Button>
          </div>
        </div>
      </footer>
      <div className="mt-10">
        <div className="bg-red-A400 flex flex-col font-lato items-center justify-start p-[19px] w-full">
          <Text
            className="mb-[3px] text-center text-white-A700 text-xl"
            size="txtLatoBold20"
          >
            © Ewa properties. All Rights Reserved.
          </Text>
        </div>
      </div>
    </div>
  );
}

export default Footer;
