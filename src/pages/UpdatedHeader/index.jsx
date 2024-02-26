import React, { useState } from "react";

import HeroSection from "./heroSection";
import Nav from "./Nav";
import OurStory from "./OurStory";
import Amenities from "./Amenities";
import Testimonial from "./Testimonial";
import Properties from "./Properties";
import Gallery from "./Gallery";
import Location from "./Location";
import Footer from "./Footer";
import ContactUs from "./ContactUs";
import TopSelling from "./TopSelling";
import FastBooking from "./FastBooking";
import Visitors from "./Visitors";
import WhyUs from "./WhyUs";
const UpdatedHeaderPage = () => {
  return (
    <>
      <Nav />
      <OurStory />
      <Properties />
      <TopSelling />
      <FastBooking />
      <Amenities />
      <Testimonial />
      <Visitors />
      <Gallery />
      <WhyUs />
      <Location />
      <ContactUs />
      <Footer />
    </>
  );
};

export default UpdatedHeaderPage;
