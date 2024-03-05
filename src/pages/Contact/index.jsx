import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import NavBar from "./../Navbar/Navbar";
import ContactUs from "./../UpdatedHeader/ContactUs";
import Footer from "./../UpdatedHeader/Footer";

const ContactPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <div className="my-28">
        <ContactUs />
      </div>

      <Footer />
    </>
  );
};

export default ContactPage;
