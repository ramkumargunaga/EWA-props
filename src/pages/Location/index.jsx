import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import NavBar from "./../Navbar/Navbar";
import Location from "./../UpdatedHeader/Location";
import Footer from "./../UpdatedHeader/Footer";

const LocationPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <div className="my-28">
        <Location />
      </div>
      <Footer />
    </>
  );
};

export default LocationPage;
