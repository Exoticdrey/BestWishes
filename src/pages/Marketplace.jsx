import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import MkHead from "../components/MkHeadSection/MkHead";
import Loyalty from "../components/LoyaltySection/Loyalty";
import Products from "../components/ProductsSection/Products";
import Footer from "../components/Footer/Footer"
// import './Marketplace.css'

const Marketplace = () => {
  return (
    <>
    
    <Navbar />
    <MkHead />
    {/* <Loyalty /> */}
    <Products />
    <Footer />
      
    </>
  );
};

export default Marketplace;
