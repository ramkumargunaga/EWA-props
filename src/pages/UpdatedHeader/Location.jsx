import React from "react";
import { Text } from "components";
function Location() {
  return (
    <div>
      {" "}
      <div style={{ marginTop: "4%", marginLeft: "4%" }}>
        <Text
          className="ml-2.5 md:ml-[0] text-2xl md:text-[22px] text-red-A400 sm:text-xl tracking-[4.32px]"
          size="txtOpenSansRomanSemiBold24RedA400"
        >
          LOCATION
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
          Unveiling the Location
        </Text>
      </div>
      <div
        className="flex justify-center items-center"
        style={{ marginTop: "4%" }}
      >
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13249.247068040606!2d151.20960562674117!3d-33.8816236491114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1468899355787"
          width="100%"
          height="600px"
          className="sm:mt-6 px-[3%]"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Location;
