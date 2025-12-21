import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Loyalty from "../components/LoyaltySection/Loyalty";
import AboutUs from "../components/AboutUsSection/AboutUs";
import Referral from "../components/referral";
import Mission from "../components/OurMissionSection/OurMission";
import Company from "../components/OurCompanySection/OurCompany";
import Footer from "../components/Footer/Footer";

const About = () => {
  return (
    <>
    <Referral/>
      <Navbar />
      <div style={{ height: "100px" }}></div>
      <Loyalty />
      <AboutUs />
      <Mission />
      <Company />
      <Footer />
    </>
  );
};

export default About;
