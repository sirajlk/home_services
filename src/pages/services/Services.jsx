import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { carImages } from "../../utils/constants";
import Boxes from "./Boxes";
import WhyChooseUs from "../../components/sections/WhyChooseUs";
import Blog from "../../components/blog/Blog";
import OurServices from "../../components/Services";

const Services = () => {
  return (
    <div>
      <Header
        backgroundImage={'/assets/images/project-5.png'}
        imageHeight="lg:h-[60vh] h-[40vh]"
      />
      <WhyChooseUs />
      <OurServices />
      <Blog />
      <Boxes />
      <Footer />
    </div>
  );
};

export default Services;
